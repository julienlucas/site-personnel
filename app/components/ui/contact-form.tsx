"use client";
import { useState } from "react";

type SubmitStatus = "success" | "error" | null;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    const form = event.currentTarget;

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      form.reset();
    }, 600);
  };

  const inputClass =
    "w-full bg-paper border border-rule px-3 py-2.5 text-[15px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink";
  const labelClass = "font-mono-label text-ink-soft block mb-1.5";

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-rule bg-paper-soft/30 p-6 md:p-7 space-y-4"
    >
      <div>
        <label className={labelClass}>Email</label>
        <input
          type="email"
          name="from_email"
          required
          placeholder="vous@exemple.com"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Nom</label>
          <input type="text" name="name" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Entreprise</label>
          <input type="text" name="company" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Sujet</label>
        <input type="text" name="subject" required className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="Décrivez votre projet en quelques lignes…"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="font-mono-label bg-ink text-paper px-5 py-3 hover:bg-forest disabled:opacity-50 w-full md:w-auto"
      >
        {isSubmitting ? "Envoi…" : "Envoyer"}
      </button>

      {submitStatus === "success" && (
        <p className="font-mono-label text-forest">✓ Message envoyé.</p>
      )}
      {submitStatus === "error" && (
        <p className="font-mono-label text-rose">✕ Erreur. Réessayez.</p>
      )}
    </form>
  );
}
