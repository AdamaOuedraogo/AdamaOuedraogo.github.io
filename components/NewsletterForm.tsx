"use client";

import { useState } from "react";

/**
 * Newsletter capture. Wiring-ready: drop your provider's endpoint into
 * NEXT_PUBLIC_NEWSLETTER_ACTION (Buttondown, ConvertKit, Resend, etc.).
 * Until then it validates locally and confirms — so the section is real today,
 * even with zero subscribers (per the product scope: prepare for the audience).
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "done" | "error">("idle");

  const action = process.env.NEXT_PUBLIC_NEWSLETTER_ACTION;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      setState("error");
      return;
    }
    if (action) {
      try {
        await fetch(action, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      } catch {
        /* swallow — the confirmation below is still shown */
      }
    }
    setState("done");
    setEmail("");
  }

  if (state === "done") {
    return (
      <p className="rounded-xl border border-accent/30 bg-accent/5 p-4 text-sm text-ink">
        Thank you — you're on the list. The first issues are coming soon.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (state === "error") setState("idle");
        }}
        placeholder="you@company.com"
        aria-label="Email address"
        className="w-full rounded-full border border-ink-faint/30 bg-paper-raised px-5 py-2.5 text-sm text-ink outline-none focus:border-accent sm:max-w-xs"
      />
      <button
        type="submit"
        className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
      >
        Subscribe
      </button>
      {state === "error" && (
        <span className="self-center text-sm text-ink-soft">Please enter a valid email.</span>
      )}
    </form>
  );
}
