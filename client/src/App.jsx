// import { useContext } from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import ApplyJob from "./pages/ApplyJob";
// import Applications from "./pages/Applications";
// import RecruiterLogin from "./components/RecruiterLogin";
// import { AppContext } from "./context/AppContext";
// import Dashboard from "./pages/Dashboard";
// import AddJob from "./pages/AddJob";
// import ManageJobs from "./pages/ManageJobs";
// import ViewApplications from "./pages/ViewApplications";
// import "quill/dist/quill.snow.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AboutUs from "./pages/AboutUs";

// const App = () => {
//   const { showRecruiterLogin, companyToken } = useContext(AppContext);

//   return (
//     <div>
//       {showRecruiterLogin && <RecruiterLogin />}
//       <ToastContainer />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/apply-job/:id" element={<ApplyJob />} />
//         <Route path="/applications" element={<Applications />} />
//         <Route path="/dashboard" element={<Dashboard />}>
//           {companyToken ? (
//             <>
//               <Route path="add-job" element={<AddJob />} />
//               <Route path="manage-jobs" element={<ManageJobs />} />
//               <Route path="view-applications" element={<ViewApplications />} />
//             </>
//           ) : null}
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;

// import { useContext } from "react";
// import { Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
// import ApplyJob from "./pages/ApplyJob";
// import Applications from "./pages/Applications";
// import AboutUs from "./pages/AboutUs";
// import Contact from "./pages/Contact";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

// import RecruiterLogin from "./components/RecruiterLogin";

// import { AppContext } from "./context/AppContext";

// import Dashboard from "./pages/Dashboard";
// import AddJob from "./pages/AddJob";
// import ManageJobs from "./pages/ManageJobs";
// import ViewApplications from "./pages/ViewApplications";

// import "quill/dist/quill.snow.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//   const { showRecruiterLogin, companyToken } = useContext(AppContext);

//   return (
//     <div>
//       {showRecruiterLogin && <RecruiterLogin />}

//       <ToastContainer />

//       <Routes>
//         {/* ================= CANDIDATE PAGES ================= */}

//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<AboutUs />} />

//         <Route path="/contact" element={<Contact />} />

//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />

//         <Route path="/apply-job/:id" element={<ApplyJob />} />

//         <Route path="/applications" element={<Applications />} />

//         {/* ================= RECRUITER DASHBOARD ================= */}

//         <Route path="/dashboard" element={<Dashboard />}>
//           {companyToken ? (
//             <>
//               <Route path="add-job" element={<AddJob />} />

//               <Route path="manage-jobs" element={<ManageJobs />} />

//               <Route path="view-applications" element={<ViewApplications />} />
//             </>
//           ) : null}
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;

// import { useContext, useEffect } from "react";
// import { Route, Routes, useLocation } from "react-router-dom";

// import Home from "./pages/Home";
// import ApplyJob from "./pages/ApplyJob";
// import Applications from "./pages/Applications";
// import AboutUs from "./pages/AboutUs";
// import Contact from "./pages/Contact";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

// import RecruiterLogin from "./components/RecruiterLogin";

// import { AppContext } from "./context/AppContext";

// import Dashboard from "./pages/Dashboard";
// import AddJob from "./pages/AddJob";
// import ManageJobs from "./pages/ManageJobs";
// import ViewApplications from "./pages/ViewApplications";

// import "quill/dist/quill.snow.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // ================= SCROLL TO TOP =================

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "instant",
//     });
//   }, [pathname]);

//   return null;
// };

// const App = () => {
//   const { showRecruiterLogin, companyToken } = useContext(AppContext);

//   return (
//     <div>
//       {showRecruiterLogin && <RecruiterLogin />}

//       <ToastContainer />

//       <ScrollToTop />

//       <Routes>
//         {/* ================= CANDIDATE PAGES ================= */}

//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<AboutUs />} />

//         <Route path="/contact" element={<Contact />} />

//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />

//         <Route path="/apply-job/:id" element={<ApplyJob />} />

//         <Route path="/applications" element={<Applications />} />

//         {/* ================= RECRUITER DASHBOARD ================= */}

//         <Route path="/dashboard" element={<Dashboard />}>
//           {companyToken ? (
//             <>
//               <Route path="add-job" element={<AddJob />} />

//               <Route path="manage-jobs" element={<ManageJobs />} />

//               <Route path="view-applications" element={<ViewApplications />} />
//             </>
//           ) : null}
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;

import { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import CareerResources from "./pages/CareerResources";

import RecruiterLogin from "./components/RecruiterLogin";

import { AppContext } from "./context/AppContext";

import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import ManageJobs from "./pages/ManageJobs";
import ViewApplications from "./pages/ViewApplications";

import "quill/dist/quill.snow.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ================= SCROLL TO TOP =================

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

const App = () => {
  const { showRecruiterLogin, companyToken } = useContext(AppContext);

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}

      <ToastContainer />

      <ScrollToTop />

      <Routes>
        {/* ================= CANDIDATE PAGES ================= */}

        <Route path="/" element={<Home />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/companies" element={<Companies />} />

        <Route path="/career-resources" element={<CareerResources />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/apply-job/:id" element={<ApplyJob />} />

        <Route path="/applications" element={<Applications />} />

        {/* ================= RECRUITER DASHBOARD ================= */}

        <Route path="/dashboard" element={<Dashboard />}>
          {companyToken ? (
            <>
              <Route path="add-job" element={<AddJob />} />

              <Route path="manage-jobs" element={<ManageJobs />} />

              <Route path="view-applications" element={<ViewApplications />} />
            </>
          ) : null}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
