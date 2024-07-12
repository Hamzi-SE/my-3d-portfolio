import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	github,
	facebook,
	linkedin,
	twitter,
	instagram,
	gmail,
	whatsapp,
	figma,
	nextjs,
	upwork,
	codify,
	fiverr,
	skillsurge,
	nelami,
	nextchatter,
	airbnb,
	blogapp,
	threejs,
	link,
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const services = [
	{
		title: 'MERN Developer',
		icon: web,
	},
	{
		title: 'React Native Developer',
		icon: mobile,
	},
	{
		title: 'Next JS Developer',
		icon: backend,
	},
	{
		title: 'Wordpress Developer',
		icon: creator,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'Next JS',
		icon: nextjs,
	},
]

const experiences = [
	{
		title: 'Full Stack Web Developer',
		company_name: 'Upwork',
		icon: upwork,
		iconBg: '#00AB00',
		date: 'April 2023 - Present',
		points: [
			'Committed to staying up-to-date with the latest industry trends and best practices to deliver cutting-edge solutions for clients and projects.',
			'Participating in code reviews and providing constructive feedback to clients.',
			'Enthusiasm for taking on challenging projects and tackling complex technical problems with a proactive and solutions-oriented approach.',
			'Leveraging effective communication and collaboration skills to work seamlessly with clients on Upwork, ensuring a clear understanding of their project requirements and delivering exceptional results that meet and exceed expectations.',
		],
	},
	{
		title: 'MERN Stack Developer',
		company_name: 'Codify Pvt Limited',
		icon: codify,
		iconBg: '#000',
		date: 'June 2022 - September 2022',
		points: [
			'Developed a full-stack e-commerce web application using MERN Stack.',
			'Implemented a responsive design and ensured cross-browser compatibility.',
			'Worked in a team of 3 developers to design and develop new features for the platform.',
			'Tested and debugged code to ensure high-quality standards.',
			'Received positive feedback from the client for delivering high-quality work.',
			'Received employee of the month award and a bonus for completing the project before the deadline.',
		],
	},
	{
		title: 'Wordpress Developer',
		company_name: 'Fiverr',
		icon: fiverr,
		iconBg: '#00B22D',
		date: 'Jan 2021 - Jan 2022',
		points: [
			"Developed Wordpress websites for client's businesses all over the world.",
			'Ensured seamless cross-browser compatibility and responsiveness of the websites, optimizing user experiences across devices.',
			'Conducted meetings with clients to thoroughly understand their requirements, enabling the delivery of tailored and effective solutions.',
			'Provided ongoing support to clients post-project completion, ensuring their continued satisfaction with the delivered solutions.',
			'Received positive feedback from clients for delivering high-quality work and the positive impact on their businesses.',
		],
	},
]

const testimonials = [
	{
		testimonial:
			"Hamza was incredibly nice, quickly grasped the whole project, and delivered high-quality work. We're grateful for his valuable contribution to the project and will definitely hire him for future work.",
		name: 'Moritz Roessler',
		designation: 'Creator',
		company: 'React Server',
		image: 'https://lh3.googleusercontent.com/a/AGNmyxY-uZ8uZGWvTY0-9tdnc1uAcHPERm8LOCgQX8mHHQ=s96-c',
	},
	{
		testimonial:
			"Hamza is a very dedicated and professional developer that loves what he does and it shows on the delivered work.",
		name: 'Ramiro Arto',
		designation: 'Founder',
		company: 'Lokalum Store',
		image: 'https://photosly.net/wp-content/uploads/2023/12/no-dp32.jpg',
	},
	{
		testimonial:
			`Awesome work by Hamza. He completed project on time. He responded to all the requests. He is Amazing. I would hire him again.`,
		name: 'Sanket',
		designation: 'Founder',
		company: 'My Essay Guru',
		image:
			'https://www.upwork.com/profile-portraits/c111Ob7X55GrZ3j59W1YBmb6vHMf19_osc1nn0HIgloVY9_kX8n_HGP8hM7GEeFKLA',
	},
]

const projects = [
	{
		name: 'Skill Surge',
		description:
			'A subscription-based online learning platform offering users the ability to purchase a subscription and access a wide range of courses. The platform is complemented with an intuitive admin dashboard for effective course management, user administration, and course creation.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'chakraui',
				color: 'pink-text-gradient',
			},
			{
				name: 'stripe',
				color: 'orange-text-gradient',
			},
		],
		image: skillsurge,
		source_code_link: 'https://github.com/Hamzi-SE/Course-Platform',
		deployed: 'https://skillsurge.vercel.app/',
		deployed_image: link,
	},
	{
		name: 'Nelami',
		description:
			'A multi-vendor e-commerce platform enabling buyers to bid on a diverse range of products from various sellers, while sellers can easily list different items for auction. Additionally, the platform provides an efficient admin dashboard for seamless management of products, sellers, and orders.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'stripe',
				color: 'orange-text-gradient',
			},
			{
				name: 'cloudinary',
				color: 'pink-text-gradient',
			},
		],
		image: nelami,
		source_code_link: 'https://github.com/',
		deployed: 'https://nelami.ihamza.dev/',
		deployed_image: link,
	},
	{
		name: 'NextChatter',
		description:
			'A real-time chat application that facilitates seamless user-to-user communication across multiple rooms. The app incorporates real-time notifications for new messages and incoming friend requests. The app also offers a user-friendly interface for handling incoming and outgoing friend requests.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'redis',
				color: 'pink-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'green-text-gradient',
			},
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
		],
		image: nextchatter,
		source_code_link: 'https://github.com/',
		deployed: 'https://nextchatter.vercel.app/',
		deployed_image: link,
	},
	{
		name: 'Airbnb Clone',
		description:
			'An Airbnb clone developed using NextJs, TypeScript, and Cloudinary, providing a seamless platform for users to discover, book, and list accommodations worldwide.',
		tags: [
			{
				name: 'nextjs',
				color: 'orange-text-gradient',
			},
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
		],
		image: airbnb,
		source_code_link: 'https://github.com/',
		deployed: 'https://nextairbnbclone.vercel.app/',
		deployed_image: link,
	},
	{
		name: 'Blog App',
		description:
			'A blog app developed with React Native, Node, Express, and MongoDB. Seamless reading and related recommendations. A separate user-friendly web interface for creating and publishing blogs.',
		tags: [
			{
				name: 'react native',
				color: 'blue-text-gradient',
			},
			{
				name: 'mern',
				color: 'pink-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'green-text-gradient',
			},
		],
		image: blogapp,
		source_code_link: 'https://github.com/',
	},
]

const socials = [
	{
		name: 'github',
		link: 'https://github.com/Hamzi-SE',
		icon: github,
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/in/hamzi-se',
		icon: linkedin,
	},
	{
		name: 'facebook',
		link: 'https://www.facebook.com/Hamzii.SE',
		icon: facebook,
	},
	{
		name: 'twitter',
		link: 'https://twitter.com/Hamzii_SE',
		icon: twitter,
	},
	{
		name: 'instagram',
		link: 'https://www.instagram.com/hamza._.se',
		icon: instagram,
	},
	{
		name: 'gmail',
		link: 'mailto:hamzii.se@gmail.com',
		icon: gmail,
	},
	{
		name: 'whatsapp',
		link: 'https://wa.me/923156088777',
		icon: whatsapp,
	},
]

export { services, technologies, experiences, testimonials, projects, socials }
