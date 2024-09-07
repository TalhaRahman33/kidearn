

// "use client";
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Banner = () => {
//   const settings = {
//     dots: true, // Enables dots below the slider
//     infinite: true, // Ensures the slider loops
//     speed: 1000, // Speed of the transition (ms)
//     slidesToShow: 1, // Number of slides to show at once
//     slidesToScroll: 1, // Number of slides to scroll at once
//     autoplay: true, // Enables autoplay
//     autoplaySpeed: 7000, // Delay between slides (ms)
//     fade: true, // Enables fade transition instead of slide
//     cssEase: 'linear', // CSS easing function for the transition
//   };

//   return (
//     <section className="banner-one">
//       <Slider {...settings} className="banner-one__carousel">
//         <div className="item">
//           <div className="banner-one__item">
//             <div
//               className="banner-one__bg"
//               style={{
//                 backgroundImage: 'url(/images/hero-banner-1-rtl.jpg)',
//               }}
//             ></div>
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-8">
//                   <div className="banner-one__content">
//                     <div className="banner-one__shape2"></div>
//                     <div className="banner-one__shape3"></div>
//                     <div className="banner-one__shape4">
//                       <img
//                         src="/images/banner-1-shape-2.png"
//                         alt="kidearn"
//                       />
//                     </div>
//                     <div className="banner-one__shape5">
//                       <div className="banner-one__shape5-inner"></div>
//                     </div>
//                     <div className="banner-one__shape6">
//                       <div className="banner-one__shape6-inner"></div>
//                     </div>
//                     <div className="banner-one__content__bg"></div>
//                     <h2 className="banner-one__content__title">
//                       Embrace
//                       <br /> confidence
//                       <br /> for a lifetime
//                     </h2>
//                     <a href="/contact" className="kidearn-btn">
//                       <span>Book a Visit</span>
//                     </a>
//                     <div
//                       className="banner-one__shape1 kidearn-splax"
//                       style={{
//                         backgroundImage:
//                           'url(/images/banner-1-shape-1.png)',
//                       }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Repeat for other items */}
//         <div className="item">
//           <div className="banner-one__item">
//             <div
//               className="banner-one__bg"
//               style={{
//                 backgroundImage: 'url(/images/hero-banner-1-2-rtl.jpg)',
//               }}
//             ></div>
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-8">
//                   <div className="banner-one__content">
//                     <div className="banner-one__shape2"></div>
//                     <div className="banner-one__shape3"></div>
                  
//                     <div className="banner-one__shape4">
//   <img
//     src="/images/banner-1-shape-2.png"
//     alt="kidearn"
//   />
// </div>



//                     <div className="banner-one__shape5">
//                       <div className="banner-one__shape5-inner"></div>
//                     </div>
//                     <div className="banner-one__shape6">
//                       <div className="banner-one__shape6-inner"></div>
//                     </div>
//                     <div className="banner-one__content__bg"></div>
//                     <h2 className="banner-one__content__title">
//                       Embrace
//                       <br /> confidence
//                       <br /> for a lifetime
//                     </h2>
//                     <a href="/contact" className="kidearn-btn">
//                       <span>Book a Visit</span>
//                     </a>
//                     <div
//                       className="banner-one__shape1 kidearn-splax"
//                       style={{
//                         backgroundImage:
//                           'url(/images/banner-1-shape-1.png)',
//                       }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Slider>
//     </section>
//   );
// };

// export default Banner;

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
    // Ensure that the component only runs on the client side
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

  return (
    <section className="banner-one">
      {isClient && (
        <OwlCarousel
          className="banner-one__carousel kidearn-owl__carousel owl-carousel kidearn-owl__carousel--with-shadow"
          {...options}
        >
          <div className="item">
            <div className="banner-one__item">
              <div
                className="banner-one__bg"
                style={{
                  backgroundImage: 'url(/images/hero-banner-1-rtl.jpg)',
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="banner-one__content">
                      <div className="banner-one__shape2"></div>
                      <div className="banner-one__shape3"></div>
                      <div className="banner-one__shape4">
                        <ExportedImage
                          unoptimized={true}
                          src="/images/banner-1-shape-2.png"
                          alt="kidearn"
                          width={651} // Set width as per your design
                          height={666} // Set height as per your design
                        />
                      </div>
                      <div className="banner-one__shape5">
                        <div className="banner-one__shape5-inner"></div>
                      </div>
                      <div className="banner-one__shape6">
                        <div className="banner-one__shape6-inner"></div>
                      </div>
                      <div className="banner-one__content__bg"></div>
                      <h2 className="banner-one__content__title">
                        Embrace
                        <br /> confidence
                        <br /> for a lifetime
                      </h2>
                      <Link href="/contact" className="kidearn-btn">
                        <span>Book a Visit</span>
                      </Link>
                      <div
                        className="banner-one__shape1 kidearn-splax"
                        style={{
                          backgroundImage:
                            'url(/images/banner-1-shape-1.png)',
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat for other items */}
          <div className="item">
            <div className="banner-one__item">
              <div
                className="banner-one__bg"
                style={{
                  backgroundImage: 'url(/images/hero-banner-1-2-rtl.jpg)',
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="banner-one__content">
                      <div className="banner-one__shape2"></div>
                      <div className="banner-one__shape3"></div>
                      <div className="banner-one__shape4">
                        <ExportedImage
                          unoptimized={true}
                          src="/images/banner-1-shape-2.png"
                          alt="kidearn"
                          width={651} // Set width as per your design
                          height={666} // Set height as per your design
                        />
                      </div>
                      <div className="banner-one__shape5">
                        <div className="banner-one__shape5-inner"></div>
                      </div>
                      <div className="banner-one__shape6">
                        <div className="banner-one__shape6-inner"></div>
                      </div>
                      <div className="banner-one__content__bg"></div>
                      <h2 className="banner-one__content__title">
                        Embrace
                        <br /> confidence
                        <br /> for a lifetime
                      </h2>
                      <Link href="/contact" className="kidearn-btn">
                        <span>Book a Visit</span>
                      </Link>
                      <div
                        className="banner-one__shape1 kidearn-splax"
                        style={{
                          backgroundImage:
                            'url(/images/banner-1-shape-1.png)',
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      )}
    </section>
  );
};

export default Banner;
