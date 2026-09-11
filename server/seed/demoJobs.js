// import Job from "../models/Job.js";
// import Company from "../models/Company.js";

// const demoJobs = [
//   {
//     title: "Software Engineer",
//     category: "Programming",
//     location: "Bangalore",
//     level: "Beginner level",
//     salary: 800000,
//     daysAgo: 2,
//     description:
//       "<p>Work on scalable software applications and contribute to building reliable products used by thousands of users.</p><ul><li>Develop and maintain web applications</li><li>Write clean and efficient code</li><li>Collaborate with cross-functional teams</li></ul>",
//   },
//   {
//     title: "Backend Developer",
//     category: "Programming",
//     location: "Hyderabad",
//     level: "Intermediate level",
//     salary: 950000,
//     daysAgo: 3,
//     description:
//       "<p>Build and maintain robust backend services and APIs for modern web applications.</p><ul><li>Develop REST APIs</li><li>Work with databases and server-side logic</li><li>Improve application performance</li></ul>",
//   },
//   {
//     title: "Data Scientist",
//     category: "Data Science",
//     location: "Mumbai",
//     level: "Intermediate level",
//     salary: 1100000,
//     daysAgo: 4,
//     description:
//       "<p>Analyze business data and develop data-driven solutions that help teams make better decisions.</p><ul><li>Analyze large datasets</li><li>Build predictive models</li><li>Create meaningful data insights</li></ul>",
//   },
//   {
//     title: "UI/UX Designer",
//     category: "Designing",
//     location: "Pune",
//     level: "Beginner level",
//     salary: 650000,
//     daysAgo: 5,
//     description:
//       "<p>Design intuitive and engaging digital experiences for web and mobile products.</p><ul><li>Create wireframes and prototypes</li><li>Design user-friendly interfaces</li><li>Collaborate with developers and product teams</li></ul>",
//   },
//   {
//     title: "Network Engineer",
//     category: "Networking",
//     location: "Chennai",
//     level: "Intermediate level",
//     salary: 750000,
//     daysAgo: 6,
//     description:
//       "<p>Manage and maintain reliable network infrastructure while ensuring secure and efficient connectivity.</p><ul><li>Monitor network performance</li><li>Troubleshoot connectivity issues</li><li>Maintain network infrastructure</li></ul>",
//   },
//   {
//     title: "Product Manager",
//     category: "Management",
//     location: "New Delhi",
//     level: "Senior level",
//     salary: 1400000,
//     daysAgo: 7,
//     description:
//       "<p>Lead product initiatives from planning to execution and work closely with engineering, design and business teams.</p><ul><li>Define product requirements</li><li>Manage product roadmaps</li><li>Coordinate with cross-functional teams</li></ul>",
//   },
//   {
//     title: "Marketing Associate",
//     category: "Marketing",
//     location: "Mumbai",
//     level: "Beginner level",
//     salary: 500000,
//     daysAgo: 8,
//     description:
//       "<p>Support marketing campaigns and help build strategies that improve brand awareness and customer engagement.</p><ul><li>Assist marketing campaigns</li><li>Conduct market research</li><li>Track campaign performance</li></ul>",
//   },
//   {
//     title: "Cybersecurity Analyst",
//     category: "Cybersecurity",
//     location: "Bangalore",
//     level: "Intermediate level",
//     salary: 900000,
//     daysAgo: 9,
//     description:
//       "<p>Help protect applications and infrastructure by identifying security risks and monitoring potential threats.</p><ul><li>Monitor security alerts</li><li>Identify vulnerabilities</li><li>Assist with security investigations</li></ul>",
//   },
//   {
//     title: "Full Stack Developer",
//     category: "Programming",
//     location: "Hyderabad",
//     level: "Senior level",
//     salary: 1250000,
//     daysAgo: 10,
//     description:
//       "<p>Develop complete web applications across frontend and backend technologies.</p><ul><li>Build responsive React interfaces</li><li>Develop backend APIs</li><li>Work with databases and authentication</li></ul>",
//   },
//   {
//     title: "Business Analyst",
//     category: "Management",
//     location: "Jaipur",
//     level: "Intermediate level",
//     salary: 700000,
//     daysAgo: 11,
//     description:
//       "<p>Work with business and technical teams to understand requirements and improve business processes.</p><ul><li>Gather business requirements</li><li>Analyze processes and data</li><li>Prepare reports and recommendations</li></ul>",
//   },
// ];

// export const seedDemoJobs = async () => {
//   try {
//     const companies = await Company.find({}).sort({ name: 1 });

//     if (companies.length === 0) {
//       console.log("No companies found. Demo jobs were not created.");
//       return;
//     }

//     let createdCount = 0;

//     for (let i = 0; i < demoJobs.length; i++) {
//       const demoJob = demoJobs[i];

//       const existingJob = await Job.findOne({
//         title: demoJob.title,
//         location: demoJob.location,
//         category: demoJob.category,
//       });

//       if (existingJob) {
//         continue;
//       }

//       const company = companies[i % companies.length];

//       await Job.create({
//         title: demoJob.title,
//         description: demoJob.description,
//         location: demoJob.location,
//         category: demoJob.category,
//         level: demoJob.level,
//         salary: demoJob.salary,
//         date: Date.now() - demoJob.daysAgo * 24 * 60 * 60 * 1000,
//         visible: true,
//         companyId: company._id,
//       });

//       createdCount++;
//     }

//     if (createdCount > 0) {
//       console.log(`${createdCount} demo jobs created successfully.`);
//     } else {
//       console.log("Demo jobs already exist. No new demo jobs created.");
//     }
//   } catch (error) {
//     console.error("Error while seeding demo jobs:", error.message);
//   }
// };

// import Job from "../models/Job.js";
// import Company from "../models/Company.js";

// const demoJobs = [
//   {
//     company: "Microsoft",
//     title: "Data Scientist",
//     category: "Data Science",
//     location: "Bangalore",
//     level: "Intermediate level",
//     salary: 1100000,
//     daysAgo: 2,
//     description:
//       "<p>Analyze large datasets and develop data-driven solutions that help teams make better business decisions.</p><ul><li>Analyze and interpret complex datasets</li><li>Build predictive models</li><li>Create meaningful data insights</li></ul>",
//   },
//   {
//     company: "Walmart",
//     title: "Marketing Associate",
//     category: "Marketing",
//     location: "Mumbai",
//     level: "Beginner level",
//     salary: 500000,
//     daysAgo: 3,
//     description:
//       "<p>Support marketing campaigns and help build strategies that improve brand awareness and customer engagement.</p><ul><li>Assist marketing campaigns</li><li>Conduct market research</li><li>Track campaign performance</li></ul>",
//   },
//   {
//     company: "Accenture",
//     title: "Software Engineer",
//     category: "Programming",
//     location: "Bangalore",
//     level: "Beginner level",
//     salary: 800000,
//     daysAgo: 4,
//     description:
//       "<p>Work on scalable software applications and contribute to building reliable products used by thousands of users.</p><ul><li>Develop and maintain web applications</li><li>Write clean and efficient code</li><li>Collaborate with cross-functional teams</li></ul>",
//   },
//   {
//     company: "Samsung",
//     title: "UI/UX Designer",
//     category: "Designing",
//     location: "Pune",
//     level: "Beginner level",
//     salary: 650000,
//     daysAgo: 5,
//     description:
//       "<p>Design intuitive and engaging digital experiences for modern web and mobile products.</p><ul><li>Create wireframes and prototypes</li><li>Design user-friendly interfaces</li><li>Collaborate with developers and product teams</li></ul>",
//   },
//   {
//     company: "Amazon",
//     title: "Backend Developer",
//     category: "Programming",
//     location: "Hyderabad",
//     level: "Intermediate level",
//     salary: 950000,
//     daysAgo: 6,
//     description:
//       "<p>Build and maintain robust backend services and APIs for modern web applications.</p><ul><li>Develop REST APIs</li><li>Work with databases and server-side logic</li><li>Improve application performance</li></ul>",
//   },
//   {
//     company: "Adobe",
//     title: "Cybersecurity Analyst",
//     category: "Cybersecurity",
//     location: "Chennai",
//     level: "Intermediate level",
//     salary: 900000,
//     daysAgo: 7,
//     description:
//       "<p>Help protect applications and infrastructure by identifying security risks and monitoring potential threats.</p><ul><li>Monitor security alerts</li><li>Identify vulnerabilities</li><li>Assist with security investigations</li></ul>",
//   },
//   {
//     company: "Microsoft",
//     title: "Network Engineer",
//     category: "Networking",
//     location: "New Delhi",
//     level: "Senior level",
//     salary: 1050000,
//     daysAgo: 8,
//     description:
//       "<p>Manage and maintain reliable network infrastructure while ensuring secure and efficient connectivity.</p><ul><li>Monitor network performance</li><li>Troubleshoot connectivity issues</li><li>Maintain network infrastructure</li></ul>",
//   },
//   {
//     company: "Walmart",
//     title: "Product Manager",
//     category: "Management",
//     location: "Mumbai",
//     level: "Senior level",
//     salary: 1400000,
//     daysAgo: 9,
//     description:
//       "<p>Lead product initiatives from planning to execution and work closely with engineering, design and business teams.</p><ul><li>Define product requirements</li><li>Manage product roadmaps</li><li>Coordinate with cross-functional teams</li></ul>",
//   },
//   {
//     company: "Accenture",
//     title: "Full Stack Developer",
//     category: "Programming",
//     location: "Jaipur",
//     level: "Senior level",
//     salary: 1250000,
//     daysAgo: 10,
//     description:
//       "<p>Develop complete web applications across frontend and backend technologies.</p><ul><li>Build responsive React interfaces</li><li>Develop backend APIs</li><li>Work with databases and authentication</li></ul>",
//   },
//   {
//     company: "Samsung",
//     title: "Business Analyst",
//     category: "Management",
//     location: "Hyderabad",
//     level: "Intermediate level",
//     salary: 700000,
//     daysAgo: 11,
//     description:
//       "<p>Work with business and technical teams to understand requirements and improve business processes.</p><ul><li>Gather business requirements</li><li>Analyze processes and data</li><li>Prepare reports and recommendations</li></ul>",
//   },
// ];

// /*
//   These are the demo jobs from the previous seed version.
//   They are removed only if they still exist, so manually created
//   recruiter jobs are not affected.
// */
// const oldDemoJobs = [
//   {
//     title: "Software Engineer",
//     category: "Programming",
//     location: "Bangalore",
//   },
//   {
//     title: "Backend Developer",
//     category: "Programming",
//     location: "Hyderabad",
//   },
//   {
//     title: "Data Scientist",
//     category: "Data Science",
//     location: "Mumbai",
//   },
//   {
//     title: "UI/UX Designer",
//     category: "Designing",
//     location: "Pune",
//   },
//   {
//     title: "Network Engineer",
//     category: "Networking",
//     location: "Chennai",
//   },
//   {
//     title: "Product Manager",
//     category: "Management",
//     location: "New Delhi",
//   },
//   {
//     title: "Marketing Associate",
//     category: "Marketing",
//     location: "Mumbai",
//   },
//   {
//     title: "Cybersecurity Analyst",
//     category: "Cybersecurity",
//     location: "Bangalore",
//   },
//   {
//     title: "Full Stack Developer",
//     category: "Programming",
//     location: "Hyderabad",
//   },
//   {
//     title: "Business Analyst",
//     category: "Management",
//     location: "Jaipur",
//   },
// ];

// export const seedDemoJobs = async () => {
//   try {
//     /*
//       Remove old demo jobs created by the previous seed.
//       Only exact title + category + location combinations are removed.
//     */
//     for (const oldJob of oldDemoJobs) {
//       await Job.deleteMany({
//         title: oldJob.title,
//         category: oldJob.category,
//         location: oldJob.location,
//       });
//     }

//     const companies = {};

//     const companyNames = [
//       "Microsoft",
//       "Walmart",
//       "Accenture",
//       "Samsung",
//       "Amazon",
//       "Adobe",
//     ];

//     for (const companyName of companyNames) {
//       const company = await Company.findOne({
//         name: { $regex: `^${companyName}$`, $options: "i" },
//       });

//       if (company) {
//         companies[companyName] = company;
//       } else {
//         console.log(
//           `${companyName} company not found. Jobs for this company will be skipped.`,
//         );
//       }
//     }

//     let createdCount = 0;

//     for (const demoJob of demoJobs) {
//       const company = companies[demoJob.company];

//       if (!company) {
//         continue;
//       }

//       const existingJob = await Job.findOne({
//         title: demoJob.title,
//         category: demoJob.category,
//         location: demoJob.location,
//         companyId: company._id,
//       });

//       if (existingJob) {
//         continue;
//       }

//       await Job.create({
//         title: demoJob.title,
//         description: demoJob.description,
//         location: demoJob.location,
//         category: demoJob.category,
//         level: demoJob.level,
//         salary: demoJob.salary,
//         date: Date.now() - demoJob.daysAgo * 24 * 60 * 60 * 1000,
//         visible: true,
//         companyId: company._id,
//       });

//       createdCount++;
//     }

//     if (createdCount > 0) {
//       console.log(`${createdCount} demo jobs created successfully.`);
//     } else {
//       console.log("Demo jobs already exist. No new demo jobs created.");
//     }
//   } catch (error) {
//     console.error("Error while seeding demo jobs:", error.message);
//   }
// };

// import path from "path";
// import { fileURLToPath } from "url";
// import bcrypt from "bcrypt";
// import { v2 as cloudinary } from "cloudinary";

// import Job from "../models/Job.js";
// import Company from "../models/Company.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const logoFiles = {
//   Microsoft: path.resolve(
//     __dirname,
//     "../../client/src/assets/microsoft_logo.svg",
//   ),

//   //   Walmart: path.resolve(__dirname, "../../client/src/assets/walmart_logo.png"),
//   Walmart: path.resolve(__dirname, "../../client/src/assets/walmart_logo.svg"),

//   Accenture: path.resolve(
//     __dirname,
//     "../../client/src/assets/accenture_logo.png",
//   ),

//   Samsung: path.resolve(__dirname, "../../client/src/assets/samsung_logo.png"),

//   Amazon: path.resolve(__dirname, "../../client/src/assets/amazon_logo.png"),

//   Adobe: path.resolve(__dirname, "../../client/src/assets/adobe_logo.png"),
// };

// const demoCompanies = [
//   {
//     name: "Microsoft",
//     email: "microsoft.demo@talentbridge.com",
//   },
//   {
//     name: "Walmart",
//     email: "walmart.demo@talentbridge.com",
//   },
//   {
//     name: "Accenture",
//     email: "accenture.demo@talentbridge.com",
//   },
//   {
//     name: "Samsung",
//     email: "samsung.demo@talentbridge.com",
//   },
//   {
//     name: "Amazon",
//     email: "amazon.demo@talentbridge.com",
//   },
//   {
//     name: "Adobe",
//     email: "adobe.demo@talentbridge.com",
//   },
// ];

// const demoJobs = [
//   {
//     company: "Accenture",
//     title: "Software Engineer",
//     category: "Programming",
//     location: "Bangalore",
//     level: "Beginner level",
//     salary: 800000,
//     daysAgo: 2,
//     description:
//       "<p>Work on scalable software applications and contribute to building reliable products used by thousands of users.</p><ul><li>Develop and maintain web applications</li><li>Write clean and efficient code</li><li>Collaborate with cross-functional teams</li></ul>",
//   },

//   {
//     company: "Microsoft",
//     title: "Data Scientist",
//     category: "Data Science",
//     location: "Bangalore",
//     level: "Intermediate level",
//     salary: 1100000,
//     daysAgo: 3,
//     description:
//       "<p>Analyze large datasets and develop data-driven solutions that help teams make better business decisions.</p><ul><li>Analyze and interpret complex datasets</li><li>Build predictive models</li><li>Create meaningful data insights</li></ul>",
//   },

//   {
//     company: "Samsung",
//     title: "UI/UX Designer",
//     category: "Designing",
//     location: "Pune",
//     level: "Beginner level",
//     salary: 650000,
//     daysAgo: 4,
//     description:
//       "<p>Design intuitive and engaging digital experiences for modern web and mobile products.</p><ul><li>Create wireframes and prototypes</li><li>Design user-friendly interfaces</li><li>Collaborate with developers and product teams</li></ul>",
//   },

//   {
//     company: "Amazon",
//     title: "Backend Developer",
//     category: "Programming",
//     location: "Hyderabad",
//     level: "Intermediate level",
//     salary: 950000,
//     daysAgo: 5,
//     description:
//       "<p>Build and maintain robust backend services and APIs for modern web applications.</p><ul><li>Develop REST APIs</li><li>Work with databases and server-side logic</li><li>Improve application performance</li></ul>",
//   },

//   {
//     company: "Adobe",
//     title: "Cybersecurity Analyst",
//     category: "Cybersecurity",
//     location: "Chennai",
//     level: "Intermediate level",
//     salary: 900000,
//     daysAgo: 6,
//     description:
//       "<p>Help protect applications and infrastructure by identifying security risks and monitoring potential threats.</p><ul><li>Monitor security alerts</li><li>Identify vulnerabilities</li><li>Assist with security investigations</li></ul>",
//   },

//   {
//     company: "Walmart",
//     title: "Marketing Associate",
//     category: "Marketing",
//     location: "Mumbai",
//     level: "Beginner level",
//     salary: 500000,
//     daysAgo: 7,
//     description:
//       "<p>Support marketing campaigns and help build strategies that improve brand awareness and customer engagement.</p><ul><li>Assist marketing campaigns</li><li>Conduct market research</li><li>Track campaign performance</li></ul>",
//   },

//   {
//     company: "Accenture",
//     title: "Full Stack Developer",
//     category: "Programming",
//     location: "Jaipur",
//     level: "Senior level",
//     salary: 1250000,
//     daysAgo: 8,
//     description:
//       "<p>Develop complete web applications across frontend and backend technologies.</p><ul><li>Build responsive React interfaces</li><li>Develop backend APIs</li><li>Work with databases and authentication</li></ul>",
//   },

//   {
//     company: "Microsoft",
//     title: "Network Engineer",
//     category: "Networking",
//     location: "New Delhi",
//     level: "Senior level",
//     salary: 1050000,
//     daysAgo: 9,
//     description:
//       "<p>Manage and maintain reliable network infrastructure while ensuring secure and efficient connectivity.</p><ul><li>Monitor network performance</li><li>Troubleshoot connectivity issues</li><li>Maintain network infrastructure</li></ul>",
//   },

//   {
//     company: "Walmart",
//     title: "Product Manager",
//     category: "Management",
//     location: "Mumbai",
//     level: "Senior level",
//     salary: 1400000,
//     daysAgo: 10,
//     description:
//       "<p>Lead product initiatives from planning to execution and work closely with engineering, design and business teams.</p><ul><li>Define product requirements</li><li>Manage product roadmaps</li><li>Coordinate with cross-functional teams</li></ul>",
//   },

//   {
//     company: "Samsung",
//     title: "Business Analyst",
//     category: "Management",
//     location: "Hyderabad",
//     level: "Intermediate level",
//     salary: 700000,
//     daysAgo: 11,
//     description:
//       "<p>Work with business and technical teams to understand requirements and improve business processes.</p><ul><li>Gather business requirements</li><li>Analyze processes and data</li><li>Prepare reports and recommendations</li></ul>",
//   },
// ];

// // const uploadLogo = async (companyName) => {
// //   const logoPath = logoFiles[companyName];

// //   const result = await cloudinary.uploader.upload(logoPath, {
// //     folder: "talentbridge/demo-companies",
// //     public_id: companyName.toLowerCase(),
// //     overwrite: true,
// //     resource_type: "image",
// //   });

// //   return result.secure_url;
// // };
// const uploadLogo = async (companyName) => {
//   const logoPath = logoFiles[companyName];

//   console.log(`Uploading ${companyName} logo from:`);
//   console.log(logoPath);

//   const result = await cloudinary.uploader.upload(logoPath, {
//     folder: "talentbridge/demo-companies",
//     public_id: companyName.toLowerCase(),
//     overwrite: true,
//     resource_type: "image",
//   });

//   console.log(`${companyName} logo uploaded successfully.`);

//   return result.secure_url;
// };

// export const seedDemoJobs = async () => {
//   try {
//     console.log("Starting TalentBridge demo data setup...");

//     // --------------------------------------------------
//     // 1. DELETE ALL EXISTING JOBS
//     // --------------------------------------------------

//     const deletedJobs = await Job.deleteMany({});

//     console.log(`${deletedJobs.deletedCount} existing jobs deleted.`);

//     // --------------------------------------------------
//     // 2. CREATE / UPDATE THE SIX DEMO COMPANIES
//     // --------------------------------------------------

//     const companies = {};

//     const hashedPassword = await bcrypt.hash("Demo@12345", 10);

//     for (const companyData of demoCompanies) {
//       let company = await Company.findOne({
//         email: companyData.email,
//       });

//       const logoUrl = await uploadLogo(companyData.name);

//       if (!company) {
//         company = await Company.create({
//           name: companyData.name,
//           email: companyData.email,
//           image: logoUrl,
//           password: hashedPassword,
//         });

//         console.log(`${companyData.name} company created.`);
//       } else {
//         company.name = companyData.name;
//         company.image = logoUrl;

//         await company.save();

//         console.log(`${companyData.name} company updated.`);
//       }

//       companies[companyData.name] = company;
//     }

//     // --------------------------------------------------
//     // 3. CREATE EXACTLY 10 DEMO JOBS
//     // --------------------------------------------------

//     for (const demoJob of demoJobs) {
//       const company = companies[demoJob.company];

//       if (!company) {
//         console.log(`Skipping ${demoJob.title}: ${demoJob.company} not found.`);
//         continue;
//       }

//       await Job.create({
//         title: demoJob.title,
//         description: demoJob.description,
//         location: demoJob.location,
//         category: demoJob.category,
//         level: demoJob.level,
//         salary: demoJob.salary,
//         date: Date.now() - demoJob.daysAgo * 24 * 60 * 60 * 1000,
//         visible: true,
//         companyId: company._id,
//       });
//     }

//     console.log("10 TalentBridge demo jobs created successfully.");

//     console.log(`
// Demo companies:
// - Microsoft
// - Walmart
// - Accenture
// - Samsung
// - Amazon
// - Adobe

// Demo jobs:
// - Data Scientist
// - Marketing Associate
// - Software Engineer
// - UI/UX Designer
// - Backend Developer
// - Cybersecurity Analyst
// - Network Engineer
// - Product Manager
// - Full Stack Developer
// - Business Analyst
//     `);
//   } catch (error) {
//     console.error("Demo data setup failed:");
//     console.error(error);
//   }
// };

import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";

import Job from "../models/Job.js";
import Company from "../models/Company.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ==================================================
// COMPANY LOGO FILES
// ==================================================

const logoFiles = {
  Microsoft: path.resolve(
    __dirname,
    "../../client/src/assets/microsoft_logo.svg",
  ),

  Walmart: path.resolve(__dirname, "../../client/src/assets/walmart_logo.svg"),

  Accenture: path.resolve(
    __dirname,
    "../../client/src/assets/accenture_logo.png",
  ),

  Samsung: path.resolve(__dirname, "../../client/src/assets/samsung_logo.png"),

  Amazon: path.resolve(__dirname, "../../client/src/assets/amazon_logo.png"),

  Adobe: path.resolve(__dirname, "../../client/src/assets/adobe_logo.png"),
};

// ==================================================
// DEMO COMPANIES
// ==================================================

const demoCompanies = [
  {
    name: "Microsoft",
    email: "microsoft.demo@talentbridge.com",
  },

  {
    name: "Walmart",
    email: "walmart.demo@talentbridge.com",
  },

  {
    name: "Accenture",
    email: "accenture.demo@talentbridge.com",
  },

  {
    name: "Samsung",
    email: "samsung.demo@talentbridge.com",
  },

  {
    name: "Amazon",
    email: "amazon.demo@talentbridge.com",
  },

  {
    name: "Adobe",
    email: "adobe.demo@talentbridge.com",
  },
];

// ==================================================
// DEMO JOBS
// ==================================================

const demoJobs = [
  // 1. Latest - Beginner
  {
    company: "Accenture",
    title: "Software Engineer",
    category: "Programming",
    location: "Bangalore",
    level: "Beginner level",
    salary: 800000,
    daysAgo: 2,
    description:
      "<p>Work on scalable software applications and contribute to building reliable products used by thousands of users.</p><ul><li>Develop and maintain web applications</li><li>Write clean and efficient code</li><li>Collaborate with cross-functional teams</li></ul>",
  },

  // 2. Latest - Intermediate
  {
    company: "Microsoft",
    title: "Data Scientist",
    category: "Data Science",
    location: "Bangalore",
    level: "Intermediate level",
    salary: 1100000,
    daysAgo: 3,
    description:
      "<p>Analyze large datasets and develop data-driven solutions that help teams make better business decisions.</p><ul><li>Analyze and interpret complex datasets</li><li>Build predictive models</li><li>Create meaningful data insights</li></ul>",
  },

  // 3. Latest - Beginner
  {
    company: "Samsung",
    title: "UI/UX Designer",
    category: "Designing",
    location: "Pune",
    level: "Beginner level",
    salary: 650000,
    daysAgo: 4,
    description:
      "<p>Design intuitive and engaging digital experiences for modern web and mobile products.</p><ul><li>Create wireframes and prototypes</li><li>Design user-friendly interfaces</li><li>Collaborate with developers and product teams</li></ul>",
  },

  // 4. Latest - Intermediate
  {
    company: "Amazon",
    title: "Backend Developer",
    category: "Programming",
    location: "Hyderabad",
    level: "Intermediate level",
    salary: 950000,
    daysAgo: 5,
    description:
      "<p>Build and maintain robust backend services and APIs for modern web applications.</p><ul><li>Develop REST APIs</li><li>Work with databases and server-side logic</li><li>Improve application performance</li></ul>",
  },

  // 5. Latest - Senior
  {
    company: "Accenture",
    title: "Full Stack Developer",
    category: "Programming",
    location: "Jaipur",
    level: "Senior level",
    salary: 1250000,
    daysAgo: 6,
    description:
      "<p>Develop complete web applications across frontend and backend technologies.</p><ul><li>Build responsive React interfaces</li><li>Develop backend APIs</li><li>Work with databases and authentication</li></ul>",
  },

  // 6. Latest - Senior
  {
    company: "Microsoft",
    title: "Network Engineer",
    category: "Networking",
    location: "New Delhi",
    level: "Senior level",
    salary: 1050000,
    daysAgo: 7,
    description:
      "<p>Manage and maintain reliable network infrastructure while ensuring secure and efficient connectivity.</p><ul><li>Monitor network performance</li><li>Troubleshoot connectivity issues</li><li>Maintain network infrastructure</li></ul>",
  },

  // 7.
  {
    company: "Walmart",
    title: "Marketing Associate",
    category: "Marketing",
    location: "Mumbai",
    level: "Beginner level",
    salary: 500000,
    daysAgo: 8,
    description:
      "<p>Support marketing campaigns and help build strategies that improve brand awareness and customer engagement.</p><ul><li>Assist marketing campaigns</li><li>Conduct market research</li><li>Track campaign performance</li></ul>",
  },

  // 8.
  {
    company: "Walmart",
    title: "Product Manager",
    category: "Management",
    location: "Mumbai",
    level: "Senior level",
    salary: 1400000,
    daysAgo: 9,
    description:
      "<p>Lead product initiatives from planning to execution and work closely with engineering, design and business teams.</p><ul><li>Define product requirements</li><li>Manage product roadmaps</li><li>Coordinate with cross-functional teams</li></ul>",
  },

  // 9.
  {
    company: "Adobe",
    title: "Cybersecurity Analyst",
    category: "Cybersecurity",
    location: "Chennai",
    level: "Intermediate level",
    salary: 900000,
    daysAgo: 10,
    description:
      "<p>Help protect applications and infrastructure by identifying security risks and monitoring potential threats.</p><ul><li>Monitor security alerts</li><li>Identify vulnerabilities</li><li>Assist with security investigations</li></ul>",
  },

  // 10.
  {
    company: "Samsung",
    title: "Business Analyst",
    category: "Management",
    location: "Hyderabad",
    level: "Intermediate level",
    salary: 700000,
    daysAgo: 11,
    description:
      "<p>Work with business and technical teams to understand requirements and improve business processes.</p><ul><li>Gather business requirements</li><li>Analyze processes and data</li><li>Prepare reports and recommendations</li></ul>",
  },
];

// ==================================================
// UPLOAD COMPANY LOGO TO CLOUDINARY
// ==================================================

const uploadLogo = async (companyName) => {
  const logoPath = logoFiles[companyName];

  console.log(`Uploading ${companyName} logo from:`);
  console.log(logoPath);

  const result = await cloudinary.uploader.upload(logoPath, {
    folder: "talentbridge/demo-companies",
    public_id: companyName.toLowerCase(),
    overwrite: true,
    resource_type: "image",
  });

  console.log(`${companyName} logo uploaded successfully.`);

  return result.secure_url;
};

// ==================================================
// SEED DEMO DATA
// ==================================================

export const seedDemoJobs = async () => {
  try {
    console.log("Starting TalentBridge demo data setup...");

    // ==================================================
    // 1. DELETE ALL EXISTING JOBS
    // ==================================================

    const deletedJobs = await Job.deleteMany({});

    console.log(`${deletedJobs.deletedCount} existing jobs deleted.`);

    // ==================================================
    // 2. CREATE / UPDATE SIX DEMO COMPANIES
    // ==================================================

    const companies = {};

    const hashedPassword = await bcrypt.hash("Demo@12345", 10);

    for (const companyData of demoCompanies) {
      let company = await Company.findOne({
        email: companyData.email,
      });

      // Upload logo
      const logoUrl = await uploadLogo(companyData.name);

      // Create company if it does not exist
      if (!company) {
        company = await Company.create({
          name: companyData.name,
          email: companyData.email,
          image: logoUrl,
          password: hashedPassword,
        });

        console.log(`${companyData.name} company created.`);
      }

      // Update existing demo company
      else {
        company.name = companyData.name;
        company.image = logoUrl;

        await company.save();

        console.log(`${companyData.name} company updated.`);
      }

      companies[companyData.name] = company;
    }

    // ==================================================
    // 3. CREATE EXACTLY 10 DEMO JOBS
    // ==================================================

    for (const demoJob of demoJobs) {
      const company = companies[demoJob.company];

      if (!company) {
        console.log(`Skipping ${demoJob.title}: ${demoJob.company} not found.`);

        continue;
      }

      await Job.create({
        title: demoJob.title,
        description: demoJob.description,
        location: demoJob.location,
        category: demoJob.category,
        level: demoJob.level,
        salary: demoJob.salary,

        // Newer jobs get a more recent date
        date: Date.now() - demoJob.daysAgo * 24 * 60 * 60 * 1000,

        visible: true,
        companyId: company._id,
      });
    }

    // ==================================================
    // 4. SUCCESS MESSAGE
    // ==================================================

    console.log("10 TalentBridge demo jobs created successfully.");

    console.log(`
Demo companies:
- Microsoft
- Walmart
- Accenture
- Samsung
- Amazon
- Adobe

Demo jobs:
- Software Engineer
- Data Scientist
- UI/UX Designer
- Backend Developer
- Full Stack Developer
- Network Engineer
- Marketing Associate
- Product Manager
- Cybersecurity Analyst
- Business Analyst
    `);
  } catch (error) {
    console.error("Demo data setup failed:");
    console.error(error);
  }
};
