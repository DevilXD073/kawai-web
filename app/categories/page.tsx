import CategoryCard from "@/components/CategoryCard";
import SectionHeading from "@/components/SectionHeading";
import { categories } from "@/lib/categories";
export default function Categories(){return <div className="container-k py-16 md:py-20"><SectionHeading eyebrow="Browse" title="Categories" subtitle="A focused selection of services for online communities and digital projects."/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{categories.map(c=><CategoryCard key={c.name} category={c}/>)}</div></div>}
