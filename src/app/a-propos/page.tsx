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
                badge="À Propos"
                title="Notre Agence"
                subtitle="Tech Bloom."
                description="Une équipe passionnée transformant vos visions en réalités digitales depuis plus de 3 ans à Madagascar."
            />
            <About />
            <TeamSection />
            <Testimonials />
            <CTASection />
        </PageWrapper>
    );
}
