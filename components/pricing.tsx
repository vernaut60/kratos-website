"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { GetAppButton } from "@/components/get-app-button";
import { formatPrice, planCategories, pricingPlans, sections } from "@/lib/content";

export function Pricing() {
  const [activeCategory, setActiveCategory] = useState<
    (typeof planCategories)[number]["id"]
  >(planCategories[2].id);

  const category = planCategories.find((item) => item.id === activeCategory)!;

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            label={sections.pricing.label}
            title={sections.pricing.title}
            description={sections.pricing.description}
            align="center"
            className="mx-auto"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.06}>
              <article
                className={`flex h-full flex-col rounded-3xl border p-8 lg:p-10 ${
                  plan.highlight
                    ? "border-accent bg-surface-elevated"
                    : "border-border bg-surface"
                }`}
              >
                {plan.highlight ? (
                  <span className="mb-4 w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    Most popular
                  </span>
                ) : null}
                <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {plan.description}
                </p>
                <p className="font-display mt-8 text-5xl font-bold">
                  {plan.price}
                  <span className="ml-1 font-sans text-base font-normal text-muted">
                    {plan.period}
                  </span>
                </p>
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <GetAppButton className="mt-10 w-full !rounded-2xl" />
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.08}>
          <div className="mt-20">
            <h3 className="font-display text-center text-2xl font-semibold">
              All 24 membership options
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">
              Browse every KCA plan by category. Prices shown where available on the live site.
            </p>
            <div className="hide-scrollbar mt-8 flex gap-3 overflow-x-auto pb-2">
              {planCategories.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveCategory(item.id)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm transition-colors ${
                    activeCategory === item.id
                      ? "bg-accent text-background"
                      : "border border-border text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span className="ml-2 text-xs opacity-70">{item.plans.length}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {category.plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`flex h-full flex-col rounded-2xl border p-5 transition-colors hover:border-accent/40 ${
                    plan.highlight
                      ? "border-accent/50 bg-surface-elevated"
                      : "border-border bg-surface"
                  }`}
                >
                  <div className="flex flex-wrap items-start gap-2">
                    <h4 className="font-display text-base font-semibold leading-snug">
                      {plan.name}
                    </h4>
                    {plan.highlight ? (
                      <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                        Popular
                      </span>
                    ) : null}
                  </div>
                  {plan.description ? (
                    <p className="mt-2 text-sm text-muted">{plan.description}</p>
                  ) : null}
                  {plan.perks.length > 0 ? (
                    <p className="mt-2 text-xs text-muted">{plan.perks.join(" · ")}</p>
                  ) : null}
                  <div className="mt-auto pt-5">
                    {plan.showPrice && plan.price !== null ? (
                      <p className="font-display text-2xl font-bold">
                        {formatPrice(plan.price)}
                        <span className="ml-1 font-sans text-sm font-normal text-muted">
                          {plan.period}
                        </span>
                      </p>
                    ) : (
                      <p className="text-sm font-medium text-muted">Enquire at desk</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-surface p-8 text-center">
            <h3 className="font-display text-xl font-semibold">Need a custom plan?</h3>
            <p className="mt-3 text-sm text-muted">
              Personal training and bespoke programming available on request.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
            >
              Contact us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
