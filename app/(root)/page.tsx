import Hero from "@/components/Hero";
import CategoriesList from "@/components/CategoryList";
import BlogsList from "@/components/BlogsList";
import WhyDevSandeepX from "@/components/FeaturesList";
import StatsList from "@/components/StatesList";
import Newsletters from "@/components/NewsLatters";

export default function HomePage(){
    return <>
    <Hero/>
    <CategoriesList/>
    <BlogsList/>
    <WhyDevSandeepX/>
     <StatsList/>
     <Newsletters/>
    </>
}