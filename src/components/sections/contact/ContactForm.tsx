"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

// Schema de validation Zod
const contactSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().optional().or(z.literal("")),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: z.string().min(20, "Le message doit contenir au moins 20 caractères"),
  // Honeypot field (anti-spam)
  company: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      email: "",
      phone: "",
      service: preselectedService || "",
      message: "",
    },
  });

  // Pré-sélectionner le service si présent dans l'URL
  useEffect(() => {
    if (preselectedService) {
      setValue("service", preselectedService);
    }
  }, [preselectedService, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(
          response.status === 429
            ? "Trop de tentatives. Veuillez réessayer dans une heure."
            : "Le message n'a pas pu être envoyé. Veuillez réessayer ou nous contacter directement par email ou WhatsApp."
        );
      }

      setSubmitSuccess(true);
      reset();
      window.trackFormSubmit?.(data.service);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      // fetch() rejette avec un TypeError en cas de problème réseau
      setSubmitError(
        error instanceof TypeError || !(error instanceof Error)
          ? "Erreur réseau. Vérifiez votre connexion et réessayez."
          : error.message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 lg:p-12 rounded-md shadow-xl border border-gray/20">
      <h2 className="text-3xl font-heading font-bold text-navy mb-8">
        Envoyez-nous un message
      </h2>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green/10 border border-green/30 rounded-md flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-6 h-6 text-green" />
          <p className="text-green font-medium">
            Message envoyé avec succès ! Nous vous répondrons sous 24h.
          </p>
        </div>
      )}

      {submitError && (
        <div role="alert" className="mb-6 p-4 bg-red/10 border border-red/30 rounded-md">
          <p className="text-red font-medium">{submitError}</p>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Prénom */}
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-bold text-gray uppercase tracking-wider block">
            Prénom <span className="text-red">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            className={`w-full bg-beige border-none rounded-md p-4 focus:ring-2 focus:ring-blue transition-all ${
              errors.firstName ? "ring-2 ring-red" : ""
            }`}
            placeholder="Jean"
          />
          {errors.firstName && (
            <p className="text-red text-xs mt-1 font-medium">{errors.firstName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-gray uppercase tracking-wider block">
            Email <span className="text-red">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`w-full bg-beige border-none rounded-md p-4 focus:ring-2 focus:ring-blue transition-all ${
              errors.email ? "ring-2 ring-red" : ""
            }`}
            placeholder="jean@exemple.com"
          />
          {errors.email && (
            <p className="text-red text-xs mt-1 font-medium">{errors.email.message}</p>
          )}
        </div>

        {/* Téléphone & Service */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Téléphone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-bold text-gray uppercase tracking-wider block">
              Téléphone <span className="text-gray/50">(optionnel)</span>
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className={`w-full bg-beige border-none rounded-md p-4 focus:ring-2 focus:ring-blue transition-all ${
                errors.phone ? "ring-2 ring-red" : ""
              }`}
              placeholder="+261 -- -- --- --"
            />
            {errors.phone && (
              <p className="text-red text-xs mt-1 font-medium">{errors.phone.message}</p>
            )}
          </div>

          {/* Service */}
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-bold text-gray uppercase tracking-wider block">
              Service souhaité <span className="text-red">*</span>
            </label>
            <select
              id="service"
              {...register("service")}
              className="w-full bg-beige border-none rounded-md p-4 focus:ring-2 focus:ring-blue transition-all"
            >
              <option value="">Sélectionnez un service</option>
              <option value="creation-web">Création de site web</option>
              <option value="branding">Branding & Identité visuelle</option>
              <option value="marketing">Marketing digital</option>
              <option value="community">Community management</option>
              <option value="maintenance">Maintenance & Support</option>
              <option value="audit">Audit & Accompagnement</option>
            </select>
            {errors.service && (
              <p className="text-red text-xs mt-1 font-medium">{errors.service.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-gray uppercase tracking-wider block">
            Message <span className="text-red">*</span>
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            className={`w-full bg-beige border-none rounded-md p-4 focus:ring-2 focus:ring-blue transition-all resize-none ${
              errors.message ? "ring-2 ring-red" : ""
            }`}
            placeholder="Décrivez votre projet en quelques mots (minimum 20 caractères)..."
          />
          {errors.message && (
            <p className="text-red text-xs mt-1 font-medium">{errors.message.message}</p>
          )}
        </div>

        {/* Honeypot field (hidden - anti-spam) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            {...register("company")}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red text-white py-5 rounded-md font-heading font-bold text-lg hover:bg-red-hover hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 group"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              Démarrer la collaboration
            </>
          )}
        </button>

        <p className="text-xs text-gray text-center pt-4">
          * Champs obligatoires — Réponse sous 24h ouvrées
        </p>
      </form>
    </div>
  );
}
