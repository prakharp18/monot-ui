import { useState } from 'react'

interface CodeTab {
  label: string
  code: string
}

interface CodeBlockProps {
  tabs: CodeTab[]
}

export const CodeBlock = ({ tabs }: CodeBlockProps) => {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(tabs[active].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
      {/* Tab Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-4">
        <div className="flex gap-1">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`px-4 py-3 text-xs font-mono uppercase tracking-widest transition-colors ${
                active === i
                  ? 'text-white border-b-2 border-white'
                  : 'text-zinc-600 hover:text-zinc-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest rounded-lg border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-5 overflow-x-auto max-h-[480px] overflow-y-auto">
        <pre className="font-mono text-[13px] leading-relaxed text-zinc-300 whitespace-pre">
          {tabs[active].code}
        </pre>
      </div>
    </div>
  )
}
