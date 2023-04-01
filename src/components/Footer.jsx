import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { socials } from "../constants";

const Social = ({ name, icon, link }) => {
	return (
		<div
			onClick={() => window.open(link, "_blank")}
			className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110">
			<img src={icon} alt={name} className="w-1/2 h-1/2 object-contain" />
		</div>
	);
};

const Footer = () => {
	return (
		<>
			<footer className={`${styles.paddingX} w-full flex items-center py-5 bottom-0 z-20 bg-primary mt-6`}>
				<div className="w-full flex flex-col justify-between items-center max-w-7xl mx-auto">
					<a href={"#hero"} className="flex items-center gap-2">
						<img src={logo} alt="logo" className="w-10 h-10 object-contain" />
						<p className="text-white text-[16px] sm:text-[28px] font-bold cursor-pointer flex">Muhammad Hamza</p>
					</a>

					{/* Socials */}
					<div className="flex flex-row gap-3 sm:gap-8 mt-6">
						{socials.map((social, index) => (
							<Social key={`social-${index}-${social.name}`} {...social} />
						))}
					</div>

					{/* Copy right */}
					<p className="text-white text-[12px] sm:text-[16px] mt-6">&copy; 2023 Muhammad Hamza. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
