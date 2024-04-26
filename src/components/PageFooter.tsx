import Image from "next/image";
import { REM } from "@/utils/style";
import logo_white from "@/assets/images/logo_white.png";
import { moderat_black } from "@/utils/font";


const H2_CLASS = `
    ${moderat_black.className}

    text-2xl mb-4
`;

const FOOTER_DIV_CLASS = `
    flex flex-col justify-start items-start
    w-full self-stretch
`;

export default function PageFooter() {
    return (
        <footer className="
            bg-lernib2 text-lernib1
            h-fit min-h-40
            p-12

            gap-x-20 gap-y-20

            flex flex-col justify-around items-center

            md:w-full md:flex-row
            md:pt-12 md:px-40 md:pb-24
        ">
            <div className={FOOTER_DIV_CLASS}>
                <Image
                    src={logo_white}
                    alt="logo"
                    height={REM * 2}
                    width={REM * 2 * (logo_white.width / logo_white.height)}
                />
                <p className="mt-4">
                    Connect with excellent tutors on our
                    platform. Learn the way you want, wherever
                    and however you like.
                </p>
            </div>
            <div className={`
                ${FOOTER_DIV_CLASS}

                gap-y-4
            `}>
                <h2 className={H2_CLASS}>
                    Browse
                </h2>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
            </div>
            <div className={`
                ${FOOTER_DIV_CLASS}

                gap-y-4
            `}>
                <h2 className={H2_CLASS}>Services</h2>
                <a href="/pricing">Pricing</a>
                <a href="/blog">Blog</a>
            </div>
            <div className={`
                ${FOOTER_DIV_CLASS}

                gap-y-4
            `} />
        </footer>
    )
}
