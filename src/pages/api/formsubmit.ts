import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { email, data } = req.body as { email?: string; data?: Record<string, string> };

    if (!email) return res.status(400).json({ success: false, error: 'Missing target email' });

    const url = `https://formsubmit.co/${encodeURIComponent(email)}`;

    const params = new URLSearchParams();
    Object.entries(data || {}).forEach(([k, v]) => params.append(k, v ?? ''));
    // optional subject and redirect
    params.append('_subject', data?.['Full Name'] ? `Appointment request from ${data['Full Name']}` : 'Appointment request');
    // Do not redirect back to FormSubmit UI
    params.append('_captcha', 'false');

    const resp = await fetch(url, {
      method: 'POST',
      body: params.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const contentType = resp.headers.get('content-type') || '';
    const bodyText = await resp.text();

    // If FormSubmit returns HTML (captcha/interstitial), treat as a failure so client can show friendly UI
    if (contentType.includes('text/html') || bodyText.trim().startsWith('<!DOCTYPE')) {
      // include a small snippet for debugging but avoid sending huge HTML
      const snippet = bodyText.slice(0, 200);
      return res.status(502).json({ success: false, error: 'formsubmit_interstitial', details: snippet });
    }

    if (!resp.ok) {
      return res.status(500).json({ success: false, error: 'Forwarding failed', details: bodyText.slice(0, 200) });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message || String(err) });
  }
}
