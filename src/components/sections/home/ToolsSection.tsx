"use client"


const TECH_STACK = [
    "Next.js", "React", "Node.js", "Supabase", "PostgreSQL", "Docker",
    "Vercel", "Claude Code", "Codex", "Google", "Meta Business Suite",
    "Canva", "CapCut",
];

export default function ToolsSection() {
    return (
        <section className="py-32 bg-white relative overflow-hidden border-t border-brand-light-gray">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                <div className="mb-20 space-y-6">
                    <h2 className="text-4xl lg:text-6xl font-heading font-bold text-brand-primary leading-[0.9]">
                        Open Source <br />
                        <span className="text-brand-dark-blue opacity-50">& Fiabilité.</span>
                    </h2>
                    <p className="text-lg text-brand-gray max-w-2xl font-medium leading-relaxed uppercase tracking-wide">
                        Nous sélectionnons les meilleures technologies pour garantir 
                        performance, sécurité et pérennité à vos solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-brand-light-gray border border-brand-light-gray">
                    {TECH_STACK.map((tech, index) => (
                        <div key={index} className="bg-white p-8 flex items-center justify-center group hover:bg-brand-bg-soft transition-colors duration-300">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary group-hover:text-brand-red-rose transition-colors text-center">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
