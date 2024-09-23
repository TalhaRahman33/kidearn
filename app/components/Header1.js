// "use client";
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation'; // Change to next/navigation

// const Header1 = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const [navbarScrolled, setNavbarScrolled] = useState(false);
//   const [isClient, setIsClient] = useState(false);
//   const router = useRouter(); // Get the router object from Next.js App Router

//   const toggleNav = () => setNavOpen(!navOpen);

//   // Handle scroll event to change the navbar background
//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setNavbarScrolled(true);
//     } else {
//       setNavbarScrolled(false);
//     }
//   };

//   useEffect(() => {
//     setIsClient(true); // Set client-side rendering flag
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Ensure that the component renders only on the client side
//   if (!isClient) return null;

//   return (
//     <>
//       <style jsx>{`
//         /* Header styles */
//         .navbar {
//           background-color: white;
//           transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//           padding: 1rem;
//           z-index: 1000;
//           width: 100%;
//         }

//         .navbar-scrolled {
//           background-color: white;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//         }

//         .navbar-brand {
//           font-weight: bold;
//           color: #333;
//         }

//         .nav-link {
//           color: #333;
//           margin-right: 1rem;
//         }

//         .navbar-toggler {
//           border: none;
//           outline: none;
//           background: transparent;
//         }

//         .menu-icon,
//         .close-icon {
//           display: inline-block;
//           width: 30px;
//           height: 3px;
//           background-color: #333;
//           position: relative;
//           transition: 0.3s;
//         }

//         .menu-icon:before,
//         .menu-icon:after,
//         .close-icon:before,
//         .close-icon:after {
//           content: '';
//           position: absolute;
//           width: 30px;
//           height: 3px;
//           background-color: #333;
//           transition: 0.3s;
//         }

//         .menu-icon:before {
//           top: -10px;
//         }

//         .menu-icon:after {
//           top: 10px;
//         }

//         .close-icon:before {
//           top: 0;
//           transform: rotate(45deg);
//         }

//         .close-icon:after {
//           top: 0;
//           transform: rotate(-45deg);
//         }

//         .nav-menu {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           background-color: white;
//           position: absolute;
//           top: 100%;
//           right: 0;
//           left: 0;
//           height: ${navOpen ? '300px' : '0'};
//           overflow: hidden;
//           transition: height 0.3s ease-in-out;
//           z-index: 999;
//         }

//         .nav-menu a {
//           margin-bottom: 1rem;
//         }

//         /* Show nav links inline on larger screens */
//         @media (min-width: 992px) {
//           .nav-menu {
//             height: auto;
//             position: relative;
//             display: flex;
//             flex-direction: row;
//             justify-content: flex-end;
//             align-items: center;
//             height: auto;
//           }

//           .navbar-toggler {
//             display: none;
//           }

//           .nav-item {
//             margin-right: 1rem;
//           }
//         }
//       `}</style>

//       <header className={`navbar ${navbarScrolled ? 'navbar-scrolled' : ''} fixed-top`}>
//         <div className="container">
//           <Link href="/" legacyBehavior>
//             <a className="navbar-brand">Logo</a>
//           </Link>

//           {/* Toggler for mobile */}
//           <button className="navbar-toggler" type="button" onClick={toggleNav}>
//             <span className={navOpen ? 'close-icon' : 'menu-icon'}></span>
//           </button>

//           {/* Navigation Links */}
//           <div className="nav-menu">
//             <Link href="/" legacyBehavior>
//               <a className="nav-link">Home</a>
//             </Link>
//             <Link href="/about" legacyBehavior>
//               <a className="nav-link">About</a>
//             </Link>
//             <Link href="/services" legacyBehavior>
//               <a className="nav-link">Services</a>
//             </Link>
//             <Link href="/projects" legacyBehavior>
//               <a className="nav-link">Projects</a>
//             </Link>
//             <Link href="/blog" legacyBehavior>
//               <a className="nav-link">Blog</a>
//             </Link>
//             <Link href="/contact" legacyBehavior>
//               <a className="nav-link">Contact</a>
//             </Link>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header1;




// "use client";
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation'; // Correct for Next.js 13 App Router

// const Header1 = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const [navbarScrolled, setNavbarScrolled] = useState(false);
//   const [isClient, setIsClient] = useState(false);
//   const router = useRouter(); // For navigation purposes if needed later

//   const toggleNav = () => setNavOpen(!navOpen);

//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setNavbarScrolled(true);
//     } else {
//       setNavbarScrolled(false);
//     }
//   };

//   useEffect(() => {
//     setIsClient(true);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   if (!isClient) return null;

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
//         navbarScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link href="/" legacyBehavior>
//           <a className="text-2xl font-bold text-gray-800">Logo</a>
//         </Link>

//         {/* Mobile Toggle Button */}
//         <button
//           onClick={toggleNav}
//           className="lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-500"
//         >
//           <div className={`${navOpen ? 'hidden' : 'block'}`}>
//             <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
//             <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
//             <span className="block w-6 h-1 bg-gray-800"></span>
//           </div>
//           <div className={`${navOpen ? 'block' : 'hidden'}`}>
//             <span className="block w-6 h-1 bg-gray-800 transform rotate-45"></span>
//             <span className="block w-6 h-1 bg-gray-800 transform -rotate-45"></span>
//           </div>
//         </button>

//         {/* Nav Menu */}
//         <nav
//           className={`absolute lg:relative top-full lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:flex lg:items-center lg:justify-end lg:space-x-6 overflow-hidden transition-all duration-300 ease-in-out ${
//             navOpen ? 'max-h-96' : 'max-h-0 lg:max-h-full'
//           }`}
//         >
//           <Link href="/" legacyBehavior>
//             <a className="block px-4 py-2 text-gray-800 hover:text-red-500">Home</a>
//           </Link>
//           <Link href="/about" legacyBehavior>
//             <a className="block px-4 py-2 text-gray-800 hover:text-red-500">About</a>
//           </Link>
//           <Link href="/services" legacyBehavior>
//             <a className="block px-4 py-2 text-gray-800 hover:text-red-500">Services</a>
//           </Link>
//           <Link href="/projects" legacyBehavior>
//             <a className="block px-4 py-2 text-gray-800 hover:text-red-500">Projects</a>
//           </Link>
//           <Link href="/blog" legacyBehavior>
//             <a className="block px-4 py-2 text-gray-800 hover:text-red-500">Blog</a>
//           </Link>
//           <Link href="/contact" legacyBehavior>
//             <a className="block px-4 py-2 text-gray-800 hover:text-red-500">Contact</a>
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header1;



"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header1 = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  // Handle scroll event to change the navbar background
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${
        navbarScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold text-gray-800">
          <Link href="/">Logo</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="focus:outline-none text-gray-800"
          >
            {navOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <nav className="hidden md:flex space-x-6 text-gray-800">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-600">
            Services
          </Link>
          <Link href="/projects" className="hover:text-gray-600">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-gray-600">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation Menu */}
        {navOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
            <ul className="flex flex-col space-y-4 p-4 text-gray-800">
              <li>
                <Link href="/" onClick={() => setNavOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setNavOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => setNavOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={() => setNavOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => setNavOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setNavOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header1;
