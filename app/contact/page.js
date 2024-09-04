import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Footer1 from '../components/Footer1'

const page = () => {
  return (
    <div>
      <Header />

      <section className="page-header">
    <div className="page-header__bg" />
    {/* /.page-header__bg */}
    <div className="container">
      <h2 className="page-header__title">Contact</h2>
      <ul className="kidearn-breadcrumb list-unstyled">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
      {/* /.thm-breadcrumb list-unstyled */}
    </div>
    {/* /.container */}
  </section>
  {/* /.page-header */}




  <section className="contact-one">
    <div className="container">
      <div className="sec-title text-center">
        <h6 className="sec-title__tagline">Contact with us</h6>
        {/* /.sec-title__tagline */}
        <h3 className="sec-title__title">
          Feel free to write us <br /> anytime
        </h3>
        {/* /.sec-title__title */}
      </div>
      {/* /.sec-title */}
      <form
        className="contact-one__form contact-form-validated form-one"
        action="inc/sendemail.php"
      >

        <div className="form-one__group">


          <div className="form-one__control ">
            <input type="text" name="name" placeholder="Your name" />
          </div>


          {/* /.form-one__control  */}
          <div className="form-one__control ">
            <input type="email" name="email" placeholder="Email address" />
          </div>
          {/* /.form-one__control  */}
          <div className="form-one__control ">
            <input type="text" name="phone" placeholder="Your phone" />
          </div>


          <div className="form-one__control ">
            <input type="text" name="phone" placeholder="Select Program" />
          </div>


          {/* /.form-one__control  */}
          <div className="form-one__control ">
            <div className="form-one__control__select">
              <label className="sr-only" htmlFor="language-select">
                Select programs
              </label>
              {/* /#language-select.sr-only */}
              <select className="selectpicker" id="language-select">
                <option value="Select programs">Select programs</option>
                <option value="Select programs 01">Select programs 01</option>
                <option value="Select programs 02">Select programs 02</option>
              </select>
            </div>
            {/* /.main-menu__language */}
          </div>
          {/* /.form-one__control  */}
          <div className="form-one__control form-one__control--full">
            <textarea
              name="message"
              placeholder="Write  a message"
              defaultValue={""}
            />
            {/* /# */}
          </div>
          {/* /.form-one__control */}
          <div className="form-one__control form-one__control--full text-center">
            <button type="submit" className="kidearn-btn kidearn-btn--xl">
              <span>Send a Message</span>
            </button>
          </div>
          {/* /.form-one__control */}
        </div>
        {/* /.form-one__group */}
      </form>
    </div>
    {/* /.container */}
  </section>
  {/* /.contact-one */}



  <section className="contact-info-one">
      <div className="container">
        <div className="contact-info-one__inner">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="contact-info-one__item">
                <i className="icon-telephone contact-info-one__icon"></i>
                <p className="contact-info-one__text">Have any question?</p>
                <h3 className="contact-info-one__title">
                  <a href="tel:+23(000)-8050">Free + 23 (000)-8050</a>
                </h3>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="contact-info-one__item" style={{ '--accent-color': '#2390FF' }}>
                <i className="icon-email contact-info-one__icon"></i>
                <p className="contact-info-one__text">Send Email</p>
                <h3 className="contact-info-one__title">
                  <a href="mailto:kidearn@envato.com">kidearn@envato.com</a>
                </h3>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="contact-info-one__item" style={{ '--accent-color': '#75C137' }}>
                <i className="icon-location-fill contact-info-one__icon"></i>
                <p className="contact-info-one__text">Visit Anytime</p>
                <h3 className="contact-info-one__title">
                  <a href="#">6391 Elgin St. Delaware 10299</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  {/* /.contact-map */}
  <section className="contact-map">
    <div className="container-fluid">
      <div className="google-map google-map__contact">
        <iframe
          title="template google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="map__contact"
          allowFullScreen=""
        />
      </div>
      {/* /.google-map */}
    </div>
    {/* /.container-fluid */}
  </section>


      <Footer />

<Footer1 />

    </div>
  )
}

export default page
