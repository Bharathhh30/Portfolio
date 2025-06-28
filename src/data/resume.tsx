import { Icons } from "@/components/icons";
import { m } from "framer-motion";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bharath",
  initials: "VNS",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Developer | Cross Platform Mobile Developer | 2X National Level Hackathon Winner |",
  summary:
    "I'm Bharath, a curious and driven developer with a passion for building across platforms. I work with the Full stack and React Native (Expo), creating full-stack and mobile apps with real-world use cases. I've also explored AI agent development and love experimenting with emerging tech like Web3 and agentic AI. I'm all about learning fast, shipping projects, and turning ideas into impact",
  avatarUrl: "https://i.pinimg.com/736x/f3/3d/e5/f33de5f6d8580f06f5c4a36126c0c56a.jpg",
  skills: [
    "React",
    "React Native",
    "Typescript",
    "Node.js",
    "Python",
    "Docker",
    "Java",
    "R",
    "Express",
    "Phaser",
    "MongoDB",
    "Expo",
    "Firebase",
    "TailwindCSS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "vnsb30@gmail.com",
    tel: "+91 8919162757",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Bharathhh30",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vasarlanagasaibharath30/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Bharathhh30",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "Anurag University",
      href: "https://anurag.edu.in/",
      degree: "Bachelor's Degree of Technology (B.Tech) in CSE-Data Science",
      logoUrl: "https://pbs.twimg.com/profile_images/1273946610364547077/EaoLiHml_400x400.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Narayana Junior College",
      href: "https://www.narayanagroup.com/",
      degree: "Intermediate Education",
      logoUrl: "https://www.narayanagroup.com/images/logo.png",
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Drip",
      href: "https://drip-one.vercel.app/",
      dates: "",
      active: true,
      description:
        "A Solana tipping app using Blink links for seamless transaction signing, built with React and Express.js using Solana Web3.js.",
      technologies: [
        "React",
        "Typescript",
        "NodeJs",
        "Solana",
        "TailwindCSS",
        "Ace eternity UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://drip-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Bharathhh30/Drip",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dz6ew7haz/image/upload/v1748458634/Screenshot_2025-05-29_002548_igjrf3.png",
      video: "",
    },
    {
      title: "Bolt.newer",
      href: "https://bolt-newer.vercel.app/",
      dates: "",
      active: true,
      description:
        "Built a web app using React and Express.js where users can generate and preview websites from natural language prompts using Gemini LLM. Integrated WebContainers to run and render the site live in the browser—no local setup needed.",
      technologies: [
        "React",
        "Typescript",
        "NodeJs",
        "Gemini ",
        "Webcontainers",
      ],
      links: [
        {
          type: "Website",
          href: "https://bolt-newer.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Bharathhh30/bolt.newer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dz6ew7haz/image/upload/v1751120707/Screenshot_2025-06-28_194802_b8nego.png",
      video: "",
    },
    {
      title: "Movie-App",
      href: "https://github.com/Bharathhh30/Movie-Data",
      dates: "",
      active: true,
      description:
        "Built a mobile app using React Native and Expo to browse and search movies by fetching real-time data from the TMDB API. Implemented a responsive UI with NativeWind and managed backend services like searching (implemented debouncing) and storage using Appwrite.",
      technologies: [
        "React Native",
        "Typescript",
        "Expo",
        "Nativewind",
        "Appwrite",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Bharathhh30/Movie-Data",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Bharathhh30/Movie-Data",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dz6ew7haz/image/upload/v1751122262/ChatGPT_Image_Jun_28_2025_08_20_02_PM_qhd2xr.png",
      video: "",
    },
    {
      title: "2D-Virtual Office",
      href: "https://github.com/Bharathhh30/Phaser-React-Vite-Template/tree/realtime-character-movements",
      dates: "",
      active: true,
      description:
        "Developed a gamified 2D virtual office using React, Firebase, Phaser.js, and Socket.io, enabling real-time movement, video interactions, and workspace creation. Implemented JWT authentication, role-based access, and Firestore for dynamic user management. Integrated WebRTC for video chats and optimized performance with efficient state management.",
      technologies: [
        "React",
        "Phaser",
        "NodeJs",
        "Websockets",
        "MongoDB",
        "Ace eternity UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Bharathhh30/Phaser-React-Vite-Template/tree/realtime-character-movements",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Bharathhh30/Phaser-React-Vite-Template/tree/realtime-character-movements",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dz6ew7haz/image/upload/v1751121113/Screenshot_2025-02-21_222841_qeqdwf.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Data Dynamo",
      dates: "February 7th - 8th, 2024",
      location: "Hyderabad, India",
      description:
        "Developed a web application that enhanced learning accessibility through question paper analysis, ancient manuscript translation, and a multilingual Chat AI — secured 2nd runner-up position at the Data Dynamo Hackathon.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      // links: [],
    },
    {
      title: "The Convergence Challenge Hackathon",
      dates: "March 9th - 10th, 2024",
      location: "Hyderabad, India",
      description:
        "Develop Wizz AI, a SaaS platform offering AI-powered tools for smarter education, and proudly secured 3rd place 🥉 in my second hackathon with valuable mentorship and teamwork.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xHkRfekjZATP8kiHS9xv1NVbCUu-zwlW1A&s",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      // links: [],
    },
    {
      title: "Smart Hacks",
      dates: "June 21st - 22nd, 2024",
      location: "Hyderabad, India",
      description:
        "Developed EkMatra, a web application platform connecting single parents and providing them with a dedicated marketplace.",
      icon: "public",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yBXzZN-pR1tdN-YujqCq2DBD4mm1PLpuPg&s",
      // links: [],
    },
    {
      title: "Tech Hacks 3.0",
      dates: "June 28rd - 29th, 2024",
      location: "Hyderabad, India",
      description:
        "Leveraged machine learning algorithms and integrated Twilio to develop an advanced disaster management application.",
      image:
        "https://dcassetcdn.com/design_img/2523470/636004/636004_13504479_2523470_8700c44d_image.jpg",
      // links: [
      //   {
      //     title: "Github",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/cryptotrends/cryptotrends",
      //   },
      // ],
    },
    {
      title: "Techxcelerate",
      dates: "February 21st - 22nd, 2025",
      location: "Hyderabad, India",
      description:
        "Developed a 2D metaverse-style virtual office platform featuring real-time communication for enhanced remote collaboration.",
      image:
        "https://codebeat.in/wp-content/uploads/2024/04/CODE-BELT-new-03.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      // links: [
      //   {
      //     title: "Devpost",
      //     icon: <Icons.globe className="h-4 w-4" />,
      //     href: "https://devpost.com/software/my6footprint",
      //   },
      //   {
      //     title: "ML",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/Wallet6/my6footprint-machine-learning",
      //   },
      //   {
      //     title: "iOS",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/Wallet6/CarbonWallet",
      //   },
      //   {
      //     title: "Server",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/Wallet6/wallet6-server",
      //   },
      // ],
    },
      ],
} as const;
