import React from 'react'
import ExportedImage from 'next-image-export-optimizer';
const NewDetail1 = () => {
  return (
    <>
    <section className="page-header">
      <div className="page-header__bg" />
      {/* /.page-header__bg */}
      <div className="container">
        <h2 className="page-header__title">تفاصيل الموضوع</h2>
        <ul className="kidearn-breadcrumb list-unstyled">
          <li>
            <a href="/">الصفحة الرئيسية</a>
          </li>
          <li>
            <span>تفاصيل الموضوع</span>
          </li>
        </ul>
        {/* /.thm-breadcrumb list-unstyled */}
      </div>
      {/* /.container */}
    </section>
    {/* /.page-header */}
    <section className="blog-one blog-one--page">
      <div className="container">
        <div className="row gutter-y-60">
         
          {/* /.col-lg-4 */}
          <div className="col-lg-8">
            <div className="blog-details">
              <div className="blog-card blog-card-two @@extraClassName">
                <div className="blog-card__image">
                  <ExportedImage   unoptimized={true}
                    width={200} height={500} src="/images/blog-l-1-1.jpg"
                    alt="The Complete Web Developer Guideline 2023"
                  />
                </div>
                {/* /.blog-card__image */}
                <div className="blog-card__content">
                  <div className="blog-card__content__top">
                    <a href="#" className="blog-card__category">
                      Kindergarten
                    </a>
                    <div className="blog-card__date">
                      <i className="icon-clock" />
                      30 Mar, 2023
                    </div>
                    {/* /.blog-card__date */}
                  </div>
                  {/* /.blog-card__content__top */}
                  <h3 className="blog-card__title">
                    The complete web developer guideline 2023
                  </h3>
                  {/* /.blog-card__title */}
                  <p className="blog-card-two__text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteradution in some
                    form by injected humour, or randomised words which don't look
                    even slightly believable. If you are going There are many
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteradution in some form by injected
                    humour, or randomised words which don't look even slightly
                    believable. If you are going{" "}
                  </p>
                  {/* /.blog-card-two__text */}
                  <p className="blog-card-two__text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteradution in some
                    form by injected humour, or randomised words which don't look
                    even slightly believable. If you are going{" "}
                  </p>
                </div>
                {/* /.blog-card__content */}
              </div>
            
            </div>
         
          
           
          </div>
          {/* /.col-lg-8 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.blog-one blog-one--page */}
  </>
  
  )
}

export default NewDetail1