import Image from "next/image";
import Gif from '@/public/images/assets/4OKl.gif';

export default function Loader () {

    return (
        <main className="w-screen h-screen flex items-center justify-center">
            <Image src={Gif} alt="" width={500} height={500}/>
        </main>
    )
};