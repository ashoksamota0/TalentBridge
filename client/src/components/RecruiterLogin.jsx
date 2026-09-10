// import { useContext, useEffect, useState } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const RecruiterLogin = () => {
//   const navigate = useNavigate();

//   const [state, setState] = useState("Login");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   const [image, setImage] = useState(false);

//   const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);

//   const { setShowRecruiterLogin, backendUrl, setCompanyToken, setCompanyData } =
//     useContext(AppContext);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (state == "Sign Up" && !isTextDataSubmited) {
//       return setIsTextDataSubmited(true);
//     }

//     try {
//       if (state === "Login") {
//         const { data } = await axios.post(backendUrl + "/api/company/login", {
//           email,
//           password,
//         });

//         if (data.success) {
//           setCompanyData(data.company);
//           setCompanyToken(data.token);
//           localStorage.setItem("companyToken", data.token);
//           setShowRecruiterLogin(false);
//           navigate("/dashboard");
//         } else {
//           toast.error(data.message);
//         }
//       } else {
//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("password", password);
//         formData.append("email", email);
//         formData.append("image", image);

//         const { data } = await axios.post(
//           backendUrl + "/api/company/register",
//           formData,
//         );

//         if (data.success) {
//           setCompanyData(data.company);
//           setCompanyToken(data.token);
//           localStorage.setItem("companyToken", data.token);
//           setShowRecruiterLogin(false);
//           navigate("/dashboard");
//         } else {
//           toast.error(data.message);
//         }
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-[100] backdrop-blur-sm bg-black/30 flex justify-center items-center px-4">
//       <form
//         onSubmit={onSubmitHandler}
//         className="relative z-[110] bg-white p-10 rounded-xl text-slate-500"
//       >
//         <h1 className="text-center text-2xl text-neutral-700 font-medium">
//           Recruiter {state}
//         </h1>
//         <p className="text-sm">Welcome back! Please sign in to continue </p>
//         {state === "Sign Up" && isTextDataSubmited ? (
//           <>
//             <div className="flex items-center gap-4 my-10">
//               <label htmlFor="image">
//                 <img
//                   className="w-16 rounded-full"
//                   src={image ? URL.createObjectURL(image) : assets.upload_area}
//                   alt=""
//                 />
//                 <input
//                   onChange={(e) => setImage(e.target.files[0])}
//                   type="file"
//                   id="image"
//                   hidden
//                 />
//               </label>
//               <p>
//                 Upload Company <br /> logo
//               </p>
//             </div>
//           </>
//         ) : (
//           <>
//             {state !== "Login" && (
//               <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
//                 <img src={assets.person_icon} alt="" />
//                 <input
//                   className="outline-none text-sm"
//                   onChange={(e) => setName(e.target.value)}
//                   value={name}
//                   type="text"
//                   placeholder="Company Name"
//                   required
//                 />
//               </div>
//             )}

//             <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
//               <img src={assets.email_icon} alt="" />
//               <input
//                 className="outline-none text-sm"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 type="email"
//                 placeholder="Email Id"
//                 required
//               />
//             </div>

//             <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
//               <img src={assets.lock_icon} alt="" />
//               <input
//                 className="outline-none text-sm"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 type="password"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//           </>
//         )}

//         {state === "Login" && (
//           <p className="text-sm text-emerald-600 mt-4 cursor-pointer">
//             Forgot password?
//           </p>
//         )}

//         <button
//           type="submit"
//           className="bg-emerald-600 hover:bg-emerald-700 w-full text-white py-2 rounded-full mt-4"
//         >
//           {state === "Login"
//             ? "login"
//             : isTextDataSubmited
//               ? "create account"
//               : "next"}
//         </button>

//         {state === "Login" ? (
//           <p className="mt-5 text-center">
//             Don't have an account?{" "}
//             <span
//               className="text-emerald-600 cursor-pointer"
//               onClick={() => setState("Sign Up")}
//             >
//               Sign Up
//             </span>
//           </p>
//         ) : (
//           <p className="mt-5 text-center">
//             Already have an account?{" "}
//             <span
//               className="text-emerald-600 cursor-pointer"
//               onClick={() => setState("Login")}
//             >
//               Login
//             </span>
//           </p>
//         )}

//         <img
//           onClick={(e) => setShowRecruiterLogin(false)}
//           className="absolute top-5 right-5 cursor-pointer"
//           src={assets.cross_icon}
//           alt=""
//         />
//       </form>
//     </div>
//   );
// };

// export default RecruiterLogin;

import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RecruiterLogin = () => {
  const navigate = useNavigate();

  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(false);

  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);

  const { setShowRecruiterLogin, backendUrl, setCompanyToken, setCompanyData } =
    useContext(AppContext);

  //   const onSubmitHandler = async (e) => {
  //     e.preventDefault();

  //     if (state == "Sign Up" && !isTextDataSubmited) {
  //       return setIsTextDataSubmited(true);
  //     }

  //     try {
  //       if (state === "Login") {
  //         const { data } = await axios.post(backendUrl + "/api/company/login", {
  //           email,
  //           password,
  //         });

  //         if (data.success) {
  //           setCompanyData(data.company);
  //           setCompanyToken(data.token);
  //           localStorage.setItem("companyToken", data.token);
  //           setShowRecruiterLogin(false);
  //           navigate("/dashboard");
  //         } else {
  //           toast.error(data.message);
  //         }
  //       } else {
  //         const formData = new FormData();

  //         formData.append("name", name);
  //         formData.append("password", password);
  //         formData.append("email", email);
  //         formData.append("image", image);

  //         const { data } = await axios.post(
  //           backendUrl + "/api/company/register",
  //           formData,
  //         );

  //         if (data.success) {
  //           setCompanyData(data.company);
  //           setCompanyToken(data.token);
  //           localStorage.setItem("companyToken", data.token);
  //           setShowRecruiterLogin(false);
  //           navigate("/dashboard");
  //         } else {
  //           toast.error(data.message);
  //         }
  //       }
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (state == "Sign Up" && !isTextDataSubmited) {
      return setIsTextDataSubmited(true);
    }

    try {
      if (state === "Login") {
        // Get actual values from the form.
        // This also works when Chrome autofills the fields.
        const formData = new FormData(e.currentTarget);

        const loginEmail = formData.get("email");
        const loginPassword = formData.get("password");

        const { data } = await axios.post(backendUrl + "/api/company/login", {
          email: loginEmail,
          password: loginPassword,
        });

        if (data.success) {
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem("companyToken", data.token);
          setShowRecruiterLogin(false);
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      } else {
        const formData = new FormData();

        formData.append("name", name);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("image", image);

        const { data } = await axios.post(
          backendUrl + "/api/company/register",
          formData,
        );

        if (data.success) {
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem("companyToken", data.token);
          setShowRecruiterLogin(false);
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] backdrop-blur-sm bg-black/30 flex justify-center items-center px-4">
      <form
        onSubmit={onSubmitHandler}
        className="
          relative
          z-[110]
          bg-white
          w-full
          max-w-md
          p-7
          sm:p-9
          rounded-2xl
          text-slate-500
          shadow-2xl
          border border-gray-100
        "
      >
        {/* Close Button */}
        <img
          onClick={() => setShowRecruiterLogin(false)}
          className="absolute top-5 right-5 w-4 cursor-pointer opacity-60 hover:opacity-100 transition"
          src={assets.cross_icon}
          alt=""
        />

        {/* Heading */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 mb-3">
            <span className="text-2xl">💼</span>
          </div>

          <h1 className="text-2xl text-slate-800 font-semibold">
            Employer {state}
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            {state === "Login"
              ? "Welcome back! Please sign in to continue."
              : "Create your employer account to get started."}
          </p>
        </div>

        {/* Company Logo Upload - Sign Up Step 2 */}
        {state === "Sign Up" && isTextDataSubmited ? (
          <div className="flex flex-col items-center my-8">
            <label htmlFor="image" className="cursor-pointer text-center">
              <div className="w-24 h-24 rounded-full bg-emerald-50 border-2 border-dashed border-emerald-200 flex items-center justify-center overflow-hidden hover:bg-emerald-100 transition">
                <img
                  className="w-full h-full object-cover"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
              </div>

              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image"
                hidden
              />
            </label>

            <p className="text-sm text-slate-500 mt-3 text-center">
              Upload Company
              <br />
              logo
            </p>
          </div>
        ) : (
          <>
            {/* Company Name */}
            {state !== "Login" && (
              <div className="border border-gray-200 bg-gray-50 px-4 py-3 flex items-center gap-3 rounded-xl mt-4 focus-within:border-emerald-400 focus-within:bg-white transition">
                <img
                  className="w-4 h-4 opacity-60"
                  src={assets.person_icon}
                  alt=""
                />

                <input
                  className="outline-none text-sm bg-transparent w-full text-slate-700"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
            )}

            {/* Email */}
            <div className="border border-gray-200 bg-gray-50 px-4 py-3 flex items-center gap-3 rounded-xl mt-4 focus-within:border-emerald-400 focus-within:bg-white transition">
              <img
                className="w-4 h-4 opacity-60"
                src={assets.email_icon}
                alt=""
              />

              <input
                name="email"
                className="outline-none text-sm bg-transparent w-full text-slate-700"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email Id"
                required
              />
            </div>

            {/* Password */}
            <div className="border border-gray-200 bg-gray-50 px-4 py-3 flex items-center gap-3 rounded-xl mt-4 focus-within:border-emerald-400 focus-within:bg-white transition">
              <img
                className="w-4 h-4 opacity-60"
                src={assets.lock_icon}
                alt=""
              />

              <input
                name="password"
                className="outline-none text-sm bg-transparent w-full text-slate-700"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </>
        )}

        {/* Forgot Password */}
        {state === "Login" && (
          <p className="text-sm text-emerald-600 mt-4 cursor-pointer hover:text-emerald-700 transition">
            Forgot password?
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="
            bg-emerald-600
            hover:bg-emerald-700
            active:bg-emerald-800
            w-full
            text-white
            py-3
            rounded-xl
            mt-5
            font-medium
            transition-all
            duration-200
          "
        >
          {state === "Login"
            ? "Login"
            : isTextDataSubmited
              ? "Create Account"
              : "Next"}
        </button>

        {/* Switch Login / Signup */}
        {state === "Login" ? (
          <p className="mt-5 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <span
              className="text-emerald-600 font-medium cursor-pointer hover:text-emerald-700 transition"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <span
              className="text-emerald-600 font-medium cursor-pointer hover:text-emerald-700 transition"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default RecruiterLogin;
