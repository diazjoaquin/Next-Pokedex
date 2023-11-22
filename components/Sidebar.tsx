import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

export const Sidebar = () => {
    return (
        <aside className="fixed top-0 text-4xl text-gray-100 right-0 mx-4 h-screen hidden md:flex flex-col justify-center z-20">
            <div className="rounded-full py-4 px-1 bg-zinc-400/80 shadow-md shadow-zinc-600 flex flex-col gap-1">
                <a href="https://github.com/diazjoaquin" className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/diazjoaquin-dev/" className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"><AiFillLinkedin/></a> 
                <a href="https://wa.me/+541126792759" className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"><AiOutlineWhatsApp/></a>
            </div>
        </aside>
    )
};