import React, { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

export default function Box({ children, className = '', horizontal = false, onClick, animate = "", duration = "", onMouseEnter, onMouseLeave }) {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	if (horizontal) {
		return <div onMouseEnter={onMouseEnter}
		onMouseLeave={onMouseLeave} data-aos={animate} data-aos-duration={duration} onClick={onClick} className={`flex flex-row ${className}`}>{children}</div>;
	}

	return <div onMouseEnter={onMouseEnter}
	onMouseLeave={onMouseLeave} onClick={onClick} className={`flex flex-col ${className}`}>{children}</div>;
}
