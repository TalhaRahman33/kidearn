import React from 'react'
import ExportedImage from "next-image-export-optimizer";
export const Gallery = () => {
  return (
    <section className="gallery-one gallery-one--page">

    <div className="container">
      <div className="row">
      <h3 className="sec-title__title text-center mt-0">
      معرض
          </h3>
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery-1-1.jpg" alt="" />
            <div className="gallery-one__card__hover">
              <a
                href="/images/gallery-1-1.jpg"
                className="img-popup"
              >
                <span className="gallery-one__card__icon" />
              </a>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery-1-2.jpg" alt="" />
            <div className="gallery-one__card__hover">
              <a
                href="/images/gallery-1-2.jpg"
                className="img-popup"
              >
                <span className="gallery-one__card__icon" />
              </a>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery-1-3.jpg" alt="" />
            <div className="gallery-one__card__hover">
              <a
                href="/images/gallery-1-3.jpg"
                className="img-popup"
              >
                <span className="gallery-one__card__icon" />
              </a>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}   src="/images/gallery-1-4.jpg" alt="" width={370} height={367}/>
            <div className="gallery-one__card__hover">
              <a
                href="/images/gallery-1-4.jpg"
                className="img-popup"
              >
                <span className="gallery-one__card__icon" />
              </a>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery-1-5.jpg" alt="" />
            <div className="gallery-one__card__hover">
              <a
                href="/images/gallery-1-5.jpg"
                className="img-popup"
              >
                <span className="gallery-one__card__icon" />
              </a>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery-1-6.jpg" alt="" />
            <div className="gallery-one__card__hover">
              <a
                href="/images/gallery-1-6.jpg"
                className="img-popup"
              >
                <span className="gallery-one__card__icon" />
              </a>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery-1-7.jpg" alt="" />
            <div className="gallery-one__card__hover">
              <a
                href="/images/gallery-1-7.jpg"
                className="img-popup"
              >
                <span className="gallery-one__card__icon" />
              </a>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery-1-8.jpg" alt="" />
            <div className="gallery-one__card__hover">
              <a
                href="/images/gallery-1-8.jpg"
                className="img-popup"
              >
                <span className="gallery-one__card__icon" />
              </a>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery-1-9.jpg" alt="" />
            <div className="gallery-one__card__hover">
              <a
                href="/images/gallery-1-9.jpg"
                className="img-popup"
              >
                <span className="gallery-one__card__icon" />
              </a>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  
  )
}
