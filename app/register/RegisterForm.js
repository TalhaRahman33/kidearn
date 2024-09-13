// import React from "react";

// const RegisterForm = () => {
//   return (
//     <div>
//       <section className="flex justify-center items-center min-h-screen">
//         <div
//           className="w-full max-w-4xl p-8 rounded-lg"
//           style={{ boxShadow: "0px 4px 10px #FAF5F2" }}
//         >
//           <h1 className="text-2xl font-semibold text-center mb-6">تسجيل</h1>

//           {/* Line below the "تسجيل" text */}
//           <div
//             className="w-10/12 mx-auto mb-6"
//             style={{ borderBottom: "2px solid #FAF5F2" }}
//           ></div>

//           {/* Box with the provided information */}
//           <div
//             className="w-full md:w-10/12 mx-auto p-4 mb-6"
//             style={{ boxShadow: "0px 4px 10px #FAF5F2" }}
//           >
//             <p className="text-gray-700 mb-2">
//               <strong>اسم الباقة:</strong> أساسي
//             </p>
//             <p className="text-gray-700 mb-2">
//               <strong>نوع الحزمة:</strong> باقات الاشتراك التجريبي
//             </p>
//             <p className="text-gray-700">
//               <strong>السعر:</strong> ٣١٠٥ ر.س
//             </p>
//           </div>

//           <form className="w-full md:w-10/12 mx-auto">
//             <div className="mb-4">
//               <label className="block mb-2 text-gray-700">الاسم:</label>
//               <input
//                 type="text"
//                 placeholder="الاسم"
//                 className="w-full p-3 rounded-lg bg-[#FAF5F2] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-2 text-gray-700">
//                 البريد الإلكتروني:
//               </label>
//               <input
//                 type="email"
//                 placeholder="البريد الإلكتروني"
//                 className="w-full p-3 rounded-lg bg-[#FAF5F2] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-2 text-gray-700">الهاتف:</label>
//               <input
//                 type="tel"
//                 placeholder="الهاتف"
//                 pattern="[0-9]*"
//                 inputMode="numeric"
//                 className="w-full p-3 rounded-lg bg-[#FAF5F2] border border-gray-300 text-right focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
//                 onInput={(e) => {
//                   e.target.value = e.target.value.replace(/[^0-9]/g, "");
//                 }}
//               />
//             </div>

//             <div className="text-center mt-6">
//               <button
//                 type="submit"
//                 className="bg-[#fe6367] text-white py-2.5 px-20 rounded-lg shadow hover:bg-[#ff4a4a]"
//               >
//                 <span>التقديم الآن</span>
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RegisterForm;


"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const router = useRouter();
  const { packageName, packageType, price } = router.query;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://backend.kidstime.com.sa/api/register",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            amount: price,
            pkgType: packageType,
            promoCode,
          }),
        }
      );

      const data = await response.json();

      if (data.success && data.url) {
        window.location.href = data.url;
      } else if (!data.success && data.message === "Invalid promo code") {
        alert("The promo code you entered is invalid. Please try again.");
      } else {
        console.error("Payment initiation failed:", data);
        alert("Payment initiation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Error processing payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert("Please accept the terms and conditions before proceeding.");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Package Name:", packageName);
    console.log("Amount:", price);
    console.log("Promo Code:", promoCode);

    handlePayment();
  };

  const handleTermsClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <section className="flex justify-center items-center min-h-screen bg-[#f9f9f9]">
        <div className="w-full max-w-4xl p-8 rounded-lg bg-white" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
          <h1 className="text-2xl font-semibold text-center mb-6 text-[#333]">تسجيل</h1>

          {/* Line below the "تسجيل" text */}
          <div className="w-10/12 mx-auto mb-6" style={{ borderBottom: "2px solid #fe6367" }}></div>

          {/* Box with the provided information */}
          <div className="w-full md:w-10/12 mx-auto p-4 mb-6 bg-[#fafafa]" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <p className="text-gray-700 mb-2">
              <strong>اسم الباقة:</strong> {packageName || "N/A"}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>نوع الحزمة:</strong> {packageType || "N/A"}
            </p>
            <p className="text-gray-700">
              <strong>السعر:</strong> {price || "N/A"}
            </p>
          </div>

          <form className="w-full md:w-10/12 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">الاسم:</label>
              <input
                type="text"
                placeholder="الاسم"
                className="w-full p-3 rounded-lg bg-[#fafafa] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">البريد الإلكتروني:</label>
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full p-3 rounded-lg bg-[#fafafa] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">الهاتف:</label>
              <input
                type="tel"
                placeholder="الهاتف"
                pattern="[0-9]*"
                inputMode="numeric"
                className="w-full p-3 rounded-lg bg-[#fafafa] border border-gray-300 text-right focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
              />
            </div>

            {packageType !== "باقات الاشتراك التجريبي" && (
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">كود الخصم:</label>
                <input
                  type="text"
                  placeholder="كود الخصم"
                  className="w-full p-3 rounded-lg bg-[#fafafa] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="terms">
                <span className="pe-4 term" style={{ cursor: "pointer", color: "blue" }} onClick={handleTermsClick}>
                  الشروط والأحكام
                </span>
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
              </label>
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-[#fe6367] text-white py-2.5 px-20 rounded-lg shadow hover:bg-[#ff4a4a] transition duration-300"
                disabled={loading}
              >
                {loading ? "معالجة......" : "شراء اشتراك"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {dialogOpen && (
        <div className="dialog-backdrop">
          <div className="dialog">
            <span className="close-icon" onClick={handleCloseDialog}>
              &times;
            </span>
            <div className="dialog-content">
              <h4 className="py-3">الشروط والأحكام</h4>
              <div>
                <p className="pt-4">١- أيام العمل بالمركز من يوم الأحد حتى يوم الخميس، علمًا بأن يومي الجمعة والسبت تحتسب من ضمن مدة الاشتراك للباقة الشهرية.</p>
                <p>٢- لايحق للمشترك تغيير ساعات أو أيام اشتراكه.</p>
                <p>٣- في حال توقف المركز عن العمل بسبب ظروف قاهرة أو طارئة فإن مدة الاشتراك تتوقف تلقائيًا لحين زوال الظرف القاهر أو الطارئ، وتستأنف مدة الاشتراك عند عودة المركز للعمل، ولايحق للمشترك طلب استرداد قيمة اشتراكه.</p>
                <p>٤- يدفع المشترك قيمة اشتراكه مقدمًا عند التسجيل.</p>
                <p>٥- في حال عدم سداد كامل رسوم الاشتراك يحق للمركز منع المشترك من الدخول للمركز مع احتفاظ المركز بحقه في المطالبة بقيمة كامل مدة الاشتراك.</p>
                <p>٦- في حال اشتراك أخوين في نفس الباقة وبنفس التاريخ يمنح أحدهم خصم ١٠٪؜ من قيمة الاشتراك، وفي حال اشتراك أخ ثالث لهما فيمنح الأخ الثالث خصم ١٥٪؜ من قيمة الاشتراك.</p>
                <p>٧- لايحق للمشترك استرداد الرسوم أو جزء منها أو إيقاف الاشتراك بعد التسجيل.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
