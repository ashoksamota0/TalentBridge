// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Companies = () => {
//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Navbar */}
//       <Navbar />

//       {/* Page Header */}
//       <section className="container px-4 2xl:px-20 mx-auto pt-10 sm:pt-12">
//         <div
//           className="
//             relative
//             overflow-hidden
//             rounded-3xl
//             border border-emerald-100
//             bg-gradient-to-br
//             from-emerald-50
//             via-green-50
//             to-blue-50
//             px-6
//             sm:px-10
//             lg:px-14
//             py-10
//             sm:py-14
//           "
//         >
//           {/* Background Decorations */}
//           <div
//             className="
//               absolute
//               -top-28
//               -right-20
//               w-72
//               h-72
//               bg-emerald-200/30
//               rounded-full
//               blur-3xl
//             "
//           ></div>

//           <div
//             className="
//               absolute
//               -bottom-32
//               left-1/3
//               w-80
//               h-80
//               bg-blue-200/20
//               rounded-full
//               blur-3xl
//             "
//           ></div>

//           <div className="absolute top-12 right-16 w-3 h-3 bg-emerald-400 rounded-full"></div>

//           <div className="absolute top-24 right-28 w-2 h-2 bg-emerald-300 rounded-full"></div>

//           <div className="absolute bottom-12 right-1/3 w-2.5 h-2.5 bg-blue-300 rounded-full"></div>

//           {/* Content */}
//           <div className="relative z-10 max-w-3xl">
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
//                 shadow-sm
//                 mb-5
//               "
//             >
//               <span>🏢</span>
//               Companies on TalentBridge
//             </div>

//             {/* Heading */}
//             <h1
//               className="
//                 text-3xl
//                 sm:text-4xl
//                 lg:text-5xl
//                 font-bold
//                 text-slate-900
//                 leading-tight
//               "
//             >
//               Connect With
//               <br className="hidden sm:block" />
//               <span className="text-emerald-600"> Great Companies</span>
//             </h1>

//             {/* Description */}
//             <p
//               className="
//                 text-slate-600
//                 text-sm
//                 sm:text-base
//                 leading-relaxed
//                 max-w-2xl
//                 mt-5
//               "
//             >
//               Discover opportunities from companies looking for talented people
//               and take the next step toward building a better career.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="container px-4 2xl:px-20 mx-auto py-12 sm:py-16">
//         {/* Intro */}
//         <div className="max-w-3xl mx-auto text-center mb-12">
//           <div
//             className="
//               inline-flex
//               items-center
//               justify-center
//               w-12
//               h-12
//               rounded-2xl
//               bg-emerald-50
//               border border-emerald-100
//               text-2xl
//               mb-4
//             "
//           >
//             🤝
//           </div>

//           <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
//             Where Talent Meets Opportunity
//           </h2>

//           <p className="text-sm sm:text-base text-slate-500 leading-relaxed mt-3">
//             TalentBridge helps candidates discover relevant job opportunities
//             while giving employers a simple way to connect with talented
//             professionals.
//           </p>
//         </div>

//         {/* Benefits */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
//           {/* Card 1 */}
//           <div
//             className="
//               bg-white
//               border border-gray-200
//               rounded-2xl
//               p-6
//               shadow-sm
//               hover:shadow-lg
//               hover:-translate-y-1
//               transition-all
//               duration-300
//             "
//           >
//             <div
//               className="
//                 w-12
//                 h-12
//                 rounded-xl
//                 bg-emerald-50
//                 border border-emerald-100
//                 flex
//                 items-center
//                 justify-center
//                 text-xl
//                 mb-5
//               "
//             >
//               🔎
//             </div>

//             <h3 className="text-lg font-semibold text-slate-900">
//               Discover Opportunities
//             </h3>

//             <p className="text-sm text-slate-500 leading-6 mt-2">
//               Explore job openings from companies and find opportunities that
//               match your skills and career goals.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div
//             className="
//               bg-white
//               border border-gray-200
//               rounded-2xl
//               p-6
//               shadow-sm
//               hover:shadow-lg
//               hover:-translate-y-1
//               transition-all
//               duration-300
//             "
//           >
//             <div
//               className="
//                 w-12
//                 h-12
//                 rounded-xl
//                 bg-blue-50
//                 border border-blue-100
//                 flex
//                 items-center
//                 justify-center
//                 text-xl
//                 mb-5
//               "
//             >
//               🎯
//             </div>

//             <h3 className="text-lg font-semibold text-slate-900">
//               Find the Right Fit
//             </h3>

//             <p className="text-sm text-slate-500 leading-6 mt-2">
//               Use job categories, locations, experience levels and search to
//               narrow down opportunities that fit your profile.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div
//             className="
//               bg-white
//               border border-gray-200
//               rounded-2xl
//               p-6
//               shadow-sm
//               hover:shadow-lg
//               hover:-translate-y-1
//               transition-all
//               duration-300
//             "
//           >
//             <div
//               className="
//                 w-12
//                 h-12
//                 rounded-xl
//                 bg-purple-50
//                 border border-purple-100
//                 flex
//                 items-center
//                 justify-center
//                 text-xl
//                 mb-5
//               "
//             >
//               🚀
//             </div>

//             <h3 className="text-lg font-semibold text-slate-900">
//               Build Your Career
//             </h3>

//             <p className="text-sm text-slate-500 leading-6 mt-2">
//               Apply to relevant positions and move one step closer to your next
//               career opportunity.
//             </p>
//           </div>
//         </div>

//         {/* Employer Section */}
//         <div
//           className="
//             relative
//             overflow-hidden
//             max-w-6xl
//             mx-auto
//             mt-10
//             rounded-3xl
//             bg-white
//             border border-emerald-100
//             shadow-sm
//             p-7
//             sm:p-10
//           "
//         >
//           {/* Decorative Circle */}
//           <div
//             className="
//               absolute
//               -right-20
//               -top-20
//               w-56
//               h-56
//               rounded-full
//               bg-emerald-50
//             "
//           ></div>

//           <div
//             className="
//               absolute
//               -left-16
//               -bottom-20
//               w-44
//               h-44
//               rounded-full
//               bg-blue-50
//             "
//           ></div>

//           <div
//             className="
//               relative
//               z-10
//               flex
//               flex-col
//               lg:flex-row
//               items-center
//               justify-between
//               gap-8
//             "
//           >
//             {/* Left */}
//             <div className="max-w-2xl">
//               <div
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   text-emerald-700
//                   bg-emerald-50
//                   border border-emerald-100
//                   px-3
//                   py-1.5
//                   rounded-full
//                   text-xs
//                   font-medium
//                   mb-4
//                 "
//               >
//                 💼 For Employers
//               </div>

//               <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
//                 Looking to Hire Great Talent?
//               </h2>

//               <p className="text-sm sm:text-base text-slate-500 leading-relaxed mt-3">
//                 Create your company account, post job opportunities and connect
//                 with candidates through TalentBridge.
//               </p>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-wrap items-center gap-3 shrink-0">
//               <Link
//                 to="/"
//                 className="
//                   px-5
//                   py-2.5
//                   rounded-xl
//                   border
//                   border-emerald-200
//                   bg-white
//                   text-emerald-700
//                   text-sm
//                   font-medium
//                   hover:bg-emerald-50
//                   transition
//                 "
//               >
//                 Explore Jobs
//               </Link>

//               <button
//                 type="button"
//                 onClick={() => {
//                   window.scrollTo({ top: 0, behavior: "smooth" });
//                   window.dispatchEvent(new CustomEvent("openRecruiterLogin"));
//                 }}
//                 className="
//                   px-5
//                   py-2.5
//                   rounded-xl
//                   bg-emerald-600
//                   hover:bg-emerald-700
//                   text-white
//                   text-sm
//                   font-medium
//                   transition
//                   shadow-sm
//                 "
//               >
//                 Employer Login →
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-14">
//           <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
//             Ready to find your next opportunity?
//           </h3>

//           <p className="text-sm text-slate-500 mt-2">
//             Explore available jobs and take the next step in your career.
//           </p>

//           <Link
//             to="/jobs"
//             className="
//               inline-flex
//               items-center
//               gap-2
//               mt-5
//               bg-emerald-600
//               hover:bg-emerald-700
//               text-white
//               px-6
//               py-3
//               rounded-xl
//               text-sm
//               font-medium
//               transition-all
//               duration-200
//               shadow-sm
//               hover:shadow-md
//             "
//           >
//             Explore Jobs →
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Companies;

import { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { AppContext } from "../context/AppContext";

const Companies = () => {
  const { setShowRecruiterLogin } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="container px-4 2xl:px-20 mx-auto pt-10 sm:pt-12">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-emerald-100
            bg-gradient-to-br
            from-emerald-50
            via-green-50
            to-blue-50
            px-6
            sm:px-10
            py-10
            sm:py-12
          "
        >
          <div className="absolute -top-24 -right-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-28 left-1/3 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>

          <div className="absolute top-10 right-10 w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>

          <div className="absolute bottom-10 right-24 w-2 h-2 bg-emerald-300 rounded-full"></div>

          <div className="relative z-10 max-w-3xl">
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-white/80
                border
                border-emerald-100
                text-emerald-700
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                shadow-sm
                mb-4
              "
            >
              <span>🏢</span>
              Companies on TalentBridge
            </div>

            <h1
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-slate-900
                leading-tight
              "
            >
              Connect With
              <br className="hidden sm:block" />
              <span className="text-emerald-600"> Great Companies</span>
            </h1>

            <p
              className="
                text-slate-600
                text-sm
                sm:text-base
                leading-relaxed
                max-w-2xl
                mt-4
              "
            >
              Discover companies looking for talented professionals and find
              opportunities that align with your skills, experience, and career
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY TALENTBRIDGE ================= */}

      <section className="container px-4 2xl:px-20 mx-auto py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-emerald-600 font-semibold text-sm mb-2">
            Why TalentBridge?
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Find the right company for your next move
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            TalentBridge helps candidates discover meaningful opportunities
            while helping companies connect with the right talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-6
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-emerald-50
                border
                border-emerald-100
                flex
                items-center
                justify-center
                text-xl
                mb-5
              "
            >
              🔎
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Discover Opportunities
            </h3>

            <p className="text-sm text-gray-500 leading-6 mt-3">
              Explore job opportunities from companies across different
              industries and find roles that match your career interests.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-6
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-blue-50
                border
                border-blue-100
                flex
                items-center
                justify-center
                text-xl
                mb-5
              "
            >
              🎯
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Find the Right Fit
            </h3>

            <p className="text-sm text-gray-500 leading-6 mt-3">
              Find companies and positions that align with your skills,
              experience, and professional goals.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-6
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-purple-50
                border
                border-purple-100
                flex
                items-center
                justify-center
                text-xl
                mb-5
              "
            >
              🚀
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Build Your Career
            </h3>

            <p className="text-sm text-gray-500 leading-6 mt-3">
              Take the next step in your career by connecting with companies
              that can help you grow and achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOR EMPLOYERS ================= */}

      <section className="container px-4 2xl:px-20 mx-auto pb-14 sm:pb-16">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-r
            from-emerald-700
            to-emerald-600
            px-6
            sm:px-10
            py-9
            sm:py-10
          "
        >
          <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-white/10"></div>

          <div className="absolute -left-16 -bottom-24 w-52 h-52 rounded-full bg-white/5"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
            <div className="max-w-2xl">
              <p className="text-emerald-100 text-sm font-medium mb-2">
                For Employers
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Looking for talented professionals?
              </h2>

              <p className="text-emerald-50/85 text-sm sm:text-base mt-3 leading-relaxed">
                Post your job openings on TalentBridge and connect with
                candidates who are ready to take the next step in their careers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setShowRecruiterLogin(true)}
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-emerald-800/50
                  hover:bg-emerald-800
                  text-white
                  border
                  border-emerald-300/30
                  px-5
                  py-3
                  rounded-xl
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                "
              >
                Employer Login →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Companies;
