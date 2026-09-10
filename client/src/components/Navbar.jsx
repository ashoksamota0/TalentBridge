// import { useContext } from 'react'
// import { assets } from '../assets/assets'
// import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const Navbar = () => {

//     const { openSignIn } = useClerk()
//     const { user } = useUser()

//     const navigate = useNavigate()

//     const { setShowRecruiterLogin } = useContext(AppContext)

//     return (
//         <div className='shadow py-4'>
//             <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
//                 <img onClick={() => navigate('/')} className='cursor-pointer' src={assets.logo} alt="" />
//                 {
//                     user
//                         ? <div className='flex items-center gap-3'>
//                             <Link to={'/applications'}>Applied Jobs</Link>
//                             <p>|</p>
//                             <p className='max-sm:hidden'>Hi, {user.firstName + " " + user.lastName}</p>
//                             <UserButton />
//                         </div>
//                         : <div className='flex gap-4 max-sm:text-xs'>
//                             <button onClick={e => setShowRecruiterLogin(true)} className='text-gray-600'>Recruiter Login</button>
//                             <button onClick={e => openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
//                         </div>
//                 }

//             </div>
//         </div>
//     )
// }

// export default Navbar

// import { useContext } from "react";
// import { assets } from "../assets/assets";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import { Link, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const Navbar = () => {
//   const { openSignIn } = useClerk();
//   const { user } = useUser();

//   const navigate = useNavigate();

//   const { setShowRecruiterLogin } = useContext(AppContext);

//   return (
//     <div className="shadow-sm py-4 bg-white">
//       <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
//         {/* Logo */}

//         <img
//           onClick={() => navigate("/")}
//           className="cursor-pointer"
//           src={assets.logo}
//           alt=""
//         />

//         {user ? (
//           /* ================= LOGGED IN ================= */

//           <div className="flex items-center gap-3">
//             <Link
//               to={"/applications"}
//               className="text-gray-600 hover:text-emerald-600 transition"
//             >
//               Applied Jobs
//             </Link>

//             <p className="text-gray-300">|</p>

//             <p className="max-sm:hidden text-gray-600">
//               Hi, {user.firstName + " " + user.lastName}
//             </p>

//             <UserButton />
//           </div>
//         ) : (
//           /* ================= LOGGED OUT ================= */

//           <div className="flex items-center gap-5 max-sm:text-xs">
//             <button
//               onClick={() => setShowRecruiterLogin(true)}
//               className="
//                                     text-gray-600
//                                     hover:text-emerald-600
//                                     transition
//                                 "
//             >
//               Recruiter Login
//             </button>

//             <button
//               onClick={() => openSignIn()}
//               className="
//                                     bg-emerald-600
//                                     hover:bg-emerald-700
//                                     text-white
//                                     px-6
//                                     sm:px-9
//                                     py-2
//                                     rounded-full
//                                     transition-all
//                                     duration-200
//                                 "
//             >
//               Login
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate = useNavigate();

  const { setShowRecruiterLogin } = useContext(AppContext);

  return (
    <div className="shadow-sm py-4 bg-white">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer"
          src={assets.logo}
          alt=""
        />

        {user ? (
          <div className="flex items-center gap-3">
            <Link
              to={"/applications"}
              className="hover:text-emerald-600 transition"
            >
              Applied Jobs
            </Link>

            <p className="text-gray-300">|</p>

            <p className="max-sm:hidden text-gray-600">
              Hi, {user.firstName + " " + user.lastName}
            </p>

            <UserButton />
          </div>
        ) : (
          <div className="flex items-center gap-3 max-sm:text-xs">
            {/* Employer Login */}
            <button
              onClick={() => setShowRecruiterLogin(true)}
              className="
                                        text-emerald-700
                                        bg-emerald-50
                                        border border-emerald-200
                                        hover:bg-emerald-100
                                        px-4 sm:px-5
                                        py-2
                                        rounded-full
                                        font-medium
                                        transition-all
                                        duration-200
                                    "
            >
              Employer Login
            </button>

            {/* Candidate Login */}
            <button
              onClick={() => openSignIn()}
              className="
                                        bg-emerald-600
                                        hover:bg-emerald-700
                                        text-white
                                        px-4 sm:px-6
                                        py-2
                                        rounded-full
                                        font-medium
                                        transition-all
                                        duration-200
                                    "
            >
              Candidate Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
