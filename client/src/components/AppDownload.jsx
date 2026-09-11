// import { assets } from '../assets/assets'

// const AppDownload = () => {
//     return (
//         <div className='container px-4 2xl:px-20 mx-auto my-20'>
//             <div className='relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg'>
//                 <div>
//                     <h1 className='text-2xl sm:text-4xl font-bold mb-8 max-w-md'>Download Mobile App For Better Experience</h1>
//                     <div className='flex gap-4'>
//                         <a href="#" className='inline-block'>
//                             <img className='h-12' src={assets.play_store} alt="" />
//                         </a>
//                         <a href="#" className='inline-block'>
//                             <img className='h-12' src={assets.app_store} alt="" />
//                         </a>
//                     </div>
//                 </div>
//                 <img className='absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden' src={assets.app_main_img} alt="" />
//             </div>
//         </div>
//     )
// }

// export default AppDownload

// import { assets } from "../assets/assets";

// const AppDownload = () => {
//   return (
//     <div className="container px-4 2xl:px-20 mx-auto my-14 sm:my-16">

//       {/* Main App Section */}
//       <div
//         className="
//           relative
//           overflow-hidden
//           rounded-3xl
//           border border-emerald-100
//           bg-gradient-to-br
//           from-emerald-50
//           via-green-50
//           to-blue-50
//           px-6
//           sm:px-10
//           lg:px-14
//           pt-10
//           sm:pt-12
//           lg:pt-14
//         "
//       >

//         {/* Background Decorations */}
//         <div
//           className="
//             absolute
//             -top-32
//             right-1/3
//             w-80
//             h-80
//             bg-emerald-200/30
//             rounded-full
//             blur-3xl
//           "
//         ></div>

//         <div
//           className="
//             absolute
//             -bottom-40
//             left-1/3
//             w-96
//             h-96
//             bg-blue-200/20
//             rounded-full
//             blur-3xl
//           "
//         ></div>

//         <div
//           className="
//             absolute
//             top-16
//             right-10
//             w-3
//             h-3
//             bg-emerald-300
//             rounded-full
//           "
//         ></div>

//         <div
//           className="
//             absolute
//             top-28
//             right-20
//             w-2
//             h-2
//             bg-emerald-300
//             rounded-full
//           "
//         ></div>

//         {/* Main Content */}
//         <div
//           className="
//             relative
//             z-10
//             flex
//             flex-col
//             lg:flex-row
//             items-center
//             justify-between
//             min-h-[330px]
//           "
//         >

//           {/* ================= LEFT CONTENT ================= */}
//           <div className="w-full lg:w-[52%] pb-10 lg:pb-14">

//             {/* Badge */}
//             <div
//               className="
//                 inline-flex
//                 items-center
//                 gap-2
//                 bg-white/80
//                 border border-emerald-100
//                 text-emerald-700
//                 px-4
//                 py-2
//                 rounded-full
//                 text-sm
//                 font-medium
//                 mb-5
//                 shadow-sm
//               "
//             >
//               <span className="text-blue-500">✈</span>
//               Your Career Companion
//             </div>

//             {/* Heading */}
//             <h1
//               className="
//                 text-3xl
//                 sm:text-4xl
//                 lg:text-5xl
//                 font-bold
//                 text-slate-900
//                 leading-[1.1]
//                 max-w-2xl
//               "
//             >
//               Download Mobile App
//               <br />
//               For{" "}
//               <span className="text-emerald-600">
//                 Better Experience
//               </span>
//             </h1>

//             {/* Description */}
//             <p
//               className="
//                 text-slate-600
//                 text-sm
//                 sm:text-base
//                 leading-relaxed
//                 max-w-xl
//                 mt-5
//                 mb-7
//               "
//             >
//               Explore jobs, apply on the go, get real-time updates and
//               never miss an opportunity — all from the TalentBridge app.
//             </p>

//             {/* App Store Buttons */}
//             <div className="flex flex-wrap gap-3">

//               <a
//                 href="#"
//                 className="
//                   inline-block
//                   transition-all
//                   duration-200
//                   hover:-translate-y-1
//                   hover:shadow-lg
//                 "
//               >
//                 <img
//                   className="h-11 sm:h-12"
//                   src={assets.play_store}
//                   alt="Get it on Google Play"
//                 />
//               </a>

//               <a
//                 href="#"
//                 className="
//                   inline-block
//                   transition-all
//                   duration-200
//                   hover:-translate-y-1
//                   hover:shadow-lg
//                 "
//               >
//                 <img
//                   className="h-11 sm:h-12"
//                   src={assets.app_store}
//                   alt="Download on the App Store"
//                 />
//               </a>

//             </div>

//             {/* Feature Highlights */}
//             <div
//               className="
//                 grid
//                 grid-cols-2
//                 sm:grid-cols-4
//                 gap-5
//                 mt-9
//                 max-w-2xl
//               "
//             >

//               {/* Feature 1 */}
//               <div className="text-center sm:text-left">

//                 <div
//                   className="
//                     mx-auto
//                     sm:mx-0
//                     w-10
//                     h-10
//                     rounded-full
//                     bg-purple-100
//                     flex
//                     items-center
//                     justify-center
//                     text-purple-600
//                     text-lg
//                   "
//                 >
//                   ⚡
//                 </div>

//                 <p className="text-xs sm:text-sm font-medium text-slate-700 mt-2">
//                   Fast & Easy
//                   <br />
//                   Apply
//                 </p>

//               </div>

//               {/* Feature 2 */}
//               <div className="text-center sm:text-left">

//                 <div
//                   className="
//                     mx-auto
//                     sm:mx-0
//                     w-10
//                     h-10
//                     rounded-full
//                     bg-emerald-100
//                     flex
//                     items-center
//                     justify-center
//                     text-emerald-600
//                     text-lg
//                   "
//                 >
//                   ♟
//                 </div>

//                 <p className="text-xs sm:text-sm font-medium text-slate-700 mt-2">
//                   Real-time
//                   <br />
//                   Updates
//                 </p>

//               </div>

//               {/* Feature 3 */}
//               <div className="text-center sm:text-left">

//                 <div
//                   className="
//                     mx-auto
//                     sm:mx-0
//                     w-10
//                     h-10
//                     rounded-full
//                     bg-orange-100
//                     flex
//                     items-center
//                     justify-center
//                     text-orange-500
//                     text-lg
//                   "
//                 >
//                   💼
//                 </div>

//                 <p className="text-xs sm:text-sm font-medium text-slate-700 mt-2">
//                   Jobs On
//                   <br />
//                   The Go
//                 </p>

//               </div>

//               {/* Feature 4 */}
//               <div className="text-center sm:text-left">

//                 <div
//                   className="
//                     mx-auto
//                     sm:mx-0
//                     w-10
//                     h-10
//                     rounded-full
//                     bg-pink-100
//                     flex
//                     items-center
//                     justify-center
//                     text-pink-500
//                     text-lg
//                   "
//                 >
//                   ♥
//                 </div>

//                 <p className="text-xs sm:text-sm font-medium text-slate-700 mt-2">
//                   A Better
//                   <br />
//                   Career
//                 </p>

//               </div>

//             </div>

//             {/* Handwritten Style Message */}
//             <div
//               className="
//                 mt-7
//                 hidden
//                 sm:flex
//                 items-center
//                 gap-4
//               "
//             >
//               <p
//                 className="
//                   text-emerald-700
//                   text-sm
//                   font-medium
//                   italic
//                 "
//               >
//                 Big opportunities
//                 <br />
//                 are just a tap away!
//               </p>

//               <span className="text-2xl text-emerald-500">
//                 ↗
//               </span>
//             </div>

//           </div>

//           {/* ================= RIGHT CONTENT ================= */}
//           <div
//             className="
//               relative
//               w-full
//               lg:w-[48%]
//               h-[310px]
//               sm:h-[350px]
//               lg:h-[370px]
//               flex
//               items-end
//               justify-center
//             "
//           >

//             {/* Large Green Circle */}
//             <div
//               className="
//                 absolute
//                 bottom-0
//                 right-1/2
//                 translate-x-1/2
//                 w-64
//                 h-64
//                 sm:w-72
//                 sm:h-72
//                 lg:w-80
//                 lg:h-80
//                 rounded-full
//                 bg-emerald-100
//               "
//             ></div>

//             {/* Decorative Shape */}
//             <div
//               className="
//                 absolute
//                 bottom-0
//                 right-0
//                 w-48
//                 h-32
//                 bg-emerald-200/40
//                 rounded-tl-[100px]
//                 rounded-br-3xl
//               "
//             ></div>

//             {/* Woman */}
//             <img
//               className="
//                 relative
//                 z-10
//                 w-60
//                 sm:w-72
//                 lg:w-80
//                 object-contain
//               "
//               src={assets.app_main_img}
//               alt="TalentBridge App"
//             />

//             {/* ================= FLOATING CARD 1 ================= */}
//             <div
//               className="
//                 absolute
//                 z-20
//                 left-0
//                 sm:left-4
//                 lg:left-0
//                 top-8
//                 bg-white
//                 px-4
//                 py-3
//                 rounded-2xl
//                 shadow-lg
//                 border border-gray-100
//                 flex
//                 items-center
//                 gap-3
//               "
//             >

//               <div
//                 className="
//                   w-10
//                   h-10
//                   rounded-xl
//                   bg-emerald-50
//                   flex
//                   items-center
//                   justify-center
//                   text-emerald-600
//                   text-lg
//                 "
//               >
//                 💼
//               </div>

//               <div>
//                 <p className="text-[11px] text-gray-400">
//                   Discover
//                 </p>

//                 <p className="text-sm font-semibold text-slate-800">
//                   New Opportunities
//                 </p>
//               </div>

//             </div>

//             {/* ================= FLOATING CARD 2 ================= */}
//             <div
//               className="
//                 absolute
//                 z-20
//                 left-4
//                 sm:left-14
//                 lg:left-8
//                 top-32
//                 bg-white
//                 px-4
//                 py-3
//                 rounded-2xl
//                 shadow-lg
//                 border border-gray-100
//                 flex
//                 items-center
//                 gap-3
//               "
//             >

//               <div
//                 className="
//                   w-10
//                   h-10
//                   rounded-xl
//                   bg-blue-50
//                   flex
//                   items-center
//                   justify-center
//                   text-blue-500
//                   text-lg
//                 "
//               >
//                 🔔
//               </div>

//               <div>
//                 <p className="text-[11px] text-gray-400">
//                   Stay Updated
//                 </p>

//                 <p className="text-sm font-semibold text-slate-800">
//                   Real-time Alerts
//                 </p>
//               </div>

//             </div>

//             {/* ================= FLOATING CARD 3 ================= */}
//             <div
//               className="
//                 absolute
//                 z-20
//                 right-0
//                 sm:right-2
//                 lg:right-0
//                 top-48
//                 bg-white
//                 px-4
//                 py-3
//                 rounded-2xl
//                 shadow-lg
//                 border border-gray-100
//                 flex
//                 items-center
//                 gap-3
//               "
//             >

//               <div
//                 className="
//                   w-10
//                   h-10
//                   rounded-xl
//                   bg-pink-50
//                   flex
//                   items-center
//                   justify-center
//                   text-pink-500
//                   text-lg
//                 "
//               >
//                 ♥
//               </div>

//               <div>
//                 <p className="text-[11px] text-gray-400">
//                   Build
//                 </p>

//                 <p className="text-sm font-semibold text-slate-800">
//                   A Brighter Future
//                 </p>
//               </div>

//             </div>

//             {/* Small Decorative Dots */}
//             <div className="absolute bottom-14 left-10 grid grid-cols-4 gap-2 opacity-60">

//               <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
//               <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
//               <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
//               <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>

//               <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
//               <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
//               <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
//               <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>

//               <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
//               <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
//               <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
//               <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>

//             </div>

//             {/* Top Right Message */}
//             <div
//               className="
//                 absolute
//                 z-20
//                 right-2
//                 sm:right-8
//                 lg:right-4
//                 top-2
//                 text-right
//                 hidden
//                 sm:block
//               "
//             >
//               <p
//                 className="
//                   text-emerald-700
//                   text-sm
//                   font-medium
//                   italic
//                 "
//               >
//                 Same opportunities,
//                 <br />
//                 now closer to you!
//               </p>

//               <div className="text-emerald-500 text-xl mt-1">
//                 ↙
//               </div>
//             </div>

//             {/* Bottom Green Pill */}
//             <div
//               className="
//                 absolute
//                 z-20
//                 bottom-3
//                 right-2
//                 sm:right-6
//                 lg:right-2
//                 bg-emerald-600
//                 text-white
//                 px-5
//                 py-3
//                 rounded-full
//                 shadow-lg
//                 hidden
//                 sm:flex
//                 items-center
//                 gap-2
//               "
//             >
//               <span className="text-lg">✦</span>

//               <div>
//                 <p className="text-[10px] opacity-80">
//                   Your Career
//                 </p>

//                 <p className="text-sm font-medium">
//                   Anytime, Anywhere
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default AppDownload;

import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-14 sm:my-16">
      {/* Main App Section */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border border-emerald-100
          bg-gradient-to-br
          from-emerald-50
          via-green-50
          to-blue-50
          px-6
          sm:px-10
          lg:px-14
          pt-10
          sm:pt-12
          lg:pt-14
        "
      >
        {/* Background Decorations */}
        <div
          className="
            absolute
            -top-32
            right-1/3
            w-80
            h-80
            bg-emerald-200/30
            rounded-full
            blur-3xl
          "
        ></div>

        <div
          className="
            absolute
            -bottom-40
            left-1/3
            w-96
            h-96
            bg-blue-200/20
            rounded-full
            blur-3xl
          "
        ></div>

        <div
          className="
            absolute
            top-16
            right-10
            w-3
            h-3
            bg-emerald-300
            rounded-full
          "
        ></div>

        <div
          className="
            absolute
            top-28
            right-20
            w-2
            h-2
            bg-emerald-300
            rounded-full
          "
        ></div>

        {/* Main Content */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            min-h-[330px]
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-[52%] pb-10 lg:pb-14">
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-white/80
                border border-emerald-100
                text-emerald-700
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                mb-5
                shadow-sm
              "
            >
              <span className="text-blue-500">✈</span>
              Your Career Companion
            </div>

            {/* Heading */}
            <h1
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-slate-900
                leading-[1.1]
                max-w-2xl
              "
            >
              Download Mobile App
              <br />
              For <span className="text-emerald-600">Better Experience</span>
            </h1>

            {/* Description */}
            <p
              className="
                text-slate-600
                text-sm
                sm:text-base
                leading-relaxed
                max-w-xl
                mt-5
                mb-7
              "
            >
              Explore jobs, apply on the go, get real-time updates and never
              miss an opportunity — all from the TalentBridge app.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <img
                  className="h-11 sm:h-12"
                  src={assets.play_store}
                  alt="Get it on Google Play"
                />
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <img
                  className="h-11 sm:h-12"
                  src={assets.app_store}
                  alt="Download on the App Store"
                />
              </a>
            </div>

            {/* Feature Highlights */}
            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-4
                gap-5
                mt-9
                max-w-2xl
              "
            >
              {/* Feature 1 */}
              <div className="text-center sm:text-left">
                <div
                  className="
                    mx-auto
                    sm:mx-0
                    w-10
                    h-10
                    rounded-full
                    bg-purple-100
                    flex
                    items-center
                    justify-center
                    text-purple-600
                    text-lg
                  "
                >
                  ⚡
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-700 mt-2">
                  Fast & Easy
                  <br />
                  Apply
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center sm:text-left">
                <div
                  className="
                    mx-auto
                    sm:mx-0
                    w-10
                    h-10
                    rounded-full
                    bg-emerald-100
                    flex
                    items-center
                    justify-center
                    text-emerald-600
                    text-lg
                  "
                >
                  ♟
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-700 mt-2">
                  Real-time
                  <br />
                  Updates
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center sm:text-left">
                <div
                  className="
                    mx-auto
                    sm:mx-0
                    w-10
                    h-10
                    rounded-full
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                    text-orange-500
                    text-lg
                  "
                >
                  💼
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-700 mt-2">
                  Jobs On
                  <br />
                  The Go
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center sm:text-left">
                <div
                  className="
                    mx-auto
                    sm:mx-0
                    w-10
                    h-10
                    rounded-full
                    bg-pink-100
                    flex
                    items-center
                    justify-center
                    text-pink-500
                    text-lg
                  "
                >
                  ♥
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-700 mt-2">
                  A Better
                  <br />
                  Career
                </p>
              </div>
            </div>

            {/* Handwritten Style Message */}
            <div
              className="
                mt-7
                hidden
                sm:flex
                items-center
                gap-4
              "
            >
              <p
                className="
                  text-emerald-700
                  text-sm
                  font-medium
                  italic
                "
              >
                Big opportunities
                <br />
                are just a tap away!
              </p>

              <span className="text-2xl text-emerald-500">↗</span>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div
            className="
              relative
              w-full
              lg:w-[48%]
              h-[310px]
              sm:h-[350px]
              lg:h-[370px]
              flex
              items-end
              justify-center
            "
          >
            {/* Large Green Circle */}
            <div
              className="
                absolute
                bottom-0
                right-1/2
                translate-x-1/2
                w-64
                h-64
                sm:w-72
                sm:h-72
                lg:w-80
                lg:h-80
                rounded-full
                bg-emerald-100
              "
            ></div>

            {/* Decorative Shape */}
            <div
              className="
                absolute
                bottom-0
                right-0
                w-48
                h-32
                bg-emerald-200/40
                rounded-tl-[100px]
                rounded-br-3xl
              "
            ></div>

            {/* Woman */}
            <img
              className="
                relative
                z-10
                w-60
                sm:w-72
                lg:w-80
                object-contain
              "
              src={assets.app_main_img}
              alt="TalentBridge App"
            />

            {/* ================= FLOATING CARD 1 ================= */}
            <div
              className="
                absolute
                z-20
                left-0
                sm:left-4
                lg:left-0
                top-8
                bg-white
                px-4
                py-3
                rounded-2xl
                shadow-lg
                border border-gray-100
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-emerald-50
                  flex
                  items-center
                  justify-center
                  text-emerald-600
                  text-lg
                "
              >
                💼
              </div>

              <div>
                <p className="text-[11px] text-gray-400">Discover</p>

                <p className="text-sm font-semibold text-slate-800">
                  New Opportunities
                </p>
              </div>
            </div>

            {/* ================= FLOATING CARD 2 ================= */}
            <div
              className="
                absolute
                z-20
                left-4
                sm:left-14
                lg:left-8
                top-32
                bg-white
                px-4
                py-3
                rounded-2xl
                shadow-lg
                border border-gray-100
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-blue-50
                  flex
                  items-center
                  justify-center
                  text-blue-500
                  text-lg
                "
              >
                🔔
              </div>

              <div>
                <p className="text-[11px] text-gray-400">Stay Updated</p>

                <p className="text-sm font-semibold text-slate-800">
                  Real-time Alerts
                </p>
              </div>
            </div>

            {/* ================= FLOATING CARD 3 ================= */}
            <div
              className="
                absolute
                z-20
                right-0
                sm:right-2
                lg:right-0
                top-48
                bg-white
                px-4
                py-3
                rounded-2xl
                shadow-lg
                border border-gray-100
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-pink-50
                  flex
                  items-center
                  justify-center
                  text-pink-500
                  text-lg
                "
              >
                ♥
              </div>

              <div>
                <p className="text-[11px] text-gray-400">Build</p>

                <p className="text-sm font-semibold text-slate-800">
                  A Brighter Future
                </p>
              </div>
            </div>

            {/* Small Decorative Dots */}
            <div className="absolute bottom-14 left-10 grid grid-cols-4 gap-2 opacity-60">
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>

              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>

              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
            </div>

            {/* Top Right Message */}
            <div
              className="
                absolute
                z-20
                right-2
                sm:right-8
                lg:right-4
                top-2
                text-right
                hidden
                sm:block
              "
            >
              <p
                className="
                  text-emerald-700
                  text-sm
                  font-medium
                  italic
                "
              >
                Same opportunities,
                <br />
                now closer to you!
              </p>

              <div className="text-emerald-500 text-xl mt-1">↙</div>
            </div>

            {/* Bottom Green Pill */}
            <div
              className="
                absolute
                z-20
                bottom-3
                right-2
                sm:right-6
                lg:right-2
                bg-emerald-600
                text-white
                px-5
                py-3
                rounded-full
                shadow-lg
                hidden
                sm:flex
                items-center
                gap-2
              "
            >
              <span className="text-lg">✦</span>

              <div>
                <p className="text-[10px] opacity-80">Your Career</p>

                <p className="text-sm font-medium">Anytime, Anywhere</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
