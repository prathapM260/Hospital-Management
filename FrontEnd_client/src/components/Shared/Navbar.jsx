// import { useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom';

// function Navbar() {

//     const navLinkStyle = ({ isActive }) => {
//         return {
//           fontWeight: isActive ? '600' : '400',
//         };
//       };
//     const navigate = useNavigate();
//     const handleClick = ()=>{

//         navigate('/sign-in');

//     }

//     const [isMobNav , setIsMobNav] = useState(false);
//     const handleNav = ()=>{
//         setIsMobNav(!isMobNav);
//     }
    

//   return (
    
//     // <div className='bg-[#eef9fc] h-[80px] w-full fixed z-20'>
//     <div className="bg-gradient-to-r from-[#def3fb] to-[#E0F7FA] h-[80px] w-full fixed z-20 shadow-md">

//         <div className='flex max-w-7xl items-center justify-between m-auto h-full'>
//             <div className='text-5xl'>HMS</div>
//             <div className=' justify-center items-center gap-6 text-xl hidden md:flex'>
//                 <NavLink style={navLinkStyle} to="/">Home</NavLink>
//                 <NavLink style={navLinkStyle} to="/appointment">Appointment</NavLink>
//                 <NavLink style={navLinkStyle} to="/about-us">About Us</NavLink>
//                 <NavLink style={navLinkStyle} to="/contact-us">Contact Us</NavLink>
//                 <button className='bg-slate-900 text-white p-1 pe-2 ps-2 rounded-full hover:scale-110 hover:bg-slate-800 duration-300 active:scale-90' onClick={handleClick}>LogIn</button>
//             </div>
//             <svg  className={isMobNav?'size-10 md:hidden cursor-pointer z-50 text-white':'size-10 md:hidden cursor-pointer z-50'} onClick={handleNav} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
//             <div className={!isMobNav?'hidden':'flex flex-col absolute top-0 left-0 h-screen w-screen text-white text-xl justify-center items-center bg-black md:hidden '}>
//                 <NavLink className="py-6 text-3xl"  style={navLinkStyle} to="/">Home</NavLink>
//                 <NavLink className="py-6 text-3xl" style={navLinkStyle} to="/appointment">Appointment</NavLink>
//                 <NavLink className="py-6 text-3xl"  style={navLinkStyle} to="/about-us">About Us</NavLink>
//                 <NavLink className="py-6 text-3xl"  style={navLinkStyle} to="/contact-us">Contact Us</NavLink>
//                 <NavLink className="py-6 text-3xl"  style={navLinkStyle} to="/sign-in">SignIn</NavLink>
                
//             </div>
            
//         </div>
//     </div>
//   )
// }

// export default Navbar



// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const [isMobNav, setIsMobNav] = useState(false);

//   // Function to toggle mobile navigation
//   const handleNav = () => {
//     setIsMobNav(!isMobNav);
//   };

//   // Function to close mobile navigation when a link is clicked
//   const handleCloseNav = () => {
//     setIsMobNav(false);
//   };

//   // Active link styling
//   const navLinkStyle = ({ isActive }) => ({
//     fontWeight: isActive ? "600" : "400",
//     color: isActive ? "#007bff" : "inherit", // Highlight active link
//   });

//   return (
//     <div className="bg-gradient-to-r from-[#def3fb] to-[#E0F7FA] h-[80px] w-full fixed z-20 shadow-md">
//       <div className="flex max-w-7xl items-center justify-between m-auto h-full px-4">
//         <div className="text-5xl font-bold">HMS</div>

//         {/* Desktop Navigation */}
//         <div className="justify-center items-center gap-6 text-xl hidden md:flex">
//           <NavLink style={navLinkStyle} to="/">Home</NavLink>
//           <NavLink style={navLinkStyle} to="/appointment">Appointment</NavLink>
//           <NavLink style={navLinkStyle} to="/about-us">About Us</NavLink>
//           <NavLink style={navLinkStyle} to="/contact-us">Contact Us</NavLink>
//           <button
//             className="bg-slate-900 text-white p-2 rounded-full hover:scale-110 hover:bg-slate-800 duration-300 active:scale-90"
//             onClick={() => navigate("/sign-in")}
//           >
//             Log In
//           </button>
//         </div>

//         {/* Mobile Menu Toggle Icon */}
//         <svg
//           className="size-10 md:hidden cursor-pointer z-50 text-gray-700"
//           onClick={handleNav}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//         >
//           <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
//         </svg>

//         {/* Mobile Navigation Menu */}
//         <div
//           className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-90 flex flex-col items-center justify-center text-white text-3xl transition-transform ${
//             isMobNav ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <NavLink className="py-4 cursor" style={navLinkStyle} to="/" onClick={handleCloseNav}>
//             Home
//           </NavLink>
//           <NavLink className="py-4 cursor" style={navLinkStyle} to="/appointment" onClick={handleCloseNav}>
//             Appointment
//           </NavLink>
//           <NavLink className="py-4 cursor" style={navLinkStyle} to="/about-us" onClick={handleCloseNav}>
//             About Us
//           </NavLink>
//           <NavLink className="py-4 cursor" style={navLinkStyle} to="/contact-us" onClick={handleCloseNav}>
//             Contact Us
//           </NavLink>
//           <NavLink className="py-4 cursor" style={navLinkStyle} to="/sign-in" onClick={handleCloseNav}>
//             Sign In
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;




import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isMobNav, setIsMobNav] = useState(false);

  // Function to toggle mobile navigation
  const handleNav = () => {
    setIsMobNav(!isMobNav);
  };

  // Function to close mobile navigation when a link is clicked
  const handleCloseNav = () => {
    setIsMobNav(false);
  };

  // Active link styling
  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "600" : "400",
    color: isActive ? "#007bff" : "inherit", // Highlight active link
  });

  return (
    <div className="bg-gradient-to-r from-[#def3fb] to-[#E0F7FA] h-[80px] w-full fixed z-20 shadow-md">
      <div className="flex max-w-7xl items-center justify-between m-auto h-full px-4">
        <div className="text-5xl font-bold">HMS</div>

        {/* Desktop Navigation */}
        <div className="justify-center items-center gap-6 text-xl hidden md:flex">
          <NavLink style={navLinkStyle} to="/">Home</NavLink>
          <NavLink style={navLinkStyle} to="/appointment">Appointment</NavLink>
          <NavLink style={navLinkStyle} to="/about-us">About Us</NavLink>
          <NavLink style={navLinkStyle} to="/contact-us">Contact Us</NavLink>
          <NavLink style={navLinkStyle} to="/admin">Admin</NavLink> {/* Admin Page Link */}
          <button
            className="bg-slate-900 text-white p-2 rounded-full hover:scale-110 hover:bg-slate-800 duration-300 active:scale-90"
            onClick={() => navigate("/sign-in")}
          >
            Log In
          </button>
        </div>

        {/* Mobile Menu Toggle Icon */}
        <svg
          className="size-10 md:hidden cursor-pointer z-50 text-gray-700"
          onClick={handleNav}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-90 flex flex-col items-center justify-center text-white text-3xl transition-transform ${
            isMobNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <NavLink className="py-4 cursor" style={navLinkStyle} to="/" onClick={handleCloseNav}>
            Home
          </NavLink>
          <NavLink className="py-4 cursor" style={navLinkStyle} to="/appointment" onClick={handleCloseNav}>
            Appointment
          </NavLink>
          <NavLink className="py-4 cursor" style={navLinkStyle} to="/about-us" onClick={handleCloseNav}>
            About Us
          </NavLink>
          <NavLink className="py-4 cursor" style={navLinkStyle} to="/contact-us" onClick={handleCloseNav}>
            Contact Us
          </NavLink>
          <NavLink className="py-4 cursor" style={navLinkStyle} to="/admin" onClick={handleCloseNav}>
            Admin
          </NavLink>
          <NavLink className="py-4 cursor" style={navLinkStyle} to="/sign-in" onClick={handleCloseNav}>
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
