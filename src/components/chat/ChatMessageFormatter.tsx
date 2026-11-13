import React from "react";
import Link from "next/link";

interface ChatMessageFormatterProps {
  content: string;
}

/**
 * Parses inline formatting:
 * - Bold: **text**
 * - Italic: *text* or _text_
 * - Inline code: `code`
 * - Links: [label](url)
 */
function renderInline(text: string): React.ReactNode[] {
  // Regex pattern matching:
  // 1. Markdown link: [text](url)
  // 2. Bold: **text**
  // 3. Inline code: `text`
  // 4. Italic: *text* or _text_
  const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)|(`([^`]+)`)|(\*([^*]+)\*)|(_([^_]+)_)/g;

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    const matchIndex = match.index;

    // Text prior to the match
    if (matchIndex > lastIndex) {
      elements.push(text.slice(lastIndex, matchIndex));
    }

    if (match[1]) {
      // Link: [label](url)
      const label = match[2];
      const url = match[3];
      const isInternal = url.startsWith("/") || url.startsWith("#");

      if (isInternal) {
        elements.push(
          <Link
            key={`link-${matchIndex}`}
            href={url}
            className="text-primary hover:text-secondary underline font-medium transition-colors inline-flex items-center gap-0.5"
          >
            {label}
          </Link>
        );
      } else {
        elements.push(
          <a
            key={`link-${matchIndex}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary underline font-medium transition-colors inline-flex items-center gap-0.5"
          >
            {label}
          </a>
        );
      }
    } else if (match[4]) {
      // Bold: **text**
      elements.push(
        <strong key={`bold-${matchIndex}`} className="font-semibold text-secondary">
          {match[5]}
        </strong>
      );
    } else if (match[6]) {
      // Inline code: `code`
      elements.push(
        <code
          key={`code-${matchIndex}`}
          className="px-1.5 py-0.5 rounded bg-surface-muted text-xs font-mono text-secondary border border-primary/20"
        >
          {match[7]}
        </code>
      );
    } else if (match[8] || match[10]) {
      // Italic: *text* or _text_
      const italicText = match[9] || match[11];
      elements.push(
        <em key={`italic-${matchIndex}`} className="italic">
          {italicText}
        </em>
      );
    }

    lastIndex = tokenRegex.lastIndex;
  }

  // Remaining plain text
  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements;
}

export const ChatMessageFormatter: React.FC<ChatMessageFormatterProps> = ({ content }) => {
  if (!content) return null;

  // Split content by blocks separated by double newlines or single newlines
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];

  let currentList: { type: "bullet" | "number"; items: string[] } | null = null;

  const flushList = () => {
    if (!currentList) return;
    const items = currentList.items;
    const isBullet = currentList.type === "bullet";
    const listKey = `list-${blocks.length}`;

    if (isBullet) {
      blocks.push(
        <ul key={listKey} className="my-2 space-y-1 pl-1 list-none">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed">
              <span className="text-primary font-bold text-base select-none leading-tight mt-0.5">
                •
              </span>
              <span className="flex-1">{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    } else {
      blocks.push(
        <ol key={listKey} className="my-2 space-y-1 pl-1 list-none">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed">
              <span className="text-primary font-semibold text-xs select-none min-w-[1.2rem] mt-0.5">
                {idx + 1}.
              </span>
              <span className="flex-1">{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );
    }
    currentList = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      flushList();
      continue;
    }

    // Heading: ### or ## or #
    const headingMatch = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (headingMatch) {
      flushList();
      const level = headingMatch[1].length;
      const headingText = headingMatch[2];

      if (level === 1 || level === 2) {
        blocks.push(
          <h4
            key={`h-${i}`}
            className="font-heading font-semibold text-secondary text-base mt-3 mb-1.5 border-b border-primary/10 pb-1"
          >
            {renderInline(headingText)}
          </h4>
        );
      } else {
        blocks.push(
          <h5
            key={`h-${i}`}
            className="font-heading font-semibold text-secondary text-sm mt-2.5 mb-1 text-primary"
          >
            {renderInline(headingText)}
          </h5>
        );
      }
      continue;
    }

    // Bullet list: * or -
    const bulletMatch = trimmed.match(/^[-*]\s+(.*)$/);
    if (bulletMatch) {
      if (currentList && currentList.type !== "bullet") {
        flushList();
      }
      if (!currentList) {
        currentList = { type: "bullet", items: [] };
      }
      currentList.items.push(bulletMatch[1]);
      continue;
    }

    // Numbered list: 1. or 2.
    const numberMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (numberMatch) {
      if (currentList && currentList.type !== "number") {
        flushList();
      }
      if (!currentList) {
        currentList = { type: "number", items: [] };
      }
      currentList.items.push(numberMatch[1]);
      continue;
    }

    // Standard paragraph line
    flushList();
    blocks.push(
      <p key={`p-${i}`} className="text-sm leading-relaxed my-1.5 first:mt-0 last:mb-0">
        {renderInline(trimmed)}
      </p>
    );
  }

  // Flush any trailing list
  flushList();

  return <div className="space-y-1 text-text leading-relaxed">{blocks}</div>;
};

