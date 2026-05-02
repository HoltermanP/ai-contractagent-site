export default function AppScreenshot() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow behind mockup */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-2xl blur-3xl scale-110" />

      {/* Browser chrome */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl glow-blue">
        {/* Title bar */}
        <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-white/8">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 mx-4 bg-slate-700 rounded-md py-1 px-3 text-xs text-slate-400 text-center">
            app.ai-contractagent.nl
          </div>
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">J</div>
        </div>

        {/* App body */}
        <div className="bg-slate-900 flex" style={{ height: '360px' }}>
          {/* Sidebar */}
          <div className="hidden sm:flex w-52 bg-slate-950 border-r border-white/8 flex-col p-3 flex-shrink-0">
            <div className="flex items-center gap-2 px-2 py-2 mb-4">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-indigo-500" />
              <span className="text-xs font-semibold text-white">Contractagent</span>
            </div>
            {[
              { label: 'Dashboard', active: false, dot: 'bg-slate-600' },
              { label: 'AI-Agent', active: true, dot: 'bg-blue-500' },
              { label: 'Contracten', active: false, dot: 'bg-slate-600' },
              { label: 'Projecten', active: false, dot: 'bg-slate-600' },
              { label: 'Verplichtingen', active: false, dot: 'bg-slate-600' },
              { label: 'Inzichten', active: false, dot: 'bg-slate-600' },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs mb-0.5 ${
                  item.active
                    ? 'bg-blue-600/20 text-blue-400 font-medium'
                    : 'text-slate-400'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                {item.label}
              </div>
            ))}

            <div className="mt-auto">
              <div className="h-px bg-white/8 mb-3" />
              <div className="flex items-center gap-2 px-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center text-white text-xs font-bold">J</div>
                <div>
                  <div className="text-xs text-white font-medium">Jan de Vries</div>
                  <div className="text-[10px] text-slate-500">Admin</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top bar */}
            <div className="px-4 py-3 border-b border-white/8 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">AI-Contracts</div>
                <div className="text-xs text-slate-400">Project: Brug A15 — 24 documenten</div>
              </div>
              <div className="flex gap-2">
                <div className="px-2.5 py-1 bg-slate-700 rounded text-xs text-slate-300">Volledig portfolio</div>
                <div className="px-2.5 py-1 bg-blue-600/30 border border-blue-500/40 rounded text-xs text-blue-300">Brug A15</div>
              </div>
            </div>

            {/* Chat area */}
            <div className="flex-1 overflow-hidden p-4 space-y-3">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white text-xs rounded-xl rounded-tr-sm px-3 py-2 max-w-xs">
                  Wat zijn de boeteclausules bij vertraging in dit project?
                </div>
              </div>

              {/* AI response */}
              <div className="flex gap-2 items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-slate-800 border border-white/8 rounded-xl rounded-tl-sm px-3 py-2.5">
                    <p className="text-xs text-slate-200 mb-2">Op basis van contract <span className="text-blue-400 font-medium">UAV-2012 Brug A15</span> gelden de volgende boeteclausules:</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        </div>
                        <p className="text-xs text-slate-300">Art. 42.3 — €2.500/dag bij overschrijding oplevertermijn</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        </div>
                        <p className="text-xs text-slate-300">Art. 42.5 — Max. 10% contractwaarde als boeteplafond</p>
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/8 flex gap-2">
                      <div className="px-2 py-0.5 bg-slate-700 rounded text-[10px] text-slate-400">📄 UAV-2012 p.18</div>
                      <div className="px-2 py-0.5 bg-slate-700 rounded text-[10px] text-slate-400">📄 Bijlage B p.4</div>
                    </div>
                  </div>
                  <div className="mt-1.5 flex gap-1.5 flex-wrap">
                    {['Wat is het boeteplafond?', 'Andere verplichtingen?'].map((q) => (
                      <div key={q} className="px-2 py-0.5 rounded-full border border-blue-500/30 text-[10px] text-blue-400 cursor-pointer hover:bg-blue-500/10">
                        {q}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="px-4 py-3 border-t border-white/8">
              <div className="bg-slate-800 border border-white/10 rounded-xl flex items-center gap-2 px-3 py-2">
                <div className="text-xs text-slate-500 flex-1">Stel een vraag over uw contracten...</div>
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 border-r-2 border-t-2 border-white rotate-45 translate-x-[-1px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="absolute -left-10 top-12 glass rounded-xl px-4 py-3 animate-float hidden lg:block">
        <div className="text-xs text-slate-300 mb-0.5">Actieve contracten</div>
        <div className="text-2xl font-bold text-white">142</div>
        <div className="flex items-center gap-1 mt-0.5">
          <div className="w-3 h-3 rounded-full bg-green-400 flex items-center justify-center">
            <div className="w-1.5 h-px bg-white" />
            <div className="w-px h-1.5 bg-white absolute" />
          </div>
          <span className="text-[10px] text-green-400">+12 deze maand</span>
        </div>
      </div>

      <div className="absolute -right-10 bottom-24 glass rounded-xl px-4 py-3 animate-float-delay hidden lg:block">
        <div className="text-xs text-slate-300 mb-0.5">Tijdsbesparing</div>
        <div className="text-2xl font-bold text-white">8u/wk</div>
        <div className="text-[10px] text-slate-400 mt-0.5">per projectleider</div>
      </div>
    </div>
  )
}
