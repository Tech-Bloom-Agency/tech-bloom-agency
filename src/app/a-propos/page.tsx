import About from "@/components/sections/about/About";
import TeamSection from "@/components/sections/about/TeamSection";
import Testimonials from "@/components/sections/home/Testimonials";
import CTASection from "@/components/sections/shared/CTASection";
import PageWrapper from "@/components/layout/PageWrapper";
import PageHero from "@/components/ui/PageHero";

export default function AboutPage() {
    return (
        <PageWrapper>
            {/* Luxury Hero */}
            <PageHero
                title="Notre agence, Tech Bloom."
                description="Tech Bloom Agency a plus d'un an. Nos activités, elles, entrent dans leur troisième année, à Madagascar. 13 projets livrés, et 7 clients qui travaillent encore avec nous."
            />
            <About />
            <TeamSection />
            <Testimonials />
            <CTASection />
        </PageWrapper>
    );
}
