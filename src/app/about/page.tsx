import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import {
  filson_pro_heavy,
  moderat_black, moderat_bold
} from "@/utils/font";

export default function Home() {
	return (
		<>
			<PageHeader />
			<div className="
				bg-lernib1 text-black

				flex flex-col justify-center items-center
				flex-1

				py-20 mx-8
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
				
				mx-8 mt-12
				p-4
				gap-8
			">
				<h2 className={`
					${filson_pro_heavy.className}

					text-3xl
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
				">
					We wanted to provide truly personalized support that went beyond tutoring. Lernib
					was born.
				</p>
			</div>
			<PageFooter />
		</>
	)
}
