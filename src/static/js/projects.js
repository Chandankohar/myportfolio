import governmentinfoconnect from '../logo/governmentinfoconnect.png'
import crm from '../logo/crm.webp'
import markattendance from '../logo/markattendance.jpg'
import petmanagement from '../logo/petmanagement.PNG'

import gov1 from '../image/project/gov1.png'
import gov2 from '../image/project/gov2.png'
import gov3 from '../image/project/gov3.png'
import gov4 from '../image/project/gov4.png'
import gov5 from '../image/project/gov5.png'
import gov6 from '../image/project/gov6.png'
import gov7 from '../image/project/gov7.png'
import gov8 from '../image/project/gov8.png'
import crm1 from '../image/project/crm1.png'
import crm2 from '../image/project/crm2.png'
import crm3 from '../image/project/crm3.png'
import crm4 from '../image/project/crm4.png'
import att1 from '../image/project/att1.png'
import att2 from '../image/project/att2.png'
import att3 from '../image/project/att3.png'
import att4 from '../image/project/att4.png'
import pet1 from '../image/project/pet1.png'
import pet2 from '../image/project/pet2.png'
import pet3 from '../image/project/pet3.png'
import pet4 from '../image/project/pet4.png'




const projects=[
  {
    id: "crm-erp",
    title: "CRM-ERP Web App",
    technology:'Django, Tailwind css, SQL, Django Templates',
    date:'dec 20 2024- march 20 2025',
    image:crm,
    description: "The proposed system offers key functionalities such as lead management, sales tracking, marketing automation, and customer support. It ensures data security with role-based access and encryption, providing a reliable solution for businesses of all sizes.",
    objective: "To enhance business efficiency by integrating CRM and ERP features into a single platform for better customer and resource management.",
    reportLink: "https://drive.google.com/file/d/1w9vN7BPWVwDGTv9WNVxRV3_17FerRt5N/view?usp=drive_link",
    hostedLink: null,
    githubLink: null,
    githubFrontendLink: null,
    githubBackendLink:null,
    screenshots: [
      crm1,crm2,crm3,crm4
    ],
  },

  {
    id: "attend-mark",
    title: "Employee Attendance Mark and Report ",
    image: markattendance,
    technology:'Reactjs, Bootstrap, Expressjs, Mongo DB. node-wifi, bcrypt',
    date:'dec 01 2024- dec o7 2024',
    description: "This web site is total built in MERN technology which is totally based on the geolocation, router ssid and punch in and punchout which marking him/herself as present or absent and by default mark absent at office close time who donot punchin or punchout the attendance .This also show the punchin, punchout, date, total working hour report. ",
    objective: "A MERN-based geolocation attendance system that tracks punch-in/out via router SSID, auto-marks absences, and generates work-hour reports.",
    reportLink: null,
    hostedLink: null,
    githubFrontendLink: null,
    githubBackendLink:null,
    githubLink:'https://github.com/Chandankohar/Employe_Attendance_Mark_And_Report',
    screenshots: [
      att1,att2,att3,att4
    ],
  },

  {
    id: "gov-info",
    title: "Government Info Connect Web App",
    image: governmentinfoconnect,
    technology:'Reactjs, Bootstrap, Expressjs, Mongo DB,Cloudinary',
    date:'july 20 2024- sept 15 2024',
    description: "GovInfo Connect is a web-based platform designed to increase transparency and public participation in government affairs. The platform provides comprehensive information about various schemes, making it easier for citizens to understand their eligibility and benefits available to them. The user-friendly application system makes it easy to submit forms. To ensure transparency and prevent abuse, a special verification code will be used and applicants will receive a code via SMS or mail to confirm their application.",
    objective: "The objective of GovInfo Connect is to enhance transparency and public participation in government affairs by providing comprehensive and accessible information about various government schemes",
    reportLink: "https://drive.google.com/file/d/1vQSAeHOgITza62WHgE4GQCfzQp5JT88q/view?usp=drive_link",
    hostedLink: "https://government-info-connect-frontend.onrender.com",
    githubFrontendLink: "https://github.com/Chandankohar/Government_Info_Connect_Frontend",
    githubBackendLink:'https://github.com/Chandankohar/Government_Info_Connect_Backend',
    githubLink:null,
    screenshots: [
      gov1,gov2,gov3,gov4,gov5,gov6,gov7,gov8,
    ],
  },

  {
    id: "pet-manage",
    title: "Pet Boarding Management System",
    image: petmanagement,
    technology:'Reactjs, Bootstrap, Expressjs, Mongo DB,Cloudinary',
    date:'jun 28 2024- jul 10 2024',
    description: "Odoo hackthon 2024 selected for final round. A Pet Boarding Management System that facilitates the buying and selling of pets, including listings, seller verification etc.",
    objective: "The objective is to create a system for buying and selling pets efficiently.",
    reportLink: null,
    hostedLink: "https://pet-boarding-management-system.onrender.com/",
    githubFrontendLink: "https://github.com/Chandankohar/Pet_Boarding_Management_System_Frontend",
    githubBackendLink:'https://github.com/Chandankohar/Pet_Boarding_Management_System_Backend',
    githubLink:null,
    screenshots: [
      pet1,pet2,pet3,pet4,
    ],
  },

  
]


export default projects;