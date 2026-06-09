import {
  formatPrice,
  planCategories,
  pricingPlans,
  scheduleByDay,
  site,
} from "@/lib/content";

export type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

export const chatbotQuickReplies = [
  "Membership plans",
  "Class schedule",
  "Location & hours",
  "How do I join?",
] as const;

export const chatbotWelcome =
  "Hi! I'm the KCA demo assistant. Ask about memberships, schedules, location, or how to get started. (Demo only — not a live agent.)";

function scheduleSummary() {
  return scheduleByDay
    .map((day) => {
      const sessions = day.sessions
        .map((session) => `${session.time} — ${session.class}`)
        .join("; ");
      return `${day.day}: ${sessions}`;
    })
    .join("\n");
}

function plansSummary() {
  const featured = pricingPlans
    .map((plan) => `• ${plan.name}: ${plan.price}${plan.period}`)
    .join("\n");

  const categories = planCategories.map((category) => category.label).join(", ");

  return `Popular plans:\n${featured}\n\nWe also offer plans across ${categories}. See the Membership section on this page for all 24 options.`;
}

function getDemoReply(input: string): string {
  const message = input.toLowerCase().trim();

  if (!message) {
    return "Type a question or tap one of the quick replies below.";
  }

  if (/hello|hi|hey|namaste/.test(message)) {
    return `Hello! Welcome to ${site.shortName}. How can I help you explore memberships or class times today?`;
  }

  if (/plan|membership|price|cost|fee|monthly|quarter/.test(message)) {
    return plansSummary();
  }

  if (/schedule|class|time|batch|session|when/.test(message)) {
    return `Here's our coached schedule at Kondapur:\n${scheduleSummary()}\n\nFor the full weekly grid, scroll to the Schedule section on this page.`;
  }

  if (/location|address|where|map|kondapur/.test(message)) {
    return `${site.name} is in Kondapur, Hyderabad.\n\n${site.address}\n\nDirections: ${site.googleMapsUrl}`;
  }

  if (/hour|open|timing|close/.test(message)) {
    return "Typical floor hours:\n• Weekdays: 6:00 AM – 9:00 PM\n• Saturday: 7:00 AM – 5:00 PM\n• Sunday: 7:00 AM – 12:00 PM\n\nExact coached batches are listed in the schedule.";
  }

  if (/join|enroll|sign up|start|trial|beginner/.test(message)) {
    return `To get started:\n1. Pick a plan that fits your routine (day passes from ${formatPrice(750)}).\n2. Message us on WhatsApp at ${site.phone} or use the contact form.\n3. Visit the arena for a trial and we'll help you choose the right batch.`;
  }

  if (/day pass|trial|visit/.test(message)) {
    return `Day passes start at ${formatPrice(750)}. It's a great way to try the floor before committing to a monthly or quarterly plan. WhatsApp us at ${site.phone} to book a visit.`;
  }

  if (/trainer|coach/.test(message)) {
    return "Our coaches run strength sessions, kids gymnastics, and athlete batches across the week — Jaloo, Sourav, Sandeep, Tony, Pallavi, and more. Check the Trainers and Schedule sections for who's on the floor.";
  }

  if (/whatsapp|call|phone|contact|email/.test(message)) {
    return `Reach the team:\n• Phone / WhatsApp: ${site.phone}\n• Email: ${site.email}\n• Instagram: ${site.instagramHandle}`;
  }

  if (/app/.test(message)) {
    return "Our mobile app is coming soon. For now, use WhatsApp or call us to book visits and ask about plans.";
  }

  if (/thank|thanks/.test(message)) {
    return "You're welcome! Feel free to ask anything else about KCA.";
  }

  return `I'm a demo bot with preset answers about ${site.shortName}. Try asking about memberships, schedules, location, day passes, or how to join. For a real reply, WhatsApp us at ${site.phone}.`;
}

export function createChatMessage(role: ChatMessage["role"], text: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
  };
}

export function getChatbotReply(input: string): string {
  return getDemoReply(input);
}
