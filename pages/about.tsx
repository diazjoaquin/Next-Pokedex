import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { useTheme } from "@/hooks/ThemeContext";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function About() {
  const { darkTheme } = useTheme();

  return (
    <main className="w-full h-full flex items-center justify-center">
      <Navbar />
      <Sidebar />
      <section
        className={`${darkTheme ? "bg-zinc-700" : "bg-red-600"} 
            md:w-8/12 
            md:h-4/6
            w-11/12
            h-5/6
            absolute 
            md:bottom-20
            bottom-[40px]
            flex
            flex-col
            md:gap-2
            gap-2
            md:px-12
            px-6
            md:py-10
            py-6
            justify-around
            
            rounded-2xl
            shadow-zinc-600
            shadow-md`}
      >
        <h1 className="text-white font-bold text-lg md:text-2xl">
          Acerca del Proyecto:
        </h1>
        <p className="text-white">
          Este proyecto surge junto a mi deseo de profundizar el aprendizaje en
          nuevas tecnologías web. Inicialmente concebido como un proyecto
          individual, (en el cual utilicé tecnologías como React, Javascript,
          PostgreSQL, Node.js y Express) durante mi ultimo transcurso en mi
          carrera como Full Stack Web Developer en Henry , decidí reversionarlo
          y llevarlo al siguiente nivel al adoptar Next.js, MongoDB y
          TypeScript, tres tecnologías que han capturado mi interés y que estoy
          ansioso por dominar.
        </p>
        <h3 className="text-white font-bold text-lg md:text-2xl">
          Tecnologías Usadas en este Proyecto:
        </h3>
        <div className="text-white flex flex-wrap gap-3 md:gap-6">
          <span>TypeScript</span>
          <span>TailwindCSS</span>
          <span>Next.js</span>
          <span>MongoDB</span>
          <span>AtlasDB</span>
          <span>Redux and Redux Toolkit</span>
        </div>
        <h3 className="text-white font-bold text-lg md:text-2xl">
          Estado Actual:
        </h3>
        <p className="text-white">
          Actualmente este proyecto se encuentra en desarrollo. Con la
          posibilidad de agregar nuevas funciones más adelante. Espero sea de tu
          agrado!
        </p>
        <div className="flex flex-row gap-2 text-white text-4xl">
          <a
            href="https://github.com/diazjoaquin"
            className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/diazjoaquin-dev/"
            className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://wa.me/+541126792759"
            className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"
          >
            <AiOutlineWhatsApp />
          </a>
        </div>
      </section>
    </main>
  );
}
