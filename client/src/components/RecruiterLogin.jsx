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

  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(false);

  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);

  const { setShowRecruiterLogin, backendUrl, setCompanyToken, setCompanyData } =
    useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (state === "Sign Up" && !isTextDataSubmited) {
      return setIsTextDataSubmited(true);
    }

    try {
      if (state === "Login") {
        const formData = new FormData(e.currentTarget);

        // Chrome password manager ke standard login field names
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
      toast.error(error.response?.data?.message || error.message);
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
        autoComplete="on"
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
          className="
            absolute
            top-5
            right-5
            w-4
            cursor-pointer
            opacity-60
            hover:opacity-100
            transition
          "
          src={assets.cross_icon}
          alt=""
        />

        {/* Heading */}
        <div className="text-center mb-6">
          <div
            className="
              inline-flex
              items-center
              justify-center
              w-12
              h-12
              rounded-xl
              bg-emerald-50
              border
              border-emerald-100
              mb-3
            "
          >
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
            <label
              htmlFor="employer-company-logo"
              className="cursor-pointer text-center"
            >
              <div
                className="
                  w-24
                  h-24
                  rounded-full
                  bg-emerald-50
                  border-2
                  border-dashed
                  border-emerald-200
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  hover:bg-emerald-100
                  transition
                "
              >
                <img
                  className="w-full h-full object-cover"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
              </div>

              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="employer-company-logo"
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
              <div
                className="
                  border
                  border-gray-200
                  bg-gray-50
                  px-4
                  py-3
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  mt-4
                  focus-within:border-emerald-400
                  focus-within:bg-white
                  transition
                "
              >
                <img
                  className="w-4 h-4 opacity-60"
                  src={assets.person_icon}
                  alt=""
                />

                <input
                  name="employerCompanyName"
                  autoComplete="organization"
                  className="
                    outline-none
                    text-sm
                    bg-transparent
                    w-full
                    text-slate-700
                  "
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
            )}

            {/* Email */}
            <div
              className="
                border
                border-gray-200
                bg-gray-50
                px-4
                py-3
                flex
                items-center
                gap-3
                rounded-xl
                mt-4
                focus-within:border-emerald-400
                focus-within:bg-white
                transition
              "
            >
              <img
                className="w-4 h-4 opacity-60"
                src={assets.email_icon}
                alt=""
              />

              <input
                name={state === "Login" ? "email" : "employerSignupEmail"}
                autoComplete={state === "Login" ? "username" : "email"}
                className="
                  outline-none
                  text-sm
                  bg-transparent
                  w-full
                  text-slate-700
                "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email Id"
                required
              />
            </div>

            {/* Password */}
            <div
              className="
                border
                border-gray-200
                bg-gray-50
                px-4
                py-3
                flex
                items-center
                gap-3
                rounded-xl
                mt-4
                focus-within:border-emerald-400
                focus-within:bg-white
                transition
              "
            >
              <img
                className="w-4 h-4 opacity-60"
                src={assets.lock_icon}
                alt=""
              />

              <input
                name={state === "Login" ? "password" : "employerSignupPassword"}
                autoComplete={
                  state === "Login" ? "current-password" : "new-password"
                }
                className="
                  outline-none
                  text-sm
                  bg-transparent
                  w-full
                  text-slate-700
                "
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />

              {/* Show / Hide Password */}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="
                  text-gray-400
                  hover:text-emerald-600
                  transition
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  /* Eye Off */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="w-[18px] h-[18px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3l18 18"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.58 10.58a2 2 0 002.84 2.84"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.88 4.24A10.94 10.94 0 0112 4c5 0 8.27 4.11 9.5 6.05a3.02 3.02 0 010 3.9 15.4 15.4 0 01-3.08 3.15"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.61 6.61A15.6 15.6 0 002.5 10.05a3.02 3.02 0 000 3.9C3.73 15.89 7 20 12 20c1.61 0 3.05-.38 4.3-.92"
                    />
                  </svg>
                ) : (
                  /* Eye */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="w-[18px] h-[18px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"
                    />

                    <circle cx="12" cy="12" r="2.5" />
                  </svg>
                )}
              </button>
            </div>
          </>
        )}

        {/* Forgot Password */}
        {state === "Login" && (
          <p className="text-sm text-gray-400 mt-4 text-right">
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
              className="
                text-emerald-600
                font-medium
                cursor-pointer
                hover:text-emerald-700
                transition
              "
              onClick={() => {
                setState("Sign Up");
                setShowPassword(false);
              }}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <span
              className="
                text-emerald-600
                font-medium
                cursor-pointer
                hover:text-emerald-700
                transition
              "
              onClick={() => {
                setState("Login");
                setShowPassword(false);
              }}
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
