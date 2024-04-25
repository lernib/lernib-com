import Image from "next/image";

import PageHeader from "@/components/PageHeader";
import {
  filson_pro_heavy, moderat_bold
} from "@/utils/font";
import BENEFITS from "@/data/benefits";

export default function Home() {
  return (
    <>
      <PageHeader />
      <div className="
        bg-lernib2-900 text-black flex-grow self-stretch

        flex flex-row justify-start items-start
        p-16 pb-28
        
        lg:justify-center lg:mt-0
      ">
        <div className="
          flex flex-col justify-start items-start
        ">
          <h1 className={`
            ${filson_pro_heavy.className}
            
            text-4xl md:text-6xl
            
            text-start
          `}>
            Helping you reach
            <br className="nomobile" />
            your learning goals
            <br className="nomobile" />
            - one step at a time.
          </h1>
          <h2 className="
            text-xl md:text-2xl

            text-start
            mt-6
          ">
            Going for your goals can be overwhelming. We
            <br />
            help you get it done one step at a time, with
            <br />
            dedicated tutoring support built just for you.
          </h2>
          <a href="/about" className={`
            ${moderat_bold.className}

            bg-lernib2-300 text-lernib1

            text-bold px-6 py-4
            rounded-full

            mt-8
            text-[1.1rem]
          `}>
            Get Started Today
          </a>
        </div>
        <div className="flex-grow" />
      </div>
      <div className="
        bg-lernib2-900 text-black

        self-stretch

        flex flex-col justify-center items-center
        px-12 pt-8
        gap-x-16

        h-fit

        border-b-[1rem] border-b-lernib2-700

        md:flex-row md:items-start
        lg:py-20 lg:flex-row

        pb-16
      ">
        <div className="
          flex flex-col
          w-full

          md:grid md:grid-rows-3 md:grid-cols-2
          md:self-stretch

          lg:gap-40
          lg:grid-rows-2 lg:grid-cols-3
          lg:w-fit

          justify-center items-center
          gap-y-16
        ">
          {BENEFITS.map(benefit => (
            <div className="
              flex flex-col justify-start items-center
              gap-y-6 mt-12

              md:justify-start md:max-lg:items-start
              lg:mt-0

              h-full w-full
            ">
              <Image
                src={benefit.src}
                alt="Benefit Icon"
                width="48"
                height="48"
              />
              <h1 className={`
                ${moderat_bold.className}
                text-3xl
              `}>{benefit.title}</h1>
              <p className="
                text-center max-w-[23ch]

                md:max-lg:text-start
              ">
                {benefit.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
