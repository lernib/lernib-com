"use client";

import { useState, useEffect } from "react";

import styles from "./InDev.module.css";
import { moderat_black } from "@/utils/font";


export default function InDev() {	
	const [animateClass, setAnimateClass] = useState<string>(styles.preanimation);

	useEffect(() => {
		setTimeout(() => {
			setAnimateClass(styles.animation)
		}, 3000)
	}, []);

	return (
		<div className={`
			${animateClass}

			bg-yellow-400 text-black

			fixed bottom-0
			w-full py-4

			flex justify-center items-center
		`}>
			<span className={`
				${moderat_black.className}

				mr-[0.5ch]
			`}>
				Pardon our mess!
			</span>

			<span>
				We&apos;re still setting up our website.
			</span>
		</div>
	)
}
