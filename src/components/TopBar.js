"use client";

import React, { useState, useCallback } from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import ApplicationFormModal from "./ApplicationFormModal";

const initialFormState = {
  name: "",
  mobile: "",
  city: "",
  state: "",
  course: "",
  neetAttempt: "",
  dropper: "",
  coaching: "",
};

const TopBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setError("");
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const mobileRegex = /^[0-9]{10}$/;
      if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
        setError("Please enter a valid 10-digit mobile number");
        return;
      }
      if (
        !formData.name ||
        !formData.city ||
        !formData.state ||
        !formData.course
      ) {
        setError("Please fill in all required fields");
        return;
      }

      const message = `
*New Application Form:*
Name: ${formData.name}
Mobile: ${formData.mobile}
City: ${formData.city}
State: ${formData.state}
Course: ${formData.course}
NEET Attempt: ${formData.neetAttempt}
Dropper: ${formData.dropper}
Coaching Attended: ${formData.coaching}
      `;

      const url = `https://wa.me/9557911144?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");

      resetForm();
      setShowForm(false);
    },
    [formData, resetForm]
  );

  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 text-white text-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
          <button
            className="font-semibold flex items-center gap-1"
            onClick={() => setShowForm(true)}
            aria-label="Open Application Form"
          >
            Apply Now
            <span
              className="text-lg leading-none"
              role="img"
              aria-hidden="true"
            >
              📝
            </span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {showForm && (
        <ApplicationFormModal
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeModal={() => setShowForm(false)}
          error={error}
        />
      )}
    </>
  );
};

export default TopBar;
