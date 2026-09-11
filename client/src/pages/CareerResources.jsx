import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CareerResources = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <section className="container px-4 2xl:px-20 mx-auto pt-10 sm:pt-12">
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
            py-10
            sm:py-14
          "
        >
          {/* Background Decorations */}
          <div
            className="
              absolute
              -top-28
              -right-20
              w-72
              h-72
              bg-emerald-200/30
              rounded-full
              blur-3xl
            "
          ></div>

          <div
            className="
              absolute
              -bottom-32
              left-1/3
              w-80
              h-80
              bg-blue-200/20
              rounded-full
              blur-3xl
            "
          ></div>

          <div className="absolute top-12 right-16 w-3 h-3 bg-emerald-400 rounded-full"></div>

          <div className="absolute top-24 right-28 w-2 h-2 bg-emerald-300 rounded-full"></div>

          <div className="absolute bottom-12 right-1/3 w-2.5 h-2.5 bg-blue-300 rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
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
                shadow-sm
                mb-5
              "
            >
              <span>📚</span>
              Career Resources
            </div>

            {/* Heading */}
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
              Grow Your Skills.
              <br className="hidden sm:block" />
              <span className="text-emerald-600">Build Your Career.</span>
            </h1>

            {/* Description */}
            <p
              className="
                text-slate-600
                text-sm
                sm:text-base
                leading-relaxed
                max-w-2xl
                mt-5
              "
            >
              Practical guidance to help you prepare for opportunities, present
              yourself with confidence, and take the next step in your career.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 2xl:px-20 mx-auto py-12 sm:py-16">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div
            className="
              inline-flex
              items-center
              justify-center
              w-12
              h-12
              rounded-2xl
              bg-emerald-50
              border border-emerald-100
              text-2xl
              mb-4
            "
          >
            🚀
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Resources for Your Next Career Move
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed mt-3">
            Whether you are searching for your first job or preparing for your
            next opportunity, use these resources to improve your job-search
            journey.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {/* Resume */}
          <div
            className="
              group
              bg-white
              border border-gray-200
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
                border border-emerald-100
                flex
                items-center
                justify-center
                text-xl
                mb-5
              "
            >
              📄
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Resume Preparation
            </h3>

            <p className="text-sm text-slate-500 leading-6 mt-2">
              Make your resume clear, relevant and easy for recruiters to
              understand. Highlight your skills, experience and achievements.
            </p>

            <div className="mt-5 text-emerald-600 text-sm font-medium">
              Build a stronger resume →
            </div>
          </div>

          {/* Interview */}
          <div
            className="
              group
              bg-white
              border border-gray-200
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
                border border-blue-100
                flex
                items-center
                justify-center
                text-xl
                mb-5
              "
            >
              🎤
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Interview Preparation
            </h3>

            <p className="text-sm text-slate-500 leading-6 mt-2">
              Prepare for interviews by understanding common questions,
              explaining your experience clearly and communicating with
              confidence.
            </p>

            <div className="mt-5 text-blue-600 text-sm font-medium">
              Prepare with confidence →
            </div>
          </div>

          {/* Career Planning */}
          <div
            className="
              group
              bg-white
              border border-gray-200
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
                border border-purple-100
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
              Career Planning
            </h3>

            <p className="text-sm text-slate-500 leading-6 mt-2">
              Identify the type of opportunities you want, understand your
              strengths and make a focused plan for your career growth.
            </p>

            <div className="mt-5 text-purple-600 text-sm font-medium">
              Plan your next step →
            </div>
          </div>

          {/* Job Search */}
          <div
            className="
              group
              bg-white
              border border-gray-200
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
                bg-orange-50
                border border-orange-100
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
              Smart Job Search
            </h3>

            <p className="text-sm text-slate-500 leading-6 mt-2">
              Search by job title, category and location to focus your job
              search on opportunities that are relevant to you.
            </p>

            <div className="mt-5 text-orange-600 text-sm font-medium">
              Search smarter →
            </div>
          </div>

          {/* Skills */}
          <div
            className="
              group
              bg-white
              border border-gray-200
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
                bg-pink-50
                border border-pink-100
                flex
                items-center
                justify-center
                text-xl
                mb-5
              "
            >
              💡
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Skills & Growth
            </h3>

            <p className="text-sm text-slate-500 leading-6 mt-2">
              Keep developing the technical and professional skills that can
              help you become a stronger candidate for future opportunities.
            </p>

            <div className="mt-5 text-pink-600 text-sm font-medium">
              Keep learning →
            </div>
          </div>

          {/* Applications */}
          <div
            className="
              group
              bg-white
              border border-gray-200
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
                bg-cyan-50
                border border-cyan-100
                flex
                items-center
                justify-center
                text-xl
                mb-5
              "
            >
              📌
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Job Applications
            </h3>

            <p className="text-sm text-slate-500 leading-6 mt-2">
              Keep track of the positions you apply for and stay organized
              throughout your job-search journey.
            </p>

            <div className="mt-5 text-cyan-600 text-sm font-medium">
              Stay organized →
            </div>
          </div>
        </div>

        {/* Career Journey Section */}
        <div
          className="
            max-w-6xl
            mx-auto
            mt-12
            rounded-3xl
            bg-gradient-to-br
            from-emerald-600
            to-emerald-700
            p-7
            sm:p-10
            text-white
            relative
            overflow-hidden
          "
        >
          {/* Decorations */}
          <div
            className="
              absolute
              -right-20
              -top-20
              w-64
              h-64
              rounded-full
              bg-white/10
            "
          ></div>

          <div
            className="
              absolute
              -left-20
              -bottom-24
              w-56
              h-56
              rounded-full
              bg-white/5
            "
          ></div>

          <div className="relative z-10 max-w-3xl">
            <div className="text-emerald-100 text-sm font-medium mb-3">
              ✦ Your Career Journey
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold">
              Learn. Prepare. Apply. Grow.
            </h2>

            <p className="text-emerald-50/90 text-sm sm:text-base leading-relaxed mt-3">
              Every career journey starts with a single step. Build your skills,
              prepare yourself for opportunities and keep moving forward.
            </p>

            <Link
              to="/jobs"
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                bg-white
                text-emerald-700
                px-5
                py-2.5
                rounded-xl
                text-sm
                font-semibold
                hover:bg-emerald-50
                transition
                shadow-sm
              "
            >
              Explore Jobs →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CareerResources;
