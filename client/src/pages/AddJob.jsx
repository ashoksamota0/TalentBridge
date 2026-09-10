// import { useContext, useEffect, useRef, useState } from 'react'
// import Quill from 'quill'
// import { JobCategories, JobLocations } from '../assets/assets';
// import axios from 'axios';
// import { AppContext } from '../context/AppContext';
// import { toast } from 'react-toastify';

// const AddJob = () => {

//     const [title, setTitle] = useState('');
//     const [location, setLocation] = useState('Bangalore');
//     const [category, setCategory] = useState('Programming');
//     const [level, setLevel] = useState('Beginner level');
//     const [salary, setSalary] = useState(0);

//     const editorRef = useRef(null)
//     const quillRef = useRef(null)

//     const { backendUrl, companyToken } = useContext(AppContext)

//     const onSubmitHandler = async (e) => {
//         e.preventDefault()

//         try {

//             const description = quillRef.current.root.innerHTML

//             const { data } = await axios.post(backendUrl + '/api/company/post-job',
//                 { title, description, location, salary, category, level },
//                 { headers: { token: companyToken } }
//             )

//             if (data.success) {
//                 toast.success(data.message)
//                 setTitle('')
//                 setSalary(0)
//                 quillRef.current.root.innerHTML = ""
//             } else {
//                 toast.error(data.message)
//             }

//         } catch (error) {
//             toast.error(error.message)
//         }

//     }

//     useEffect(() => {
//         // Initiate Qill only once
//         if (!quillRef.current && editorRef.current) {
//             quillRef.current = new Quill(editorRef.current, {
//                 theme: 'snow',
//             })
//         }
//     }, [])

//     return (
//         <form onSubmit={onSubmitHandler} className='container p-4 flex flex-col w-full items-start gap-3'>

//             <div className='w-full'>
//                 <p className='mb-2'>Job Title</p>
//                 <input type="text" placeholder='Type here'
//                     onChange={e => setTitle(e.target.value)} value={title}
//                     required
//                     className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'
//                 />
//             </div>

//             <div className='w-full max-w-lg'>
//                 <p className='my-2'>Job Description</p>
//                 <div ref={editorRef}>

//                 </div>
//             </div>

//             <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

//                 <div>
//                     <p className='mb-2'>Job Category</p>
//                     <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setCategory(e.target.value)}>
//                         {JobCategories.map((category, index) => (
//                             <option key={index} value={category}>{category}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <div>
//                     <p className='mb-2'>Job Location</p>
//                     <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLocation(e.target.value)}>
//                         {JobLocations.map((location, index) => (
//                             <option key={index} value={location}>{location}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <div>
//                     <p className='mb-2'>Job Level</p>
//                     <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLevel(e.target.value)}>
//                         <option value="Beginner level">Beginner level</option>
//                         <option value="Intermediate level">Intermediate level</option>
//                         <option value="Senior level">Senior level</option>
//                     </select>
//                 </div>

//             </div>
//             <div>
//                 <p className='mb-2'>Job Salary</p>
//                 <input min={0} className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]' onChange={e => setSalary(e.target.value)} type="Number" placeholder='2500' />
//             </div>

//             <button className='w-28 py-3 mt-4 bg-black text-white rounded'>ADD</button>
//         </form>
//     )
// }

// export default AddJob

import { useContext, useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner level");
  const [employmentType, setEmploymentType] = useState("Full-time");
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const { backendUrl, companyToken } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const description = quillRef.current.root.innerHTML;

      const { data } = await axios.post(
        backendUrl + "/api/company/post-job",
        {
          title,
          description,
          location,
          salary,
          category,
          level,
          employmentType,
        },
        {
          headers: { token: companyToken },
        },
      );

      if (data.success) {
        toast.success(data.message);

        setTitle("");
        setSalary(0);
        quillRef.current.root.innerHTML = "";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // Initiate Quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="container p-4 flex flex-col w-full items-start gap-3"
    >
      {/* Job Title */}
      <div className="w-full">
        <p className="mb-2">Job Title</p>

        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className="
                        w-full
                        max-w-lg
                        px-3
                        py-2
                        border-2
                        border-gray-300
                        rounded
                    "
        />
      </div>

      {/* Job Description */}
      <div className="w-full max-w-lg">
        <p className="my-2">Job Description</p>

        <div ref={editorRef}></div>
      </div>

      {/* Job Details */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        {/* Category */}
        <div>
          <p className="mb-2">Job Category</p>

          <select
            className="
                            w-full
                            px-3
                            py-2
                            border-2
                            border-gray-300
                            rounded
                        "
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <p className="mb-2">Job Location</p>

          <select
            className="
                            w-full
                            px-3
                            py-2
                            border-2
                            border-gray-300
                            rounded
                        "
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {JobLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Job Level */}
        <div>
          <p className="mb-2">Job Level</p>

          <select
            className="
                            w-full
                            px-3
                            py-2
                            border-2
                            border-gray-300
                            rounded
                        "
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="Beginner level">Beginner level</option>

            <option value="Intermediate level">Intermediate level</option>

            <option value="Senior level">Senior level</option>
          </select>
        </div>

        {/* Employment Type */}
        <div>
          <p className="mb-2">Employment Type</p>

          <select
            className="
                            w-full
                            px-3
                            py-2
                            border-2
                            border-gray-300
                            rounded
                        "
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
          >
            <option value="Full-time">Full-time</option>

            <option value="Part-time">Part-time</option>

            <option value="Internship">Internship</option>
          </select>
        </div>
      </div>

      {/* Salary */}
      <div>
        <p className="mb-2">Job Salary</p>

        <input
          min={0}
          className="
                        w-full
                        px-3
                        py-2
                        border-2
                        border-gray-300
                        rounded
                        sm:w-[120px]
                    "
          onChange={(e) => setSalary(e.target.value)}
          value={salary}
          type="number"
          placeholder="2500"
          required
        />
      </div>

      {/* Add Button */}
      <button
        className="
                    w-28
                    py-3
                    mt-4
                    bg-emerald-600
                    hover:bg-emerald-700
                    text-white
                    rounded-lg
                    transition
                "
      >
        ADD
      </button>
    </form>
  );
};

export default AddJob;
