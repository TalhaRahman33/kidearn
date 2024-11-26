"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react";

const RegisterFormContent = () => {
  const searchParams = useSearchParams();
  const pkgName = searchParams.get("packageName");
  const amount = searchParams.get("amount");
  const price = searchParams.get("price");

  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  // Function to handle TAP API integration
  const handlePayment = async () => {
    setLoading(true); // Start loading indicator
    try {
      const response = await fetch("https://backend.baytummi.sa/api/register", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          amount: amount,
          pkgName: pkgName,
        }),
      });

      const data = await response.json();

      // Handle the response from the TAP API
      if (data.success && data.url) {
        // Redirect the user to the payment page
        window.location.href = data.url;
      } else {
        console.error("Payment initiation failed:", data);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  // Submit handler to process the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { name, email, phone, pkgName, amount });

    // Call the payment handler function
    handlePayment();
  };

  return (
    <div>
      <section className="flex justify-center items-center min-h-screen">
        <div
          className="w-full max-w-4xl p-8 rounded-lg"
          style={{ boxShadow: "0px 4px 10px #FAF5F2" }}
        >
          <h1 className="text-2xl font-semibold text-center mb-6">تسجيل</h1>

          <div
            className="w-10/12 mx-auto mb-6"
            style={{ borderBottom: "2px solid #FAF5F2" }}
          ></div>

          {/* Box with the provided information */}
          <div
            className="w-full md:w-10/12 mx-auto p-4 mb-6 border-1"
            style={{ boxShadow: "0px 4px 10px #FAF5F2" }}
          >
            <p className="text-gray-700 mb-2">
              <strong>اسم الباقة:</strong> {pkgName}
            </p>

            <p className="text-gray-700">
              <strong>السعر:</strong> {price}
            </p>
          </div>

          <form className="w-full md:w-10/12 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">الاسم:</label>
              <input
                type="text"
                placeholder="الاسم"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#FAF5F2] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">البريد الإلكتروني:</label>
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#FAF5F2] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">الهاتف:</label>
              <input
                type="tel"
                placeholder="الهاتف"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#FAF5F2] border border-gray-300 text-right focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
                pattern="[0-9]*"
                inputMode="numeric"
                required
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#fe6367] text-white py-2.5 px-20 rounded-lg shadow hover:bg-[#ff4a4a]"
              >
                {loading ? "Processing..." : "التقديم الآن"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

const RegisterForm = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterFormContent />
    </Suspense>
  );
};

export default RegisterForm;



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



