// import { Link } from "react-router-dom";

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* ================= HERO ================= */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 border-b border-emerald-100">
//         {/* Decorative circles */}
//         <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-32 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
//           <div className="max-w-3xl">
//             <span
//               className="
//               inline-flex
//               items-center
//               gap-2
//               bg-emerald-100
//               text-emerald-700
//               px-4
//               py-2
//               rounded-full
//               text-sm
//               font-medium
//               mb-5
//             "
//             >
//               <span>✦</span>
//               About TalentBridge
//             </span>

//             <h1
//               className="
//               text-4xl
//               sm:text-5xl
//               font-bold
//               text-slate-900
//               leading-tight
//             "
//             >
//               Connecting Talent.
//               <br />
//               <span className="text-emerald-600">Building Careers.</span>
//             </h1>

//             <p
//               className="
//               text-slate-600
//               text-base
//               sm:text-lg
//               leading-relaxed
//               mt-5
//               max-w-2xl
//             "
//             >
//               TalentBridge is a job platform built to connect talented
//               candidates with meaningful career opportunities and help companies
//               find the right people for their teams.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= MAIN CONTENT ================= */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//         {/* Who We Are */}
//         <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//           <div>
//             <p className="text-sm font-semibold text-emerald-600 mb-2">
//               WHO WE ARE
//             </p>

//             <h2
//               className="
//               text-3xl
//               sm:text-4xl
//               font-bold
//               text-slate-900
//             "
//             >
//               Making the job search
//               <span className="text-emerald-600"> simpler</span>
//             </h2>

//             <p className="text-gray-500 leading-7 mt-5">
//               Finding the right job should not feel complicated. TalentBridge
//               brings job seekers and employers together through a simple,
//               focused and easy-to-use platform.
//             </p>

//             <p className="text-gray-500 leading-7 mt-4">
//               Candidates can explore opportunities from different companies,
//               discover roles that match their skills and take the next step
//               towards their career goals.
//             </p>

//             <p className="text-gray-500 leading-7 mt-4">
//               At the same time, employers can connect with talented people and
//               discover candidates who can contribute to their teams.
//             </p>
//           </div>

//           {/* Visual Card */}
//           <div
//             className="
//             relative
//             rounded-3xl
//             overflow-hidden
//             bg-gradient-to-br
//             from-emerald-900
//             via-emerald-800
//             to-teal-900
//             p-8
//             sm:p-10
//             min-h-[320px]
//             flex
//             items-center
//           "
//           >
//             <div
//               className="
//               absolute
//               -right-16
//               -top-16
//               w-48
//               h-48
//               rounded-full
//               bg-emerald-400/10
//             "
//             ></div>

//             <div
//               className="
//               absolute
//               -left-20
//               -bottom-20
//               w-56
//               h-56
//               rounded-full
//               border
//               border-emerald-400/20
//             "
//             ></div>

//             <div className="relative">
//               <div
//                 className="
//                 w-14
//                 h-14
//                 rounded-2xl
//                 bg-emerald-400/15
//                 border
//                 border-emerald-300/20
//                 flex
//                 items-center
//                 justify-center
//                 text-2xl
//                 mb-6
//               "
//               >
//                 🌱
//               </div>

//               <h3
//                 className="
//                 text-2xl
//                 sm:text-3xl
//                 font-bold
//                 text-white
//               "
//               >
//                 Your next opportunity
//                 <br />
//                 starts here.
//               </h3>

//               <p
//                 className="
//                 text-emerald-100/70
//                 mt-4
//                 leading-6
//                 max-w-md
//               "
//               >
//                 Explore opportunities, connect with companies and take the next
//                 step towards a better career.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ================= WHAT WE DO ================= */}
//         <section className="mt-16 sm:mt-20">
//           <div className="text-center max-w-2xl mx-auto">
//             <p className="text-sm font-semibold text-emerald-600 mb-2">
//               WHAT WE DO
//             </p>

//             <h2
//               className="
//               text-3xl
//               sm:text-4xl
//               font-bold
//               text-slate-900
//             "
//             >
//               Built for both sides of the
//               <span className="text-emerald-600"> hiring journey</span>
//             </h2>

//             <p className="text-gray-500 mt-4 leading-6">
//               TalentBridge makes it easier for candidates and companies to find
//               the right match.
//             </p>
//           </div>

//           <div
//             className="
//             grid
//             md:grid-cols-2
//             gap-5
//             mt-10
//             max-w-4xl
//             mx-auto
//           "
//           >
//             {/* Candidates */}
//             <div
//               className="
//               bg-white
//               border
//               border-gray-200
//               rounded-2xl
//               p-7
//               shadow-sm
//               hover:shadow-lg
//               hover:-translate-y-1
//               transition-all
//               duration-300
//             "
//             >
//               <div
//                 className="
//                 w-12
//                 h-12
//                 rounded-xl
//                 bg-emerald-50
//                 border
//                 border-emerald-100
//                 flex
//                 items-center
//                 justify-center
//                 text-xl
//                 mb-5
//               "
//               >
//                 👤
//               </div>

//               <h3 className="text-xl font-semibold text-slate-900">
//                 For Job Seekers
//               </h3>

//               <p className="text-gray-500 leading-6 mt-3">
//                 Discover relevant job opportunities, explore companies and apply
//                 for positions that match your skills and goals.
//               </p>
//             </div>

//             {/* Employers */}
//             <div
//               className="
//               bg-white
//               border
//               border-gray-200
//               rounded-2xl
//               p-7
//               shadow-sm
//               hover:shadow-lg
//               hover:-translate-y-1
//               transition-all
//               duration-300
//             "
//             >
//               <div
//                 className="
//                 w-12
//                 h-12
//                 rounded-xl
//                 bg-blue-50
//                 border
//                 border-blue-100
//                 flex
//                 items-center
//                 justify-center
//                 text-xl
//                 mb-5
//               "
//               >
//                 🏢
//               </div>

//               <h3 className="text-xl font-semibold text-slate-900">
//                 For Employers
//               </h3>

//               <p className="text-gray-500 leading-6 mt-3">
//                 Post job opportunities, reach talented candidates and find
//                 people who can become valuable members of your team.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ================= MISSION ================= */}
//         <section
//           className="
//           mt-16
//           sm:mt-20
//           rounded-3xl
//           bg-white
//           border
//           border-gray-200
//           p-8
//           sm:p-12
//           text-center
//           shadow-sm
//         "
//         >
//           <div
//             className="
//             w-12
//             h-12
//             mx-auto
//             rounded-full
//             bg-emerald-50
//             border
//             border-emerald-100
//             flex
//             items-center
//             justify-center
//             text-emerald-600
//             text-xl
//           "
//           >
//             ✦
//           </div>

//           <h2
//             className="
//             text-2xl
//             sm:text-3xl
//             font-bold
//             text-slate-900
//             mt-5
//           "
//           >
//             Our Mission
//           </h2>

//           <p
//             className="
//             max-w-2xl
//             mx-auto
//             text-gray-500
//             leading-7
//             mt-4
//           "
//           >
//             To make career opportunities easier to discover and meaningful
//             connections easier to build — helping people move closer to the
//             future they want.
//           </p>
//         </section>

//         {/* ================= CTA ================= */}
//         <section
//           className="
//           mt-10
//           rounded-3xl
//           bg-gradient-to-r
//           from-emerald-600
//           to-teal-600
//           p-8
//           sm:p-10
//           flex
//           flex-col
//           sm:flex-row
//           items-center
//           justify-between
//           gap-6
//         "
//         >
//           <div>
//             <h2
//               className="
//               text-2xl
//               sm:text-3xl
//               font-bold
//               text-white
//             "
//             >
//               Ready to find your next opportunity?
//             </h2>

//             <p
//               className="
//               text-emerald-50/80
//               mt-2
//             "
//             >
//               Explore jobs and take the next step in your career.
//             </p>
//           </div>

//           <Link
//             to="/"
//             className="
//               shrink-0
//               bg-white
//               text-emerald-700
//               px-6
//               py-3
//               rounded-xl
//               font-semibold
//               hover:bg-emerald-50
//               transition
//               shadow-sm
//             "
//           >
//             Explore Jobs →
//           </Link>
//           <Link
//             to="/"
//             className="
//     inline-flex
//     items-center
//     gap-2
//     text-sm
//     font-medium
//     text-emerald-700
//     hover:text-emerald-800
//     bg-white
//     border
//     border-emerald-200
//     hover:border-emerald-300
//     px-4
//     py-2
//     rounded-full
//     shadow-sm
//     hover:shadow
//     transition-all
//     duration-200
//     mb-6
//   "
//           >
//             ← Back to Home
//           </Link>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default AboutUs;

import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* ================= HERO ================= */}

      <section
        className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-emerald-50
        via-green-50
        to-blue-50
        border-b
        border-emerald-100
      "
      >
        <div
          className="
          absolute
          -top-24
          -right-24
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
          -bottom-32
          left-10
          w-72
          h-72
          bg-blue-200/20
          rounded-full
          blur-3xl
        "
        ></div>

        <div
          className="
          relative
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-12
          sm:py-16
        "
        >
          {/* Back to Home */}
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-emerald-700
              hover:text-emerald-800
              bg-white
              border
              border-emerald-200
              hover:border-emerald-300
              px-4
              py-2
              rounded-full
              shadow-sm
              hover:shadow
              transition-all
              duration-200
              mb-7
            "
          >
            ← Back to Home
          </Link>

          <div className="max-w-3xl">
            <span
              className="
              inline-flex
              items-center
              gap-2
              bg-emerald-100
              text-emerald-700
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              mb-5
            "
            >
              ✦ About TalentBridge
            </span>

            <h1
              className="
              text-4xl
              sm:text-5xl
              font-bold
              text-slate-900
              leading-tight
            "
            >
              Connecting Talent.
              <span className="text-emerald-600"> Building Careers.</span>
            </h1>

            <p
              className="
              text-slate-600
              text-base
              sm:text-lg
              leading-relaxed
              mt-5
              max-w-2xl
            "
            >
              TalentBridge is a job platform designed to make the hiring journey
              simpler for job seekers and employers by bringing opportunities
              and talent together in one place.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}

      <main
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-12
        sm:py-16
      "
      >
        {/* ================= WHO WE ARE ================= */}

        <section
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          lg:gap-12
          items-center
        "
        >
          <div>
            <p
              className="
              text-emerald-600
              text-sm
              font-semibold
              uppercase
              tracking-wide
              mb-3
            "
            >
              Who We Are
            </p>

            <h2
              className="
              text-3xl
              sm:text-4xl
              font-bold
              text-slate-900
              leading-tight
            "
            >
              Making the job search
              <span className="text-emerald-600"> simpler.</span>
            </h2>

            <p
              className="
              text-gray-500
              leading-7
              mt-5
            "
            >
              Finding the right job can be challenging. TalentBridge brings job
              seekers and employers together through a simple and easy-to-use
              platform where opportunities can be discovered and applications
              can be managed efficiently.
            </p>

            <p
              className="
              text-gray-500
              leading-7
              mt-4
            "
            >
              Our goal is to create a smoother experience for everyone involved
              in the hiring journey.
            </p>
          </div>

          {/* Visual Card */}

          <div
            className="
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-br
            from-emerald-800
            via-emerald-700
            to-teal-700
            min-h-[300px]
            flex
            items-center
            justify-center
            p-8
          "
          >
            <div
              className="
              absolute
              -top-20
              -right-20
              w-56
              h-56
              rounded-full
              border
              border-white/10
            "
            ></div>

            <div
              className="
              absolute
              -bottom-24
              -left-20
              w-64
              h-64
              rounded-full
              bg-white/5
            "
            ></div>

            <div
              className="
              relative
              text-center
              max-w-sm
            "
            >
              <div
                className="
                w-16
                h-16
                mx-auto
                rounded-2xl
                bg-white/10
                border
                border-white/20
                flex
                items-center
                justify-center
                text-3xl
                mb-6
              "
              >
                💼
              </div>

              <h3
                className="
                text-2xl
                sm:text-3xl
                font-bold
                text-white
              "
              >
                Your next opportunity
                <br />
                starts here.
              </h3>

              <p
                className="
                text-emerald-50/70
                mt-4
                leading-6
              "
              >
                Discover opportunities that can take your career forward.
              </p>
            </div>
          </div>
        </section>

        {/* ================= WHAT WE DO ================= */}

        <section className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <p
              className="
              text-emerald-600
              text-sm
              font-semibold
              uppercase
              tracking-wide
            "
            >
              What We Do
            </p>

            <h2
              className="
              text-3xl
              sm:text-4xl
              font-bold
              text-slate-900
              mt-3
            "
            >
              Built for both sides of the
              <span className="text-emerald-600"> hiring journey.</span>
            </h2>

            <p
              className="
              text-gray-500
              leading-7
              mt-4
            "
            >
              Whether you're searching for your next role or looking for the
              right person to join your team, TalentBridge helps make the
              process easier.
            </p>
          </div>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            mt-10
          "
          >
            {/* Job Seekers */}

            <div
              className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-7
              shadow-sm
              hover:shadow-md
              transition
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
              "
              >
                👨‍💼
              </div>

              <h3
                className="
                text-xl
                font-semibold
                text-slate-900
                mt-5
              "
              >
                For Job Seekers
              </h3>

              <p
                className="
                text-gray-500
                leading-6
                mt-3
              "
              >
                Explore relevant job opportunities, discover companies and take
                the next step towards your career goals.
              </p>
            </div>

            {/* Employers */}

            <div
              className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-7
              shadow-sm
              hover:shadow-md
              transition
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
              "
              >
                🏢
              </div>

              <h3
                className="
                text-xl
                font-semibold
                text-slate-900
                mt-5
              "
              >
                For Employers
              </h3>

              <p
                className="
                text-gray-500
                leading-6
                mt-3
              "
              >
                Post job opportunities, connect with candidates and manage
                applications from one convenient platform.
              </p>
            </div>
          </div>
        </section>

        {/* ================= OUR MISSION ================= */}

        <section
          className="
          mt-16
          sm:mt-20
          bg-white
          border
          border-gray-200
          rounded-3xl
          p-7
          sm:p-10
          text-center
          shadow-sm
        "
        >
          <div
            className="
            w-14
            h-14
            mx-auto
            rounded-2xl
            bg-emerald-50
            border
            border-emerald-100
            flex
            items-center
            justify-center
            text-2xl
          "
          >
            🎯
          </div>

          <p
            className="
            text-emerald-600
            text-sm
            font-semibold
            uppercase
            tracking-wide
            mt-5
          "
          >
            Our Mission
          </p>

          <h2
            className="
            text-2xl
            sm:text-3xl
            font-bold
            text-slate-900
            mt-2
          "
          >
            Helping people move forward.
          </h2>

          <p
            className="
            max-w-2xl
            mx-auto
            text-gray-500
            leading-7
            mt-4
          "
          >
            We believe finding an opportunity should be simple, accessible and
            focused on helping people build a better professional future.
          </p>
        </section>

        {/* ================= CTA ================= */}

        <section
          className="
          mt-10
          rounded-3xl
          bg-gradient-to-r
          from-emerald-600
          to-teal-600
          p-7
          sm:p-10
          text-center
          text-white
        "
        >
          <h2
            className="
            text-2xl
            sm:text-3xl
            font-bold
          "
          >
            Ready to find your next opportunity?
          </h2>

          <p
            className="
            text-emerald-50/80
            mt-3
          "
          >
            Explore jobs and take the next step in your career.
          </p>

          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              mt-6
              bg-white
              text-emerald-700
              hover:bg-emerald-50
              px-6
              py-3
              rounded-xl
              font-semibold
              text-sm
              transition-all
            "
          >
            Explore Jobs →
          </Link>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
