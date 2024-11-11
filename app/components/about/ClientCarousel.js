"use client";
import React from "react";
import Slider from "react-slick";
import ExportedImage from "next-image-export-optimizer";
 
const ClientCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Default for large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1200, // Large screens (up to 1200px)
                settings: { slidesToShow: 5 },
            },
            {
                breakpoint: 992, // Medium-large screens (up to 992px)
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 768, // Medium screens (up to 768px)
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 575, // Small screens (up to 575px)
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 360, // Extra-small screens (up to 360px)
                settings: { slidesToShow: 1 },
            },
        ],
    };
 
    const brandLogos = [
        "/images/part1.png",
        "/images/part2.png",
        "/images/part3.png",
        "/images/part4.png",
        // "/images/part1.png",
    ];
 
    return (
        <div className="client-carousel">
            <div className="container">
                <h5 className="client-carousel__title">
                <span className="partner">شـــركـــاؤنــا</span>
                </h5>
                <Slider {...settings}>
                    {brandLogos.map((logo, index) => (
                        <div className="client-carousel__one__item" key={index}>
                            <ExportedImage
                                src={logo}
                                alt={`brand-${index + 1}`}
                                width={160}
                                height={100}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
 
            <style jsx>{`
                .client-carousel {
                    text-align: center;
                }
 
                .client-carousel__title {
                    margin: 0 auto;
                    display: inline-block;
                    margin-bottom: 30px;
                }
            `}</style>
        </div>
    );
};
 
export default ClientCarousel;
// "use client";
// import React from "react";
// import Slider from "react-slick";
// import ExportedImage from "next-image-export-optimizer";
 
// const ClientCarousel = () => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5, // Default for large screens
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 6000,
//         responsive: [
//             {
//                 breakpoint: 1200, // Large screens (up to 1200px)
//                 settings: { slidesToShow: 5 },
//             },
//             {
//                 breakpoint: 992, // Medium-large screens (up to 992px)
//                 settings: { slidesToShow: 4 },
//             },
//             {
//                 breakpoint: 768, // Medium screens (up to 768px)
//                 settings: { slidesToShow: 3 },
//             },
//             {
//                 breakpoint: 575, // Small screens (up to 575px)
//                 settings: { slidesToShow: 2 },
//             },
//             {
//                 breakpoint: 360, // Extra-small screens (up to 360px)
//                 settings: { slidesToShow: 1 },
//             },
//         ],
//     };
 
//     return (
//         <div className="client-carousel">
//             <div className="container">
//                 <h5 className="client-carousel__title">
//                     <span className="partner">شـــركـــاؤنــا</span>
//                 </h5>
//                 <Slider {...settings}>
//                     {[...Array(10)].map((_, index) => (
//                         <div className="client-carousel__one__item" key={index}>
//                             <ExportedImage
//                                 src="/images/brand-1-1.png"
//                                 alt="kidearn"
//                                 width={160}
//                                 height={100}
//                             />
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
 
//             <style jsx>{`
//                 .client-carousel {
//                     text-align: center;
//                 }
 
//                 .client-carousel__title {
//                     margin: 0 auto;
//                     display: inline-block;
//                     margin-bottom: 30px;
               
//                 }
//             `}</style>
//         </div>
//     );
// };
 
// export default ClientCarousel;

// "use client"
// import React from 'react';
// import Slider from 'react-slick';
// import ExportedImage from 'next-image-export-optimizer';

// const ClientCarousel = () => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 6000,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: { slidesToShow: 5 },
//             },
//             {
//                 breakpoint: 992,
//                 settings: { slidesToShow: 4 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: { slidesToShow: 3 },
//             },
//             {
//                 breakpoint: 575,
//                 settings: { slidesToShow: 3 },
//             },
//             {
//                 breakpoint: 360,
//                 settings: { slidesToShow: 2 },
//             },
//             {
//                 breakpoint: 0,
//                 settings: { slidesToShow: 1 },
//             },
//         ],
//     };

//     return (
//         <div className="client-carousel">
//             <div className="container">
//                 <h5 className="client-carousel__tilte">
//                     <span>2k + Brands Trust Us</span>
//                 </h5>
//                 <Slider {...settings}>
//                     {[...Array(10)].map((_, index) => (
//                         <div className="client-carousel__one__item" key={index}>
//                             <ExportedImage src="/images/brand-1-1.png" alt="kidearn" width={160} height={100} />
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default ClientCarousel;
