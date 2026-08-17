import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryCard from "@/components/CategoryCard";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import DiscordCTA from "@/components/DiscordCTA";
import SectionHeading from "@/components/SectionHeading";
import { categories } from "@/lib/categories";

export default function Home(){return <><Hero/><TrustStrip/><FeaturedProducts/><section className="container-k py-20"><SectionHeading eyebrow="Categories" title="What Are You Looking For?" subtitle="Find a focused service for your Discord, gaming community or digital project."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{categories.map(c=><CategoryCard key={c.name} category={c}/>)}</div></section><WhyUs/><Stats/><HowItWorks/><Reviews/><DiscordCTA/></>}
