import Navbar from "../components/Navbar";
import JobListing from "../components/JobListing";
import Footer from "../components/Footer";

const Jobs = () => {
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
            py-10
            sm:py-12
          "
        >
          {/* Background Decorations */}
          <div
            className="
              absolute
              -top-24
              -right-20
              w-64
              h-64
              bg-emerald-200/30
              rounded-full
              blur-3xl
            "
          ></div>

          <div
            className="
              absolute
              -bottom-28
              left-1/3
              w-72
              h-72
              bg-blue-200/20
              rounded-full
              blur-3xl
            "
          ></div>

          <div className="absolute top-10 right-10 w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>

          <div className="absolute bottom-10 right-24 w-2 h-2 bg-emerald-300 rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
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
                mb-4
              "
            >
              <span>💼</span>
              Explore Opportunities
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
              Find Your Next
              <br className="hidden sm:block" />
              <span className="text-emerald-600"> Career Opportunity</span>
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
              Explore opportunities from leading companies and find a job that
              matches your skills, experience, and career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listing */}
      <JobListing />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Jobs;
