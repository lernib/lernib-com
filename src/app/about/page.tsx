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
			<PageFooter />
		</>
	)
}
