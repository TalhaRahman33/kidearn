"use client";

import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const VideoSection = () => {
  return (
    <section className="video-one">
      <div className="video-one__bg"></div>

      <div
        className="video-one__bg-shape1 kidearn-splax"
        data-para-options='{"orientation": "down", "scale": 1.9, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
      >
        <ExportedImage src="/images/video-shape-1.webp" alt="kidearn" unoptimized={true} width={133} height={89} />
      </div>
      <div
        className="video-one__bg-shape2 kidearn-splax"
        data-para-options='{"orientation": "up", "scale": 1.7, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
      >
        <ExportedImage src="/images/video-shape-2.webp" alt="kidearn" unoptimized={true} width={113} height={93} />
      </div>
      <div
        className="video-one__bg-shape3 kidearn-splax"
        data-para-options='{"orientation": "right", "scale": 1.8, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
      >
        <ExportedImage src="/images/video-shape-3.webp" alt="kidearn" unoptimized={true} width={101} height={98} />
      </div>
      <div
        className="video-one__bg-shape4 kidearn-splax"
        data-para-options='{"orientation": "right", "scale": 1.6, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
      >
        <ExportedImage src="/images/video-shape-4.webp" alt="kidearn" unoptimized={true} width={133} height={134} />
      </div>
      <div
        className="video-one__bg-shape5 kidearn-splax"
        data-para-options='{"orientation": "left", "scale": 1.6, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
      >
        <ExportedImage src="/images/video-shape-5.webp" alt="kidearn" unoptimized={true} width={106} height={109} />
      </div>
      <div
        className="video-one__bg-shape6 kidearn-splax"
        data-para-options='{"orientation": "right", "scale": 1.7, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
      >
        <ExportedImage src="/images/video-shape-6.webp" alt="kidearn" unoptimized={true} width={147} height={103} />
      </div>
      <div
        className="video-one__bg-shape7 kidearn-splax"
        data-para-options='{"orientation": "left", "scale": 1.3, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
      >
        <ExportedImage src="/images/video-shape-7.webp" alt="kidearn" unoptimized={true} width={154} height={221} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center">
            <div className="video-one__content">
              <h3 className="video-one__content__title">كـــيف تـــصل إلــينا ؟</h3>
              <Link href="https://maps.app.goo.gl/fhUFU1J1xG3L98uw7" className="kidearn-btn" target="_target">
                <span>اضغط هنا</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="video-one__btn-shape">
              <div className="video-one__btn">
                <ExportedImage src="/images/video-bg-1.webp" alt="kidearn" unoptimized={true} width={555} height={597} />
                <Link href="https://www.instagram.com/baytummi" target="_blank" rel="noopener noreferrer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;