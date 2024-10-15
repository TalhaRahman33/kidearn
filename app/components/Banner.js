"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ExportedImage from "next-image-export-optimizer";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Dynamically import the OwlCarousel component
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Banner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  const options = {
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeInUp',
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    nav: false,
    dots: true,
    margin: 0,
  };

  const bannerImages = [
    { src: '/images/hero-banner-1-rtl1.png', alt: 'Hero Banner 1' },
    { src: '/images/home5.png', alt: 'Hero Banner 2' },
    { src: '/images/home4.png', alt: 'Hero Banner 3' },
    // { src: '/images/home2.jpg', alt: 'Hero Banner 3' },
  ];

  return (
    <section className="banner-one">
      {isClient && (
        <OwlCarousel
          className="banner-one__carousel kidearn-owl__carousel owl-carousel kidearn-owl__carousel--with-shadow"
          {...options}
        >
          {bannerImages.map((image, index) => (
            <div key={index} className="item">
              <div className="banner-one__item">
                <div
                  className="banner-one__bg"
                  style={{ backgroundImage: `url(${image.src})` }}
                ></div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="banner-one__content">
                        <div className="banner-one__shape2"></div>
                        <div className="banner-one__shape3"></div>
                        <div className="banner-one__shape4">
                          {/* <ExportedImage
                            unoptimized={true}
                            src="/images/banner-1-shape-2.png"
                            alt="kidearn"
                            width={651}
                            height={666}
                          /> */}
                        </div>
                        <div className="banner-one__shape5">
                          <div className="banner-one__shape5-inner"></div>
                        </div>
                        {/* <div className="banner-one__shape6">
                          <div className="banner-one__shape6-inner"></div>
                        </div> */}
                        <div className="banner-one__content__bg"></div>
                        <h2 className="banner-one__content__title">
                             <br /> مركز بيت أمي <br />  لضيافة الأطفال

                        </h2>
                        <Link href="/contact" className="kidearn-btn">
                          <span> اتصل بنا  </span>
                        </Link>
                        <div
                          className="banner-one__shape1 kidearn-splax"
                          style={{
                            backgroundImage: 'url(/images/banner-1-shape-1.png)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      )}
    </section>
  );
};

export default Banner;






// "use client";

// import React, { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';
// import Link from 'next/link';
// import ExportedImage from "next-image-export-optimizer";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// // Dynamically import the OwlCarousel component
// const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

// const Banner = () => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setIsClient(true);
//     }
//   }, []);

//   const options = {
//     loop: true,
//     animateOut: 'fadeOut',
//     animateIn: 'fadeInUp',
//     items: 1,
//     autoplay: true,
//     autoplayTimeout: 7000,
//     smartSpeed: 1000,
//     nav: false,
//     dots: true,
//     margin: 0,
//   };

//   const bannerImages = [
//     { src: '/images/hero-banner-1-rtl.jpg', alt: 'Hero Banner 1' },
//     { src: '/images/hero-banner-1-2-rtl.jpg', alt: 'Hero Banner 2' },
//     { src: '/images/hero-banner-1-3-rtl.jpg', alt: 'Hero Banner 3' },
//   ];

//   return (
//     <section className="banner-one">
//       {isClient && (
//         <OwlCarousel
//           className="banner-one__carousel kidearn-owl__carousel owl-carousel kidearn-owl__carousel--with-shadow"
//           {...options}
//         >
//           {bannerImages.map((image, index) => (
//             <div key={index} className="item">
//               <div className="banner-one__item">
//                 <div
//                   className="banner-one__bg"
//                   style={{ backgroundImage: `url(${image.src})` }}
//                 ></div>
//                 <div className="container">
//                   <div className="row">
//                     <div className="col-lg-8">
//                       <div className="banner-one__content">
//                         <div className="banner-one__shape2"></div>
//                         <div className="banner-one__shape3"></div>
//                         <div className="banner-one__shape4">
//                           <ExportedImage
//                             unoptimized={true}
//                             src="/images/banner-1-shape-2.png"
//                             alt="kidearn"
//                             width={651}
//                             height={666}
//                           />
//                         </div>
//                         <div className="banner-one__shape5">
//                           <div className="banner-one__shape5-inner"></div>
//                         </div>
//                         <div className="banner-one__shape6">
//                           <div className="banner-one__shape6-inner"></div>
//                         </div>
//                         <div className="banner-one__content__bg"></div>
//                         <h2 className="banner-one__content__title">
//                         مركز بيت أمي  <br />  لضيافة الأطفال
                       
//                         </h2>
//                         <Link href="/contact" className="kidearn-btn">
//                           <span>اتصل بنا</span>
//                         </Link>
//                         <div
//                           className="banner-one__shape1 kidearn-splax"
                       
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </OwlCarousel>
//       )}
//     </section>
//   );
// };

// export default Banner;
