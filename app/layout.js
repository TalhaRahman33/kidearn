import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "بيت أمي لضيافة و حضانة الأطفال | الرئيسية",

  description: `بيت أمي لضيافة الاطفال، مركز ضيافة و حضانة للاطفال صباحي و مسائي، يخدم أطفالكم من عمر الولادة حتى العشر سنوات
ضيافة اطفال حي النرجس شمال الرياض
ضيافة اطفال صباحي و مسائي
Bayt Ummi daycare childcare`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* favicons Icons */}

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="images/favicon-32x32.png"
        />


        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700&family=Fredoka:wght@700&family=Schoolbell&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="css/animate.min.css" />
        <link rel="stylesheet" href="css/all.min.css" />
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <link rel="stylesheet" href="css/jarallax.css" />
        <link rel="stylesheet" href="css/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="css/nouislider.min.css" />
        <link rel="stylesheet" href="css/nouislider.pips.css" />
        <link rel="stylesheet" href="css/tiny-slider.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/headerStyles.css" />
        {/* template styles */}
        <link rel="stylesheet" href="css/kidearn-rtl.css" />
        <link rel="stylesheet" href="css/kidearn-custom-rtl.css" />
        <link rel="stylesheet" href="css/kidearn-toolbar.css" />

        {/* <!-- fontawesome icons --> */}
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

        <Script src="js/jquery-3.7.0.min.js"></Script>
        <Script src="js/bootstrap.bundle.min.js"></Script>
        <Script src="js/bootstrap-select.min.js"></Script>
        <Script src="js/jarallax.min.js"></Script>
        <Script src="js/jquery-ui.js"></Script>
        <Script src="js/jquery.ajaxchimp.min.js"></Script>
        <Script src="js/jquery.appear.min.js"></Script>
        <Script src="js/jquery.circle-progress.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/jquery.validate.min.js"></Script>
        <Script src="js/nouislider.min.js"></Script>
        <Script src="js/tiny-slider.js"></Script>
        <Script src="js/wNumb.min.js"></Script>
        <Script src="js/owl.carousel.min.js"></Script>
        <Script src="js/wow.js"></Script>
        <Script src="js/tilt.jquery.js"></Script>
        <Script src="js/simpleParallax.min.js"></Script>
        <Script src="js/imagesloaded.min.js"></Script>
        <Script src="js/isotope.js"></Script>
        <Script src="js/countdown.min.js"></Script>
        <Script src="js/jquery.circleType.js"></Script>
        <Script src="js/jquery.lettering.min.js"></Script>
        {/* <!-- template js --> */}
        <Script src="js/kidearn.js"></Script>

        {/* <!-- toolbar js --> */}
        <Script src="js/js.cookie.min.js"></Script>
        <Script src="js/jQuery.style.switcher.min.js"></Script>
        <Script src="js/lang.js"></Script>
        <Script src="js/element.js"></Script>
        <Script src="js/kidearn-toolbar.js"></Script>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
