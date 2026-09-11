import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);

  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // Category filter
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  // Location filter
  const handleLocationChange = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((c) => c !== location)
        : [...prev, location],
    );
  };

  // Filter jobs
  useEffect(() => {
    const matchesCategory = (job) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(job.category);

    const matchesLocation = (job) =>
      selectedLocations.length === 0 ||
      selectedLocations.includes(job.location);

    const matchesTitle = (job) =>
      searchFilter.title === "" ||
      job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

    const matchesSearchLocation = (job) =>
      searchFilter.location === "" ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilteredJobs = jobs
      .slice()
      .filter(
        (job) =>
          matchesCategory(job) &&
          matchesLocation(job) &&
          matchesTitle(job) &&
          matchesSearchLocation(job),
      )
      .sort((a, b) => b.date - a.date);

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategories, selectedLocations, searchFilter]);

  const totalPages = Math.ceil(filteredJobs.length / 6);

  return (
    <div
      className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        py-6
        flex flex-col lg:flex-row
        gap-8
      "
    >
      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <aside className="w-full lg:w-64 shrink-0">
        <div
          className="
            bg-white
            border border-gray-200
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          {/* Sidebar Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
              <span className="text-lg">⚙️</span>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Filters
              </h3>

              <p className="text-xs text-slate-400">Find your perfect job</p>
            </div>
          </div>

          {/* ================================================= */}
          {/* CURRENT SEARCH */}
          {/* ================================================= */}

          {isSearched &&
            (searchFilter.title !== "" || searchFilter.location !== "") && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-800 mb-3">
                  Current Search
                </h3>

                <div className="flex flex-wrap gap-2">
                  {searchFilter.title && (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        bg-emerald-50
                        border border-emerald-200
                        text-emerald-700
                        text-xs
                        px-3 py-1.5
                        rounded-full
                      "
                    >
                      {searchFilter.title}

                      <img
                        onClick={() =>
                          setSearchFilter((prev) => ({
                            ...prev,
                            title: "",
                          }))
                        }
                        className="
                          w-3
                          cursor-pointer
                          opacity-60
                          hover:opacity-100
                        "
                        src={assets.cross_icon}
                        alt=""
                      />
                    </span>
                  )}

                  {searchFilter.location && (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        bg-red-50
                        border border-red-200
                        text-red-700
                        text-xs
                        px-3 py-1.5
                        rounded-full
                      "
                    >
                      {searchFilter.location}

                      <img
                        onClick={() =>
                          setSearchFilter((prev) => ({
                            ...prev,
                            location: "",
                          }))
                        }
                        className="
                          w-3
                          cursor-pointer
                          opacity-60
                          hover:opacity-100
                        "
                        src={assets.cross_icon}
                        alt=""
                      />
                    </span>
                  )}
                </div>
              </div>
            )}

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className="
              w-full
              mb-5
              lg:hidden
              border border-emerald-200
              bg-emerald-50
              text-emerald-700
              rounded-xl
              py-2.5
              text-sm
              font-medium
              hover:bg-emerald-100
              transition
            "
          >
            {showFilter ? "Close Filters" : "Filters"}
          </button>

          {/* Filters */}
          <div className={showFilter ? "block" : "max-lg:hidden"}>
            {/* ================================================= */}
            {/* CATEGORIES */}
            {/* ================================================= */}

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <span className="text-sm">🏷️</span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-800">
                    Search by Categories
                  </h4>

                  <div className="w-8 h-0.5 bg-emerald-500 mt-1 rounded-full"></div>
                </div>
              </div>

              <ul className="space-y-1.5">
                {JobCategories.map((category, index) => (
                  <li key={index}>
                    <label
                      className={`
                        flex
                        items-center
                        gap-3
                        px-3
                        py-2
                        rounded-lg
                        cursor-pointer
                        transition
                        ${
                          selectedCategories.includes(category)
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-slate-600 hover:bg-gray-50"
                        }
                      `}
                    >
                      <input
                        className="
                          w-4 h-4
                          accent-emerald-600
                          cursor-pointer
                          shrink-0
                        "
                        type="checkbox"
                        onChange={() => handleCategoryChange(category)}
                        checked={selectedCategories.includes(category)}
                      />

                      <span className="text-sm">{category}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================================================= */}
            {/* DIVIDER */}
            {/* ================================================= */}

            <div className="border-t border-gray-100 my-6"></div>

            {/* ================================================= */}
            {/* LOCATIONS */}
            {/* ================================================= */}

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <span className="text-sm">📍</span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-800">
                    Search by Location
                  </h4>

                  <div className="w-8 h-0.5 bg-emerald-500 mt-1 rounded-full"></div>
                </div>
              </div>

              <ul className="space-y-1.5">
                {JobLocations.map((location, index) => (
                  <li key={index}>
                    <label
                      className={`
                        flex
                        items-center
                        gap-3
                        px-3
                        py-2
                        rounded-lg
                        cursor-pointer
                        transition
                        ${
                          selectedLocations.includes(location)
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-slate-600 hover:bg-gray-50"
                        }
                      `}
                    >
                      <input
                        className="
                          w-4 h-4
                          accent-emerald-600
                          cursor-pointer
                          shrink-0
                        "
                        type="checkbox"
                        onChange={() => handleLocationChange(location)}
                        checked={selectedLocations.includes(location)}
                      />

                      <span className="text-sm">{location}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================================================= */}
            {/* CLEAR FILTERS */}
            {/* ================================================= */}

            {(selectedCategories.length > 0 ||
              selectedLocations.length > 0) && (
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedLocations([]);
                }}
                className="
                  w-full
                  mt-6
                  border border-emerald-200
                  bg-emerald-50
                  text-emerald-700
                  rounded-xl
                  py-2.5
                  text-sm
                  font-medium
                  hover:bg-emerald-100
                  transition
                "
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* ================================================= */}
      {/* JOB LISTING */}
      {/* ================================================= */}

      <section className="flex-1 min-w-0">
        {/* Header */}
        <div id="job-list" className="mb-6">
          <div>
            <h3
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-slate-900
              "
            >
              Latest jobs
            </h3>

            <p
              className="
                text-sm
                text-slate-500
                mt-1
              "
            >
              Get your desired job from top companies
            </p>
          </div>
        </div>

        {/* Jobs */}
        {filteredJobs.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              gap-5
            "
          >
            {filteredJobs
              .slice((currentPage - 1) * 6, currentPage * 6)
              .map((job, index) => (
                <JobCard key={job._id || index} job={job} />
              ))}
          </div>
        ) : (
          <div
            className="
              bg-white
              border border-gray-200
              rounded-2xl
              p-10
              text-center
            "
          >
            <h3
              className="
                text-lg
                font-semibold
                text-slate-800
              "
            >
              No jobs found
            </h3>

            <p
              className="
                text-sm
                text-slate-500
                mt-2
              "
            >
              Try changing your search or filters.
            </p>
          </div>
        )}

        {/* ================================================= */}
        {/* PAGINATION */}
        {/* ================================================= */}

        {filteredJobs.length > 0 && (
          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              mt-10
            "
          >
            {/* Previous */}
            <button
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="
                w-9 h-9
                flex
                items-center
                justify-center
                rounded-lg
                border border-gray-300
                bg-white
                hover:bg-gray-50
                disabled:opacity-40
                disabled:cursor-not-allowed
                transition
              "
            >
              <img
                className="w-4"
                src={assets.left_arrow_icon}
                alt="Previous"
              />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`
                  w-9 h-9
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  border
                  text-sm
                  transition
                  ${
                    currentPage === index + 1
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-slate-600 border-gray-300 hover:bg-gray-50"
                  }
                `}
              >
                {index + 1}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() =>
                setCurrentPage(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="
                w-9 h-9
                flex
                items-center
                justify-center
                rounded-lg
                border border-gray-300
                bg-white
                hover:bg-gray-50
                disabled:opacity-40
                disabled:cursor-not-allowed
                transition
              "
            >
              <img className="w-4" src={assets.right_arrow_icon} alt="Next" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
