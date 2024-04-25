import PageHeader from "@/components/PageHeader";
import {
  filson_pro_heavy, moderat_bold
} from "@/utils/font";

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
    </>
  );
}
