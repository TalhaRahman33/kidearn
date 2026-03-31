"use client";

import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const InstagramSection = () => {
  return (
    <section className="mail-one">
      <div
        className="mail-one__bg-shape"
        style={{ backgroundImage: "url(images/mail-shape-1-rtl.png)" }}
      ></div>
      <div
        className="mail-one__border-shape kidearn-splax"
        style={{ backgroundImage: "url(images/mail-shape-2.png)" }}
        data-para-options={{
          orientation: "down",
          scale: 1.2,
          delay: ".6",
          transition: "cubic-bezier(0,0,0,1)",
          overflow: true,
        }}
      ></div>

      <div className="container">
        <div className="mail-one__area">
          <div className="mail-one__bg"></div>
          <div className="mail-one__content">
            <h3 className="mail-one__title">
              تابعنا على صفحتنا في الانستقرام <br /> واطلع على ماهو جديد
            </h3>
            <form action="#" data-url="MAILCHIMP_FORM_URL" className="mail-one__form mc-form">
              <Link href="https://www.instagram.com/baytummi" className="kidearn-btn insta-btn">
                <span>تابعنا الآن</span>
              </Link>
            </form>
            <div className="mc-form__response"></div>
          </div>
          <div
            className="mail-one__shape kidearn-splax"
            data-para-options={{
              orientation: "up",
              scale: 1.5,
              delay: ".6",
              transition: "cubic-bezier(0,0,0,1)",
              overflow: true,
            }}
          >
            <ExportedImage unoptimized={true} width={957} height={329} src="images/mail-shape-3.webp" alt="kidearn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;