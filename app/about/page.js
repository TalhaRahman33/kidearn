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
      <h2 className="page-header__title">About us</h2>
      <ul className="kidearn-breadcrumb list-unstyled">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <span>About</span>
        </li>
      </ul>
      {/* /.thm-breadcrumb list-unstyled */}
    </div>
    {/* /.container */}
  </section>
  {/* /.page-header */}

  <section className="about-four">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
        <div className="about-four__image">
          <div className="about-four__image__shape1">
            <img src="images/about-4-shape-1.png" alt="kidearn" />
          </div>
          <div 
            className="about-four__image__one kidearn-tilt"
            data-tilt-options='{"glare": false, "maxglare": 0, "maxtilt": 3, "speed": 700, "scale": 1}'
          >
            <img src="images/about-4-1.jpg" alt="kidearn" />
            <div className="about-four__image__one-bottom"></div>
          </div>
          <div className="about-four__image__two wow fadeInUp" data-wow-delay="500ms">
            <img src="images/about-4-2.jpg" alt="kidearn" />
          </div>
          <div className="about-four__image__bg-shape">
            <img src="images/about-4-shape-2.png" alt="kidearn" />
          </div>
        </div>
      </div>
      <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
        <div className="about-four__content">
          <div className="sec-title text-left">
            <h6 className="sec-title__tagline">About Us</h6>
            <h3 className="sec-title__title">Welcome to best kidearn for your child</h3>
          </div>
          <p className="about-four__content__text">
            Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum has been the industry's
          </p>
          <div className="about-four__info" style={{ '--accent-color': '#F25334' }}>
            <div className="about-four__info__icon"><span className="icon-trophy1"></span></div>
            <h3 className="about-four__info__title">Award Wining Time</h3>
            <p className="about-four__info__text">
              Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum
            </p>
          </div>
          <div className="about-four__info" style={{ '--accent-color': '#2390FF' }}>
            <div className="about-four__info__icon"><span className="icon-interest-rate"></span></div>
            <h3 className="about-four__info__title">Higest Success Rates</h3>
            <p className="about-four__info__text">
              Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum
            </p>
          </div>
          <a href="about.html" className="kidearn-btn">
            <span>Learn More</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="cta-one cta-one--about-page">
  <div className="container">
    <div className="cta-one__inner">
      <div 
        className="cta-one__shape1 kidearn-splax" 
        data-para-options='{"orientation": "right", "scale": 1.5, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
      >
        <img src="images/cta-shape-1.png" alt="kidearn" />
      </div>
      <div 
        className="cta-one__shape2 kidearn-splax" 
        data-para-options='{"orientation": "down", "scale": 1.5, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
      >
        <img src="images/cta-shape-2.png" alt="kidearn" />
      </div>
      <div className="row">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
          <div className="cta-one__content">
            <h3 className="cta-one__title">How to enroll your child to a class?</h3>
            <a href="about.html" className="kidearn-btn"><span>Visit Now</span></a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cta-one__one wow fadeInUp" data-wow-delay="300ms">
            <img src="images/cta-1.png" alt="kidearn" />
            <div className="cta-one__one__text">All in<br /> One</div>
          </div>
          <div className="cta-one__thumb">
            <div className="cta-one__thumb__two">
              <img src="images/cta-2.png" alt="kidearn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="funfact-one">
  <div 
    className="funfact-one__shape1 kidearn-splax" 
    data-para-options='{"orientation": "down", "scale": 1.9, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
  >
    <img src="images/funfact-shape-1.png" alt="kidearn" />
  </div>
  <div 
    className="funfact-one__shape2 kidearn-splax" 
    data-para-options='{"orientation": "right", "scale": 1.9, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
  >
    <img src="images/funfact-shape-2.png" alt="kidearn" />
  </div>
  <div 
    className="funfact-one__shape3 kidearn-splax" 
    data-para-options='{"orientation": "right", "scale": 1.9, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
  >
    <img src="images/funfact-shape-3.png" alt="kidearn" />
  </div>
  <div 
    className="funfact-one__shape4 kidearn-splax" 
    data-para-options='{"orientation": "left", "scale": 1.9, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
  >
    <img src="images/funfact-shape-4.png" alt="kidearn" />
  </div>
  <div 
    className="funfact-one__shape5 kidearn-splax" 
    data-para-options='{"orientation": "left", "scale": 1.6, "delay": ".5", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
  >
    <img src="images/funfact-shape-5.png" alt="kidearn" />
  </div>
  <div className="container">
    <div className="row gutter-y-30">
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms">
        <div className="funfact-one__item text-center">
          <div className="funfact-one__icon">
            <span className="icon-graduated"></span>
          </div>
          <div className="funfact-one__count">
            <span className="count-box">
              <span className="count-text" data-stop="30.3" data-speed="1500"></span>
            </span>
            k
          </div>
          <p className="funfact-one__title">Student Enrolled</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms">
        <div className="funfact-one__item funfact-one__item--smnone text-center">
          <div className="funfact-one__icon">
            <span className="icon-online-learning"></span>
          </div>
          <div className="funfact-one__count">
            <span className="count-box">
              <span className="count-text" data-stop="40.5" data-speed="1500"></span>
            </span>
            k
          </div>
          <p className="funfact-one__title">Class completed</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
        <div className="funfact-one__item text-center">
          <div className="funfact-one__icon">
            <span className="icon-rating"></span>
          </div>
          <div className="funfact-one__count">
            <span className="count-box">
              <span className="count-text" data-stop="88.9" data-speed="1500"></span>
            </span>
            %
          </div>
          <p className="funfact-one__title">Satisfaction rate</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="400ms">
        <div className="funfact-one__item funfact-one__item--noborder text-center">
          <div className="funfact-one__icon">
            <span className="icon-instructor"></span>
          </div>
          <div className="funfact-one__count">
            <span className="count-box">
              <span className="count-text" data-stop="6.30" data-speed="1500"></span>
            </span>
            +
          </div>
          <p className="funfact-one__title">Top instructors</p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* ******************************************Slider Start**************************************** */}


<section className="testimonial-one testimonial-one--home-two testimonial-one--about-page">
  <div 
    className="testimonial-one__left-shape kidearn-splax" 
    data-para-options='{"orientation": "left", "scale": 2.5, "overflow": true}'
  >
    <img src="images/testimonial-shape-2.png" alt="kidearn" />
  </div>
  <div 
    className="testimonial-one__right-shape kidearn-splax" 
    data-para-options='{"orientation": "right", "scale": 2.5, "overflow": true}'
  >
    <img src="images/testimonial-shape-3.png" alt="kidearn" />
  </div>
  <div className="container">
    <div className="testimonial-one__area">
      <div className="testimonial-one__bg"></div>
      <div 
        className="testimonial-one__bg-shape kidearn-splax" 
        style={{ backgroundImage: 'url(images/testimonial-shape-4.png)' }} 
        data-para-options='{"orientation": "right", "scale": 1.2, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
      ></div>
      <div className="sec-title text-center">
        <h6 className="sec-title__tagline">Testimonial</h6>
        <h3 className="sec-title__title">Parents' words are the<br /> key to happy kids</h3>
      </div>
      <div 
        className="testimonial-one__carousel kidearn-owl__carousel owl-carousel owl-theme" 
        data-owl-options='{"items": 1, "margin": 0, "loop": true, "smartspeed": 700, "nav": {"navtext": ["<span></span>", "<span class=\"icon-right-arrow\"></span>"]}, "dots": false, "autoplay": false}'
      >
        <div className="item">
          <div className="testimonial-one__item">
            <div className="testimonial-one__item__quote">
              Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet.
              Flexible Classes refers to the process flexible Classes refers to the process
            </div>
            <div className="testimonial-one__item__author">
              <img src="images/testi-author-1.png" alt="kidearn" />
              <h5 className="testimonial-one__item__author__name">Savannah Nguyen</h5>
              <p className="testimonial-one__item__author__designation">Martin’s Father</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial-one__item">
            <div className="testimonial-one__item__quote">
              Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet.
              Flexible Classes refers to the process flexible Classes refers to the process
            </div>
            <div className="testimonial-one__item__author">
              <img src="images/testi-author-2.png" alt="kidearn" />
              <h5 className="testimonial-one__item__author__name">Sarah Taylor</h5>
              <p className="testimonial-one__item__author__designation">Martin’s Mother</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ***************************************slider End ********************************************** */}



<section class="team-two team-two--about-page">

<div
  className="team-two__shape-left kidearn-splax"
  data-para-options='{
    "orientation": "left",
    "scale": 2.1,
    "overflow": true
  }'
>
  <img src="/images/team-2-shape-1.png" alt="kidearn" />
</div>

<div
  className="team-two__shape-right kidearn-splax"
  data-para-options='{
    "orientation": "right",
    "scale": 2.1,
    "overflow": true
  }'
>
  <img src="/images/team-2-shape-2.png" alt="kidearn" />
</div>


<div class="container">


<div className="sec-title text-center">
  <h6 className="sec-title__tagline">Our Teacher</h6>
  <h3 className="sec-title__title">
    Meet our expert &amp; smart
    <br />
    superheroes!
  </h3>
</div>





<div
  className="team-two__carousel kidearn-owl__carousel kidearn-owl__carousel--basic-nav kidearn-owl__carousel--with-shadow owl-carousel owl-theme"
  data-owl-options={JSON.stringify({
    items: 1,
    margin: 0,
    loop: false,
    smartspeed: 700,
    nav: true,
    navtext: [
      "<span class='fa fa-angle-left'></span>",
      "<span class='fa fa-angle-right'></span>"
    ],
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2,
        margin: 30
      },
      992: {
        items: 3,
        margin: 30
      }
    }
  })}
>








<div className="item">
  <div
    className="team-card-two wow fadeInUp"
    data-wow-duration="1500ms"
    data-wow-delay="00ms"
    style={{ '--accent-color': '#F25334' }}
  >
    <div className="team-card-two__svg-top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 150">
        <path
          d="M0.298312 1.27145C0.922648 0.466318 11.8598 0.0331889 28.3325 0.0553685C44.7796 0.138422 66.6942 0.881377 88.5464 3.35026C110.278 5.89193 131.109 11.0494 145.896 17.7296C149.469 19.4932 153.255 20.9185 156.192 22.7046C159.008 24.5634 161.67 26.2803 164.082 27.8674C165.288 28.6609 166.433 29.4274 167.51 30.1449C168.467 30.9352 169.277 31.7325 170.062 32.4638C171.631 33.9264 172.976 35.1981 174.028 36.2301C175.081 37.2621 176.365 38.5068 177.78 39.9543C179.152 41.4188 180.19 43.2943 181.597 45.227C182.919 47.1935 184.362 49.3408 185.9 51.603C187.481 53.8482 188.221 56.6029 189.52 59.2643C190.647 61.9933 191.937 64.7594 193.005 67.715C193.721 70.7842 194.463 73.9193 195.222 77.0983C197.041 83.3377 197.272 90.2038 197.752 96.8196C198.958 123.488 192.649 148.959 190.511 149.447C187.524 150.17 189.136 125.867 184.611 100.967C183.274 94.8164 182.357 88.348 179.947 82.6213C178.939 79.6926 177.941 76.786 176.968 73.9452C175.575 71.2958 174.207 68.7123 172.884 66.2387C171.474 63.7989 170.571 61.2607 168.888 59.259C167.291 57.2233 165.823 55.2637 164.433 53.5017C163 51.7567 161.963 50.008 160.609 48.7143C159.247 47.3986 158.014 46.2856 157.039 45.3246C156.065 44.3635 154.857 43.1897 153.46 41.7861C152.745 41.1038 152.046 40.3386 151.201 39.5803C150.236 38.8948 149.211 38.1823 148.16 37.4039C146.023 35.8859 143.723 34.2042 141.233 32.4194C138.7 30.6517 135.318 29.2446 132.192 27.4824C119.184 20.7855 100.619 15.0887 80.5937 11.5939C60.5252 8.11613 39.9122 6.14829 24.6887 4.64263C9.43961 3.19785 -0.31735 2.09854 0.298312 1.27145Z"
        />
      </svg>
    </div>
    <div
      className="team-card-two__image kidearn-tilt"
      data-tilt-options={{
        glare: false,
        maxglare: 0,
        maxtilt: 5,
        speed: 700,
        scale: 1,
      }}
    >
      <img src="images/team-2-1.jpg" alt="Jane Cooper" />
    </div>
    <div className="team-card-two__content">
      <h3 className="team-card-two__title">
        <a href="team-details.html">Jane Cooper</a>
      </h3>
      <p className="team-card-two__designation">Swimming Teacher</p>
      <div className="list-unstyled team-card-two__social__list">
        <a className="fb" href="https://facebook.com">
          <span className="social-bg">
            <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <path
                d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963 26.5247 27.0295C23.5615 29.7612 19.6738 31.4931 15.9801 31.7919C7.53366 31.7812 0.499996 24.8704 0.499997 16.3588C0.499998 12.0164 1.39914 8.15083 4.00159 5.36741C6.5968 2.59173 10.9785 0.794576 18.1657 0.791876C22.7642 1.09086 26.0753 2.85269 28.2459 5.56601C30.428 8.29363 31.5 12.0368 31.5 16.3589Z"
              />
            </svg>
          </span>
          <i className="fab fa-facebook-f" aria-hidden="true"></i>
          <span className="sr-only">Facebook</span>
        </a>
        <a className="li" href="https://www.linkedin.com/">
          <span className="social-bg">
            <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <path
                d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963 26.5247 27.0295C23.5615 29.7612 19.6738 31.4931 15.9801 31.7919C7.53366 31.7812 0.499996 24.8704 0.499997 16.3588C0.499998 12.0164 1.39914 8.15083 4.00159 5.36741C6.5968 2.59173 10.9785 0.794576 18.1657 0.791876C22.7642 1.09086 26.0753 2.85269 28.2459 5.56601C30.428 8.29363 31.5 12.0368 31.5 16.3589Z"
              />
            </svg>
          </span>
          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          <span className="sr-only">Linkedin</span>
        </a>
        <a className="yo" href="https://www.youtube.com">
          <span className="social-bg">
            <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <path
                d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963 26.5247 27.0295C23.5615 29.7612 19.6738 31.4931 15.9801 31.7919C7.53366 31.7812 0.499996 24.8704 0.499997 16.3588C0.499998 12.0164 1.39914 8.15083 4.00159 5.36741C6.5968 2.59173 10.9785 0.794576 18.1657 0.791876C22.7642 1.09086 26.0753 2.85269 28.2459 5.56601C30.428 8.29363 31.5 12.0368 31.5 16.3589Z"
              />
            </svg>
          </span>
          <i className="fab fa-youtube" aria-hidden="true"></i>
          <span className="sr-only">YouTube</span>
        </a>
      </div>
    </div>
  </div>
</div>


<div className="item">
  <div
    className="team-card-two wow fadeInUp"
    data-wow-duration="1500ms"
    data-wow-delay="100ms"
    style={{ "--accent-color": "#75C137" }}
  >
    <div className="team-card-two__svg-top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 150">
        <path d="M0.298312 1.27145C0.922648 0.466318 11.8598 0.0331889 28.3325 0.0553685C44.7796 0.138422 66.6942 0.881377 88.5464 3.35026C110.278 5.89193 131.109 11.0494 145.896 17.7296C149.469 19.4932 153.255 20.9185 156.192 22.7046C159.008 24.5634 161.67 26.2803 164.082 27.8674C165.288 28.6609 166.433 29.4274 167.51 30.1449C168.467 30.9352 169.277 31.7325 170.062 32.4638C171.631 33.9264 172.976 35.1981 174.028 36.2301C175.081 37.2621 176.365 38.5068 177.78 39.9543C179.152 41.4188 180.19 43.2943 181.597 45.227C182.919 47.1935 184.362 49.3408 185.9 51.603C187.481 53.8482 188.221 56.6029 189.52 59.2643C190.647 61.9933 191.937 64.7594 193.005 67.715C193.721 70.7842 194.463 73.9193 195.222 77.0983C197.041 83.3377 197.272 90.2038 197.752 96.8196C198.958 123.488 192.649 148.959 190.511 149.447C187.524 150.17 189.136 125.867 184.611 100.967C183.274 94.8164 182.357 88.348 179.947 82.6213C178.939 79.6926 177.941 76.786 176.968 73.9452C175.575 71.2958 174.207 68.7123 172.884 66.2387C171.474 63.7989 170.571 61.2607 168.888 59.259C167.291 57.2233 165.823 55.2637 164.433 53.5017C163 51.7567 161.963 50.008 160.609 48.7143C159.247 47.3986 158.014 46.2856 157.039 45.3246C156.065 44.3635 154.857 43.1897 153.46 41.7861C152.745 41.1038 152.046 40.3386 151.201 39.5803C150.236 38.8948 149.211 38.1823 148.16 37.4039C146.023 35.8859 143.723 34.2042 141.233 32.4194C138.7 30.6517 135.318 29.2446 132.192 27.4824C119.184 20.7855 100.619 15.0887 80.5937 11.5939C60.5252 8.11613 39.9122 6.14829 24.6887 4.64263C9.43961 3.19785 -0.31735 2.09854 0.298312 1.27145Z"></path>
      </svg>
    </div>
    <div
      className="team-card-two__image kidearn-tilt"
      data-tilt-options='{ "glare": false, "maxglare": 0, "maxtilt": 5, "speed": 700, "scale": 1 }'
    >
      <img src="images/team-2-2.jpg" alt="Cody fisher" />
    </div>
    <div className="team-card-two__content">
      <h3 className="team-card-two__title">
        <a href="team-details.html">Cody Fisher</a>
      </h3>
      <p className="team-card-two__designation">Art Teacher</p>
      <div className="list-unstyled team-card-two__social__list">
        <a className="fb" href="https://facebook.com">
          <span className="social-bg">
            <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963 26.5247 27.0295C23.5615 29.7612 19.6738 31.4931 15.9801 31.7919C7.53366 31.7812 0.499996 24.8704 0.499997 16.3588C0.499998 12.0164 1.39914 8.15083 4.00159 5.36741C6.5968 2.59173 10.9785 0.794576 18.1657 0.791876C22.7642 1.09086 26.0753 2.85269 28.2459 5.56601C30.428 8.29363 31.5 12.0368 31.5 16.3589Z"></path>
            </svg>
          </span>
          <i className="fab fa-facebook-f" aria-hidden="true"></i>
          <span className="sr-only">Facebook</span>
        </a>
        <a className="li" href="https://www.linkedin.com/">
          <span className="social-bg">
            <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963 26.5247 27.0295C23.5615 29.7612 19.6738 31.4931 15.9801 31.7919C7.53366 31.7812 0.499996 24.8704 0.499997 16.3588C0.499998 12.0164 1.39914 8.15083 4.00159 5.36741C6.5968 2.59173 10.9785 0.794576 18.1657 0.791876C22.7642 1.09086 26.0753 2.85269 28.2459 5.56601C30.428 8.29363 31.5 12.0368 31.5 16.3589Z"></path>
            </svg>
          </span>
          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          <span className="sr-only">Linkedin</span>
        </a>
        <a className="yo" href="https://www.youtube.com">
          <span className="social-bg">
            <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963 26.5247 27.0295C23.5615 29.7612 19.6738 31.4931 15.9801 31.7919C7.53366 31.7812 0.499996 24.8704 0.499997 16.3588C0.499998 12.0164 1.39914 8.15083 4.00159 5.36741C6.5968 2.59173 10.9785 0.794576 18.1657 0.791876C22.7642 1.09086 26.0753 2.85269 28.2459 5.56601C30.428 8.29363 31.5 12.0368 31.5 16.3589Z"></path>
            </svg>
          </span>
          <i className="fab fa-youtube" aria-hidden="true"></i>
          <span className="sr-only">Youtube</span>
        </a>
      </div>
    </div>
    <div className="team-card-two__svg-bottom">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 150">
        <path d="M0.298312 1.27145C0.922648 0.466318 11.8598 0.0331889 28.3325 0.0553685C44.7796 0.138422 66.6942 0.881377 88.5464 3.35026C110.278 5.89193 131.109 11.0494 145.896 17.7296C149.469 19.4932 153.255 20.9185 156.192 22.7046C159.008 24.5634 161.67 26.2803 164.082 27.8674C165.288 28.6609 166.433 29.4274 167.51 30.1449C168.467 30.9352 169.277 31.7325 170.062 32.4638C171.631 33.9264 172.976 35.1981 174.028 36.2301C175.081 37.2621 176.365 38.5068 177.78 39.9543C179.152 41.4188 180.19 43.2943 181.597 45.227C182.919 47.1935 184.362 49.3408 185.9 51.603C187.481 53.8482 188.221 56.6029 189.52 59.2643C190.647 61.9933 191.937 64.7594 193.005 67.715C193.721 70.7842 194.463 73.9193 195.222 77.0983C197.041 83.3377 197.272 90.2038 197.752 96.8196C198.958 123.488 192.649 148.959 190.511 149.447C187.524 150.17 189.136 125.867 184.611 100.967C183.274 94.8164 182.357 88.348 179.947 82.6213C178.939 79.6926 177.941 76.786 176.968 73.9452C175.575 71.2958 174.207 68.7123 172.884 66.2387C171.474 63.7989 170.571 61.2607 168.888 59.259C167.291 57.2233 165.823 55.2637 164.433 53.5017C163 51.7567 161.963 50.008 160.609 48.7143C159.247 47.3986 158.014 46.2856 157.039 45.3246C156.065 44.3635 154.857 43.1897 153.46 41.7861C152.745 41.1038 152.046 40.3386 151.201 39.5803C150.236 38.8948 149.211 38.1823 148.16 37.4039C146.023 35.8859 143.723 34.2042 141.233 32.4194C138.7 30.6517 135.318 29.2446 132.192 27.4824C119.184 20.7855 100.619 15.0887 80.5937 11.5939C60.5252 8.11613 39.9122 6.14829 24.6887 4.64263C9.43961 3.19785 -0.31735 2.09854 0.298312 1.27145Z"></path>
      </svg>
    </div>
  </div>
</div>


<div className="item">
  <div
    className="team-card-two wow fadeInUp"
    data-wow-duration="1500ms"
    data-wow-delay="200ms"
    style={{ "--accent-color": "#2390FF" }}
  >
    <div className="team-card-two__svg-top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 150">
        <path d="M0.298312 1.27145C0.922648 0.466318 11.8598 0.0331889 28.3325 0.0553685C44.7796 0.138422 66.6942 0.881377 88.5464 3.35026C110.278 5.89193 131.109 11.0494 145.896 17.7296C149.469 19.4932 153.255 20.9185 156.192 22.7046C159.008 24.5634 161.67 26.2803 164.082 27.8674C165.288 28.6609 166.433 29.4274 167.51 30.1449C168.467 30.9352 169.277 31.7325 170.062 32.4638C171.631 33.9264 172.976 35.1981 174.028 36.2301C175.081 37.2621 176.365 38.5068 177.78 39.9543C179.152 41.4188 180.19 43.2943 181.597 45.227C182.919 47.1935 184.362 49.3408 185.9 51.603C187.481 53.8482 188.221 56.6029 189.52 59.2643C190.647 61.9933 191.937 64.7594 193.005 67.715C193.721 70.7842 194.463 73.9193 195.222 77.0983C197.041 83.3377 197.272 90.2038 197.752 96.8196C198.958 123.488 192.649 148.959 190.511 149.447C187.524 150.17 189.136 125.867 184.611 100.967C183.274 94.8164 182.357 88.348 179.947 82.6213C178.939 79.6926 177.941 76.786 176.968 73.9452C175.575 71.2958 174.207 68.7123 172.884 66.2387C171.474 63.7989 170.571 61.2607 168.888 59.259C167.291 57.2233 165.823 55.2637 164.433 53.5017C163 51.7567 161.963 50.008 160.609 48.7143C159.247 47.3986 158.014 46.2856 157.039 45.3246C156.065 44.3635 154.857 43.1897 153.46 41.7861C152.745 41.1038 152.046 40.3386 151.201 39.5803C150.236 38.8948 149.211 38.1823 148.16 37.4039C146.023 35.8859 143.723 34.2042 141.233 32.4194C138.7 30.6517 135.318 29.2446 132.192 27.4824C119.184 20.7855 100.619 15.0887 80.5937 11.5939C60.5252 8.11613 39.9122 6.14829 24.6887 4.64263C9.43961 3.19785 -0.31735 2.09854 0.298312 1.27145Z"></path>
      </svg>
    </div>
    <div
      className="team-card-two__image kidearn-tilt"
      data-tilt-options='{ "glare": false, "maxglare" : 0, "maxtilt" : 5, "speed" : 700, "scale" : "" }'
    >
      <img src="images/team-2-3.jpg" alt="Floyd miles" />
    </div>
    <div className="team-card-two__content">
      <h3 className="team-card-two__title">
        <a href="team-details.html">Floyd miles</a>
      </h3>
      <p className="team-card-two__designation">Sports Teacher</p>
      <div className="list-unstyled team-card-two__social__list">
        <a className="fb" href="https://facebook.com">
          <span className="social-bg">
            <svg
              viewBox="0 0 32 33"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963 26.5247 27.0295C23.5615 29.7612 19.6738 31.4931 15.9801 31.7919C7.53366 31.7812 0.499996 24.8704 0.499997 16.3588C0.499998 12.0164 1.39914 8.15083 4.00159 5.36741C6.5968 2.59173 10.9785 0.794576 18.1657 0.791876C22.7642 1.09086 26.0753 2.85269 28.2459 5.56601C30.428 8.29363 31.5 12.0368 31.5 16.3589Z"></path>
            </svg>
          </span>
          <i className="fab fa-facebook-f" aria-hidden="true"></i>
          <span className="sr-only">Facebook</span>
        </a>
        <a className="li" href="https://www.linkedin.com/">
          <span className="social-bg">
            <svg
              viewBox="0 0 32 33"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963 26.5247 27.0295C23.5615 29.7612 19.6738 31.4931 15.9801 31.7919C7.53366 31.7812 0.499996 24.8704 0.499997 16.3588C0.499998 12.0164 1.39914 8.15083 4.00159 5.36741C6.5968 2.59173 10.9785 0.794576 18.1657 0.791876C22.7642 1.09086 26.0753 2.85269 28.2459 5.56601C30.428 8.29363 31.5 12.0368 31.5 16.3589Z"></path>
            </svg>
          </span>
          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          <span className="sr-only">Linkedin</span>
        </a>
        <a className="yo" href="https://www.youtube.com">
          <span className="social-bg">
            <svg
              viewBox="0 0 32 33"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963 26.5247 27.0295C23.5615 29.7612 19.6738 31.4931 15.9801 31.7919C7.53366 31.7812 0.499996 24.8704 0.499997 16.3588C0.499998 12.0164 1.39914 8.15083 4.00159 5.36741C6.5968 2.59173 10.9785 0.794576 18.1657 0.791876C22.7642 1.09086 26.0753 2.85269 28.2459 5.56601C30.428 8.29363 31.5 12.0368 31.5 16.3589Z"></path>
            </svg>
          </span>
          <i className="fab fa-youtube" aria-hidden="true"></i>
          <span className="sr-only">Youtube</span>
        </a>
      </div>
    </div>
  </div>
</div>


</div>






</div>
</section>



                {/* <ClientCarousel /> */}





      <Footer />
      <Footer1 />
    </div>
  )
}

export default page
