import Image from "next/image";

const Switcher = () => {

    
    const handleChangeTheme = () => {
        document.body.classList.toggle('dark');
        document.querySelector('#switch')?.classList.toggle('active');
    };

    return (
        <button 
        id="switch" 
        onClick={handleChangeTheme} 
        className=
        {`${'active' ? 'bg-yellow-400' : 'bg-zinc-900/80'}
        ${'active' ? 'after:right-0' : ''}
        bg-zinc-900/80
        rounded-full
        relative
        cursor-pointer
        flex
        outline-none
        shadow-md
        shadow-zinc-700
        after:block
        after:w-[35px]
        after:h-[35px]
        after:absolute
        after:bg-zinc-100
        after:top-0
        after:left-0
        after:inset-y-0
        after:rounded-full
        after:transition
        after:duration-300
        after:shadow-sm
        after:shadow-zinc-700
        `}>
            <span>
                <Image 
                width={35} 
                height={35} 
                src="/images/sun.png" alt="sun"/>
            </span>
            <span>
                <Image 
                width={35} 
                height={35} 
                src="/images/moon.png" alt="moon"/>
            </span>
        </button>
    );
};

export default Switcher;