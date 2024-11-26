import React from 'react'
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
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
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery1-1.webp" alt="" target="_blank"/>
            <div className="gallery-one__card__hover">
              <Link
                href="/images/gallery1-1.webp"
                className="img-popup"
                target="_blank"
              >
                <span className="gallery-one__card__icon" />
              </Link>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery1-2.jpg" alt="" target="_blank"/>
            <div className="gallery-one__card__hover">
              <Link
                href="/images/gallery1-2.jpg"
                className="img-popup"
                target="_blank"
              >
                <span className="gallery-one__card__icon" />
              </Link>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery1-3.webp" alt="" target="_blank"/>
            <div className="gallery-one__card__hover">
              <Link
                href="/images/gallery1-3.webp"
                className="img-popup"
                target="_blank"
              >
                <span className="gallery-one__card__icon" />
              </Link>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}   src="/images/gallery1-4.jpg" alt="" width={370} height={367} target="_blank"/>
            <div className="gallery-one__card__hover">
              <Link
                href="/images/gallery1-4.jpg"
                className="img-popup"
                target="_blank"
              >
                <span className="gallery-one__card__icon" />
              </Link>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery1-5.jpg" alt="" target="_blank"/>
            <div className="gallery-one__card__hover">
              <Link
                href="/images/gallery1-5.jpg"
                className="img-popup"
                target="_blank"
              >
                <span className="gallery-one__card__icon" />
              </Link>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery1-6.jpg" alt="" target="_blank"/>
            <div className="gallery-one__card__hover">
              <Link
                href="/images/gallery1-6.jpg"
                className="img-popup"
                target="_blank"
              >
                <span className="gallery-one__card__icon" />
              </Link>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery1-7.webp" alt="" target="_blank"/>
            <div className="gallery-one__card__hover">
              <Link
                href="/images/gallery1-7.webp"
                className="img-popup"
                target="_blank"
              >
                <span className="gallery-one__card__icon" />
              </Link>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery1-8.jpg" alt="" target="_blank"/>
            <div className="gallery-one__card__hover">
              <Link
                href="/images/gallery1-8.jpg"
                className="img-popup"
                target="_blank"
              >
                <span className="gallery-one__card__icon" />
              </Link>
            </div>
            {/* /.gallery-one__card__hover */}
          </div>
          {/* /.gallery-one__card */}
        </div>
        {/* /.col-md-6 col-lg-4 */}
        <div className="col-md-6 col-lg-4">
          <div className="gallery-one__card">
            <ExportedImage unoptimized={true}  width={370} height={367} src="/images/gallery1-9.jpg" alt="" target="_blank"/>
            <div className="gallery-one__card__hover">
              <Link
                href="/images/gallery1-9.jpg"
                className="img-popup"
                target="_blank"
              >
                <span className="gallery-one__card__icon" />
              </Link>
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
