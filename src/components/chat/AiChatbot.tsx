"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Bot,
  X,
  Send,
  RotateCcw,
  Sparkles,
  Phone,
  AlertCircle,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { ChatMessageFormatter } from "./ChatMessageFormatter";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const INITIAL_SUGGESTIONS = [
  "🏥 Inpatient Care & Admissions",
  "🤖 Robotic Neuro Rehabilitation",
  "🦴 Spine Decompression Therapy",
  "📍 Hospital Location & Timings",
  "👨‍⚕️ Consult Dr. Dinesh Anandhan",
];

const WELCOME_GREETING = `👋 **Welcome to Pain & Paralysis Hospital!**

I am your 24/7 AI Clinical Assistant. How may I assist you today?

You can ask me about:
- **Inpatient Care** (25-bed 24-Hour facility in Virugambakkam, Chennai)
- **Robotic Neuro Rehabilitation** (Stroke recovery, paralysis, spinal cord injuries)
- **Advanced Spine Decompression** (Non-surgical disc treatment)
- **Chiropractic Alignment & Neuro Physiotherapy**
- Doctor consultations, timings, and direct admissions.`;

export const AiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcomePill, setShowWelcomePill] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-welcome",
      role: "assistant",
      content: WELCOME_GREETING,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Automatically fade out the welcome message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePill(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setShowWelcomePill(false); // Hide welcome bubble if chat is opened
      const focusTimer = setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
      return () => clearTimeout(focusTimer);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setErrorMessage(null);
    setIsLoading(true);

    try {
      // Send conversation payload to backend endpoint
      const payload = newMessages
        .filter((m) => m.id !== "init-welcome")
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      // If user started from the very first question, ensure we include user query
      const messagesToSubmit =
        payload.length > 0
          ? payload
          : [{ role: "user", content: messageContent }];

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: messagesToSubmit }),
      });

      const data = await res.json();

      if (!res.ok && !data.content && !data.fallback) {
        throw new Error(data.error || "Failed to communicate with AI service.");
      }

      const botReply: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: data.content || data.fallback || "Thank you for contacting Pain & Paralysis Hospital. Please call us at +91 80155 59609.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err: unknown) {
      console.error("Chat error:", err);
      const errMsg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while communicating with the hospital assistant.";
      setErrorMessage(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content: WELCOME_GREETING,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setErrorMessage(null);
  };

  return (
    <div className="relative pointer-events-none flex flex-col items-end">
      {/* 1. Floating Welcome Message: "👋 Hi! How can we help you!" with 3s fade out */}
      <div
        className={`pointer-events-auto absolute right-full mr-3 bottom-1.5 transition-all duration-700 ease-out flex items-center max-w-[calc(100vw-5.5rem)] sm:max-w-xs ${
          showWelcomePill && !isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
        role="status"
        aria-live="polite"
      >
        <div className="relative flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white text-secondary font-medium text-xs sm:text-sm shadow-xl border border-primary/25 overflow-hidden">
          <span className="truncate">👋 Hi! How can we help you!</span>
          <button
            onClick={() => setShowWelcomePill(false)}
            aria-label="Dismiss welcome message"
            className="text-text/50 hover:text-secondary p-0.5 rounded transition-colors shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow pointing to Chatbot Button */}
          <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-primary/25 rotate-45 transform" />
        </div>
      </div>

      {/* 2. Chat Dialog Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pain & Paralysis Hospital AI Clinical Assistant"
          className="pointer-events-auto fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] max-w-[420px] h-[520px] sm:h-[580px] max-h-[calc(100dvh-7rem)] bg-white rounded-2xl shadow-2xl border border-primary/25 flex flex-col overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#105156] via-[#14666d] to-[#1CAAB6] text-white p-3.5 sm:p-4 flex items-center justify-between shadow-sm select-none">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-white">
                <Bot className="w-6 h-6" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#105156]" />
              </div>
              <div>
                <h3 className="text-white text-sm sm:text-base font-semibold leading-tight font-sans">
                  Pain & Paralysis Assistant
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>24/7 Hospital Care • Virugambakkam</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* Clear / Reset Chat */}
              <button
                onClick={handleResetChat}
                title="Restart conversation"
                aria-label="Restart conversation"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat window"
                aria-label="Close chat window"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Banner for Emergency / Direct Contact */}
          <div className="bg-surface-soft px-3.5 py-1.5 border-b border-primary/10 flex items-center justify-between text-xs text-text">
            <span className="flex items-center gap-1.5 font-medium text-secondary">
              <Phone className="w-3.5 h-3.5 text-primary" />
              24-Hour Helpline:
            </span>
            <a
              href="tel:+918015559609"
              className="font-semibold text-primary hover:text-secondary underline"
            >
              +91 80155 59609
            </a>
          </div>

          {/* Conversation Messages Container */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 bg-[#FAFDFD]">
            {messages.map((message) => {
              const isUser = message.role === "user";
              return (
                <div
                  key={message.id}
                  className={`flex items-start gap-2.5 ${
                    isUser ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  {!isUser && (
                    <div className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 border border-primary/20 mt-1">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm shadow-xs ${
                      isUser
                        ? "bg-gradient-to-r from-[#105156] to-[#14666d] !text-white rounded-br-xs"
                        : "bg-white text-text border border-slate-200/80 rounded-bl-xs"
                    }`}
                    style={isUser ? { color: "#FFFFFF" } : undefined}
                  >
                    {isUser ? (
                      <p
                        className="whitespace-pre-wrap leading-relaxed !text-white font-normal"
                        style={{ color: "#FFFFFF" }}
                      >
                        {message.content}
                      </p>
                    ) : (
                      <ChatMessageFormatter content={message.content} />
                    )}
                    <div
                      className={`text-[10px] mt-1.5 text-right font-medium ${
                        isUser ? "!text-white/80" : "text-text/50"
                      }`}
                      style={isUser ? { color: "rgba(255, 255, 255, 0.8)" } : undefined}
                    >
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 border border-primary/20 mt-1">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-white border border-slate-200/80 rounded-2xl rounded-bl-xs px-4 py-3 shadow-xs flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                  </div>
                  <span className="text-xs text-text/70 italic">AI is thinking...</span>
                </div>
              </div>
            )}

            {/* Error Message with Fallback actions */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
                <div className="flex items-center gap-2 pl-6">
                  <button
                    onClick={() => handleSendMessage()}
                    className="font-semibold underline hover:text-red-900"
                  >
                    Retry
                  </button>
                  <span>•</span>
                  <a
                    href="tel:+918015559609"
                    className="font-semibold underline hover:text-red-900"
                  >
                    Call Hospital Directly
                  </a>
                </div>
              </div>
            )}

            {/* Quick Prompt Suggestions */}
            {messages.length <= 2 && !isLoading && (
              <div className="pt-2">
                <p className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-2">
                  Suggested inquiries:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {INITIAL_SUGGESTIONS.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(suggestion.replace(/^[^\s]+\s*/, ""))}
                      className="px-2.5 py-1.5 rounded-full bg-white text-secondary text-xs border border-primary/25 hover:bg-primary hover:text-white transition-all text-left shadow-xs"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-2.5 sm:p-3 bg-white border-t border-slate-200/80">
            <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about hospital care, pain, rehab..."
                disabled={isLoading}
                aria-label="Type your message"
                className="flex-1 bg-surface-soft border border-slate-200 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-text placeholder:text-text/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-secondary to-primary text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-md transition-all active:scale-95 shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-1.5 flex items-center justify-between text-[10px] text-text/60 px-1">
              <span>Verified Hospital Care</span>
              <Link
                href="/contact-us"
                onClick={() => setIsOpen(false)}
                className="text-primary hover:underline flex items-center gap-0.5 font-medium"
              >
                Book Appointment <ExternalLink className="w-2.5 h-2.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 3. Floating Action Button for AI Chatbot (Positioned ABOVE WhatsApp) */}
      <div className="pointer-events-auto relative group">
        {/* Desktop Tooltip */}
        <div
          className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-gray-900/90 text-white text-xs font-medium whitespace-nowrap shadow-md pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200"
          role="tooltip"
        >
          {isOpen ? "Close Assistant" : "AI Hospital Assistant"}
          <span className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 border-4 border-transparent border-l-gray-900/90" />
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close AI Clinical Assistant" : "Open AI Clinical Assistant"}
          className={`relative flex items-center justify-center w-[52px] h-[52px] sm:w-14 sm:h-14 rounded-full text-white shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary/50 hover:scale-105 active:scale-95 ${
            isOpen
              ? "bg-secondary text-white hover:bg-secondary/90"
              : "bg-gradient-to-br from-[#105156] via-[#157178] to-[#1CAAB6] hover:shadow-primary/30"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 animate-in spin-in-90 duration-200" />
          ) : (
            <>
              <Bot className="w-7 h-7 sm:w-7.5 sm:h-7.5 drop-shadow-sm" />
              {/* Subtle spark animation */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#07CCEC] opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#07CCEC] items-center justify-center text-[9px] text-[#105156] font-bold">
                  AI
                </span>
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

