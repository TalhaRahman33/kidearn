import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const BlogThree = () => {
  const blogPosts = [
    {
      id: 1,
      category: "اقرأ المزيد",
      date: "١٥ يناير ٢٠٢٤",
      title: "مبادرة فصيح",
      image: "/images/blog-3-1.png",
      link: "/newdetail1",
      author: {
        name: "Wade Warren",
        designation: "CEO",
        image: "/images/blog-3-author-1.png",
      },
      accentColor: "#F25334",
    },
    {
      id: 2,
      category: "اقرأ المزيد",
      date: "٢٧ يونيو ٢٠٢٤",
      title: "خطوات التسجيل في قرة",
      image: "/images/blog-3-22.png",
      link: "/newdetail2",
      author: {
        name: "Darlene Robertson",
        designation: "Art Teacher",
        image: "/images/blog-3-author-2.png",
      },
      accentColor: "#2390FF",
    },
    {
      id: 3,
      category: "اقرأ المزيد",
      date: "٢ أكتوبر ٢٠٢٤",
      title: "تطور اللغة",
      image: "/images/blog2.png",
      link: "/newdetail3",
      author: {
        name: "Cody Fisher",
        designation: "CEO",
        image: "/images/blog-3-author-3.png",
      },
      accentColor: "#75C137",
    },
  ];
 
  const settings = {
 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Adjust speed (milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
 
  const BlogCard = ({ post }) => {
    return (
      <div className="blog-card-three" style={{ "--accent-color": post.accentColor }}>
        <div className="blog-card-three__bg"></div>
        <div className="blog-card-three__image">
          <ExportedImage
            unoptimized={true}
            src={post.image}
            alt={post.title}
            width={370}
            height={270}
          />
          <div className="blog-card-three__image__layer-wrapper">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="blog-card-three__image__layer"
                style={{ backgroundImage: `url(${post.image})` }}
              ></div>
            ))}
          </div>
          <Link href={post.link} className="blog-card-three__image__link">
            <span className="sr-only">{post.title}</span>
          </Link>
        </div>
        <div className="blog-card-three__content">
          <div className="blog-card-three__content__top">
            <Link href={post.link} className="blog-card-three__category">
              {post.category}
            </Link>
            <div className="blog-card-three__date">{post.date}</div>
          </div>
          <h3 className="blog-card-three__title">
            <Link href={post.link}>{post.title}</Link>
          </h3>
        </div>
      </div>
    );
  };
 
  return (
    <section className="blog-three">
      <div className="container">
        <div className="sec-title text-center">
        <h6 className="sec-title__tagline">الـــمدونة</h6>
          <h3 className="sec-title__title">
          اطـــلع عـــلى آخر الـــمواضـــيع
          </h3>
        </div>
        <Slider {...settings}>
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .blog-card-three {
          padding: 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }
 
        .blog-card-three__image {
          position: relative;
          width: 100%;
          height: auto;
        }
 
        .blog-card-three__content {
          padding: 10px;
          text-align: center;
        }
        .blog-card-three__title a{
          
          text-align: right !important;
        }
 
        .blog-card-three__image img {
          border-radius: 10px;
        }
 
        /* Slider Arrows and Dots Customization */
        .slick-prev:before, .slick-next:before {
          color: #000;
        }
      `}</style>
    </section>
  );
};
 
export default BlogThree;
// import ExportedImage from "next-image-export-optimizer";
// import Link from "next/link";

// const BlogThree = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       category: "اقرأ المزيد",
//       date: "١٥ يناير ٢٠٢٤",
//       title: "مبادرة فصيح",
//       image: "/images/blog-3-1.png",
//       link: "/newdetail1",
//       author: {
//         name: "Wade Warren",
//         designation: "CEO",
//         image: "/images/blog-3-author-1.png",
//       },
//       accentColor: "#F25334",
//     },
//     {
//       id: 2,
//       category: "اقرأ المزيد",
//       date: "٢٧ يونيو ٢٠٢٤",
//       title: "خطوات التسجيل في قرة",
//       image: "/images/blog-3-22.png",
//       link: "/newdetail2",
//       author: {
//         name: "Darlene Robertson",
//         designation: "Art Teacher",
//         image: "/images/blog-3-author-2.png",
//       },
//       accentColor: "#2390FF",
//     },
//     {
//       id: 3,
//       category: "اقرأ المزيد",
//       date: "٢ أكتوبر ٢٠٢٤",
//       title: "تطور اللغة",
//       image: "/images/blog2.png",
//       link: "/newdetail3",
//       author: {
//         name: "Cody Fisher",
//         designation: "CEO",
//         image: "/images/blog-3-author-3.png",
//       },
//       accentColor: "#75C137",
//     },
//   ];

//   const BlogCard = ({ post }) => {
//     return (
//       <div className="col-12 col-md-6 col-lg-4 mb-4">
//         <div className="blog-card-three" style={{ "--accent-color": post.accentColor }}>
//           <div className="blog-card-three__bg"></div>
//           <div className="blog-card-three__image">
//             <ExportedImage
//               unoptimized={true}
//               src={post.image}
//               alt={post.title}
//               width={370}
//               height={270}
//             />
//             <div className="blog-card-three__image__layer-wrapper">
//               {[1, 2, 3, 4].map((_, index) => (
//                 <div
//                   key={index}
//                   className="blog-card-three__image__layer"
//                   style={{ backgroundImage: `url(${post.image})` }}
//                 ></div>
//               ))}
//             </div>
//             <Link href={post.link} className="blog-card-three__image__link">
//               <span className="sr-only">{post.title}</span>
//             </Link>
//           </div>
//           <div className="blog-card-three__content">
//             <div className="blog-card-three__content__top">
//               <Link href={post.link} className="blog-card-three__category">
//                 {post.category}
//               </Link>
//               <div className="blog-card-three__date">{post.date}</div>
//             </div>
//             <h3 className="blog-card-three__title">
//               <Link href={post.link}>{post.title}</Link>
//             </h3>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="blog-three">
//       <div className="container">
//         <div className="sec-title text-center">
          // <h6 className="sec-title__tagline">الـــمدونة</h6>
          // <h3 className="sec-title__title">
          // اطـــلع عـــلى آخر الـــمواضـــيع
          // </h3>
//           {/* <h3 className="sec-title__title">
//             اطلع على آخر الأخبار
//             <br /> والتحديثات والمقالات
//           </h3> */}
//         </div>
//         <div className="row">
//           {blogPosts.map((post) => (
//             <BlogCard key={post.id} post={post} />
//           ))}
//         </div>
//       </div>
//       <style jsx>{`
//         .blog-card-three {
//           position: relative;
//           padding: 20px;
//           background-color: #fff;
//           border-radius: 10px;
//           box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//         }

//         .blog-card-three__image {
//           position: relative;
//           width: 100%;
//           height: auto;
//         }

//         .blog-card-three__image img {
//           border-radius: 10px;
//         }

//         .blog-card-three__content {
//           padding: 10px;
//           text-align: center;
//         }

//         /* Additional Styles (optional) */
//         @media screen and (max-width: 576px) {
//           /* Small screens (mobile) */
//           .blog-card-three {
//             margin-bottom: 20px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default BlogThree;


// import ExportedImage from "next-image-export-optimizer";
// import Link from "next/link";

// const BlogThree = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       category: "اقرأ المزيد",
//       date: "  ١٥ يناير ٢٠٢٤",
//       title: "مبادرة فصيح",
//       image: "/images/blog-3-1.jpg",
//       link: "/newdetail1",
//       author: {
//         name: "Wade Warren",
//         designation: "CEO",
//         image: "/images/blog-3-author-1.png",
//       },
//       accentColor: "#F25334",
//     },
//     {
//       id: 2,
//       category: "اقرأ المزيد",
//       date: "٢٧ يونيو ٢٠٢٤",
//       title: "خطوات التسجيل في قرة",
//       image: "/images/blog-3-2.png",
//       link: "/newdetail2",
//       author: {
//         name: "Darlene Robertson",
//         designation: "Art Teacher",
//         image: "/images/blog-3-author-2.png",
//       },
//       accentColor: "#2390FF",
//     },
//     {
//       id: 3,
//       category: "اقرأ المزيد",
//       date: "٢ أكتوبر ٢٠٢٤",
//       title: "تطور اللغة",
//       image: "/images/blog2.png",
//       link: "/newdetail3",
//       author: {
//         name: "Cody Fisher",
//         designation: "CEO",
//         image: "/images/blog-3-author-3.png",
//       },
//       accentColor: "#75C137",
//     },
//   ];

//   const BlogCard = ({ post, index, totalPosts }) => {
//     const isCenterCard = index === Math.floor(totalPosts / 2); // Detect center card
//     return (
//       <div
//         className="item"
//         style={{
//           margin: isCenterCard ? "0 40px" : "0 20px", // Add extra margin for center card
//           width: "360px", // Increased width from 320px to 360px
//         }}
//       >
//         <div
//           className="blog-card-three"
//           style={{ "--accent-color": post.accentColor }}
//         >
//           <div className="blog-card-three__bg"></div>
//           <div className="blog-card-three__image">
//             <ExportedImage
//               unoptimized={true}
//               src={post.image}
//               alt={post.title}
//               width={370}
//               height={270} // Updated image dimensions
//             />
//             <div className="blog-card-three__image__layer-wrapper">
//               {[1, 2, 3, 4].map((_, index) => (
//                 <div
//                   key={index}
//                   className="blog-card-three__image__layer"
//                   style={{ backgroundImage: `url(${post.image})` }}
//                 ></div>
//               ))}
//             </div>
//             <Link href={post.link} className="blog-card-three__image__link">
//               <span className="sr-only">{post.title}</span>
//             </Link>
//           </div>
//           <div className="blog-card-three__content">
//             <div className="blog-card-three__content__top">
//               <Link href={post.link} className="blog-card-three__category">
//                 {post.category}
//               </Link>
//               <div className="blog-card-three__date">{post.date}</div>
//             </div>
//             <h3 className="blog-card-three__title">
//               <Link href={post.link}>{post.title}</Link>
//             </h3>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="blog-three">
//       <div className="blog-three__shape-right">
//         <ExportedImage
//           unoptimized={true}
//           src="/images/blog-3-shape-1.png"
//           alt="shape"
//           width={200}
//           height={200}
//         />
//       </div>
//       <div className="blog-three__shape-left">
//         <ExportedImage
//           unoptimized={true}
//           src="/images/blog-3-shape-2.png"
//           alt="shape"
//           width={200}
//           height={200}
//         />
//       </div>
//       <div className="container">
//         <div className="sec-title text-center">
//           <h6 className="sec-title__tagline">المدونة</h6>
//           <h3 className="sec-title__title">
//             اطلع على آخر الأخبار
//             <br /> والتحديثات والمقالات
//           </h3>
//         </div>
//         <div
//           className="blog-three__carousel"
//           style={{ display: "flex", flexDirection: "row", overflowX: "hidden" }}
//         >
//           {blogPosts.map((post, index) => (
//             <BlogCard
//               key={post.id}
//               post={post}
//               index={index}
//               totalPosts={blogPosts.length}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogThree;

// import ExportedImage from "next-image-export-optimizer";
// import Link from "next/link";

// const BlogCard = ({ post, index, totalPosts }) => {
//   const isCenterCard = index === Math.floor(totalPosts / 2); // Detect center card
//   return (
//     <div
//       className="item"
//       style={{
//         margin: isCenterCard ? "0 40px" : "0 20px", // Add extra margin for center card
//         width: "360px", // Increased width from 320px to 360px
//       }}
//     >
//       <div
//         className="blog-card-three"
//         style={{ "--accent-color": post.accentColor }}
//       >
//         <div className="blog-card-three__bg"></div>
//         <div className="blog-card-three__image">
//           <ExportedImage
//             unoptimized={true}
//             src={post.image}
//             alt={post.title}
//             width={370}
//             height={270} // Updated image dimensions
//           />
//           <div className="blog-card-three__image__layer-wrapper">
//             {[1, 2, 3, 4].map((_, index) => (
//               <div
//                 key={index}
//                 className="blog-card-three__image__layer"
//                 style={{ backgroundImage: `url(${post.image})` }}
//               ></div>
//             ))}
//           </div>
//           <Link
//             href="/blog-details-left"
//             className="blog-card-three__image__link"
//           >
//             <span className="sr-only">{post.title}</span>
//           </Link>
//         </div>
//         <div className="blog-card-three__content">
//           <div className="blog-card-three__content__top">
//             <Link href="/newdetail1" className="blog-card-three__category">
//               {post.category}
//             </Link>
//             <div className="blog-card-three__date">{post.date}</div>
//           </div>
//           <h3 className="blog-card-three__title">
//             <Link href="/blog-details-left">{post.title}</Link>
//           </h3>
//           {/* <div className="blog-card-three__content__bottom">
//             <div className="blog-card-three__author">
//               <div className="blog-card-three__author__image">
//                 <ExportedImage
//                   unoptimized={true}
//                   src={post.author.image}
//                   alt={post.author.name}
//                   width={50}
//                   height={50}
//                 />
//               </div>
//               <div className="blog-card-three__author__content">
//                 <h4 className="blog-card-three__author__name">
//                   {post.author.name}
//                 </h4>
//                 <p className="blog-card-three__author__designation">
//                   {post.author.designation}
//                 </p>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// const BlogThree = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       category: "اقرأ المزيد",
//       date: "  ١٥ يناير ٢٠٢٤",
//       title: "مبادرة فصيح",
//       image: "/images/blog-3-1.jpg",
//       author: {
//         name: "Wade Warren",
//         designation: "CEO",
//         image: "/images/blog-3-author-1.png",
//       },
//       accentColor: "#F25334",
//     },
//     {
//       id: 2,
//       category: "اقرأ المزيد",
//       date: "٢٧ يونيو ٢٠٢٤",
//       title: "خطوات التسجيل في قرة",
//       image: "/images/blog-3-2.jpg",
//       author: {
//         name: "Darlene Robertson",
//         designation: "Art Teacher",
//         image: "/images/blog-3-author-2.png",
//       },
//       accentColor: "#2390FF",
//     },
//     {
//       id: 3,
//       category: "اقرأ المزيد",
//       date: "28 Mar, 2023",
//       title: "Choose the best child care center for you!",
//       image: "/images/blog-3-3.jpg",
//       author: {
//         name: "Cody Fisher",
//         designation: "CEO",
//         image: "/images/blog-3-author-3.png",
//       },
//       accentColor: "#75C137",
//     },
//   ];

//   return (
//     <section className="blog-three">
//       <div className="blog-three__shape-right">
//         <ExportedImage
//           unoptimized={true}
//           src="/images/blog-3-shape-1.png"
//           alt="shape"
//           width={200}
//           height={200}
//         />
//       </div>
//       <div className="blog-three__shape-left">
//         <ExportedImage
//           unoptimized={true}
//           src="/images/blog-3-shape-2.png"
//           alt="shape"
//           width={200}
//           height={200}
//         />
//       </div>
//       <div className="container">
//         <div className="sec-title text-center">
//           <h6 className="sec-title__tagline">المدونة</h6>
//           <h3 className="sec-title__title">
//             اطلع على آخر الأخبار
//             <br /> والتحديثات والمقالات
//           </h3>
//         </div>
//         <div
//           className="blog-three__carousel"
//           style={{ display: "flex", flexDirection: "row", overflowX: "hidden" }}
//         >
//           {blogPosts.map((post, index) => (
//             <BlogCard
//               key={post.id}
//               post={post}
//               index={index}
//               totalPosts={blogPosts.length}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogThree;

