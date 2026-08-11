import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Actions from "@/components/sections/actions";
import Team from "@/components/sections/team";
import Partners from "@/components/sections/partners";
import Donate from "@/components/sections/donate";
import BlogPreview from "@/components/sections/blog-preview";
import Contact from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Actions />
      <Team />
      <Partners />
      <Donate />
      <BlogPreview />
      <Contact />
    </>
  );
}
