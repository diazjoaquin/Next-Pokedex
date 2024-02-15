import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { useTheme } from "@/hooks/ThemeContext";

export default function About () {

    const { darkTheme } = useTheme(); 

    return (
        <main className="w-full h-full flex items-center justify-center">
            <Navbar/>
            <Sidebar/>
            <section className={`${darkTheme ? 'bg-zinc-700' : 'bg-red-600'} 
            w-8/12 
            h-4/6
            absolute 
            bottom-20
            flex
            flex-col
            gap-2
            px-12
            py-10
            justify-evenly
            items-center
            rounded-2xl
            shadow-zinc-600
            shadow-md`}>
                <h1 className="text-white font-bold text-2xl">Acerca del Proyecto</h1>
                <p className="text-white">Este proyecto surge junto a mi deseo de profundizar el aprendizaje en nuevas tecnologías web. Inicialmente concebido como un proyecto individual, (en el cual utilicé tecnologías como React, Javascript, PostgreSQL, Node.js y Express) durante mi ultimo transcurso en mi carrera como Full Stack Web Developer en Henry , decidí reversionarlo y llevarlo al siguiente nivel al adoptar Next.js, MongoDB y TypeScript, tres tecnologías que han capturado mi interés y que estoy ansioso por dominar.</p>
                <h3 className="text-white font-bold text-2xl">Tecnologías Usadas en este Proyecto:</h3>
                <div className="text-white flex flex-wrap gap-6">
                    <span>TypeScript</span>
                    <span>TailwindCSS</span>
                    <span>Next.js</span>
                    <span>MongoDB</span>
                    <span>AtlasDB</span>
                    <span>Redux and Redux Toolkit</span>
                </div>
                <h3 className="text-white font-bold text-2xl">Estado Actual:</h3>
                <p className="text-white">Actualmente este proyecto se encuentra en desarrollo. Con la posibilidad de agregar nuevas funciones más adelante. Espero sea de tu agrado!</p>
                <p></p>
            </section>
        </main>
    )
}