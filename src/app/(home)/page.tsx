
"use client"
import { Header } from "@/components/Welcome/header";

import PreviewDark from '../../../public/preview.dark.png';
import PreviewLight from '../../../public/preview-light.png';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Github } from "lucide-react";
import { useDeleyIncialization } from "@/hooks/use-deley-incialization";
import { useTheme } from "next-themes";
import { Footer } from "@/components/footer";
import { useNavigateFromHome } from "@/hooks/use-navigate-from-home";

export default function Home() {

    const {isThemeIsready} = useDeleyIncialization()
    const {handleNavigate} = useNavigateFromHome()
    const {theme} = useTheme()

    const ImagePreview = theme === 'dark' ? PreviewDark : PreviewLight

    if(!isThemeIsready) return null
  return (
      <div className="w-[70vw] mx-auto h-screen">
        <Header/>
        


        <div className="w-full flex h-full items-center justify-center mt-[7rem] flex-col gap-0">
          <p className="text-3xl tracking-wider text-primary font-[500]">Gerencie Suas Finanças, <br/> Transforme Seu Futuro</p>

          <p className="text-center text-primary leading-tight mt-3 font-[500]">Astro ajuda você a controlar, organizar e otimizar seus gastos. 
          Comece hoje sua jornada  <br/>para uma vida financeira mais equilibrada.</p>

         <div className="flex mt-5 gap-3">
          <Button className="bg-[#4a90e6] text-primary-foreground" onClick={handleNavigate}>Começar <ChevronRight/></Button>
          <Button className="text-primary-foreground">Github <Github/></Button>
         </div>

        <Image src={ImagePreview} alt="" width={1000} height={1000} className="mt-3"/>

        </div>

           
          <Footer/>
      </div>
  )
}