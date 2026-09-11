// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
//       <img width={160} src={assets.logo} alt="" />
//       <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright © 2026 TalentBridge | All Rights Reserved.</p>
//       <div className='flex gap-2.5'>
//         <img width={38} src={assets.facebook_icon} alt="" />
//         <img width={38} src={assets.twitter_icon} alt="" />
//         <img width={38} src={assets.instagram_icon} alt="" />
//       </div>
//     </div>
//   )
// }

// export default Footer

// import { assets } from "../assets/assets";

// const Footer = () => {
//   return (
//     <footer className="mt-16">

//       {/* Main Footer */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white">

//         {/* Decorative Background Shapes */}
//         <div className="absolute -left-24 top-8 w-64 h-64 rounded-full bg-emerald-500/10"></div>

//         <div className="absolute -right-20 bottom-0 w-72 h-72 rounded-full bg-emerald-400/10"></div>

//         <div className="absolute right-20 bottom-0 w-40 h-56 bg-emerald-400/5 rounded-t-full rotate-[-25deg]"></div>

//         <div className="relative container px-4 2xl:px-20 mx-auto">

//           {/* Footer Content */}
//           <div className="py-12 lg:py-14">

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr] gap-10 lg:gap-12">

//               {/* Brand */}
//               <div className="flex flex-col justify-center">

//                 <img
//                   src={assets.logo}
//                   alt="TalentBridge"
//                   className="w-[175px] object-contain"
//                 />

//                 <p className="text-sm text-emerald-100/70 mt-3 max-w-xs leading-6">
//                   Connecting Talent. Building Careers.
//                 </p>

//               </div>

//               {/* Explore */}
//               <div>

//                 <h3 className="text-base font-semibold mb-5">
//                   Explore
//                 </h3>

//                 <div className="flex flex-col gap-3">

//                   <a
//                     href="#"
//                     className="text-sm text-emerald-100/70 hover:text-white transition-colors"
//                   >
//                     Jobs
//                   </a>

//                   <a
//                     href="#"
//                     className="text-sm text-emerald-100/70 hover:text-white transition-colors"
//                   >
//                     Companies
//                   </a>

//                   <a
//                     href="#"
//                     className="text-sm text-emerald-100/70 hover:text-white transition-colors"
//                   >
//                     Career Resources
//                   </a>

//                 </div>

//               </div>

//               {/* Company */}
//               <div>

//                 <h3 className="text-base font-semibold mb-5">
//                   Company
//                 </h3>

//                 <div className="flex flex-col gap-3">

//                   <a
//                     href="#"
//                     className="text-sm text-emerald-100/70 hover:text-white transition-colors"
//                   >
//                     About Us
//                   </a>

//                   <a
//                     href="#"
//                     className="text-sm text-emerald-100/70 hover:text-white transition-colors"
//                   >
//                     Contact
//                   </a>

//                   <a
//                     href="#"
//                     className="text-sm text-emerald-100/70 hover:text-white transition-colors"
//                   >
//                     Privacy Policy
//                   </a>

//                 </div>

//               </div>

//               {/* Social + Quote */}
//               <div>

//                 <h3 className="text-base font-semibold mb-5">
//                   Follow Us
//                 </h3>

//                 <div className="flex items-center gap-3">

//                   {/* Facebook */}
//                   <a
//                     href="#"
//                     className="
//                       w-12 h-12 rounded-full
//                       bg-white/10
//                       border border-white/10
//                       flex items-center justify-center
//                       hover:bg-emerald-400/20
//                       hover:border-emerald-300/30
//                       hover:-translate-y-1
//                       transition-all duration-200
//                     "
//                   >
//                     <img
//                       src={assets.facebook_icon}
//                       alt="Facebook"
//                       className="w-5 h-5 object-contain brightness-0 invert"
//                     />
//                   </a>

//                   {/* Twitter */}
//                   <a
//                     href="#"
//                     className="
//                       w-12 h-12 rounded-full
//                       bg-white/10
//                       border border-white/10
//                       flex items-center justify-center
//                       hover:bg-emerald-400/20
//                       hover:border-emerald-300/30
//                       hover:-translate-y-1
//                       transition-all duration-200
//                     "
//                   >
//                     <img
//                       src={assets.twitter_icon}
//                       alt="Twitter"
//                       className="w-5 h-5 object-contain brightness-0 invert"
//                     />
//                   </a>

//                   {/* Instagram */}
//                   <a
//                     href="#"
//                     className="
//                       w-12 h-12 rounded-full
//                       bg-white/10
//                       border border-white/10
//                       flex items-center justify-center
//                       hover:bg-emerald-400/20
//                       hover:border-emerald-300/30
//                       hover:-translate-y-1
//                       transition-all duration-200
//                     "
//                   >
//                     <img
//                       src={assets.instagram_icon}
//                       alt="Instagram"
//                       className="w-5 h-5 object-contain brightness-0 invert"
//                     />
//                   </a>

//                 </div>

//                 {/* Quote */}
//                 <div className="mt-7 pl-4 border-l-2 border-emerald-400">

//                   <p className="text-sm sm:text-base text-emerald-50/90 leading-6 italic">
//                     “Opportunities don’t happen.
//                     <br />
//                     You find them.”
//                   </p>

//                   <div className="mt-3 flex items-center gap-1">

//                     <span className="w-12 h-1 bg-emerald-300 rounded-full"></span>
//                     <span className="w-5 h-1 bg-emerald-500/50 rounded-full"></span>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* Bottom Bar */}
//           <div className="border-t border-white/10">

//             <div className="
//               min-h-[64px]
//               flex
//               flex-col sm:flex-row
//               items-center
//               justify-between
//               gap-3
//               py-4
//             ">

//               <p className="text-xs sm:text-sm text-emerald-100/60">
//                 © 2026 TalentBridge | All Rights Reserved.
//               </p>

//               <p className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100/70">

//                 <span className="text-emerald-400 text-lg">
//                   ◆
//                 </span>

//                 Find your opportunity. Build your future.

//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </footer>
//   );
// };

// export default Footer;

// import { assets } from "../assets/assets";

// const Footer = () => {
//   return (
//     <footer className="mt-16">
//       {/* Main Footer */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white">
//         {/* Decorative Shapes */}
//         <div className="absolute -left-32 -top-20 w-[420px] h-[420px] rounded-full bg-emerald-400/[0.07] pointer-events-none"></div>

//         <div className="absolute -right-24 bottom-[-120px] w-[360px] h-[360px] rounded-full bg-emerald-400/[0.08] pointer-events-none"></div>

//         <div className="absolute right-16 bottom-[-60px] w-44 h-64 rounded-full bg-emerald-300/[0.05] rotate-[-28deg] pointer-events-none"></div>

//         <div className="relative container px-4 2xl:px-20 mx-auto">
//           {/* Footer Content */}
//           <div className="py-12 lg:py-14">
//             <div
//               className="
//               grid
//               grid-cols-1
//               sm:grid-cols-2
//               lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.25fr]
//               gap-10
//               lg:gap-12
//             "
//             >
//               {/* ================= BRAND ================= */}
//               {/* Brand */}
//               <div className="flex flex-col items-center w-max">
//                 <img
//                   src={assets.logo}
//                   alt="TalentBridge"
//                   className="w-[175px] object-contain"
//                 />

//                 <p className="mt-1 text-sm text-emerald-100/70 whitespace-nowrap">
//                   Connecting Talent . Building Careers
//                 </p>
//               </div>

//               {/* ================= EXPLORE ================= */}
//               <div>
//                 <h3 className="text-base font-semibold mb-5">Explore</h3>

//                 <div className="flex flex-col gap-3">
//                   <a
//                     href="#"
//                     className="text-sm text-emerald-100/70 hover:text-white transition-colors duration-200"
//                   >
//                     Jobs
//                   </a>

//                   <a
//                     href="#"
//                     className="text-sm text-emerald-100/70 hover:text-white transition-colors duration-200"
//                   >
//                     Companies
//                   </a>

//                   <a
//                     href="#"
//                     className="text-sm text-emerald-100/70 hover:text-white transition-colors duration-200"
//                   >
//                     Career Resources
//                   </a>
//                 </div>
//               </div>

//               {/* ================= COMPANY ================= */}
//               <div>
//                 <h3 className="text-base font-semibold mb-5">Company</h3>

//                 <div className="flex flex-col gap-3">
//                   <a
//                     href="#"
//                     className="text-sm text-emerald-100/70 hover:text-white transition-colors duration-200"
//                   >
//                     About Us
//                   </a>

//                   <a
//                     href="#"
//                     className="text-sm text-emerald-100/70 hover:text-white transition-colors duration-200"
//                   >
//                     Contact
//                   </a>

//                   <a
//                     href="#"
//                     className="text-sm text-emerald-100/70 hover:text-white transition-colors duration-200"
//                   >
//                     Privacy Policy
//                   </a>
//                 </div>
//               </div>

//               {/* ================= FOLLOW US ================= */}
//               <div>
//                 <h3 className="text-base font-semibold mb-5">Follow Us</h3>

//                 {/* Social Icons */}
//                 <div className="flex items-center gap-3">
//                   {/* Facebook */}
//                   <a
//                     href="#"
//                     className="
//                       w-12 h-12
//                       rounded-full
//                       bg-white/[0.08]
//                       border border-white/[0.08]
//                       flex items-center justify-center
//                       hover:bg-emerald-400/20
//                       hover:border-emerald-300/30
//                       hover:-translate-y-1
//                       transition-all duration-200
//                     "
//                   >
//                     <img
//                       src={assets.facebook_icon}
//                       alt="Facebook"
//                       className="w-5 h-5 object-contain brightness-0 invert"
//                     />
//                   </a>

//                   {/* Twitter */}
//                   <a
//                     href="#"
//                     className="
//                       w-12 h-12
//                       rounded-full
//                       bg-white/[0.08]
//                       border border-white/[0.08]
//                       flex items-center justify-center
//                       hover:bg-emerald-400/20
//                       hover:border-emerald-300/30
//                       hover:-translate-y-1
//                       transition-all duration-200
//                     "
//                   >
//                     <img
//                       src={assets.twitter_icon}
//                       alt="Twitter"
//                       className="w-5 h-5 object-contain brightness-0 invert"
//                     />
//                   </a>

//                   {/* Instagram */}
//                   <a
//                     href="#"
//                     className="
//                       w-12 h-12
//                       rounded-full
//                       bg-white/[0.08]
//                       border border-white/[0.08]
//                       flex items-center justify-center
//                       hover:bg-emerald-400/20
//                       hover:border-emerald-300/30
//                       hover:-translate-y-1
//                       transition-all duration-200
//                     "
//                   >
//                     <img
//                       src={assets.instagram_icon}
//                       alt="Instagram"
//                       className="w-5 h-5 object-contain brightness-0 invert"
//                     />
//                   </a>
//                 </div>

//                 {/* Quote */}
//                 <div className="mt-7 pl-4 border-l-2 border-emerald-400">
//                   <p
//                     className="
//                     text-sm
//                     sm:text-base
//                     text-emerald-50/90
//                     leading-6
//                     italic
//                   "
//                   >
//                     “Opportunities don’t happen.
//                     <br />
//                     You find them.”
//                   </p>

//                   <div className="mt-3 flex items-center gap-1">
//                     <span className="w-12 h-1 bg-emerald-300 rounded-full"></span>

//                     <span className="w-5 h-1 bg-emerald-500/50 rounded-full"></span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ================= BOTTOM BAR ================= */}
//           <div className="border-t border-white/10">
//             <div
//               className="
//               min-h-[64px]
//               py-4
//               flex
//               flex-col
//               sm:flex-row
//               items-center
//               justify-between
//               gap-3
//             "
//             >
//               {/* Copyright */}
//               <p
//                 className="
//                 text-xs
//                 sm:text-sm
//                 text-emerald-100/60
//               "
//               >
//                 © 2026 TalentBridge | All Rights Reserved.
//               </p>

//               {/* Right Text */}
//               <p
//                 className="
//                 flex
//                 items-center
//                 gap-2
//                 text-xs
//                 sm:text-sm
//                 text-emerald-100/70
//               "
//               >
//                 <span className="text-emerald-400 text-base">◆</span>
//                 Find your opportunity. Build your future.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-16">
      {/* Main Footer */}
      <div
        className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-emerald-950
        via-emerald-900
        to-teal-950
        text-white
      "
      >
        {/* ================= DECORATIVE CIRCLES ================= */}

        {/* Large left circle */}
        <div
          className="
          absolute
          -left-32
          top-24
          w-[390px]
          h-[390px]
          rounded-full
          bg-emerald-400/[0.08]
          pointer-events-none
        "
        ></div>

        {/* Left concentric rings */}
        <div
          className="
          absolute
          -left-44
          top-16
          w-[420px]
          h-[420px]
          rounded-full
          border
          border-emerald-400/20
          pointer-events-none
        "
        ></div>

        <div
          className="
          absolute
          -left-52
          top-8
          w-[500px]
          h-[500px]
          rounded-full
          border
          border-emerald-400/10
          pointer-events-none
        "
        ></div>

        {/* Top circle */}
        <div
          className="
          absolute
          left-[16%]
          -top-28
          w-[280px]
          h-[280px]
          rounded-full
          bg-emerald-400/[0.05]
          pointer-events-none
        "
        ></div>

        {/* Top-right large ring */}
        <div
          className="
          absolute
          -right-28
          -top-32
          w-[360px]
          h-[360px]
          rounded-full
          border
          border-emerald-300/30
          pointer-events-none
        "
        ></div>

        <div
          className="
          absolute
          -right-40
          -top-44
          w-[500px]
          h-[500px]
          rounded-full
          border
          border-emerald-400/10
          pointer-events-none
        "
        ></div>

        {/* Right lower circle */}
        <div
          className="
          absolute
          -right-24
          bottom-[-90px]
          w-[280px]
          h-[280px]
          rounded-full
          bg-emerald-400/[0.06]
          pointer-events-none
        "
        ></div>

        {/* Small glowing circle */}
        <div
          className="
          absolute
          right-[8%]
          top-[42%]
          w-12
          h-12
          rounded-full
          bg-emerald-400/20
          border
          border-emerald-300/30
          shadow-[0_0_25px_rgba(52,211,153,0.15)]
          pointer-events-none
        "
        ></div>

        {/* Bottom-left small circle */}
        <div
          className="
          absolute
          left-[11%]
          bottom-[22%]
          w-14
          h-14
          rounded-full
          bg-emerald-400/10
          border
          border-emerald-300/30
          pointer-events-none
        "
        ></div>

        {/* ================= DOT PATTERN ================= */}

        <div
          className="
          absolute
          right-[17%]
          top-8
          grid
          grid-cols-5
          gap-x-5
          gap-y-4
          opacity-60
          pointer-events-none
        "
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-emerald-400/60
              "
            ></span>
          ))}
        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative container px-4 2xl:px-20 mx-auto">
          <div className="py-12 lg:py-14">
            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-[1.45fr_0.8fr_0.8fr_1.25fr]
              gap-10
              lg:gap-12
            "
            >
              {/* ================= BRAND ================= */}

              <div
                className="
                flex
                flex-col
                justify-center
                items-center
                lg:items-start
              "
              >
                <div className="flex flex-col items-center w-max">
                  <img
                    src={assets.logo}
                    alt="TalentBridge"
                    className="w-[175px] object-contain"
                  />

                  <p
                    className="
                    mt-1
                    text-sm
                    text-emerald-100/70
                    whitespace-nowrap
                  "
                  >
                    Connecting Talent . Building Careers
                  </p>
                </div>
              </div>

              {/* ================= EXPLORE ================= */}

              <div>
                <h3 className="text-base font-semibold mb-5">Explore</h3>

                {/* Small Accent */}
                <div className="w-10 h-1 bg-emerald-400 rounded-full mb-5"></div>

                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="
                      text-sm
                      text-emerald-100/70
                      hover:text-white
                      transition-colors
                    "
                  >
                    Jobs
                  </a>

                  <a
                    href="#"
                    className="
                      text-sm
                      text-emerald-100/70
                      hover:text-white
                      transition-colors
                    "
                  >
                    Companies
                  </a>

                  <a
                    href="#"
                    className="
                      text-sm
                      text-emerald-100/70
                      hover:text-white
                      transition-colors
                    "
                  >
                    Career Resources
                  </a>
                </div>
              </div>

              {/* ================= COMPANY ================= */}

              <div>
                <h3 className="text-base font-semibold mb-5">Company</h3>

                {/* Small Accent */}
                <div className="w-10 h-1 bg-emerald-400 rounded-full mb-5"></div>

                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="
                      text-sm
                      text-emerald-100/70
                      hover:text-white
                      transition-colors
                    "
                  >
                    About Us
                  </a>

                  <a
                    href="#"
                    className="
                      text-sm
                      text-emerald-100/70
                      hover:text-white
                      transition-colors
                    "
                  >
                    Contact
                  </a>

                  <a
                    href="#"
                    className="
                      text-sm
                      text-emerald-100/70
                      hover:text-white
                      transition-colors
                    "
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>

              {/* ================= FOLLOW US ================= */}

              <div>
                <h3 className="text-base font-semibold mb-5">Follow Us</h3>

                {/* Small Accent */}
                <div className="w-10 h-1 bg-emerald-400 rounded-full mb-5"></div>

                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="#"
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-white/[0.07]
                      border
                      border-emerald-300/20
                      flex
                      items-center
                      justify-center
                      hover:bg-emerald-400/20
                      hover:border-emerald-300/40
                      hover:-translate-y-1
                      transition-all
                      duration-200
                    "
                  >
                    <img
                      src={assets.facebook_icon}
                      alt="Facebook"
                      className="w-5 h-5 object-contain brightness-0 invert"
                    />
                  </a>

                  {/* Twitter */}
                  <a
                    href="#"
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-white/[0.07]
                      border
                      border-emerald-300/20
                      flex
                      items-center
                      justify-center
                      hover:bg-emerald-400/20
                      hover:border-emerald-300/40
                      hover:-translate-y-1
                      transition-all
                      duration-200
                    "
                  >
                    <img
                      src={assets.twitter_icon}
                      alt="Twitter"
                      className="w-5 h-5 object-contain brightness-0 invert"
                    />
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-white/[0.07]
                      border
                      border-emerald-300/20
                      flex
                      items-center
                      justify-center
                      hover:bg-emerald-400/20
                      hover:border-emerald-300/40
                      hover:-translate-y-1
                      transition-all
                      duration-200
                    "
                  >
                    <img
                      src={assets.instagram_icon}
                      alt="Instagram"
                      className="w-5 h-5 object-contain brightness-0 invert"
                    />
                  </a>
                </div>

                {/* Quote */}
                <div
                  className="
                  mt-7
                  pl-4
                  border-l-2
                  border-emerald-400
                "
                >
                  <p
                    className="
                    text-sm
                    sm:text-base
                    text-emerald-50/90
                    leading-6
                    italic
                  "
                  >
                    “Opportunities don’t happen.
                    <br />
                    You find them.”
                  </p>

                  <div className="mt-3 flex items-center gap-1">
                    <span
                      className="
                      w-12
                      h-1
                      bg-emerald-300
                      rounded-full
                    "
                    ></span>

                    <span
                      className="
                      w-5
                      h-1
                      bg-emerald-500/50
                      rounded-full
                    "
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM BAR ================= */}

          <div className="border-t border-white/10">
            <div
              className="
              min-h-[64px]
              py-4
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-3
            "
            >
              <p
                className="
                text-xs
                sm:text-sm
                text-emerald-100/60
              "
              >
                © 2026 TalentBridge | All Rights Reserved.
              </p>

              <p
                className="
                flex
                items-center
                gap-2
                text-xs
                sm:text-sm
                text-emerald-100/70
              "
              >
                <span
                  className="
                  text-emerald-400
                  text-base
                "
                >
                  ◆
                </span>
                Find your opportunity. Build your future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
