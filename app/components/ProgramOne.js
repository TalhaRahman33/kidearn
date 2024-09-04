import Image from 'next/image';
import Link from 'next/link';
import styles from './ProgramOne.module.css'; // Assume you have a CSS module for custom styles

const ProgramOne = () => {
  return (
    <section className={styles.programOne}>
      <div 
        className={`${styles.programOneBg} kidearn-splax`} 
        data-para-options='{"orientation": "up", "scale": 2.5, "overflow": true}'
      >
        <Image 
          src="/images/program-bg-shape.png" 
          alt="kidearn" 
          width={127} 
          height={8} // Adjust width and height accordingly
          layout="responsive" 
        />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">Our Programs</h6>
          <h3 className="sec-title__title">
            We meet kids at their level
            <br /> regardless of their age
          </h3>
        </div>
        <div className="row">
          {/* Program Items */}
          {programs.map((program, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div 
                className={`${styles.programOneItem} wow fadeInUp`} 
                data-wow-duration="1500ms" 
                data-wow-delay={`${index * 100}ms`} 
                style={{ '--accent-color': program.accentColor }}
              >
                <div className={styles.programOneItemShape}>
                  <svg 
                    className={styles.programOneItemShapeOne} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 32 43"
                  >
                    <path d={program.shapeOnePath}></path>
                  </svg>
                  <svg 
                    className={styles.programOneItemShapeTwo} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 15 21"
                  >
                    <path d={program.shapeTwoPath}></path>
                  </svg>
                </div>
                <div className={styles.programOneItemBg}></div>
                <div className={styles.programOneItemImage}>
                  <Image 
                    src={program.imageSrc} 
                    alt={program.imageAlt} 
                    width={500} 
                    height={500} 
                    layout="responsive"
                  />
                </div>
                <div className={styles.programOneItemContent}>
                  <h3 className={styles.programOneItemTitle}>
                    <Link href={program.linkHref}>{program.title}</Link>
                  </h3>
                  <div className={styles.programOneItemAge}>{program.ageRange}</div>
                  <p className={styles.programOneItemText}>{program.text}</p>
                  <Link href={program.linkHref} className={styles.programOneItemRm}>
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sample data for programs (could be passed as props)
const programs = [
  {
    accentColor: '#F25334',
    shapeOnePath: 'M11.0817 6.98831C-9.7901 23.3302 2.35379 52.1177 18.5511 39.5735C34.7647 27.0458 39.1287 -14.9434 11.0817 6.98831Z',
    shapeTwoPath: 'M5.28824 3.20713C-4.67276 11.0063 1.12287 24.745 8.85298 18.7583C16.5909 12.7795 18.6736 -7.25972 5.28824 3.20713Z',
    imageSrc: '/images/program-1-1.jpg',
    imageAlt: 'Toddler',
    linkHref: '/programs-d-toddler',
    title: 'Toddler',
    ageRange: '(1.5-3 years)',
    text: 'Lorem ipsum dolor sit amet consectetur. Convallis',
  },
  {
    accentColor: '#75C137',
    shapeOnePath: 'M11.0817 6.98831C-9.7901 23.3302 2.35379 52.1177 18.5511 39.5735C34.7647 27.0458 39.1287 -14.9434 11.0817 6.98831Z',
    shapeTwoPath: 'M5.28824 3.20713C-4.67276 11.0063 1.12287 24.745 8.85298 18.7583C16.5909 12.7795 18.6736 -7.25972 5.28824 3.20713Z',
    imageSrc: '/images/program-1-2.jpg',
    imageAlt: 'Preschool',
    linkHref: '/programs-d-preschool',
    title: 'Preschool',
    ageRange: '(2-3 years)',
    text: 'Lorem ipsum dolor sit amet consectetur. Convallis',
  },
  // Add other programs similarly
];

export default ProgramOne;
