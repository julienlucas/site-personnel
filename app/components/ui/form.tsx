"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Label } from "./label";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_MAILJS_SERVICE_KEY}`,
        "template_i1de0jq",
        e.target,
        {
          publicKey: `${process.env.NEXT_PUBLIC_MAILJS_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          setSubmitStatus("success");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="space-y-4">
        <Label>Votre adresse email</Label>
        <Input type="email" name="from_email" required />

        <Label>Votre nom et prénom</Label>
        <Input type="text" name="name" required />

        <Label>Le nom de votre entreprise</Label>
        <Input type="text" name="company" />

        <Label>Votre numéro de téléphone</Label>
        <Input type="text" name="phone" />

        <Label>Sujet</Label>
        <Input type="text" name="subject" required />

        <Label>Votre méssage</Label>
        <Textarea name="message" required />
        <Button variant="default" size="xl" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Envoyer maintenant"}
        </Button>
        {submitStatus === "success" && (
          <p className="text-green-600 text-sm">Message envoyé avec succès !</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-600 text-sm">
            Erreur lors de l'envoi. Veuillez réessayer.
          </p>
        )}
      </div>
    </form>
  );
}
