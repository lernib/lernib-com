import Image from "next/image";
import { REM } from "@/utils/style";
import logo from "@/assets/images/logo.png";

export default function PageHeader() {
  return (
    <header className="
      w-full px-16 py-2

      flex flex-row justify-start items-center
    bg-lernib1
    ">
			<a href="/">
				<Image
						src={logo}
						alt="Lernib logo"
						height={REM * 1.25}
						width={REM * 1.25 * (logo.width / logo.height)}
				/>
			</a>
			<nav className="
				nib-nomobile

				flex flex-row justify-end items-center
				gap-x-6 font-bold ml-12
				text-lernib2
			">
				<a href="/about" className="nomobile px-4 py-2">About</a>
				<a href="/pricing" className="nomobile px-4 py-2">Pricing</a>
				<a href="/blog" className="nomobile px-4 py-2">Blog</a>
			</nav>
    </header>
  )
}
