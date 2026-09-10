// import { useNavigate } from 'react-router-dom'

// const JobCard = ({ job }) => {

//   const navigate = useNavigate()

//   return (
//     <div className='border p-6 shadow rounded'>
//       <div className='flex justify-between items-center'>
//         <img className='h-8' src={job.companyId.image} alt="" />
//       </div>
//       <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
//       <div className='flex items-center gap-3 mt-2 text-xs'>
//         <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>{job.location}</span>
//         <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>{job.level}</span>
//       </div>
//       <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}></p>
//       <div className='mt-4 flex gap-4 text-sm'>
//         <button onClick={() => { navigate(`/apply-job/${job._id}`); scrollTo(0, 0) }} className='bg-blue-600 text-white px-4 py-2 rounded'>Apply now</button>
//         <button onClick={() => { navigate(`/apply-job/${job._id}`); scrollTo(0, 0) }} className='text-gray-500 border border-gray-500 rounded px-4 py-2'>Learn more</button>
//       </div>
//     </div>
//   )
// }

// export default JobCard

// import { useNavigate } from "react-router-dom";

// const JobCard = ({ job }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="
//                 group
//                 bg-white
//                 border border-gray-200
//                 rounded-2xl
//                 p-5
//                 shadow-sm
//                 hover:shadow-lg
//                 hover:-translate-y-1
//                 transition-all
//                 duration-200
//                 flex
//                 flex-col
//                 min-h-[290px]
//             "
//     >
//       {/* Company logo + bookmark */}

//       <div className="flex items-start">
//         <div
//           className="
//                         w-12 h-12
//                         rounded-xl
//                         bg-gray-50
//                         border border-gray-100
//                         flex
//                         items-center
//                         justify-center
//                     "
//         >
//           <img
//             className="
//                             max-w-8
//                             max-h-8
//                             object-contain
//                         "
//             src={job.companyId.image}
//             alt=""
//           />
//         </div>
//       </div>

//       {/* Job title */}

//       <h4
//         className="
//                     font-semibold
//                     text-lg
//                     text-slate-900
//                     mt-4
//                     line-clamp-1
//                 "
//       >
//         {job.title}
//       </h4>

//       {/* Location + Level */}

//       <div
//         className="
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-2
//                 mt-3
//             "
//       >
//         <span
//           className="
//                         bg-blue-50
//                         border border-blue-200
//                         text-blue-700
//                         text-xs
//                         px-3
//                         py-1.5
//                         rounded-lg
//                     "
//         >
//           {job.location}
//         </span>

//         <span
//           className="
//                         bg-red-50
//                         border border-red-200
//                         text-red-700
//                         text-xs
//                         px-3
//                         py-1.5
//                         rounded-lg
//                     "
//         >
//           {job.level}
//         </span>
//       </div>

//       {/* Description */}

//       <div
//         className="
//                     text-gray-500
//                     text-xs
//                     leading-5
//                     mt-4
//                     line-clamp-3
//                 "
//         dangerouslySetInnerHTML={{
//           __html: job.description.slice(0, 150),
//         }}
//       />

//       {/* Buttons */}

//       <div
//         className="
//                 mt-auto
//                 pt-5
//                 flex
//                 gap-2
//             "
//       >
//         <button
//           onClick={() => {
//             navigate(`/apply-job/${job._id}`);
//             scrollTo(0, 0);
//           }}
//           className="
//                         bg-blue-600
//                         hover:bg-blue-700
//                         text-white
//                         text-sm
//                         font-medium
//                         px-4
//                         py-2.5
//                         rounded-lg
//                         transition
//                         flex-1
//                     "
//         >
//           Apply now
//         </button>

//         <button
//           onClick={() => {
//             navigate(`/apply-job/${job._id}`);
//             scrollTo(0, 0);
//           }}
//           className="
//                         bg-white
//                         hover:bg-gray-50
//                         text-slate-600
//                         border border-gray-300
//                         text-sm
//                         font-medium
//                         px-4
//                         py-2.5
//                         rounded-lg
//                         transition
//                         flex-1
//                     "
//         >
//           Learn more
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobCard;

// import { useNavigate } from 'react-router-dom'

// const JobCard = ({ job }) => {

//     const navigate = useNavigate()

//     return (
//         <div
//             className='
//                 group
//                 relative
//                 bg-white
//                 border border-gray-200
//                 rounded-2xl
//                 p-5
//                 shadow-sm
//                 hover:shadow-xl
//                 hover:-translate-y-1
//                 transition-all
//                 duration-300
//                 flex
//                 flex-col
//                 min-h-[310px]
//                 overflow-hidden
//             '
//         >

//             {/* Decorative Background */}
//             <div
//                 className='
//                     absolute
//                     top-0
//                     right-0
//                     w-24
//                     h-24
//                     bg-emerald-50
//                     rounded-bl-full
//                     opacity-70
//                     pointer-events-none
//                 '
//             ></div>

//             {/* Company Info */}
//             <div className='relative flex items-start justify-between'>

//                 <div className='flex items-center gap-3'>

//                     {/* Company Logo */}
//                     <div
//                         className='
//                             w-12 h-12
//                             rounded-xl
//                             bg-gray-50
//                             border border-gray-100
//                             flex
//                             items-center
//                             justify-center
//                             group-hover:border-emerald-200
//                             transition
//                         '
//                     >
//                         <img
//                             className='
//                                 max-w-8
//                                 max-h-8
//                                 object-contain
//                             '
//                             src={job.companyId.image}
//                             alt=''
//                         />
//                     </div>

//                     {/* Company Name */}
//                     <div>

//                         <div className='flex items-center gap-1.5'>

//                             <p
//                                 className='
//                                     text-sm
//                                     font-semibold
//                                     text-slate-800
//                                     line-clamp-1
//                                 '
//                             >
//                                 {job.companyId.name}
//                             </p>

//                             {/* Verified Badge */}
//                             <span
//                                 className='
//                                     w-4 h-4
//                                     rounded-full
//                                     bg-emerald-100
//                                     text-emerald-600
//                                     text-[10px]
//                                     flex
//                                     items-center
//                                     justify-center
//                                     font-bold
//                                 '
//                             >
//                                 ✓
//                             </span>

//                         </div>

//                         <p className='text-xs text-gray-400 mt-0.5'>
//                             Top company
//                         </p>

//                     </div>

//                 </div>

//             </div>

//             {/* Job Title */}
//             <h4
//                 className='
//                     relative
//                     font-semibold
//                     text-lg
//                     text-slate-900
//                     mt-5
//                     line-clamp-1
//                     group-hover:text-emerald-700
//                     transition
//                 '
//             >
//                 {job.title}
//             </h4>

//             {/* Location + Level */}
//             <div className='relative flex flex-wrap items-center gap-2 mt-3'>

//                 {/* Location */}
//                 <span
//                     className='
//                         inline-flex
//                         items-center
//                         gap-1.5
//                         bg-emerald-50
//                         border border-emerald-200
//                         text-emerald-700
//                         text-xs
//                         font-medium
//                         px-3
//                         py-1.5
//                         rounded-lg
//                     '
//                 >
//                     <span className='text-sm'>⌖</span>
//                     {job.location}
//                 </span>

//                 {/* Level */}
//                 <span
//                     className='
//                         inline-flex
//                         items-center
//                         gap-1.5
//                         bg-red-50
//                         border border-red-200
//                         text-red-700
//                         text-xs
//                         font-medium
//                         px-3
//                         py-1.5
//                         rounded-lg
//                     '
//                 >
//                     <span className='text-sm'>◈</span>
//                     {job.level}
//                 </span>

//             </div>

//             {/* Small Divider */}
//             <div className='border-t border-gray-100 mt-4'></div>

//             {/* Job Description */}
//             <div
//                 className='
//                     relative
//                     text-gray-500
//                     text-xs
//                     leading-5
//                     mt-4
//                     line-clamp-3
//                 '
//                 dangerouslySetInnerHTML={{
//                     __html: job.description.slice(0, 170)
//                 }}
//             />

//             {/* Bottom Actions */}
//             <div className='relative mt-auto pt-5 flex gap-2'>

//                 {/* Apply */}
//                 <button
//                     onClick={() => {
//                         navigate(`/apply-job/${job._id}`)
//                         scrollTo(0, 0)
//                     }}
//                     className='
//                         bg-emerald-600
//                         hover:bg-emerald-700
//                         active:bg-emerald-800
//                         text-white
//                         text-sm
//                         font-medium
//                         px-4
//                         py-2.5
//                         rounded-lg
//                         transition-all
//                         duration-200
//                         flex-1
//                         shadow-sm
//                         hover:shadow-md
//                     '
//                 >
//                     Apply now →
//                 </button>

//                 {/* Learn More */}
//                 <button
//                     onClick={() => {
//                         navigate(`/apply-job/${job._id}`)
//                         scrollTo(0, 0)
//                     }}
//                     className='
//                         bg-white
//                         hover:bg-emerald-50
//                         text-emerald-700
//                         border border-emerald-300
//                         text-sm
//                         font-medium
//                         px-4
//                         py-2.5
//                         rounded-lg
//                         transition-all
//                         duration-200
//                         flex-1
//                     '
//                 >
//                     Learn more
//                 </button>

//             </div>

//         </div>
//     )
// }

// export default JobCard

import { useNavigate } from "react-router-dom";
import moment from "moment";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

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
              className="
                                max-w-8
                                max-h-8
                                object-contain
                            "
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
    '
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
        {/* Apply */}
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="
                        bg-emerald-600
                        hover:bg-emerald-700
                        active:bg-emerald-800
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
                        hover:shadow-md
                    "
        >
          Apply now →
        </button>

        {/* Learn More */}
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
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
