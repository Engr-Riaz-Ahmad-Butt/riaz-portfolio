'use client';

import type { ReactNode } from 'react';

import { useTypewriter } from '@/hooks/use-typewriter';
import { mergeClasses } from '@/lib/utils';

const CODE_SNIPPET = `const developer = {
  name: 'Riaz Ahmad Butt',
  role: 'Full Stack Developer',
  skills: ['React', 'Next.js', 'Node.js'],
  available: true
};`;

type HeroCodeEditorProps = {
  className?: string;
};

const highlightLine = (line: string) => {
  if (!line.trim()) {
    return <span>{'\u00A0'}</span>;
  }

  const parts: ReactNode[] = [];
  let remaining = line;
  let key = 0;

  const pushPlain = (value: string) => {
    if (!value) return;
    parts.push(
      <span key={`t-${key++}`} className="text-gray-700 dark:text-gray-700">
        {value}
      </span>
    );
  };

  while (remaining.length) {
    const keywordMatch = remaining.match(/^(const|true)\b/);
    if (keywordMatch) {
      parts.push(
        <span key={`k-${key++}`} className="text-teal-700 dark:text-teal-300">
          {keywordMatch[0]}
        </span>
      );
      remaining = remaining.slice(keywordMatch[0].length);
      continue;
    }

    const stringMatch = remaining.match(/^'[^']*'/);
    if (stringMatch) {
      parts.push(
        <span key={`s-${key++}`} className="text-emerald-700 dark:text-emerald-400">
          {stringMatch[0]}
        </span>
      );
      remaining = remaining.slice(stringMatch[0].length);
      continue;
    }

    const propMatch = remaining.match(/^(name|role|skills|available)\b/);
    if (propMatch) {
      parts.push(
        <span key={`p-${key++}`} className="text-rose-600 dark:text-rose-400">
          {propMatch[0]}
        </span>
      );
      remaining = remaining.slice(propMatch[0].length);
      continue;
    }

    const identMatch = remaining.match(/^(developer)\b/);
    if (identMatch) {
      parts.push(
        <span key={`i-${key++}`} className="text-sky-700 dark:text-sky-300">
          {identMatch[0]}
        </span>
      );
      remaining = remaining.slice(identMatch[0].length);
      continue;
    }

    pushPlain(remaining[0]);
    remaining = remaining.slice(1);
  }

  return <>{parts}</>;
};

const HeroCodeEditor = ({ className }: HeroCodeEditorProps) => {
  const { displayed, isTyping, isComplete } = useTypewriter({
    text: CODE_SNIPPET,
    speedMs: 28,
    startDelayMs: 350,
  });

  const lines = displayed.length ? displayed.split('\n') : [''];
  const showCaret = isTyping || isComplete;

  return (
    <div className={mergeClasses('relative w-full max-w-lg', className)}>
      <div
        className="pointer-events-none absolute -inset-8 rounded-full bg-primary/15 blur-3xl dark:bg-primary/20"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-soft dark:border-white/10 dark:bg-[#121212]">
        <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-3 dark:border-white/10">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" aria-hidden />
          <span className="ml-3 font-mono text-[11px] text-gray-400">developer.ts</span>
        </div>

        <pre
          className="overflow-x-auto p-5 font-mono text-[13px] leading-6 md:text-sm md:leading-7"
          aria-label="Animated developer profile code snippet"
        >
          <code>
            {lines.map((line, index) => {
              const isLast = index === lines.length - 1;

              return (
                <div key={`line-${index}`} className="whitespace-pre">
                  {highlightLine(line)}
                  {isLast && showCaret ? (
                    <span
                      className={`hero-caret ml-0.5 inline-block h-4 w-[2px] translate-y-[2px] align-middle ${
                        isComplete ? 'bg-primary/70' : 'bg-primary'
                      }`}
                      aria-hidden
                    />
                  ) : null}
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default HeroCodeEditor;
