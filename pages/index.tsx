import Navbar from "@/components/Navbar";
import PokemonList from "@/components/PokemonList";
import { Sidebar } from "@/components/Sidebar";
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

export default function Home() {
  return (
    <>
      <Navbar />
      <PokemonList />
      <Sidebar />
    </>
  );
}
