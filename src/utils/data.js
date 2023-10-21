import { BsTelephone } from "react-icons/bs";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import profile from "../../public/images/profile.png"
import techstudio from "../../public/images/techstudio.png";
import rataz from "../../public/images/rataz.png";
import yemsay from "../../public/images/yemsay.png";
import foundation from "../../public/images/Foundation of PM.jpg"
import project_initiation from "../../public/images/Project_Initiation.jpg"
import project_planning from "../../public/images/Project_Planning.jpg"
import project_execution from "../../public/images/Project_Execution.jpg"
import capstone_project from "../../public/images/Capstone_Project.jpg"
import agile_pm from "../../public/images/Agile_PM.jpg"
import ASK from "../../public/images/ASK_Foundation_page.jpg"

const data = {
  links: [
    {
      id: 1,
      link: "About",
      to: "about",
      offSet: -150,
    },
    {
      id: 2,
      link: "Resume",
      to: "resume",
      offSet: -100,
    },
    {
      id: 3,
      link: "Portfolio",
      to: "portfolio",
      offSet: -100,
    },
    {
      id: 4,
      link: "Contact",
      to: "contact",
      offSet: 0,
    },
  ],
  sayHello: [
    {
      id: 1,
      link: "08086883005",
      // "09078975643",
      to: "https://api.whatsapp.com/send/?phone=2348086883005",
    },
    {
      id: 2,
      link: "abiolahafeez@yahoo.com",
      // "abiolahafeez@gmail.com",
      to: "mailto:abiolahafeez@yahoo.com",
      // "mailto:abiolahafeez@gmail.com",
    },
    {
      id: 3,
      link: "Abdulhafeez Kekere-Ekun",
      // "abdulhaffez.linkedIn",
      to: "http://www.linkedin.com/in/hafeez-kekere-ekun",
      // "https://www.google.com",
    },
  ],
  hero: {
    profileImage: profile ,
    name: "Abdulhafeez Kekere-Ekun",
    title: "Project Manager",
    about:
      "A versatile and results-oriented product and project manager with over 4 years of experience in the tech industry. Skilled in leading cross-functional teams, managing project development cycles, and delivering user-centric solutions. Certified by Google in project management and proficient in web development technologies. A former research scientist with a Master of Science in Medical Microbiology (Virology) and a passion for innovation..",
  },

  skills: [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694016317/Metaversus/logos_asana_yumuzb.webp",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694016361/Metaversus/image_2_t8huxc.png",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694016427/Metaversus/image_3_dsqriq.png",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694018739/Metaversus/512px-HTML5_logo_and_wordmark.svg_l4fnj0.webp",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694019020/Metaversus/css3-logo-png-transparent_f06ipq.webp",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694016662/Metaversus/devicon_bootstrap-wordmark_xp6v9o.png",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694016656/Metaversus/image_4_neqczl.png",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694016650/Metaversus/image_5_wezocn.png",
    },
  ],
  certifications: [
    {
      id: 1,
      image: foundation,
        // "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694025919/Metaversus/image_6_qaflpi.webp",
      about:
        "Foundations of Project Management",
        to: "public/images/Foundation of PM.jpg",
       
    },
    {
      id: 2,
      image:project_initiation,
        // "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694025919/Metaversus/image_6_qaflpi.webp",
      about:
        "Project Initiation: Starting a Successful Project",
        to: "public/images/Project_Initiation.jpg",
    },
    {
      id: 3,
      image: project_planning,
        // "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694025919/Metaversus/image_6_qaflpi.webp",
      about: "Project Planning: Putting It All Together",
      to: "public/images/Project_Planning.jpg",
    },
    {
      id: 4,
      image: project_execution,
        // "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694025919/Metaversus/image_6_qaflpi.webp",
      about: "Project Execution: Running the Project",
      to: "public/images/Project_Execution.jpg",
    },
    {
      id: 5,
      image:capstone_project,
        // "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694025919/Metaversus/image_6_qaflpi.webp",
      about:
        "Capstone: Applying Project Management in the Real World",
        about: "public/images/Capstone_Project.jpg",
    },
    {
      id: 6,
      image:agile_pm,
        // "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694025919/Metaversus/image_6_qaflpi.webp",
      about:
        "Agile Project Management",
        to: "public/images/Agile_PM.jpg",
    },
    {
      id: 7,
      image: ASK,
        // "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694025919/Metaversus/image_6_qaflpi.webp",
      about:
        "Agile, SCRUM, and Kanban Foundations",
        to: "public/images/ASK_Foundation_page.jpg",
    },
    // {
    //   id: 8,
    //   image:
    //     "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694025919/Metaversus/image_6_qaflpi.webp",
    //   about:
    //     "8Lorem ipsum dolor sit amet consectetur. Consequat ultrices eget sed pulvinar vitae habitant dolor dictum. Nibh velit nu Aliquet sedii lectus vulputate rhoncus. cccccccccccccc ccffcc cvcutctyc c cyfctyctyc cvfhctuctuc bcgfc8tctuc cgutcfcx cxguchvc c",
    // },
    // {
    //   id: 9,
    //   image:
    //     "https://res.cloudinary.com/dbxvk3apv/image/upload/v1694025919/Metaversus/image_6_qaflpi.webp",
    //   about:
    //     "9Lorem ipsum dolor sit amet consectetur. Consequat ultrices eget sed pulvinar vitae habitant dolor dictum. Nibh velit nu Aliquet sedii lectus vulputate rhoncus. cccccccccccccc ccffcc cvcutctyc c cyfctyctyc cvfhctuctuc bcgfc8tctuc cgutcfcx cxguchvc c",
    // },
  ],
  resumes: [
    {
      id: 1,
      position: "Product Manager",
      type: "Fulltime",
      company: "Techstudio Consult",
      location: "Lagos, Nigeria",
      start: "November 2022",
      end: "Present",
    },
    {
      id: 2,
      position: "Production Manager",
      type: "Fulltime",
      company: "Sari Premium Wellness LTD",
      location: "Lagos, Nigeria",
      start: "July 2021",
      end: "November 2022",
    },
    {
      id: 3,
      position: "Web Developer",
      type: "Fulltime",
      company: "Strategic Dots Ltd",
      location: "Lagos, Nigeria",
      start: "September 2019",
      end: "July 2021",
    },
    // {
    //   id: 4,
    //   position: "Project Manager4",
    //   type: "Fulltime",
    //   company: "Facebook, Inc.",
    //   location: "Nigeria",
    //   start: "January 2019",
    //   end: "Present",
    // },
  ],
  projects: [
    {
      id: 1,
      image: techstudio,
      title: "Tech Studio Academy",
      about:
        "TechStudio Academy is a tech training company based in Lagos, Nigeria, founded in 2017 with the objective of providing cost-effective and high-quality tech education to aspiring young people in the country. Over the past four years, the academy has trained over 1000 students through both online and in-person classes, and has helped them achieve their career goals in the tech industry. Tech studio academy envisions to become a leading and preferred technology training provider in Nigeria, responding to the needs of the industry.",
      to: "https://techstudioacademy.com",
    },
    {
      id: 2,
      image: rataz,
      title: "Razat Publishers",
      about:
        "Razart publishers values talent diversity and development by being market focused in all we do and encourage quality production. To publish quality and educative books that aid children's learning and increase their diffusion of knowledge. ",
      to: "https://www.razatpublishers.com/",
    },
    {
      id: 3,
      image: yemsay,
      title: "Yemsays Properties and Investments",
      about:
        "Yemsays Properties is a Lagos-based real estate company that specializes in the sale, rental, and management of all types of properties. They offer a wide range of services to  clients, including property search and acquisition, valuation, management, renovation and development, and financial and legal advice. They are committed to providing  clients with the highest level of service and support throughout the buying or selling process..",
      to: "https://www.yemsaysproperties.com",
    },
  ],
  contact: [
    {
      id: 1,
      icon: BsTelephone,
      head: "Phone Number",
      link: "08128200056 | 08086883005 ",
      to: "https://api.whatsapp.com/send/?phone=2348128200056",
    },
    {
      id: 2,
      icon: BiLogoGmail,
      head: "Email Address",
      link: "abiolahafeez@yahoo.com",
      to: "mailto:abiolahafeez@yahoo.com",
    },
    {
      id: 3,
      icon: BiLogoLinkedin,
      head: "LinkedIn",

      link: "Abdulhafeez Kekere-Ekun",
      to: "http://www.linkedin.com/in/hafeez-kekere-ekun",
    },
  ],
};

export default data;
