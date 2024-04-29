import Image from "next/image";

import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import {
  filson_pro_heavy,
  moderat_black, moderat_bold
} from "@/utils/font";
import VALUES from "@/data/values";

export default function Home() {
	return (
		<>
			<PageHeader />
			<div className="
				bg-lernib1 text-black

				flex flex-col justify-center items-center
				flex-1

				py-20 px-8
			">
				<h1 className={`
					${moderat_black.className}

					text-center text-5xl
					max-w-[20ch]

					md:text-7xl
				`}>
					Reach your learning goals
					<br />
					<span className="
						text-lernib2
					">
						one step at a time.
					</span>
				</h1>

				<h2 className="
					text-xl text-center
					mt-6
				">
					Dedicated support to help you unlock your full potential.
					<br />
					Egestas lacus ultricies pellentesque dignissim id faucibus.
				</h2>
			</div>
			<div className="
				bg-lernib1 text-black

				flex flex-col justify-center items-center
				self-stretch
				
				px-8
				p-4
				gap-8
			">
				<h2 className={`
					${filson_pro_heavy.className}

					text-3xl
					mt-12
				`}>
					How it started
				</h2>
				<p className="
					max-w-[55ch]

					text-lg text-center
				">
					Lernib was inspired by challenges - academic and others - that we saw students
					facing around us. We realized that it wasn't just the material that made
					learning difficult.
				</p>
				<p className="
					max-w-[55ch]

					text-lg text-center
				">
					Sometimes it was loneliness and exhaustion. Other times,
					it was needing a teammate to help plan a big project. And, sometimes, it was
					getting back to basics with study skills and time management.
				</p>
				<p className="
					max-w-[55ch]

					text-lg text-center

					mb-20
				">
					We wanted to provide truly personalized support that went beyond tutoring. Lernib
					was born.
				</p>
			</div>
			<div className="
				bg-lernib1 text-black

				flex flex-col justify-center items-center
				h-fit

				md:flex-row md:gap-x-4 md:px-8
			">
				<div className="
					bg-lernib3

					self-stretch p-16

					md:w-1/2
					md:rounded-3xl
				" />

				<div className="
					bg-lernib2 text-lernib1


					flex flex-col
					p-16

					gap-y-12
					text-lg

					md:w-fit
					md:rounded-3xl
				">
					<h2 className={`
						${moderat_bold.className}

						text-2xl
					`}>
						Our Mission
					</h2>

					<p className="
						max-w-[31ch]
					">
						We believe that everyone learns better when they have personalized
						support that meets their individual needs.
					</p>

					<p className="
						max-w-[31ch]
					">
						We understand that no two students are alike, and we embrace diverse
						learning styles.
					</p>

					<p className="
						max-w-[31ch]
					">
						Whether you need help with study skills or just someone to bounce ideas
						off of, we're here to help.
					</p>
				</div>
			</div>
			<div className="
				bg-lernib1 text-black

				flex flex-col justify-start items-center
				pb-8 pt-20
			">
				<h1 className={`
					${filson_pro_heavy.className}

					text-3xl
					mb-12
				`}>
					Our Values
				</h1>
				<div className="
					grid grid-rows-3 grid-cols-1
					gap-x-12 gap-y-8
					mx-8

					lg:grid-cols-3 lg:grid-rows-1
					lg:mx-20
					lg:gap-y-0
				">
					{VALUES.map((value, i) => (
						<div key={i} className="
							bg-lernib2-700 text-lernib2

							self-stretch

							rounded-3xl
							p-8

							flex flex-col

							lg:h-full
						">
							<Image
								src={value.icon}
								alt={`${value.title} icon`}
								width="52"
								height="52"
							/>

							<h2 className={`
								${filson_pro_heavy.className}

								text-3xl
								pt-8
							`}>
								{value.title}
							</h2>

							<p className="
								text-xl
								mt-8
								max-w-[27ch]
							">
								{value.content}
							</p>
						</div>
					))}
				</div>
			</div>
			<PageFooter />
		</>
	)
}
