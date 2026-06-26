"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

const ForgotPasswordModal = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://rawdhat.com/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني",
          text: data.message || "إذا كان البريد موجودًا، فسيصلك رابط لإعادة التعيين.",
          confirmButtonText: "حسناً",
          confirmButtonColor: "#f25334",
        });
        onClose();
      } else {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: data.error || data.message || "حدث خطأ.",
          confirmButtonColor: "#f25334",
        });
      }
    } catch (err) {
      console.error("Forgot password error:", err);
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "فشل الاتصال بالخادم.",
        confirmButtonColor: "#f25334",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fp-overlay" onClick={onClose}>
      <div
        className="fp-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="fp-close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="fp-icon-wrapper">
          <div className="fp-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
            </svg>
          </div>
        </div>

        <h3 className="fp-title">استعادة كلمة المرور</h3>
        <p className="fp-subtitle">أدخل بريدك الإلكتروني لاستلام رابط إعادة التعيين.</p>

        <form onSubmit={handleSubmit} className="fp-form">
          <div className="fp-input-group">
            <label className="fp-label">البريد الإلكتروني</label>
            <div className="fp-input-wrapper">
              <svg className="fp-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="fp-input"
                dir="ltr"
              />
            </div>
          </div>

          <button type="submit" className="fp-submit-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="fp-spinner"></span>
                جاري الإرسال...
              </>
            ) : (
              "إرسال رابط إعادة التعيين"
            )}
          </button>
        </form>

        <div className="fp-footer">
          <button type="button" className="fp-back-link" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            العودة إلى تسجيل الدخول
          </button>
        </div>
      </div>

      <style jsx>{`
        .fp-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .fp-modal {
          background: #ffffff;
          border-radius: 20px;
          max-width: 440px;
          width: 100%;
          padding: 40px 36px 32px;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
          animation: slideUp 0.3s ease;
          direction: rtl;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .fp-close {
          position: absolute;
          left: 16px;
          top: 16px;
          border: none;
          background: #f3f4f6;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #6b7280;
          transition: all 0.2s;
        }
        .fp-close:hover {
          background: #e5e7eb;
          color: #111827;
        }
        .fp-close svg {
          width: 18px;
          height: 18px;
        }

        .fp-icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .fp-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(145deg, #126c94, #a8cf45);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(18, 108, 148, 0.25);
        }
        .fp-icon svg {
          width: 30px;
          height: 30px;
        }

        .fp-title {
          margin: 0 0 6px 0;
          font-size: 22px;
          font-weight: 700;
          color: #111827;
          text-align: center;
          letter-spacing: -0.3px;
        }
        .fp-subtitle {
          margin: 0 0 26px 0;
          color: #6b7280;
          font-size: 14px;
          text-align: center;
          line-height: 1.6;
        }

        .fp-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .fp-input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .fp-label {
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          letter-spacing: 0.3px;
        }
        .fp-input-wrapper {
          position: relative;
        }
        .fp-input-icon {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #9ca3af;
        }
        .fp-input {
          width: 100%;
          padding: 12px 44px 12px 16px;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
          font-size: 14px;
          background: #fafafa;
          transition: all 0.2s;
          color: #111827;
          direction: ltr;
          text-align: left;
        }
        .fp-input:focus {
          outline: none;
          border-color: #126c94;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(18, 108, 148, 0.12);
        }
        .fp-input::placeholder {
          color: #b0b8c1;
        }

        .fp-submit-btn {
          padding: 13px 20px;
          background: linear-gradient(145deg, #f25334, #d94426);
          color: #fff;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(242, 83, 52, 0.3);
        }
        .fp-submit-btn:hover:not(:disabled) {
          background: linear-gradient(145deg, #d94426, #c03a1f);
          box-shadow: 0 6px 20px rgba(242, 83, 52, 0.35);
          transform: translateY(-1px);
        }
        .fp-submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }
        .fp-submit-btn:disabled {
          opacity: 0.75;
          cursor: not-allowed;
          box-shadow: none;
        }

        .fp-spinner {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 2.5px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.65s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .fp-footer {
          margin-top: 24px;
          text-align: center;
          padding-top: 18px;
          border-top: 1px solid #f0f2f4;
        }
        .fp-back-link {
          background: transparent;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #6b7280;
          font-size: 13px;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s;
        }
        .fp-back-link:hover {
          color: #126c94;
        }
        .fp-back-link svg {
          transition: transform 0.2s;
        }
        .fp-back-link:hover svg {
          transform: translateX(-3px);
        }

        .fp-input-icon {
          right: 14px;
          left: auto;
        }
        .fp-input {
          padding: 12px 44px 12px 16px;
          text-align: right;
        }
        .fp-back-link svg {
          transform: rotate(180deg);
        }
        .fp-back-link:hover svg {
          transform: rotate(180deg) translateX(-3px);
        }

        @media (max-width: 480px) {
          .fp-modal {
            padding: 28px 20px 24px;
          }
          .fp-title {
            font-size: 19px;
          }
          .fp-icon {
            width: 54px;
            height: 54px;
          }
          .fp-icon svg {
            width: 26px;
            height: 26px;
          }
        }
      `}</style>
    </div>
  );
};

export default ForgotPasswordModal;