import Image from 'next/image';


const ServiceOne = () => {
  return (
    <section className="service-one">
      <div 
        className={`service-one__bg kidearn-splax `}
        data-para-options={{
          orientation: "up",
          scale: 1.5,
          overflow: true
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.000000 369.000000">
          <g transform="translate(0.000000,369.000000) scale(0.050000,-0.050000)">
            <path d="M4517 7359 c-701 -82 -1096 -398 -1368 -1099 -248 -640 -417 -846 -879 -1075 -164 -81 -249 -115 -700 -276 -702 -251 -1101 -573 -1365 -1099 -550 -1096 117 -2640 1265 -2927 367 -91 998 -110 1674 -51 453 40 1043 45 1296 10 427 -59 1099 -221 1411 -341 l149 -58 0 3264 0 3263 -95 63 c-395 264 -902 383 -1388 326z"></path>
          </g>
        </svg>
      </div>
      <div 
        className={`service-one__shape kidearn-splax `} 
        style={{ backgroundImage: 'url(/images/about-bg-shape-1.png)' }} 
        data-para-options={{
          orientation: "left",
          scale: 1.5,
          overflow: true
        }}
      />
      <div className="container">
        <div className="row gutter-y-30">
          {serviceItems.map((item, index) => (
            <div className={`col-lg-3 col-md-6 wow fadeInUp`} data-wow-delay={`${(index + 1) * 100}ms`} key={index}>
              <div className="service-one__item" style={{ '--accent-color': item.accentColor }}>
                <div className="service-one__item__image-wrapper">
                  <div className="service-one__item__image kidearn-tilt" data-tilt-options={{ glare: false, maxglare: 0, maxtilt: 7, speed: 700, scale: 1 }}>
                    <Image src={`/images/${item.image}`} alt="kidearn" width={150} height={150} />
                  </div>
                  <div className="service-one__item__ball"></div>
                </div>
                <h4 className="service-one__item__title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const serviceItems = [
  {
    title: 'Home-like environment',
    image: 'service-1-1.jpg',
    accentColor: '#75C137'
  },
  {
    title: 'Safety and security',
    image: 'service-1-2.jpg',
    accentColor: '#26A6A1'
  },
  {
    title: 'Quality educators',
    image: 'service-1-3.jpg',
    accentColor: '#F25334'
  },
  {
    title: 'Play to learn',
    image: 'service-1-4.jpg',
    accentColor: '#FFAA23'
  }
];

export default ServiceOne;
