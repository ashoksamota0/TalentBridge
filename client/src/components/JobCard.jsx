import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useClerk } from "@clerk/clerk-react";
import moment from "moment";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const { getToken } = useAuth();
  const { openSignIn } = useClerk();

  const { backendUrl, userData, userApplications, fetchUserApplications } =
    useContext(AppContext);

  const [isAlreadyApplied, setIsAlreadyApplied] = useState(false);
  const [isApplying, setIsApplying] = useState(false);

  // Check whether current user has already applied for this job
  useEffect(() => {
    const hasApplied = userApplications.some(
      (application) => application.jobId && application.jobId._id === job._id,
    );

    setIsAlreadyApplied(hasApplied);
  }, [userApplications, job._id]);

  // Direct Apply
  const applyHandler = async () => {
    try {
      // Candidate is not logged in
      if (!userData) {
        openSignIn();
        return;
      }

      // Already applied
      if (isAlreadyApplied) {
        toast.info("Already Applied");
        return;
      }

      // Resume is required
      if (!userData.resume) {
        toast.error("Upload resume to apply");
        navigate("/applications");
        scrollTo(0, 0);
        return;
      }

      setIsApplying(true);

      const token = await getToken();

      const { data } = await axios.post(
        backendUrl + "/api/users/apply",
        {
          jobId: job._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (data.success) {
        setIsAlreadyApplied(true);

        toast.success("Applied Successfully");

        // Refresh applications so other cards also update
        await fetchUserApplications();
      } else if (data.message === "Already Applied") {
        setIsAlreadyApplied(true);
        toast.info("Already Applied");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsApplying(false);
    }
  };

  // Open Job Details
  const learnMoreHandler = () => {
    navigate(`/apply-job/${job._id}`);
    scrollTo(0, 0);
  };

  return (
    <div
      className="
        group
        relative
        bg-white
        border border-gray-200
        rounded-2xl
        p-5
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        flex-col
        min-h-[310px]
        overflow-hidden
      "
    >
      {/* Decorative Background */}
      <div
        className="
          absolute
          top-0
          right-0
          w-24
          h-24
          bg-emerald-50
          rounded-bl-full
          opacity-70
          pointer-events-none
        "
      ></div>

      {/* Company Info */}
      <div className="relative flex items-start">
        <div className="flex items-center gap-3">
          {/* Company Logo */}
          <div
            className="
              w-12 h-12
              rounded-xl
              bg-gray-50
              border border-gray-100
              flex
              items-center
              justify-center
              group-hover:border-emerald-200
              transition
            "
          >
            <img
              className="max-w-8 max-h-8 object-contain"
              src={job.companyId.image}
              alt=""
            />
          </div>

          {/* Company Name + Posted Date */}
          <div>
            <div className="flex items-center gap-1.5">
              <p
                className="
                  text-sm
                  font-semibold
                  text-slate-800
                  line-clamp-1
                "
              >
                {job.companyId.name}
              </p>

              {/* Verified Mark */}
              <span
                className="
                  w-4
                  h-4
                  bg-emerald-500
                  text-white
                  text-[9px]
                  font-bold
                  flex
                  items-center
                  justify-center
                  [clip-path:polygon(50%_0%,61%_8%,75%_6%,84%_17%,96%_25%,92%_39%,100%_50%,92%_61%,96%_75%,84%_83%,75%_94%,61%_92%,50%_100%,39%_92%,25%_94%,16%_83%,4%_75%,8%_61%,0%_50%,8%_39%,4%_25%,16%_17%,25%_6%,39%_8%)]
                "
              >
                ✓
              </span>
            </div>

            <p className="text-xs text-gray-400 mt-0.5">
              Posted {moment(job.date).fromNow()}
            </p>
          </div>
        </div>
      </div>

      {/* Job Title */}
      <h4
        className="
          relative
          font-semibold
          text-lg
          text-slate-900
          mt-5
          line-clamp-1
          group-hover:text-emerald-700
          transition
        "
      >
        {job.title}
      </h4>

      {/* Location + Level */}
      <div className="relative flex flex-wrap items-center gap-2 mt-3">
        {/* Location */}
        <span
          className="
            inline-flex
            items-center
            gap-1.5
            bg-emerald-50
            border border-emerald-200
            text-emerald-700
            text-xs
            font-medium
            px-3
            py-1.5
            rounded-lg
          "
        >
          <span className="text-sm">⌖</span>
          {job.location}
        </span>

        {/* Level */}
        <span
          className={`
            inline-flex
            items-center
            gap-1.5
            text-xs
            font-medium
            px-3
            py-1.5
            rounded-lg
            ${
              job.level === "Beginner level"
                ? "bg-blue-50 border border-blue-200 text-blue-700"
                : job.level === "Intermediate level"
                  ? "bg-orange-50 border border-orange-200 text-orange-700"
                  : "bg-purple-50 border border-purple-200 text-purple-700"
            }
          `}
        >
          <span className="text-sm">◈</span>
          {job.level}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 mt-4"></div>

      {/* Job Description */}
      <div
        className="
          relative
          text-gray-500
          text-xs
          leading-5
          mt-4
          line-clamp-3
        "
        dangerouslySetInnerHTML={{
          __html: job.description.slice(0, 170),
        }}
      />

      {/* Buttons */}
      <div className="relative mt-auto pt-5 flex gap-2">
        {/* Direct Apply */}
        <button
          onClick={applyHandler}
          disabled={isApplying || isAlreadyApplied}
          className={`
            text-white
            text-sm
            font-medium
            px-4
            py-2.5
            rounded-lg
            transition-all
            duration-200
            flex-1
            shadow-sm
            ${
              isAlreadyApplied
                ? "bg-emerald-500 cursor-not-allowed"
                : isApplying
                  ? "bg-emerald-500 cursor-wait"
                  : "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 hover:shadow-md"
            }
          `}
        >
          {isAlreadyApplied
            ? "Already Applied"
            : isApplying
              ? "Applying..."
              : "Apply now →"}
        </button>

        {/* Learn More */}
        <button
          onClick={learnMoreHandler}
          className="
            bg-white
            hover:bg-emerald-50
            text-emerald-700
            border border-emerald-300
            text-sm
            font-medium
            px-4
            py-2.5
            rounded-lg
            transition-all
            duration-200
            flex-1
          "
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;
