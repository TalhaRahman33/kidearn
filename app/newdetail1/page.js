import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Footer1 from '../components/Footer1';
import Topbar from '../components/Topbar';
import NewsDetail1 from '../components/NewsDetail1';

const page = () => {
  return (
    <>
  <div className='custom-cursor'>

<div className="custom-cursor__cursor"></div>
<div className="custom-cursor__cursor-two"></div>

<div class="page-wrapper">

<Topbar />

      <Header />

<NewsDetail1/>



      <Footer />
      <Footer1 />

</div>
</div>

    </>
  )
}

export default page