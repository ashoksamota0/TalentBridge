// import { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Contact form backend functionality can be connected later.
//     console.log("Contact form submitted:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* ================= HERO ================= */}
//       <section
//         className="
//         relative
//         overflow-hidden
//         bg-gradient-to-br
//         from-emerald-50
//         via-green-50
//         to-blue-50
//         border-b
//         border-emerald-100
//       "
//       >
//         {/* Decorative circles */}
//         <div
//           className="
//           absolute
//           -top-24
//           -right-24
//           w-80
//           h-80
//           bg-emerald-200/30
//           rounded-full
//           blur-3xl
//         "
//         ></div>

//         <div
//           className="
//           absolute
//           -bottom-32
//           left-10
//           w-72
//           h-72
//           bg-blue-200/20
//           rounded-full
//           blur-3xl
//         "
//         ></div>

//         <div
//           className="
//           relative
//           max-w-7xl
//           mx-auto
//           px-4
//           sm:px-6
//           lg:px-8
//           py-16
//           sm:py-20
//         "
//         >
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
//               Get in Touch
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
//               We'd love to
//               <br />
//               <span className="text-emerald-600">hear from you.</span>
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
//               Have a question, suggestion or need help? Send us a message and
//               we'll be happy to hear from you.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= CONTACT CONTENT ================= */}
//       <main
//         className="
//         max-w-7xl
//         mx-auto
//         px-4
//         sm:px-6
//         lg:px-8
//         py-12
//         sm:py-16
//       "
//       >
//         <div
//           className="
//           grid
//           lg:grid-cols-[0.8fr_1.2fr]
//           gap-8
//           lg:gap-12
//           items-start
//         "
//         >
//           {/* ================= LEFT INFO ================= */}
//           <div>
//             <p
//               className="
//               text-sm
//               font-semibold
//               text-emerald-600
//               mb-2
//             "
//             >
//               CONTACT US
//             </p>

//             <h2
//               className="
//               text-3xl
//               sm:text-4xl
//               font-bold
//               text-slate-900
//             "
//             >
//               Let's start a
//               <span className="text-emerald-600"> conversation.</span>
//             </h2>

//             <p
//               className="
//               text-gray-500
//               leading-7
//               mt-5
//               max-w-md
//             "
//             >
//               Whether you're looking for your next opportunity or you're an
//               employer looking for great talent, we're here to help.
//             </p>

//             {/* Contact Cards */}
//             <div className="flex flex-col gap-4 mt-8">
//               {/* Email */}
//               <div
//                 className="
//                 bg-white
//                 border
//                 border-gray-200
//                 rounded-2xl
//                 p-5
//                 flex
//                 items-center
//                 gap-4
//                 shadow-sm
//               "
//               >
//                 <div
//                   className="
//                   w-12
//                   h-12
//                   shrink-0
//                   rounded-xl
//                   bg-emerald-50
//                   border
//                   border-emerald-100
//                   flex
//                   items-center
//                   justify-center
//                   text-xl
//                 "
//                 >
//                   ✉
//                 </div>

//                 <div>
//                   <p
//                     className="
//                     text-xs
//                     text-gray-400
//                     mb-1
//                   "
//                   >
//                     Email
//                   </p>

//                   <p
//                     className="
//                     text-sm
//                     font-medium
//                     text-slate-800
//                   "
//                   >
//                     support@talentbridge.com
//                   </p>
//                 </div>
//               </div>

//               {/* Support */}
//               <div
//                 className="
//                 bg-white
//                 border
//                 border-gray-200
//                 rounded-2xl
//                 p-5
//                 flex
//                 items-center
//                 gap-4
//                 shadow-sm
//               "
//               >
//                 <div
//                   className="
//                   w-12
//                   h-12
//                   shrink-0
//                   rounded-xl
//                   bg-blue-50
//                   border
//                   border-blue-100
//                   flex
//                   items-center
//                   justify-center
//                   text-xl
//                 "
//                 >
//                   💬
//                 </div>

//                 <div>
//                   <p
//                     className="
//                     text-xs
//                     text-gray-400
//                     mb-1
//                   "
//                   >
//                     Support
//                   </p>

//                   <p
//                     className="
//                     text-sm
//                     font-medium
//                     text-slate-800
//                   "
//                   >
//                     We're here to help
//                   </p>
//                 </div>
//               </div>

//               {/* Opportunities */}
//               <div
//                 className="
//                 bg-white
//                 border
//                 border-gray-200
//                 rounded-2xl
//                 p-5
//                 flex
//                 items-center
//                 gap-4
//                 shadow-sm
//               "
//               >
//                 <div
//                   className="
//                   w-12
//                   h-12
//                   shrink-0
//                   rounded-xl
//                   bg-orange-50
//                   border
//                   border-orange-100
//                   flex
//                   items-center
//                   justify-center
//                   text-xl
//                 "
//                 >
//                   ✦
//                 </div>

//                 <div>
//                   <p
//                     className="
//                     text-xs
//                     text-gray-400
//                     mb-1
//                   "
//                   >
//                     Opportunities
//                   </p>

//                   <p
//                     className="
//                     text-sm
//                     font-medium
//                     text-slate-800
//                   "
//                   >
//                     Find your next career move
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ================= FORM ================= */}
//           <div
//             className="
//             bg-white
//             border
//             border-gray-200
//             rounded-3xl
//             p-6
//             sm:p-8
//             shadow-sm
//           "
//           >
//             <div className="mb-7">
//               <h3
//                 className="
//                 text-xl
//                 sm:text-2xl
//                 font-semibold
//                 text-slate-900
//               "
//               >
//                 Send us a message
//               </h3>

//               <p
//                 className="
//                 text-sm
//                 text-gray-500
//                 mt-2
//               "
//               >
//                 Fill out the form below and we'll get back to you.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Name + Email */}
//               <div
//                 className="
//                 grid
//                 sm:grid-cols-2
//                 gap-5
//               "
//               >
//                 <div>
//                   <label
//                     className="
//                     block
//                     text-sm
//                     font-medium
//                     text-slate-700
//                     mb-2
//                   "
//                   >
//                     Your Name
//                   </label>

//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your name"
//                     required
//                     className="
//                       w-full
//                       px-4
//                       py-3
//                       rounded-xl
//                       border
//                       border-gray-200
//                       bg-gray-50
//                       text-sm
//                       outline-none
//                       focus:bg-white
//                       focus:border-emerald-400
//                       focus:ring-2
//                       focus:ring-emerald-100
//                       transition
//                     "
//                   />
//                 </div>

//                 <div>
//                   <label
//                     className="
//                     block
//                     text-sm
//                     font-medium
//                     text-slate-700
//                     mb-2
//                   "
//                   >
//                     Email Address
//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     required
//                     className="
//                       w-full
//                       px-4
//                       py-3
//                       rounded-xl
//                       border
//                       border-gray-200
//                       bg-gray-50
//                       text-sm
//                       outline-none
//                       focus:bg-white
//                       focus:border-emerald-400
//                       focus:ring-2
//                       focus:ring-emerald-100
//                       transition
//                     "
//                   />
//                 </div>
//               </div>

//               {/* Subject */}
//               <div>
//                 <label
//                   className="
//                   block
//                   text-sm
//                   font-medium
//                   text-slate-700
//                   mb-2
//                 "
//                 >
//                   Subject
//                 </label>

//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="What is this regarding?"
//                   required
//                   className="
//                     w-full
//                     px-4
//                     py-3
//                     rounded-xl
//                     border
//                     border-gray-200
//                     bg-gray-50
//                     text-sm
//                     outline-none
//                     focus:bg-white
//                     focus:border-emerald-400
//                     focus:ring-2
//                     focus:ring-emerald-100
//                     transition
//                   "
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label
//                   className="
//                   block
//                   text-sm
//                   font-medium
//                   text-slate-700
//                   mb-2
//                 "
//                 >
//                   Message
//                 </label>

//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Write your message here..."
//                   rows="6"
//                   required
//                   className="
//                     w-full
//                     px-4
//                     py-3
//                     rounded-xl
//                     border
//                     border-gray-200
//                     bg-gray-50
//                     text-sm
//                     outline-none
//                     resize-none
//                     focus:bg-white
//                     focus:border-emerald-400
//                     focus:ring-2
//                     focus:ring-emerald-100
//                     transition
//                   "
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="
//                   w-full
//                   sm:w-auto
//                   bg-emerald-600
//                   hover:bg-emerald-700
//                   active:bg-emerald-800
//                   text-white
//                   font-medium
//                   px-7
//                   py-3
//                   rounded-xl
//                   transition-all
//                   duration-200
//                   shadow-sm
//                   hover:shadow-md
//                 "
//               >
//                 Send Message →
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Contact;

// import { useState } from "react";
// import { toast } from "react-toastify";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     toast.success("Message sent successfully!");

//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* ================= HERO ================= */}

//       <section
//         className="
//         max-w-7xl
//         mx-auto
//         px-4
//         sm:px-6
//         lg:px-8
//         py-16
//         sm:py-20
//       "
//       >
//         <div
//           className="
//           grid
//           grid-cols-1
//           lg:grid-cols-[0.9fr_1.1fr]
//           gap-10
//           lg:gap-12
//           items-start
//         "
//         >
//           {/* ================= LEFT SIDE ================= */}

//           <div>
//             <p
//               className="
//               text-emerald-600
//               text-sm
//               font-semibold
//               uppercase
//               tracking-wide
//               mb-4
//             "
//             >
//               Contact Us
//             </p>

//             <h1
//               className="
//               text-4xl
//               sm:text-5xl
//               font-bold
//               text-slate-900
//               leading-tight
//             "
//             >
//               Let's start a{" "}
//               <span className="text-emerald-600">conversation.</span>
//             </h1>

//             <p
//               className="
//               text-gray-500
//               text-base
//               sm:text-lg
//               leading-7
//               mt-5
//               max-w-xl
//             "
//             >
//               Whether you're looking for your next opportunity or you're an
//               employer looking for great talent, we're here to help.
//             </p>

//             {/* Email */}
//             <div
//               className="
//               bg-white
//               border
//               border-gray-200
//               rounded-2xl
//               p-5
//               mt-9
//               shadow-sm
//               flex
//               items-center
//               gap-4
//             "
//             >
//               <div
//                 className="
//                 w-12
//                 h-12
//                 shrink-0
//                 rounded-xl
//                 bg-emerald-50
//                 border
//                 border-emerald-100
//                 flex
//                 items-center
//                 justify-center
//                 text-lg
//               "
//               >
//                 ✉
//               </div>

//               <div>
//                 <p className="text-sm text-gray-400">Email</p>

//                 <p
//                   className="
//                   text-sm
//                   sm:text-base
//                   font-semibold
//                   text-slate-800
//                   mt-1
//                 "
//                 >
//                   support@talentbridge.com
//                 </p>
//               </div>
//             </div>

//             {/* Support */}
//             <div
//               className="
//               bg-white
//               border
//               border-gray-200
//               rounded-2xl
//               p-5
//               mt-4
//               shadow-sm
//               flex
//               items-center
//               gap-4
//             "
//             >
//               <div
//                 className="
//                 w-12
//                 h-12
//                 shrink-0
//                 rounded-xl
//                 bg-blue-50
//                 border
//                 border-blue-100
//                 flex
//                 items-center
//                 justify-center
//                 text-lg
//               "
//               >
//                 💬
//               </div>

//               <div>
//                 <p className="text-sm text-gray-400">Support</p>

//                 <p
//                   className="
//                   text-sm
//                   sm:text-base
//                   font-semibold
//                   text-slate-800
//                   mt-1
//                 "
//                 >
//                   We're here to help
//                 </p>
//               </div>
//             </div>

//             {/* Opportunities */}
//             <div
//               className="
//               bg-white
//               border
//               border-gray-200
//               rounded-2xl
//               p-5
//               mt-4
//               shadow-sm
//               flex
//               items-center
//               gap-4
//             "
//             >
//               <div
//                 className="
//                 w-12
//                 h-12
//                 shrink-0
//                 rounded-xl
//                 bg-orange-50
//                 border
//                 border-orange-100
//                 flex
//                 items-center
//                 justify-center
//                 text-lg
//               "
//               >
//                 ✦
//               </div>

//               <div>
//                 <p className="text-sm text-gray-400">Opportunities</p>

//                 <p
//                   className="
//                   text-sm
//                   sm:text-base
//                   font-semibold
//                   text-slate-800
//                   mt-1
//                 "
//                 >
//                   Find your next career move
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* ================= RIGHT SIDE FORM ================= */}

//           <div
//             className="
//             bg-white
//             border
//             border-gray-200
//             rounded-3xl
//             p-6
//             sm:p-8
//             shadow-sm
//           "
//           >
//             <h2
//               className="
//               text-2xl
//               sm:text-3xl
//               font-semibold
//               text-slate-900
//             "
//             >
//               Send us a message
//             </h2>

//             <p
//               className="
//               text-gray-500
//               mt-2
//               mb-7
//             "
//             >
//               Fill out the form below and we'll get back to you.
//             </p>

//             <form onSubmit={handleSubmit}>
//               {/* Name + Email */}
//               <div
//                 className="
//                 grid
//                 grid-cols-1
//                 sm:grid-cols-2
//                 gap-5
//               "
//               >
//                 {/* Name */}
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="
//                       block
//                       text-sm
//                       font-medium
//                       text-slate-700
//                       mb-2
//                     "
//                   >
//                     Your Name
//                   </label>

//                   <input
//                     id="name"
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your name"
//                     required
//                     className="
//                       w-full
//                       px-4
//                       py-3
//                       bg-slate-50
//                       border
//                       border-gray-200
//                       rounded-xl
//                       outline-none
//                       text-sm
//                       text-slate-800
//                       placeholder:text-gray-400
//                       focus:border-emerald-400
//                       focus:ring-2
//                       focus:ring-emerald-100
//                       transition-all
//                     "
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="
//                       block
//                       text-sm
//                       font-medium
//                       text-slate-700
//                       mb-2
//                     "
//                   >
//                     Email Address
//                   </label>

//                   <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     required
//                     className="
//                       w-full
//                       px-4
//                       py-3
//                       bg-slate-50
//                       border
//                       border-gray-200
//                       rounded-xl
//                       outline-none
//                       text-sm
//                       text-slate-800
//                       placeholder:text-gray-400
//                       focus:border-emerald-400
//                       focus:ring-2
//                       focus:ring-emerald-100
//                       transition-all
//                     "
//                   />
//                 </div>
//               </div>

//               {/* Subject */}
//               <div className="mt-5">
//                 <label
//                   htmlFor="subject"
//                   className="
//                     block
//                     text-sm
//                     font-medium
//                     text-slate-700
//                     mb-2
//                   "
//                 >
//                   Subject
//                 </label>

//                 <input
//                   id="subject"
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="What would you like to talk about?"
//                   required
//                   className="
//                     w-full
//                     px-4
//                     py-3
//                     bg-slate-50
//                     border
//                     border-gray-200
//                     rounded-xl
//                     outline-none
//                     text-sm
//                     text-slate-800
//                     placeholder:text-gray-400
//                     focus:border-emerald-400
//                     focus:ring-2
//                     focus:ring-emerald-100
//                     transition-all
//                   "
//                 />
//               </div>

//               {/* Message */}
//               <div className="mt-5">
//                 <label
//                   htmlFor="message"
//                   className="
//                     block
//                     text-sm
//                     font-medium
//                     text-slate-700
//                     mb-2
//                   "
//                 >
//                   Message
//                 </label>

//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Write your message here..."
//                   required
//                   rows={6}
//                   className="
//                     w-full
//                     px-4
//                     py-3
//                     bg-slate-50
//                     border
//                     border-gray-200
//                     rounded-xl
//                     outline-none
//                     resize-none
//                     text-sm
//                     text-slate-800
//                     placeholder:text-gray-400
//                     focus:border-emerald-400
//                     focus:ring-2
//                     focus:ring-emerald-100
//                     transition-all
//                   "
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="
//                   mt-6
//                   bg-emerald-600
//                   hover:bg-emerald-700
//                   active:bg-emerald-800
//                   text-white
//                   px-6
//                   py-3
//                   rounded-xl
//                   font-semibold
//                   text-sm
//                   transition-all
//                   duration-200
//                   shadow-sm
//                   hover:shadow-md
//                 "
//               >
//                 Send Message →
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ================= CONTENT ================= */}

      <section
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
            mb-8
          "
        >
          ← Back to Home
        </Link>

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-[0.9fr_1.1fr]
          gap-10
          lg:gap-12
          items-start
        "
        >
          {/* ================= LEFT SIDE ================= */}

          <div>
            <p
              className="
              text-emerald-600
              text-sm
              font-semibold
              uppercase
              tracking-wide
              mb-4
            "
            >
              Contact Us
            </p>

            <h1
              className="
              text-4xl
              sm:text-5xl
              font-bold
              text-slate-900
              leading-tight
            "
            >
              Let's start a{" "}
              <span className="text-emerald-600">conversation.</span>
            </h1>

            <p
              className="
              text-gray-500
              text-base
              sm:text-lg
              leading-7
              mt-5
              max-w-xl
            "
            >
              Whether you're looking for your next opportunity or you're an
              employer looking for great talent, we're here to help.
            </p>

            {/* Email */}

            <div
              className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-5
              mt-9
              shadow-sm
              flex
              items-center
              gap-4
            "
            >
              <div
                className="
                w-12
                h-12
                shrink-0
                rounded-xl
                bg-emerald-50
                border
                border-emerald-100
                flex
                items-center
                justify-center
                text-lg
              "
              >
                ✉
              </div>

              <div>
                <p className="text-sm text-gray-400">Email</p>

                <p
                  className="
                  text-sm
                  sm:text-base
                  font-semibold
                  text-slate-800
                  mt-1
                "
                >
                  support@talentbridge.com
                </p>
              </div>
            </div>

            {/* Support */}

            <div
              className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-5
              mt-4
              shadow-sm
              flex
              items-center
              gap-4
            "
            >
              <div
                className="
                w-12
                h-12
                shrink-0
                rounded-xl
                bg-blue-50
                border
                border-blue-100
                flex
                items-center
                justify-center
                text-lg
              "
              >
                💬
              </div>

              <div>
                <p className="text-sm text-gray-400">Support</p>

                <p
                  className="
                  text-sm
                  sm:text-base
                  font-semibold
                  text-slate-800
                  mt-1
                "
                >
                  We're here to help
                </p>
              </div>
            </div>

            {/* Opportunities */}

            <div
              className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-5
              mt-4
              shadow-sm
              flex
              items-center
              gap-4
            "
            >
              <div
                className="
                w-12
                h-12
                shrink-0
                rounded-xl
                bg-orange-50
                border
                border-orange-100
                flex
                items-center
                justify-center
                text-lg
              "
              >
                ✦
              </div>

              <div>
                <p className="text-sm text-gray-400">Opportunities</p>

                <p
                  className="
                  text-sm
                  sm:text-base
                  font-semibold
                  text-slate-800
                  mt-1
                "
                >
                  Find your next career move
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE FORM ================= */}

          <div
            className="
            bg-white
            border
            border-gray-200
            rounded-3xl
            p-6
            sm:p-8
            shadow-sm
          "
          >
            <h2
              className="
              text-2xl
              sm:text-3xl
              font-semibold
              text-slate-900
            "
            >
              Send us a message
            </h2>

            <p
              className="
              text-gray-500
              mt-2
              mb-7
            "
            >
              Fill out the form below and we'll get back to you.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Name + Email */}

              <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
              "
              >
                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      block
                      text-sm
                      font-medium
                      text-slate-700
                      mb-2
                    "
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="
                      w-full
                      px-4
                      py-3
                      bg-slate-50
                      border
                      border-gray-200
                      rounded-xl
                      outline-none
                      text-sm
                      text-slate-800
                      placeholder:text-gray-400
                      focus:border-emerald-400
                      focus:ring-2
                      focus:ring-emerald-100
                      transition-all
                    "
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      block
                      text-sm
                      font-medium
                      text-slate-700
                      mb-2
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="
                      w-full
                      px-4
                      py-3
                      bg-slate-50
                      border
                      border-gray-200
                      rounded-xl
                      outline-none
                      text-sm
                      text-slate-800
                      placeholder:text-gray-400
                      focus:border-emerald-400
                      focus:ring-2
                      focus:ring-emerald-100
                      transition-all
                    "
                  />
                </div>
              </div>

              {/* Subject */}

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="
                    block
                    text-sm
                    font-medium
                    text-slate-700
                    mb-2
                  "
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                  required
                  className="
                    w-full
                    px-4
                    py-3
                    bg-slate-50
                    border
                    border-gray-200
                    rounded-xl
                    outline-none
                    text-sm
                    text-slate-800
                    placeholder:text-gray-400
                    focus:border-emerald-400
                    focus:ring-2
                    focus:ring-emerald-100
                    transition-all
                  "
                />
              </div>

              {/* Message */}

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="
                    block
                    text-sm
                    font-medium
                    text-slate-700
                    mb-2
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows={6}
                  className="
                    w-full
                    px-4
                    py-3
                    bg-slate-50
                    border
                    border-gray-200
                    rounded-xl
                    outline-none
                    resize-none
                    text-sm
                    text-slate-800
                    placeholder:text-gray-400
                    focus:border-emerald-400
                    focus:ring-2
                    focus:ring-emerald-100
                    transition-all
                  "
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="
                  mt-6
                  bg-emerald-600
                  hover:bg-emerald-700
                  active:bg-emerald-800
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  text-sm
                  transition-all
                  duration-200
                  shadow-sm
                  hover:shadow-md
                "
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
