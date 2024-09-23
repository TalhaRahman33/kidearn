
"use client"
import React from 'react';
import Slider from 'react-slick';
import ExportedImage from 'next-image-export-optimizer';

const ClientCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 5 },
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 575,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 360,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 0,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="client-carousel">
            <div className="container">
                <h5 className="client-carousel__tilte">
                    <span>2k + Brands Trust Us</span>
                </h5>
                <Slider {...settings}>
                    {[...Array(10)].map((_, index) => (
                        <div className="client-carousel__one__item" key={index}>
                            <ExportedImage src="/images/brand-1-1.png" alt="kidearn" width={160} height={100} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ClientCarousel;
