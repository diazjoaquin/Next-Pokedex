import Navbar from "@/components/Navbar";
import Filter from "@/components/OrderAndFilter";
import PokemonList from "@/components/PokemonList";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <PokemonList/>
      <Sidebar/>
      <Filter/>
    </>
  )
}
