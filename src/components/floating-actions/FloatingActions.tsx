"use client";

import React from "react";
import { AiChatbot } from "@/components/chat/AiChatbot";
import { WhatsAppButton } from "./WhatsAppButton";

/**
 * FloatingActions Master Container
 *
 * Requirements satisfied:
 * - AI Chatbot: Bottom-right corner, always positioned ABOVE WhatsApp button.
 * - WhatsApp: Floating button positioned directly below the chatbot.
 * - Consistent positioning & spacing across every page of the website.
 * - Mobile safe-area padding to avoid overlapping browser/system chrome.
 */
export const FloatingActions: React.FC = () => {
  return (
    <aside
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none pb-[max(0px,env(safe-area-inset-bottom))] pr-[max(0px,env(safe-area-inset-right))]"
      aria-label="Emergency and Patient Assistance Floating Actions"
    >
      {/* 1. AI Chatbot (Positioned Above WhatsApp) */}
      <AiChatbot />

      {/* 2. WhatsApp Action Button (Positioned Below Chatbot) */}
      <WhatsAppButton />
    </aside>
  );
};

