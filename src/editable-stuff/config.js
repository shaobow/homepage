// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#cea759, #ffb405, #ff9b11, #f1a47b, #f1c98c",
  firstName: "Shaobo",
  middleName: "",
  lastName: "Wang",
  message: "Let's Build Robots that Make Our Life Easier",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/shaobow",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shaobow/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/shaobow.png"),
  imageSize: 375,
  message:
    "My name is Shaobo Wang. I'm a Master's student at Carnegie Mellon University with a degree in Mechanical Engineering who focus on robotics and control systems.",
  resume: require("../editable-stuff/Resume_shaobow_Control.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "shaobow", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
/*   heading: "Leadership",
  message:
    "",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  } */
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C/Modern C++", value: 95 },
    { name: "MATLAB/Simulink", value: 95 },
    { name: "Python", value: 80 },
    { name: "OMPL", value: 70 },
    { name: "OpenCV", value: 70 },
    { name: "ROS", value: 60 },
    { name: "LabVIEW", value: 45 },
    { name: "Java", value: 40 },
  ],
  softSkills: [
    { name: "Kinematics & Dynamics Modeling", value: 95 },
    { name: "Classical Control - PID", value: 95 },
    { name: "Optimal Control - LQR/LQG", value: 95 },
    { name: "(Extended) Kalman Filter", value: 90 },
    { name: "Model Predictive Control", value: 85 },
    { name: "System Identification", value: 85 },
    { name: "Motion Planning", value: 85 },
    { name: "Trajectory Optimization", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "If you know of any available opportunities or if you want to know more about me and my previous projects, please feel free to email me at",
  email: "shaobow@andrew.cmu.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      companyname: 'Carnegie Mellon University',
      role: 'Course Assistant',// Here Add Company Name
      companylogo: require('../assets/img/cmu.png'),
      date: 'September 2022 – Present',
    },
    {
      companyname: 'Johnson & Johnson MedTech',
      role: 'Robotics and Controls Intern',// Here Add Company Name
      companylogo: require('../assets/img/jnj.png'),
      date: 'May 2022 – August 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
