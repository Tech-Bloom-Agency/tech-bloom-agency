"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ElementType;

  // @ts-ignore
    return (
    <Card hover className="h-full flex flex-col" id={service.id}>
      {/* Icône */}
      <div className="w-16 h-16 bg-gradient-to-br from-blue to-teal rounded-md flex items-center justify-center mb-6 shadow-sm">
        {IconComponent && (
          <IconComponent size={32} className="text-white" strokeWidth={2} />
        )}
      </div>

      {/* Titre & Description */}
      <div className="space-y-4 mb-6 flex-grow">
        <h3 className="text-2xl font-heading font-bold text-navy">
          {service.title}
        </h3>
        <p className="text-gray font-medium leading-relaxed text-sm">
          {service.description}
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-red mt-1.5 flex-shrink-0" />
            <span className="text-navy font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      {/* Appel à l'action */}
      <div className="pt-6 border-t border-gray/20 space-y-4">
        <Link href={`/contact?service=${encodeURIComponent(service.id)}`} className="block">
          <Button 
            variant="primary" 
            size="md" 
            className="w-full"
          >
            Parler de votre projet
          </Button>
        </Link>
      </div>
    </Card>
  );
}
