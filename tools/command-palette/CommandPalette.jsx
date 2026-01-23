import { useState, useRef } from 'react';

const commands = {
  core: {
    icon: '⚡',
    label: 'Core',
    commands: [
      { cmd: '/load-status', desc: 'Load current state and continue from where you left off' },
      { cmd: '/focus', desc: 'Change project/component focus', args: '[project] [component]' },
      { cmd: '/save', desc: 'Save session state for continuity' },
      { cmd: '/handoff', desc: 'Prepare for tool transition', args: '[tool]' },
      { cmd: '/from', desc: 'Continue from another tool', args: '[source]' },
      { cmd: '/plan', desc: 'Enter planning mode (no changes)' },
      { cmd: '/act', desc: 'Enter action mode (make changes)' },
      { cmd: '/ask', desc: 'Enter ask mode (read-only)' },
      { cmd: '/decisions', desc: 'View and manage decision log', args: '[action]' },
      { cmd: '/todos', desc: 'View and manage tasks', args: '[filter]' },
      { cmd: '/sync-check', desc: 'Validate consistency across files' },
      { cmd: '/cleanup', desc: 'Clean up stale state' },
      { cmd: '/help', desc: 'Show command reference', args: '[command]' },
      { cmd: '/version', desc: 'Show MCU version' },
    ]
  },
  review: {
    icon: '🔍',
    label: 'Review',
    commands: [
      { cmd: '/security', desc: 'Security vulnerability review', args: '[target]' },
      { cmd: '/performance', desc: 'Performance review', args: '[target]' },
      { cmd: '/code-quality', desc: 'Code quality review', args: '[target]' },
    ]
  },
  feature: {
    icon: '🚀',
    label: 'Feature',
    commands: [
      { cmd: '/plan-feature', desc: 'Guided feature planning workflow', args: '[name]' },
    ]
  },
  project: {
    icon: '📁',
    label: 'Project',
    commands: [
      { cmd: '/new-project', desc: 'Create a new project', args: '[name]' },
      { cmd: '/import-project', desc: 'Import existing project', args: '[path]' },
      { cmd: '/deprecate-project', desc: 'Mark project as deprecated', args: '[id]' },
      { cmd: '/delete-project', desc: 'Remove a project', args: '[id]' },
    ]
  },
  context: {
    icon: '📝',
    label: 'Context',
    commands: [
      { cmd: '/update-universe', desc: 'Modify universal context files', args: '[file]' },
      { cmd: '/update-project', desc: 'Modify current project context', args: '[file]' },
    ]
  },
  mcu: {
    icon: '🌌',
    label: 'MCU',
    commands: [
      { cmd: '/update-mcu', desc: 'Push changes to public MCU repo', args: '[message]' },
    ]
  }
};

const projects = [
  { id: 'komplyone-web', name: 'KomplyOne Web', status: 'active', icon: '🌐' },
  { id: 'recoger', name: 'Recoger', status: 'active', icon: '🛡️' },
  { id: 'velador', name: 'Velador', status: 'active', icon: '👁️' },
  { id: 'aimigas', name: 'Aimigas', status: 'active', icon: '🤖' },
  { id: 'komplyone-studios', name: 'KomplyOne Studios', status: 'active', icon: '🎨' },
];

const modes = [
  { cmd: '/plan', name: 'Plan', desc: 'Research & design - no file changes', color: 'blue' },
  { cmd: '/act', name: 'Act', desc: 'Implementation - can modify files', color: 'green' },
  { cmd: '/ask', name: 'Ask', desc: 'Read-only exploration', color: 'purple' },
];

export default function CommandPalette() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('');
  const [activeTab, setActiveTab] = useState('commands');
  const inputRef = useRef(null);

  const selectCommand = (text) => {
    setSelected(text);
    try {
      navigator.clipboard.writeText(text).catch(() => {});
    } catch (e) {}
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.select();
      }
    }, 10);
  };

  const filteredCommands = Object.entries(commands).reduce((acc, [cat, data]) => {
    const filtered = data.commands.filter(c =>
      c.cmd.toLowerCase().includes(filter.toLowerCase()) ||
      c.desc.toLowerCase().includes(filter.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[cat] = { ...data, commands: filtered };
    }
    return acc;
  }, {});

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase()) ||
    p.id.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 font-mono">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-xl font-bold text-blue-400 mb-1">MCU Command Palette</h1>
          <p className="text-gray-500 text-sm">My Claude Universe v1 — Click command → Cmd+C → Paste in chat</p>
        </div>

        {/* Selected Command - Copy Box */}
        {selected && (
          <div className="mb-4 p-3 bg-blue-900 border border-blue-500 rounded-lg">
            <div className="text-xs text-blue-300 mb-1">Selected (Cmd+C to copy):</div>
            <input
              ref={inputRef}
              type="text"
              value={selected}
              readOnly
              className="w-full bg-gray-800 border border-blue-500 rounded px-3 py-2 text-blue-100 font-bold text-sm focus:outline-none"
              onFocus={(e) => e.target.select()}
            />
          </div>
        )}

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Filter commands or projects..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-500"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('commands')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              activeTab === 'commands'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Commands
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              activeTab === 'projects'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('modes')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              activeTab === 'modes'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Modes
          </button>
        </div>

        {/* Commands Tab */}
        {activeTab === 'commands' && (
          <div className="space-y-4">
            {Object.entries(filteredCommands).map(([cat, data]) => (
              <div key={cat} className="bg-gray-800 rounded-lg p-3">
                <h2 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                  <span>{data.icon}</span>
                  <span>{data.label}</span>
                </h2>
                <div className="space-y-1">
                  {data.commands.map((c) => (
                    <button
                      key={c.cmd}
                      onClick={() => selectCommand(c.cmd)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                        selected === c.cmd
                          ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={selected === c.cmd ? 'text-white' : 'text-blue-300'}>
                          {c.cmd}
                          {c.args && <span className={selected === c.cmd ? 'text-blue-200 ml-1' : 'text-gray-500 ml-1'}>{c.args}</span>}
                        </span>
                        {selected === c.cmd && (
                          <span className="text-xs">← Selected</span>
                        )}
                      </div>
                      <div className={`text-xs mt-0.5 ${selected === c.cmd ? 'text-blue-100' : 'text-gray-400'}`}>{c.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="space-y-1">
              {filteredProjects.map((p) => {
                const cmd = `/focus ${p.id}`;
                return (
                  <button
                    key={p.id}
                    onClick={() => selectCommand(cmd)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                      selected === cmd
                        ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <span>{p.icon}</span>
                        <span className={selected === cmd ? 'text-white' : 'text-blue-300'}>{p.name}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${
                          p.status === 'active' ? 'bg-green-900 text-green-300' :
                          p.status === 'planned' ? 'bg-yellow-900 text-yellow-300' :
                          'bg-gray-600 text-gray-300'
                        }`}>
                          {p.status}
                        </span>
                      </span>
                      {selected === cmd ? (
                        <span className="text-xs">← Selected</span>
                      ) : (
                        <span className="text-xs text-gray-500">{cmd}</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Modes Tab */}
        {activeTab === 'modes' && (
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="space-y-2">
              {modes.map((m) => (
                <button
                  key={m.cmd}
                  onClick={() => selectCommand(m.cmd)}
                  className={`w-full text-left px-4 py-3 rounded-md text-sm transition-all ${
                    selected === m.cmd
                      ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full ${
                        m.color === 'blue' ? 'bg-blue-500' :
                        m.color === 'green' ? 'bg-green-500' :
                        'bg-purple-500'
                      }`}></span>
                      <span className={`font-semibold ${selected === m.cmd ? 'text-white' : 'text-blue-300'}`}>
                        {m.name}
                      </span>
                    </span>
                    <span className="text-xs text-gray-500">{m.cmd}</span>
                  </div>
                  <div className={`text-xs mt-1 ml-6 ${selected === m.cmd ? 'text-blue-100' : 'text-gray-400'}`}>
                    {m.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <h3 className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Quick Actions</h3>
          <div className="flex flex-wrap gap-2">
            {['/load-status', '/save', '/sync-check', '/help'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => selectCommand(cmd)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                  selected === cmd
                    ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 p-3 bg-gray-800 rounded-lg text-xs text-gray-500">
          <p>MCU = My Claude Universe — The complete system for AI-human collaboration</p>
          <p className="mt-1">Error format: "Guru Meditation: [description]"</p>
        </div>
      </div>
    </div>
  );
}
