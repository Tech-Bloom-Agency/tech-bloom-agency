export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    tags: string[];
    link?: string;
    results?: string[];
    technologies?: string[];
    client?: string;
    date?: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    category: string;
    tags: string[];
    slug?: string;
    featured?: boolean;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image?: string;
    date?: string;
    project?: string;
}

export interface Value {
    title: string;
    description: string;
    icon: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface NavLink {
    href: string;
    label: string;
    external?: boolean;
    highlight?: boolean;
}

export interface B2BProject {
    id: string;
    title: string;
    client: string;
    description: string;
    results: string[];
    technologies: string[];
    image: string;
    category: string;
}

export interface PricingPlan {
    id: string;
    title: string;
    period: string;
    description: string;
    features: string[];
    highlight?: boolean;
    cta: string;
}
