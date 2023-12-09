import Navbar from "@/components/Navbar";
import PokemonList from "@/components/PokemonList";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <PokemonList/>
      <Sidebar/>
    </>
  )
}
