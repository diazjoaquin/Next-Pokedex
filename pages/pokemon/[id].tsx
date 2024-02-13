import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useTheme } from "@/hooks/ThemeContext";
import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { useState, useEffect } from "react";
import { getDetail } from "@/redux/actions";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { AppState, Details } from "@/redux/reducer";
import Image from "next/image";


export default function Pokemon () {

	const router = useRouter();
	const { darkTheme } = useTheme();
	const { id } : any = router.query;
	const dispatch = useAppDispatch();
	const [ isLoading, setIsLoading ] = useState(true);
	const data  = useAppSelector((state?: AppState) => state?.details as Details);
	// console.log(id);
	// console.log(data);
	
	

	
	useEffect(() => {
		const fetchData = async () => {
			try {

			  await dispatch(getDetail(id));
			  if (data) setIsLoading(false);
			  
			} catch (error) {

			  throw new Error ('Error loading data');
			}
		  };
		fetchData();
	}, [dispatch, id]);

	
	return (
		<main className="w-screen h-screen flex items-center justify-center">
			<Navbar/>
			<Sidebar/>
			
			{ isLoading ? <Loader/> :
			<section className={`${darkTheme ? 'bg-zinc-800' : 'bg-red-600'} 
			w-10/12
			md:w-6/12
			md:h-4/6
			h-5/6
			absolute 
			md:bottom-20
			bottom-10
			flex
			flex-col
			gap-2
			px-6
			md:px-12
			justify-evenly
			rounded-2xl
			shadow-zinc-600
			shadow-md`}>
				<div className="flex h-12 pt-4 gap-2 justify-center">
					<h1 className="text-white text-3xl font-bold uppercase">{data?.name}</h1>
					<h2 className="text-white text-xl">{data?.id}</h2>
				</div>
				<section className="h-4/5 flex flex-col gap-10">
					<article className="flex justify-center items-center h-3/6">
						<img className="w-auto h-auto max-h-full content-center" src={data?.imgUrl} alt="pokemon"/> 
					</article>
					<article className="flex flex-col gap-14 md:gap-8 h-2/5">
						<div className="flex flex-wrap gap-3 md:gap-4 lg:gap-8  items-center justify-center">
							<span className="text-white border-2 px-3 rounded-full py-2">{data?.hp}</span>
							<span className="text-white border-2 px-3 rounded-full py-2">{data?.attack}</span>
							<span className="text-white border-2 px-3 rounded-full py-2">{data?.defense}</span>
							<span className="text-white border-2 px-3 rounded-full py-2">{data?.speed}</span>
							<span className="text-white border-2 px-3 rounded-full py-2">{data?.height}</span>
							<span className="text-white border-2 px-3 rounded-full py-2">{data?.weight}</span>

						</div>
						<div className="flex justify-center items-center gap-4 md:gap-12">
						{data?.types?.map((type:any) => {
							return (
								<span key={type} className={`${type} flex text-white capitalize text-sm items-center justify-center gap-2 w-[45%] md:w-[30%] rounded-full py-2`}><img src={`/images/types/${type}.svg`} className="w-auto h-auto max-w-[30px] " alt="type"/>{type}</span>
							)
						})}
						</div>
					</article>
				</section>
			</section>
			}
		</main>
	)
}