// session storage
export const preloaderToken = "abhishekworks787_portfolio";
export const preloaderTimeout = 5000;

// Nav Title
export const NavTitle = {
  logo: "",
  title: "Abhishek | Software Engineer",
};

// Navlinks
export const NavLinkNames = [
  "Home",
  "About",
  "Experience",
  "Education",
  "Projects",
  "Contact",
];

// Landing page data
export const LandingPageData = {
  backgroundImg: "https://wallpaperaccess.com/full/312629.jpg",
  title: "Hi",
  subtitle: "It's Abhishek",
  position: "OTAKU | Backend Engineer",
  intro: "Experience in building microservices and scalable systems",
};

// resume
export const resumeURL =
  "https://drive.google.com/file/d/1HGcazcfIslglcOJSF8ArD9qIEteliqeN/view?usp=drive_link";

// Github
export const GITHUB = "mrhb787";

// Education
export const EducationDetails = [
  {
    imgSrc:
      "https://iiitl.ac.in/wp-content/uploads/2019/10/Final_Logo_IIITL.png",
    title: "Indian Institute Of Information Technology, Lucknow",
    subject: "B.Tech in Information Technology",
    year: "2019-2023",
    grade: "8.61/10",
  },
  {
    imgSrc: "https://apskanpur.com/images/Website/MainPage/APSKanpurLogo.png",
    title: "Army Public School Cantt. Kanpur",
    subject: "Class 12 | CBSE | Physics, Chemistry, Maths",
    year: "2017-2018",
    grade: "93%",
  },
  {
    imgSrc: "https://apskanpur.com/images/Website/MainPage/APSKanpurLogo.png",
    title: "Army Public School Cantt. Kanpur",
    subject: "Class 12 | CBSE | Science, Social Science, Maths etc.",
    year: "2015-2016",
    grade: "10 CGPA",
  },
];

// Experience
export const ExperienceData = {
  meta: {
    totalWorkExprienceInMonths: 13,
    totalInternshipExperience: 13,
    totalFullTimeExperience: 0,
    totalCompaniesWorkedFor: 4,
  },
  ExperienceDetails: [
    {
      imgSrc:
        "https://media.licdn.com/dms/image/C4D0BAQHZzXFOkncpxQ/company-logo_200_200/0/1671923425506?e=1700092800&v=beta&t=KhTxk0Tuugl47M9KhCT_XTwuECyqfCTvKVwvhm0aL6s",
      company: "JAXL Innovations",
      position: "SDE-1",
      employmentType: "Full Time",
      time: "Jul 2023 - Present",
      work: [
        {
          title: "Razorpay Payments Integration",
          content:
            "Integrated the razorpay payment checkout for subscription and one time orders with python integration in Django",
          timeline: "July 2023 - Present",
        },
      ],
      skills: [
        "Backend Development",
        "Python",
        "Design Patterns",
        "Django",
        "Django Rest Framework",
        "Rest APIs",
      ],
    },
    {
      imgSrc:
        "https://play-lh.googleusercontent.com/YyZ4oxWo8gEJoTRk_5U48vtslIEvHYXdKfBZ_gHfHd7H2yFnfcqwS-61CdStiWsmbrI",
      company: "Acko",
      position: "SDE - Backend",
      employmentType: "Internship",
      time: "Jan - June 2023",
      work: [
        {
          title: "Ather Bunded Policy Issue",
          content:
            "Worked with the auto partnership team to develop the apis for partner ather to issue policies in bundle.",
        },
        {
          title: "MyGate Policy Prequote Link Generator",
          content: "Wrote python script to generate policy preqoute link",
        },
        {
          title: "Amazon Policy Endorsement",
          content:
            "Wrote script with capabilites of logging & debugging to re-endorse wrongly endrosed policies",
        },
        {
          title: "Self Serve Portal",
          content:
            "A portal for auto partnership team for partner onboarding and maintainance",
        },
      ],
      skills: [
        "Backend Development",
        "Java",
        "Design Patterns",
        "Spring Boot",
        "Rest APIs",
        "Docker",
        "Maven",
        "Postman",
      ],
    },
    {
      imgSrc:
        "https://pbs.twimg.com/profile_images/1412862499800551428/n5QfBlee_400x400.png",
      company: "Digicert",
      position: "ASE - FullStack",
      employmentType: "Internship",
      time: "Sep - Dec 2022",
      work: [
        {
          title: "QA Basics",
          content: "Worked with EPKI QA team to learn basics of QA",
        },
        {
          title: "EPKI Certificates Testing",
          content: "Wrote tests for EPKI manager",
        },
      ],
      skills: ["Javascript", "Regression Testing", "Cypress"],
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
      company: "Mathworks",
      position: "EDG - Backend",
      employmentType: "Internship",
      time: "May - July 2022",
      work: [
        {
          title: "MATLAB Basics",
          content: "Learned Matlab",
        },
        {
          title: "Simulink Basics",
          content: "Learnt basics of simulink and models",
        },
        {
          title: "Qesimcheck",
          content:
            "Developed Qesimcheck tool from scratch by first preparing Product requirement Details, then initialiting development with the team. Internal Tool of Matlab to develop test architecture for various models in simulink with testing and report generation support.",
        },
      ],
      skills: ["Matlab", "Simulink", "Maths"],
    },
  ],
};

// Project Details
export const ProjectDetails = [
  {
    imgSrc: "https://bookshlf.in/images/smallLogo.svg",
    title: "Bookshlf (ARA Technologies)",
    position: "Frontend Developer",
    time: "Jan 2022 - Present",
    work: [
      {
        title: "About",
        content:
          "An opensource e-commerce platform developed to buy and sell used books owned by ARA technologies",
      },
      {
        title: "UI Designs",
        content: "Prepared UI/UX flows for the website",
      },
      {
        title: "Technology and Methodologies",
        content:
          "Finalized the tech stack and coding guidelines with Continous integration in github",
      },
      {
        title: "Development",
        content:
          "Developed custom react components from scratch for the website and integrated apis",
      },
    ],
    skills: ["Frontend Development", "HTML", "CSS", "Javascript", "ReactJs"],
  },
  {
    imgSrc: "https://contestmania.web.app/images/logos/logo.png",
    title: "ContestMania",
    position: "Frontend Developer",
    work: [
      {
        title: "About",
        content:
          "A platform for tracking your competitive progress on various competitive coding websites",
      },
      {
        title: "Components Fixes",
        content: "Fixed UI components and standarized them",
      },
      {
        title: "Added Compiler For Code Compilation",
        content: "Added an opensource compiler to compile the code",
      },
    ],
    skills: ["Bootstrap", "Redux", "HTML", "CSS", "Javascript"],
  },
];

export const ContactDetails = [
  {
    imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png",
    type: "Email (work)",
    value: "abhishekworks787@gmail.com",
    url: "mailto:abhishekworks787@gmail.com",
  },
  {
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
    type: "Linkedin",
    value: "@abhishekworks787",
    url: "https://www.linkedin.com/in/abhishekworks787",
  },
  {
    imgSrc: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
    type: "Instagram",
    value: "@senpiesengar",
    url: "https://www.instagram.com/senpiesengar/",
  },
];

// Contact
export const Contact = {
  email: {
    primary: "abhishekworks787@gmail.com",
  },
  others: {
    linkedin: "https://www.linkedin.com/in/abhishekworks787",
    instagram: "https://www.instagram.com/senpiesengar/",
    github: "https://github.com/mrhb787",
    twitter: "",
    topmate: "https://topmate.io/abhishekworks787",
    topmatemessage: "https://topmate.io/abhishekworks787/483210",
  },
};

// Hire Mail Data
export const HireMailData = {
  subject: "",
  cc: "",
  bcc: "",
  body: "",
};
