import Image from 'next/image'
import LandingHero from "@/components/heros/LandingHero";
import OurValues from "@/components/content/landing/OurValues";
import KNIOImage from "@/components/content/landing/KNIOImage";

export default function Home() {
  return (
    <main>
        <LandingHero />
        <KNIOImage />
    </main>
  )
}
