import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef(null);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formResponse = document.getElementById("form-response");

		if (!form.name || !form.email || !form.message) return (formResponse.innerHTML = "Please fill all the fields.");
		if (loading) return;

		setLoading(true);

		emailjs
			.send(
				"service_gkcgl4m",
				"template_a6ll1km",
				{
					from_name: form.name,
					to_name: "Hamza",
					from_email: form.email,
					to_email: "hamzii.se@gmail.com",
					message: form.message,
				},
				"yvZGnaJw-wN-TYLIZ"
			)
			.then(
				() => {
					setLoading(false);
					formResponse.innerHTML = "✅ Message sent successfully!";
					formRef.current.reset();
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					formResponse.innerHTML = "❌ Something went wrong. Please try again later.";
				}
			)
			.catch((err) => {
				setLoading(false);
				console.log(err);
				formResponse.innerHTML = "❌ Something went wrong. Please try again later.";
			})
			.finally(() => {
				setTimeout(() => {
					formResponse.innerHTML = "";
				}, 4000);
			});
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col" htmlFor="name">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col" htmlFor="email">
						<span className="text-white font-medium mb-4">Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col" htmlFor="message">
						<span className="text-white font-medium mb-4">Your Message</span>
						<textarea
							rows="7"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary outline-none border-none rounded-xl hover:shadow-none transition-all duration-300">
						{loading ? "Sending..." : "Send"}
					</button>

					<p className="text-white text-sm text-center" id="form-response"></p>
				</form>
			</motion.div>

			<motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "");
