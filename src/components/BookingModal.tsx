"use client";

import { useEffect, useState } from "react";
import { User, Phone, Mail, Stethoscope, Calendar, Clock, X, Check, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function generateCaptcha() {
  return {
    prompt: "Please confirm you are human",
    answer: "confirmed",
  };
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    treatmentRequired: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [captcha, setCaptcha] = useState(() => generateCaptcha());
  const [captchaSelection, setCaptchaSelection] = useState("");

  const treatments = [
    "Dental Implants",
    "Root Canal Treatment",
    "Teeth Whitening",
    "Smile Designing",
    "Invisible Braces",
    "Cosmetic Dentistry",
    "Veneers",
    "Tooth Extraction",
    "Pediatric Dentistry",
    "Gum Treatment",
    "Full Mouth Rehabilitation",
    "Emergency Dental Care",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ];

  useEffect(() => {
    if (isOpen) {
      setCaptcha(generateCaptcha());
      setCaptchaSelection("");
      setErrors((prev) => ({ ...prev, captcha: "" }));
    }
  }, [isOpen]);

  const handleChange = (field: string, value: string) => {
    // For mobile number, enforce digits-only and max 10 chars
    if (field === "mobileNumber") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [field]: value }));
    // validate on change for immediate feedback
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  function validateField(field: string, value: string) {
    if (field === "fullName") {
      if (!value.trim()) return "Full name is required";
      return "";
    }

    if (field === "mobileNumber") {
      const digits = value.replace(/\D/g, "");
      if (!digits) return "Mobile number is required";
      if (digits.length !== 10) return "Enter a valid 10-digit phone number";
      return "";
    }

    if (field === "email") {
      if (!value.trim()) return "Email is required";
      const valid = /\S+@\S+\.\S+/.test(value);
      if (!valid) return "Enter a valid email";
      return "";
    }

    if (field === "treatmentRequired") {
      if (!value) return "Please select a treatment";
      return "";
    }

    if (field === "preferredDate") {
      if (!value) return "Please select a preferred date";
      // additional check: date should not be in past
      const today = new Date();
      const sel = new Date(value + "T00:00:00");
      if (sel < new Date(today.toDateString())) return "Date cannot be in the past";
      return "";
    }

    if (field === "preferredTime") {
      if (!value) return "Please select a preferred time";
      return "";
    }

    return "";
  }

  function validateAll() {
    const next: Record<string, string> = {};
    next.fullName = validateField("fullName", formData.fullName);
    next.mobileNumber = validateField("mobileNumber", formData.mobileNumber);
    next.email = validateField("email", formData.email);
    next.treatmentRequired = validateField("treatmentRequired", formData.treatmentRequired);
    next.preferredDate = validateField("preferredDate", formData.preferredDate);
    next.preferredTime = validateField("preferredTime", formData.preferredTime);

    if (!captchaSelection.trim()) {
      next.captcha = "Please select the correct option";
    } else if (captchaSelection.trim() !== captcha.answer) {
      next.captcha = "Selection is incorrect";
    }

    return Object.fromEntries(Object.entries(next).filter(([, v]) => v));
  }

  const submitDirectToFormSubmit = async (email: string, data: Record<string, string>) => {
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => params.append(key, value));
    params.append("_subject", `Appointment request from ${data["Full Name"] || "Guest"}`);
    params.append("_captcha", "false");
    params.append("_template", "table");

    const response = await fetch(`https://formsubmit.co/${encodeURIComponent(email)}`, {
      method: "POST",
      mode: "no-cors",
      body: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok && response.type !== "opaque") {
      throw new Error("Form service responded with an error");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateAll();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      // focus first invalid field (optional)
      return;
    }

    setLoading(true);
    setSubmissionError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
    const formSubmitEmail = process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || "";

    try {
      if (accessKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Dental Appointment Request from ${formData.fullName}`,
            from_name: "Shanti Dental Clinic Website",
            ...formData,
          }),
        });

        const result = await response.json();
        if (!result.success) {
          throw new Error("Web3Forms submission failed");
        }
      } else if (formSubmitEmail) {
        const postData: Record<string, string> = {
          'Full Name': formData.fullName,
          'Mobile Number': formData.mobileNumber,
          Email: formData.email,
          'Treatment Required': formData.treatmentRequired,
          'Preferred Date': formData.preferredDate,
          'Preferred Time': formData.preferredTime,
          Message: formData.message || '',
        };

        await submitDirectToFormSubmit(formSubmitEmail, postData);
      } else {
        throw new Error('Email service is not configured. Please set NEXT_PUBLIC_FORMSUBMIT_EMAIL or NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.');
      }

      setSuccess(true);
      setTimeout(() => {
        setFormData({
          fullName: "",
          mobileNumber: "",
          email: "",
          treatmentRequired: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        });
        setCaptchaSelection("");
        setCaptcha(generateCaptcha());
        setSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      console.error("Submission error:", err);
      setCaptchaSelection("");
      setCaptcha(generateCaptcha());
      setSubmissionError(err instanceof Error ? err.message : 'Unable to submit appointment request right now. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {success ? (
              /* Success Screen */
              <div className="p-8 text-center py-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-12 h-12 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Appointment Requested
                </h3>
                <p className="text-muted-foreground mb-4">
                  Your appointment request has been submitted successfully. We will contact you shortly.
                </p>
              </div>
            ) : (
              /* Appointment Form */
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Shanti Dental Clinic
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill in your details and we&apos;ll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
                      <User className="w-4 h-4 text-primary" />
                      Full name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      onBlur={(e) => setErrors((p) => ({ ...p, fullName: validateField("fullName", e.target.value) }))}
                      placeholder="Enter your full name"
                      required
                      className="w-full h-11 px-4 border border-input rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="mobileNumber" className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
                      <Phone className="w-4 h-4 text-primary" />
                      Mobile number
                    </label>
                    <input
                      id="mobileNumber"
                      type="tel"
                      inputMode="tel"
                      pattern="[0-9]*"
                      maxLength={10}
                      value={formData.mobileNumber}
                      onChange={(e) => handleChange("mobileNumber", e.target.value)}
                      onBlur={(e) => setErrors((p) => ({ ...p, mobileNumber: validateField("mobileNumber", e.target.value) }))}
                      placeholder="9876543210"
                      required
                      className="w-full h-11 px-4 border border-input rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                    {errors.mobileNumber && <p className="mt-1 text-sm text-red-600">{errors.mobileNumber}</p>}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
                      <Mail className="w-4 h-4 text-primary" />
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={(e) => setErrors((p) => ({ ...p, email: validateField("email", e.target.value) }))}
                      placeholder="your.email@example.com"
                      required
                      className="w-full h-11 px-4 border border-input rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  {/* Treatment Dropdown */}
                  <div>
                    <label htmlFor="treatment" className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
                      <Stethoscope className="w-4 h-4 text-primary" />
                      Treatment required
                    </label>
                    <select
                      id="treatment"
                      value={formData.treatmentRequired}
                      onChange={(e) => handleChange("treatmentRequired", e.target.value)}
                      onBlur={(e) => setErrors((p) => ({ ...p, treatmentRequired: validateField("treatmentRequired", e.target.value) }))}
                      required
                      className="w-full h-11 px-4 border border-input rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    >
                      <option value="" disabled>Select treatment</option>
                      {treatments.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.treatmentRequired && <p className="mt-1 text-sm text-red-600">{errors.treatmentRequired}</p>}
                  </div>

                  {/* Date and Time Slots */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="date" className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        Preferred date
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleChange("preferredDate", e.target.value)}
                        onBlur={(e) => setErrors((p) => ({ ...p, preferredDate: validateField("preferredDate", e.target.value) }))}
                        min={new Date().toISOString().split("T")[0]}
                        required
                        className="w-full h-11 px-4 border border-input rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      />
                      {errors.preferredDate && <p className="mt-1 text-sm text-red-600">{errors.preferredDate}</p>}
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label htmlFor="time" className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        Preferred time
                      </label>
                      <select
                        id="time"
                        value={formData.preferredTime}
                        onChange={(e) => handleChange("preferredTime", e.target.value)}
                        onBlur={(e) => setErrors((p) => ({ ...p, preferredTime: validateField("preferredTime", e.target.value) }))}
                        required
                        className="w-full h-11 px-4 border border-input rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      >
                        <option value="" disabled>Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {errors.preferredTime && <p className="mt-1 text-sm text-red-600">{errors.preferredTime}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Additional message (optional)
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Any specific concerns or questions?"
                      rows={3}
                      className="w-full p-4 border border-input rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Captcha Challenge */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Quick verification
                    </label>
                    <div className="rounded-xl border border-input bg-gray-50 p-3">
                      <div className="mb-3 text-sm font-semibold text-foreground">
                        {captcha.prompt}
                      </div>
                      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-input bg-white p-3 text-sm text-foreground">
                        <input
                          type="checkbox"
                          checked={captchaSelection === captcha.answer}
                          onChange={(e) => {
                            setCaptchaSelection(e.target.checked ? captcha.answer : "");
                            setErrors((prev) => ({ ...prev, captcha: "" }));
                          }}
                          className="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-primary"
                        />
                        <span>I am human and want to continue.</span>
                      </label>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <p className="text-xs text-muted-foreground">
                          Just tap the box to continue.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setCaptcha(generateCaptcha());
                            setCaptchaSelection("");
                            setErrors((prev) => ({ ...prev, captcha: "" }));
                          }}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-input bg-white text-muted-foreground transition hover:text-foreground"
                          aria-label="Refresh captcha"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    {errors.captcha && <p className="mt-1 text-sm text-red-600">{errors.captcha}</p>}
                  </div>

                  {/* Submit Button */}
                  {submissionError && (
                    <div className="p-3 bg-yellow-50 text-yellow-800 rounded-md text-sm">{submissionError}</div>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 disabled:opacity-50 text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.98]"
                  >
                    {loading ? "Submitting..." : "Submit appointment request"}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
