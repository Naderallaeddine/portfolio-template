const weather =require("../../src/images/weather-app.png");
const library =require("../../src/images/Dashboard.jpg");
const restaurant =require("../../src/images/restaurant.png");
const Lebanese =require("../../src/images/lebanese.png");

export const Bio = {
  name: "Nader Allaeddine",
  roles: [
    "Full Stack Developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Naderallaeddine",
  resume:
    "",
  linkedin: "https://www.linkedin.com/in/nader-allaeddine-ab00962a8/",
  twitter: "https://twitter.com/",
  insta: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "PHP",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      },
      {
        name: "Laravel",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "C#",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
      },
      {
        name: ".net Core",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
      },
      {
        name: "Java",
        image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png"
      },

    ],
  },

  {
    title: "Android",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "XML",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
    ],
  },

  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img:'',
    role: "LARAVEL CMS RESTAUTANT",
    company: "Lebanese University",
    date: "April 2023 - May 2023",
    desc: "An online CMS restaurant built with php and laravel, with both a user page and anadmin page. Admins can modify the menu, create offers, book tables, and control the overall functionality of the website.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "MySql"
    ],
    doc: "https://github.com/Naderallaeddine/laravel-restaurant-reservation-main",
  },
];

export const education = [
  {
    id: 0,
    img: Lebanese,
    school: "Lebanese University",
    date: "Nov 2019 - Nov 2023",
    grade: "",
    desc: "",
    degree: "Bachelor in Computer Science",
  },

];

export const projects = [
  {
    id: 0,
    title: "LARAVEL CMS RESTAUTANT",
    date: "Apr 2023 - May 2023",
    description:
      "An online CMS restaurant built with php and laravel, with both a user page and anadmin page. Admins can modify the menu, create offers, book tables, and control the overall functionality of the website.",
    image:
      restaurant,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "MySql"
    ],
    category: "web app",
    github: "https://github.com/Naderallaeddine/laravel-restaurant-reservation-main",
    webapp: "",
  },
  {
    id: 1,
    title: "Weather App",
    date: "",
    description:
      "A weather application using react.js, allow users to retrieve weather information for a specific city. Leveraged the OpenWeatherMap API to fetch real-time weather data and utilized state management to dynamically update the user interface.",
    image:
      weather,
    tags: [
      "React",
      "HTML",
      "CSS",
      "Javascript",
      "Api",
    ],
    category: "web app",
    github: "https://github.com/Naderallaeddine/Weather-App",
    webapp: "",
  },
  {
    id: 2,
    title: "LIBRARY SYSTEM JAVA FX",
    date: "",
    description:
      "A local library system built with Java Fx. Implemented with several design patterns some of which are MVC, Proxy, Visitor, and much more. Admins can add new books and students to the system and rent or return the rented books.",
    image:
      library,
    tags: ["Java", "JavaFx", "Design Pattern", "MySql"],
    category: "web app",
    github: "https://github.com/Naderallaeddine/LibrarySystem-JavaFX",
    webapp: "",
    member: [],
  },
];