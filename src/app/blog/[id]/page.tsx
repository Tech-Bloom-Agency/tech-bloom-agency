import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/sections/shared/CTASection";
import { blogPosts } from "@/data/blog";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Page d'article.
 *
 * Elle manquait : la liste des articles pointait vers /blog/1 … /blog/4 via
 * `href={`/blog/${post.id}`}`, et ces quatre liens renvoyaient un 404 en
 * production. Les identifiants connus sont pré-rendus.
 */
export function generateStaticParams() {
    return blogPosts.map((post) => ({ id: post.id }));
}

type PageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return { title: "Article introuvable" };
    }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags,
        alternates: { canonical: `/blog/${post.id}` },
        openGraph: {
            type: "article",
            locale: "fr_FR",
            title: post.title,
            description: post.excerpt,
            url: `/blog/${post.id}`,
            siteName: SITE_CONFIG.name,
            publishedTime: post.date,
            images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) notFound();

    const dateLisible = new Date(post.date).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        author: { "@type": "Organization", name: post.author },
        publisher: {
            "@type": "Organization",
            name: SITE_CONFIG.name,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_CONFIG.url}/logo/TBA-logo-horizontal.png`,
            },
        },
        mainEntityOfPage: `${SITE_CONFIG.url}/blog/${post.id}`,
    };

    const autres = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

    return (
        <PageWrapper>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <article>
                <header className="surface-navy-mesh pb-20 pt-36 lg:pb-24 lg:pt-44">
                    <div className="mx-auto max-w-[800px] px-6 lg:px-12">
                        <Link
                            href="/blog"
                            className="inline-flex min-h-[44px] items-center gap-2 font-body text-sm font-semibold text-beige/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-beige"
                        >
                            <ArrowLeft size={16} aria-hidden="true" />
                            Tous les articles
                        </Link>

                        <span className="mt-8 mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-teal">
                            {post.category}
                        </span>

                        <h1 className="text-balance font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
                            {post.title}
                        </h1>

                        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-sm text-beige/60">
                            <span className="flex items-center gap-2">
                                <Calendar size={15} aria-hidden="true" />
                                <time dateTime={post.date}>{dateLisible}</time>
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={15} aria-hidden="true" />
                                {post.readTime} de lecture
                            </span>
                            <span>{post.author}</span>
                        </div>
                    </div>
                </header>

                <div className="bg-white px-6 py-16 lg:px-12 lg:py-24">
                    <div className="mx-auto max-w-[800px]">
                        <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                sizes="(max-width: 800px) 100vw, 800px"
                                className="object-cover"
                                priority
                            />
                        </div>

                        <p className="font-body text-xl leading-relaxed text-navy/80">
                            {post.excerpt}
                        </p>

                        <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-navy/75">
                            <p>{post.content}</p>
                        </div>

                        {post.tags.length > 0 && (
                            <ul className="mt-12 flex flex-wrap gap-3 border-t border-navy/10 pt-8">
                                {post.tags.map((tag) => (
                                    <li
                                        key={tag}
                                        className="border border-navy/15 px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.1em] text-navy/60"
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {autres.length > 0 && (
                    <section className="bg-beige px-6 py-20 lg:px-12 lg:py-24">
                        <div className="mx-auto max-w-[1200px]">
                            <h2 className="font-heading text-2xl font-bold tracking-[-0.01em] text-navy md:text-3xl">
                                À lire aussi
                            </h2>
                            <ul className="mt-10 grid gap-6 md:grid-cols-3">
                                {autres.map((autre) => (
                                    <li key={autre.id}>
                                        <Link
                                            href={`/blog/${autre.id}`}
                                            className="group flex h-full flex-col border border-navy/10 bg-white p-6 transition-colors hover:border-navy/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
                                        >
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                                                {autre.category}
                                            </span>
                                            <span className="mt-3 font-heading text-lg font-bold leading-snug text-navy">
                                                {autre.title}
                                            </span>
                                            <span className="mt-3 font-body text-sm leading-relaxed text-navy/65">
                                                {autre.excerpt}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}
            </article>

            <CTASection />
        </PageWrapper>
    );
}
