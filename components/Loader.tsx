import Image from "next/image";

export default function Loader() {
  const loaders = [
    "/images/assets/4o45.gif",
    "/images/assets/4OKl.gif",
    "/images/assets/2N06.gif",
    "/images/assets/28ei.gif",
  ];

  const randomIndex = Math.floor(Math.random() * loaders.length);

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Image src={loaders[randomIndex]} alt="loader" width={500} height={500} />
    </main>
  );
}
