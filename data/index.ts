import { githubLink, linkedinLink, twitterLink } from "@/data/links"


export const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a Finance Manegement System",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "3D Solar System Planets to Explore",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "/ui.earth.com",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://zoom-clone-yoom.vercel.app/",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://ai-saas-imaginify.vercel.app/",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://apple-website-iphone.vercel.app/",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with you was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. your enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, you is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with you was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. your enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, you is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with you was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. your enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, you is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with you was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. your enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, you is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with you was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. your enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, you is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "stream.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

//For my EE Project
export const eeproject = [
    {
        description:
            "Designed and implemented an Obstacle Avoiding Robot Robot us Arduino UNO microcontroller and Ultrasonic Sensor(HC-SR05). The project involved integrating ultrasonic sensorsfor obstacle detection and programming the robot to navigate autonomously, demonstrating proficiency in hardware design, sensor integration, and programming with Arduino IDE.",
        title: "Obstacle Avoiding Robot Using Arduino UNO.",
    },
    {
        description:
            "Developed a Smart Street Light project using Arduino UNO, incorporating light sensors for automatic brightness adjustment and motion sensors for energy-efficient operation. Demonstrated skills in IoT, sensor integration, and programming, enhancing understanding of smart city technologies.",
        title: "Create Smart Street Light Project Using Arduino UNO.",
    },
    {
        description:
            "Implemented an Energy Measurement system in a Smart Microgrid using Node-MCU, Wi-Fi relay module, and Lithium-Ion Battery components. Developed a deep understanding of  IoT, wireless communication, and energy monitoring, contributing to sustainable energy management The purpose of this project is to design and implement battery voltage and state of charge estimation using the IoT.",
        title: "Energy Measurement in Smart Microgrid.",
    },
]

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - Aora",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        text: "Github",
        img: "/git.svg",
        link: githubLink,
    },
    {
        id: 2,
        text: "twitter",
        img: "/twit.svg",
        link: twitterLink,
    },
    {
        id: 3,
        text: "Linkedin",
        img: "/link.svg",
        link: linkedinLink
    },
];