"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { branch, scheduleByDay, sections } from "@/lib/content";

const totalSessions = scheduleByDay.reduce(
  (count, day) => count + day.sessions.length,
  0,
);

export function Schedule() {
  const [activeDay, setActiveDay] = useState<
    (typeof scheduleByDay)[number]["day"]
  >(scheduleByDay[0].day);
  const daySchedule = scheduleByDay.find((item) => item.day === activeDay)!;

  return (
    <section id="schedule" className="border-t border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <ScrollReveal>
            <SectionHeading
              label={sections.schedule.label}
              title={sections.schedule.title}
              description={sections.schedule.description}
            />
            <div className="mt-8 inline-flex rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm">
              <span className="font-semibold text-accent">{totalSessions}</span>
              <span className="ml-2 text-muted">coached sessions listed</span>
            </div>
            <dl className="mt-10 space-y-5 text-sm">
              <div className="rounded-2xl border border-border bg-surface-elevated p-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Class hours
                </dt>
                <dd className="mt-2 space-y-2">
                  <p>
                    <span className="text-muted">Weekdays · </span>
                    {branch.hoursWeekdays}
                  </p>
                  <p>
                    <span className="text-muted">Saturday · </span>
                    {branch.hoursSaturday}
                  </p>
                  <p>
                    <span className="text-muted">Sunday · </span>
                    {branch.hoursSunday}
                  </p>
                </dd>
              </div>
              <div className="rounded-2xl border border-border bg-surface-elevated p-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Branch
                </dt>
                <dd className="mt-2 font-medium">{branch.name}, Hyderabad</dd>
              </div>
            </dl>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="flex flex-wrap gap-3 border-b border-border pb-4">
              {scheduleByDay.map((item) => (
                <button
                  key={item.day}
                  type="button"
                  onClick={() => setActiveDay(item.day)}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    activeDay === item.day
                      ? "bg-accent text-background"
                      : "border border-border text-muted hover:text-foreground"
                  }`}
                >
                  {item.day}
                  <span className="ml-2 text-xs opacity-70">
                    {item.sessions.length}
                  </span>
                </button>
              ))}
            </div>
            <ul className="mt-2">
              {daySchedule.sessions.map((row) => (
                <li
                  key={`${row.time}-${row.class}-${row.coach}`}
                  className="grid grid-cols-[72px_1fr_auto] gap-4 border-t border-border py-5 text-sm"
                >
                  <span className="font-medium text-accent">{row.time}</span>
                  <span className="font-medium">{row.class}</span>
                  <span className="text-right text-muted">{row.coach}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
