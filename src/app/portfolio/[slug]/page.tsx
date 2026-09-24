import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Générer les pages statiques pour chaque projet
export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

// Générer les metadata dynamiques
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `${project.title} — Portfolio Tech Bloom Agency`,
    description: project.shortDesc,
    openGraph: {
      type: "article",
      locale: "fr_FR",
      title: project.title,
      description: project.shortDesc,
      url: `/portfolio/${project.slug}`,
      images: [{ url: project.images[0], width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDesc,
      images: [project.images[0]],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Schema.org BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${SITE_CONFIG.url}/portfolio`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${SITE_CONFIG.url}/portfolio/${project.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray/20 py-4">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <ol className="flex items-center space-x-3 text-sm">
            <li>
              <Link href="/" className="text-gray hover:text-navy transition-colors">
                Accueil
              </Link>
            </li>
            <li className="text-gray">/</li>
            <li>
              <Link href="/portfolio" className="text-gray hover:text-navy transition-colors">
                Portfolio
              </Link>
            </li>
            <li className="text-gray">/</li>
            <li className="text-navy font-semibold truncate">{project.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Projet */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray hover:text-navy transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour au portfolio
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Infos principales */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red bg-red/5 px-4 py-2 rounded-full">
                  {project.category}
                </span>
                <h1 className="text-4xl lg:text-6xl font-heading font-bold text-navy leading-[0.9]">
                  {project.title}
                </h1>
                <p className="text-xl text-gray font-medium leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              {/* Meta infos */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-gray/20">
                <div>
                  <p className="text-xs text-gray uppercase tracking-widest mb-1">Client</p>
                  <p className="font-semibold text-navy">{project.client}</p>
                </div>
                <div>
                  <p className="text-xs text-gray uppercase tracking-widest mb-1">Année</p>
                  <p className="font-semibold text-navy">{project.year}</p>
                </div>
              </div>
            </div>

            {/* Image principale */}
            <div className="relative aspect-video overflow-hidden rounded-md shadow-xl">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Images */}
      <section className="py-16 bg-beige">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-heading font-bold text-navy mb-8">Galerie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-md shadow-sm group">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description & Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-6">Description</h2>
                <p className="text-gray leading-relaxed text-lg">{project.description}</p>
              </div>

              {/* Résultats */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-6">Résultats</h2>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-red flex-shrink-0 mt-0.5" />
                      <span className="text-navy font-medium text-lg">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Stack */}
            <div className="space-y-8">
              <div className="p-8 bg-gray/5 rounded-md border border-gray/20">
                <h3 className="text-xl font-heading font-bold text-navy mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white border border-gray/20 rounded-full text-xs font-bold uppercase tracking-wider text-navy shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Contact */}
              <Link
                href={`/contact?service=${encodeURIComponent(project.category.toLowerCase())}`}
                className="block p-8 bg-gradient-to-br from-blue to-teal rounded-md text-white text-center group hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">Un projet similaire ?</h3>
                <p className="text-sm opacity-90 mb-4">Discutons de vos besoins</p>
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                  Parler de votre projet
                  <ExternalLink size={14} className="ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      {project.testimonial && (
        <section className="py-16 bg-navy text-white">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <blockquote className="max-w-4xl mx-auto text-center space-y-8">
              <p className="text-2xl lg:text-3xl font-heading font-medium leading-relaxed italic">
                "{project.testimonial.quote}"
              </p>
              <footer className="space-y-2">
                <p className="font-bold text-lg">{project.testimonial.author}</p>
                <p className="text-white/70">{project.testimonial.role}</p>
              </footer>
            </blockquote>
          </div>
        </section>
      )}
    </>
  );
}
