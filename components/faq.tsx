"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs, sections } from "@/lib/content";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            label={sections.faq.label}
            title={sections.faq.title}
            align="center"
            className="mx-auto"
          />
        </ScrollReveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal key={faq.question} delay={index * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen ? "border-accent/40 bg-surface-elevated" : "border-border bg-surface"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <CaretDown
                      size={18}
                      className={`shrink-0 text-accent transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen ? (
                    <p className="border-t border-border px-6 pb-5 pt-2 text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
