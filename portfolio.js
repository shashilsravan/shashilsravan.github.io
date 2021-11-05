import emoji from "react-easy-emoji";

export const greetings = {
	name: "Shashil Sravan",
	title: "Hi all, I'm Sravan",
	description:
		"A passionate Full Stack Web Developer experienced in building Web applications with JavaScript, Reactjs, Nodejs, ruby on rails and some other cool libraries and frameworks.",
	resumeLink: "https://drive.google.com/file/d/1U7LulSmnoKjxtooDkpccaYQwvCngWVya/view?usp=sharing",
};

export const openSource = {
	githubUserName: "shashilsravan",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/sidhusravan.lys/",
	instagram: "https://www.instagram.com/sravanss_45/",
	twitter: "https://twitter.com/shashilSravan45",
	github: "https://github.com/shashilsravan",
	linkedin: "https://www.linkedin.com/in/shashil-sravan-a5b201191/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY MERN STACK DEVELOPER WHO WANTS TO EXPLORE WEB DEVELOPMENT",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web applications"
		),
		emoji(
			"⚡ Good at backend technologies like NodeJS, Ruby on rails"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase and AWS"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "java",
			fontAwesomeClassname: "logos:java",
		},
		{
			skillName: "ruby",
			fontAwesomeClassname: "logos:ruby",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend (JavaScript, React)", //Insert stack or technology you have experience in
		progressPercentage: "95", //Insert relative proficiency in percentage
	},
	{
		Stack: "Programming (Python, Java)",
		progressPercentage: "80",
	},
	{
		Stack: "Backend (NodeJS, Ruby on Rails)",
		progressPercentage: "75",
	},
	{
		Stack: "Others (Linux, Git, Databases)",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "RGUKT - Nuzvid",
		subHeader: "Bachelor's Degree in Computer Science",
		duration: "June 2018 - May 2022",
		desc: "Consolidate GPA Till now: 9.02",
		descBullets: [
			"Second runner-up in ISB 2020",
			"Won ICON of cse in 2020",
		],
	},
	{
		schoolName: "RGUKT - Nuzvid",
		subHeader: "PRE UNIVERSITY COURSE",
		duration: "August 2016 - April 2018",
		desc: "Consolidate GPA: 8.7",
		descBullets: [],
	}
];

export const experience = [
	{
		role: "Ruby on Rails Developer",
		company: "Promptcloud",
		companylogo: "/img/icons/common/pc.png",
		date: "June 2021 – Present",
		desc: "Working on the website with technical stack - reactJS as frontend and ruby on rails as backend.",
		descBullets: [ ],
	},
	{
		role: "Front-End Developer",
		company: "Rovae",
		companylogo: "/img/icons/common/rovae.jpeg",
		date: "Sep 2020 - Nov 2020",
		desc: "Worked as frontend developer in transforming figma files and xd files into working Webpages",
	},
];

export const projects = [
	{
		name: "SS Store",
		desc: "SS-Store is a responsive and UI friendly ecommerce website made with MERN stack, redux and redux-thunk as well. For more info visit github repo",
		github: "https://github.com/shashilsravan/ssstore",
		link: "https://ss-store-srav.herokuapp.com/",
	},
	{
		name: "Blog it!",
		desc: "Blog it is a responsive blog website made with MERN stack with the help of OKTA for authentication. For more info visit github repo",
		github: "https://github.com/shashilsravan/blogger",
		link: "https://sravan-ss-blog.herokuapp.com/",
	},
	{
		name: "Jumbo CSS",
		desc: "JumboCSS is a css framework, with initial version consisting all the css goodies needed for web developers. Visit github for more info",
		github: "https://github.com/shashilsravan/css-lib",
		link: "https://jumbocss.herokuapp.com/content/colors",
	},
	{
		name: "ShortTube",
		desc: "ShortTube is a react based video streaming app. shortTube is a shorter version of youtube (a Youtube clone) but only for short videos",
		github: "https://github.com/shashilsravan/youtubeClone",
		link: "https://shorttube.herokuapp.com/",
	},
	{
		name: "CoviStats",
		desc: "CoviStats is a website developed to track covid19 cases across the world. You can compare the statistics of two different states in India",
		github: "https://github.com/shashilsravan/covid19heatmap",
		link: "https://covid-b7d89.web.app/",
	},
];

export const feedbacks = [ ];

export const blogs = [
	{
		name: "Asynchronous JavaScript",
		desc: "A blog on asynchronous javascript which covers promises, callbacks and many more",
		link: "https://medium.com/@sravansidhu/asynchronous-javascript-f8644c209ae3",
	},
	{
		name: "Basics on Web Security",
		desc: "A blog on web security basics which covers security issues like xss attacks, cors issues and many more",
		link: "https://medium.com/@sravansidhu/basics-of-web-security-e99bf73efbaf",
	},
	{
		name: "Building PWA",
		desc: "This blog covers how to build a basic progressive web app using service workers.",
		link: "https://medium.com/@sravansidhu/building-a-progressive-web-app-pwa-a93381dd0d18",
	},
];