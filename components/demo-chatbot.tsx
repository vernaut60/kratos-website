"use client";

import { PaperPlaneRight, Robot, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import {
  chatbotQuickReplies,
  chatbotWelcome,
  createChatMessage,
  getChatbotReply,
  type ChatMessage,
} from "@/lib/chatbot";
import { site } from "@/lib/content";

export function DemoChatbot() {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    createChatMessage("bot", chatbotWelcome),
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing, open]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) {
      return;
    }

    setMessages((current) => [
      ...current,
      createChatMessage("user", trimmed),
    ]);
    setInput("");
    setTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        createChatMessage("bot", getChatbotReply(trimmed)),
      ]);
      setTyping(false);
    }, 650);
  }

  return (
    <>
      {open ? (
        <div className="fixed bottom-6 left-6 z-50 flex w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
          <div className="flex items-center justify-between gap-3 border-b border-border bg-surface-elevated px-4 py-3">
            <div className="min-w-0">
              <p className="font-display text-sm font-semibold">{site.shortName} Assistant</p>
              <p className="text-xs text-muted">Demo chatbot · not a live agent</p>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-muted transition-colors hover:bg-background hover:text-foreground"
            >
              <X size={18} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="hide-scrollbar flex max-h-[min(52vh,420px)] flex-col gap-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                  message.role === "user"
                    ? "ml-auto bg-accent text-background"
                    : "bg-surface-elevated text-foreground"
                }`}
              >
                {message.text}
              </div>
            ))}

            {typing ? (
              <div className="max-w-[88%] rounded-2xl bg-surface-elevated px-3.5 py-2.5 text-sm text-muted">
                Typing...
              </div>
            ) : null}
          </div>

          <div className="border-t border-border px-4 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {chatbotQuickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => sendMessage(reply)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {reply}
                </button>
              ))}
            </div>

            <form
              className="flex items-center gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about plans, schedule, location..."
                className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={!input.trim() || typing}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-background transition-opacity disabled:opacity-40"
              >
                <PaperPlaneRight size={18} weight="fill" />
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {!open ? (
        <button
          type="button"
          aria-label="Open demo chat"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-elevated text-accent shadow-lg transition-transform hover:scale-105"
        >
          <Robot size={24} weight="fill" />
        </button>
      ) : null}
    </>
  );
}
