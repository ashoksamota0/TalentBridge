// import { useContext, useRef } from 'react'
// import { assets } from '../assets/assets'
// import { AppContext } from '../context/AppContext'

// const Hero = () => {

//     const { setSearchFilter, setIsSearched } = useContext(AppContext)

//     const titleRef = useRef(null)
//     const locationRef = useRef(null)

//     const onSearch = () => {
//         setSearchFilter({
//             title: titleRef.current.value,
//             location: locationRef.current.value
//         })
//         setIsSearched(true)
//     }

//     return (
//         <div className='container 2xl:px-20 mx-auto my-10'>
//             <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
//                 <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h2>
//                 <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
//                 <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
//                     <div className='flex items-center'>
//                         <img className='h-4 sm:h-5' src={assets.search_icon} alt="" />
//                         <input type="text"
//                             placeholder='Search for jobs'
//                             className='max-sm:text-xs p-2 rounded outline-none w-full'
//                             ref={titleRef}
//                         />
//                     </div>
//                     <div className='flex items-center'>
//                         <img className='h-4 sm:h-5' src={assets.location_icon} alt="" />
//                         <input type="text"
//                             placeholder='Location'
//                             className='max-sm:text-xs p-2 rounded outline-none w-full'
//                             ref={locationRef}
//                         />
//                     </div>
//                     <button onClick={onSearch} className='bg-blue-600 px-6 py-2 rounded text-white m-1'>Search</button>
//                 </div>
//             </div>

//             <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
//                 <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
//                     <p className='font-medium'>Trusted by</p>
//                     <img className='h-6' src={assets.microsoft_logo} alt="" />
//                     <img className='h-6' src={assets.walmart_logo} alt="" />
//                     <img className='h-6' src={assets.accenture_logo} alt="" />
//                     <img className='h-6' src={assets.samsung_logo} alt="" />
//                     <img className='h-6' src={assets.amazon_logo} alt="" />
//                     <img className='h-6' src={assets.adobe_logo} alt="" />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Hero

import { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });

    setIsSearched(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 mb-2">

      {/* ================= HERO SECTION ================= */}

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 border border-emerald-100">

        {/* Background decorative glow */}

        <div className="absolute -top-28 -right-20 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>


        <div className="relative grid lg:grid-cols-2 gap-4 items-center px-6 sm:px-10 lg:px-12 py-7 lg:py-8">


          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">

              <span>✦</span>

              10,000+ Opportunities

            </div>


            {/* Heading */}

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-slate-900 leading-[1.05] mb-4">

              Over{" "}

              <span className="text-emerald-600">
                10,000+
              </span>{" "}

              jobs

              <br />

              to apply

            </h1>


            {/* Description */}

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-6">

              Explore top job opportunities, connect with leading companies, and
              move one step closer to your goals!

            </p>


            {/* ================================================= */}
            {/* SEARCH BAR */}
            {/* ================================================= */}

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-2 max-w-2xl">

              <div className="flex flex-col sm:flex-row items-stretch gap-1.5">


                {/* Job title */}

                <div className="flex items-center gap-3 px-3 sm:px-4 py-2 flex-1 border-b sm:border-b-0 sm:border-r border-gray-200">

                  <img
                    className="w-5 h-5 opacity-60"
                    src={assets.search_icon}
                    alt=""
                  />

                  <input
                    type="text"
                    placeholder="Search for jobs"
                    className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400"
                    ref={titleRef}
                  />

                </div>


                {/* Location */}

                <div className="flex items-center gap-3 px-3 sm:px-4 py-2 flex-1">

                  <img
                    className="w-5 h-5 opacity-60"
                    src={assets.location_icon}
                    alt=""
                  />

                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400"
                    ref={locationRef}
                  />

                </div>


                {/* Search button */}

                <button
                  onClick={onSearch}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-7 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Search
                  <span>→</span>
                </button>

              </div>

            </div>


            {/* ================================================= */}
            {/* TRENDING */}
            {/* ================================================= */}

            <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">

              <span className="font-medium text-slate-600 mr-1">
                Trending:
              </span>


              <span className="bg-white border border-emerald-100 text-slate-600 px-4 py-1.5 rounded-full">
                React
              </span>


              <span className="bg-white border border-emerald-100 text-slate-600 px-4 py-1.5 rounded-full">
                Software Engineer
              </span>


              <span className="bg-white border border-emerald-100 text-slate-600 px-4 py-1.5 rounded-full">
                Marketing
              </span>


              <span className="bg-white border border-emerald-100 text-slate-600 px-4 py-1.5 rounded-full">
                Data Science
              </span>


              <span className="bg-white border border-emerald-100 text-slate-600 px-4 py-1.5 rounded-full">
                Remote
              </span>

            </div>

          </div>


          {/* ================================================= */}
          {/* RIGHT VISUAL */}
          {/* ================================================= */}

          <div className="hidden lg:flex relative justify-center items-center min-h-[290px]">

            <div className="relative w-[380px] h-[290px]">


              {/* ================= GREEN BACKGROUND CIRCLES ================= */}

              <div className="absolute top-10 left-20 w-56 h-56 bg-emerald-100/80 rounded-full"></div>

              <div className="absolute top-20 left-28 w-40 h-40 bg-emerald-200/40 rounded-full"></div>


              {/* ================= DECORATIVE DOTS ================= */}

              <div className="absolute top-8 left-14 w-3 h-3 bg-emerald-500 rounded-full"></div>

              <div className="absolute top-20 left-5 w-2 h-2 bg-emerald-400 rounded-full"></div>

              <div className="absolute top-32 right-8 w-3 h-3 bg-emerald-400 rounded-full"></div>

              <div className="absolute bottom-20 right-2 w-2 h-2 bg-emerald-500 rounded-full"></div>

              <div className="absolute bottom-14 left-28 w-2 h-2 bg-emerald-300 rounded-full"></div>


              {/* ================= DECORATIVE SPARKS ================= */}

              <div className="absolute top-24 left-1 text-emerald-500 text-xl font-bold">
                +
              </div>

              <div className="absolute top-5 right-20 text-emerald-500 text-lg">
                ✦
              </div>

              <div className="absolute bottom-24 right-12 text-emerald-400 text-xl">
                ✦
              </div>


              {/* ================= CURVED DASHED LINE ================= */}

              <div className="absolute top-12 right-16 w-20 h-16 border-t-2 border-r-2 border-dashed border-emerald-400 rounded-tr-full rotate-12 opacity-70"></div>


              {/* ================= ARROW ================= */}

              <div className="absolute top-3 right-4 text-emerald-600 text-2xl rotate-[-20deg]">
                ↗
              </div>


              {/* ================================================= */}
              {/* BUILD YOUR CAREER CARD */}
              {/* ================================================= */}

              <div className="absolute top-0 left-0 bg-white rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2.5 z-20">

                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                  📈
                </div>

                <div>

                  <p className="text-[10px] text-gray-500">
                    Build
                  </p>

                  <p className="text-xs font-semibold text-slate-800">
                    Your career
                  </p>

                </div>

              </div>


              {/* ================================================= */}
              {/* TOP COMPANIES CARD */}
              {/* ================================================= */}

              <div className="absolute top-12 right-0 bg-white rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2.5 z-20">

                <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center">
                  💼
                </div>

                <div>

                  <p className="text-[10px] text-gray-500">
                    Work with
                  </p>

                  <p className="text-xs font-semibold text-slate-800">
                    Top companies
                  </p>

                </div>

              </div>


              {/* ================================================= */}
              {/* LAPTOP */}
              {/* ================================================= */}

              <div className="absolute left-1/2 top-[92px] -translate-x-1/2 z-10">

                {/* Laptop screen */}

                <div className="relative w-[205px] h-[125px] bg-slate-800 rounded-xl border-[5px] border-slate-700 shadow-xl">

                  <div className="absolute inset-2.5 bg-emerald-100 rounded-lg flex items-center justify-center">

                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-3xl">
                      💼
                    </div>

                  </div>

                </div>


                {/* Laptop base */}

                <div className="w-[250px] h-3.5 bg-slate-600 rounded-full -ml-[22px] shadow-lg"></div>

              </div>


              {/* ================================================= */}
              {/* GROW SKILLS */}
              {/* ================================================= */}

              <div className="absolute bottom-[52px] right-[-5px] bg-white rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2 z-20">

                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                  📊
                </div>

                <p className="text-xs font-semibold text-slate-800">
                  Grow skills
                </p>

              </div>


              {/* ================================================= */}
              {/* MOTIVATIONAL TEXT */}
              {/* ================================================= */}

              <div className="absolute bottom-[4px] left-[28px] z-20 text-emerald-700 font-semibold text-xs leading-4 rotate-[-4deg]">

                <p>
                  A better
                </p>

                <p>
                  tomorrow starts
                </p>

                <p>
                  with you! ✦
                </p>

              </div>


              {/* ================================================= */}
              {/* SMALL LEAF / GREEN PATTERNS */}
              {/* ================================================= */}

              <div className="absolute bottom-7 left-[125px] w-9 h-4 bg-emerald-300 rounded-full rotate-[-25deg] opacity-70"></div>

              <div className="absolute bottom-10 left-[145px] w-7 h-3 bg-emerald-400 rounded-full rotate-[25deg] opacity-60"></div>

              <div className="absolute bottom-16 left-[165px] w-3 h-3 bg-emerald-500 rounded-full"></div>

            </div>

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* TRUSTED COMPANIES */}
      {/* ================================================= */}

      <div className="mt-5 grid lg:grid-cols-[1fr_auto] gap-4">


        {/* Companies */}

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-6 py-4">

          <div className="flex flex-col sm:flex-row items-center gap-5">

            <p className="font-semibold text-slate-800 whitespace-nowrap">
              Trusted by top companies
            </p>


            <div className="flex flex-wrap items-center justify-center gap-7 flex-1">

              <img
                className="h-6 object-contain"
                src={assets.microsoft_logo}
                alt="Microsoft"
              />

              <img
                className="h-6 object-contain"
                src={assets.walmart_logo}
                alt="Walmart"
              />

              <img
                className="h-6 object-contain"
                src={assets.accenture_logo}
                alt="Accenture"
              />

              <img
                className="h-6 object-contain"
                src={assets.samsung_logo}
                alt="Samsung"
              />

              <img
                className="h-6 object-contain"
                src={assets.amazon_logo}
                alt="Amazon"
              />

              <img
                className="h-6 object-contain"
                src={assets.adobe_logo}
                alt="Adobe"
              />

            </div>

          </div>

        </div>


        {/* Job seekers card */}

        <div className="hidden lg:flex bg-slate-50 border border-gray-200 rounded-2xl px-5 py-3.5 items-center gap-4 min-w-[220px]">

          <div className="flex -space-x-3">

            <div className="w-9 h-9 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-sm">
              👨
            </div>

            <div className="w-9 h-9 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-sm">
              👩
            </div>

            <div className="w-9 h-9 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-sm">
              👨
            </div>

            <div className="w-9 h-9 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-sm">
              +
            </div>

          </div>


          <p className="text-xs font-semibold text-slate-700 leading-4">
            Join thousands of
            <br />
            job seekers
          </p>

        </div>

      </div>

    </div>
  );
};

export default Hero;