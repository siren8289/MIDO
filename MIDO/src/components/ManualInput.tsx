import { useState } from 'react';
import { Upload, FileCode, GitBranch, GitPullRequest, Clipboard, Check } from 'lucide-react';
import { VerificationData } from '../App';
import { translations, Language } from '../utils/translations';

interface ManualInputProps {
  data: VerificationData;
  onUpdate: (data: VerificationData) => void;
  onNext: () => void;
  lang: Language;
}

export function ManualInput({ data, onUpdate, onNext, lang }: ManualInputProps) {
  const [taskTitle, setTaskTitle] = useState(data.taskTitle || '');
  const [purpose, setPurpose] = useState(data.purpose || '');
  const [inputMethod, setInputMethod] = useState<'paste' | 'file' | 'commit' | 'pr'>('paste');
  const [code, setCode] = useState(data.code || '');
  const [copied, setCopied] = useState(false);

  // Mock data for repo diffs
  const [repoUrl, setRepoUrl] = useState('');
  const [commitHash, setCommitHash] = useState('');
  const [prNumber, setPrNumber] = useState('');

  const t = translations[lang];

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContinue = () => {
    onUpdate({
      ...data,
      taskTitle,
      purpose,
      code,
      inputMethod,
    });
    onNext();
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-text-primary mb-2">{t.manualInput.title}</h2>
        <p className="text-text-secondary">{t.manualInput.desc}</p>
      </div>

      <div className="space-y-10">
        {/* Task Details */}
        <div className="grid grid-cols-1 gap-16">
          <div className="space-y-5">
            <label className="text-sm font-semibold text-text-primary">{t.manualInput.taskTitle}</label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder={t.manualInput.taskTitlePlaceholder}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-border-focus"
            />
          </div>
          
          <div className="space-y-5">
            <label className="text-sm font-semibold text-text-primary">{t.manualInput.purpose}</label>
            <textarea
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder={t.manualInput.purposePlaceholder}
              className="w-full h-24 p-4 bg-background border border-border rounded-lg text-text-primary resize-none focus:outline-none focus:ring-2 focus:ring-border-focus"
            />
          </div>
        </div>

        {/* Input Method Selection */}
        <div className="space-y-8">
            <label className="text-sm font-semibold text-text-primary block">{t.manualInput.relatedCode}</label>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <button
                onClick={() => setInputMethod('paste')}
                className={`p-4 rounded-xl border-2 transition-all ${
                inputMethod === 'paste'
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-card hover:border-secondary'
                }`}
            >
                <Clipboard className={`w-6 h-6 mx-auto mb-2 ${
                inputMethod === 'paste' ? 'text-primary' : 'text-text-secondary'
                }`} />
                <div className={`font-semibold text-sm ${
                inputMethod === 'paste' ? 'text-primary' : 'text-text-primary'
                }`}>
                {t.manualInput.methods.paste.title}
                </div>
            </button>

            <button
                onClick={() => setInputMethod('file')}
                className={`p-4 rounded-xl border-2 transition-all ${
                inputMethod === 'file'
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-card hover:border-secondary'
                }`}
            >
                <Upload className={`w-6 h-6 mx-auto mb-2 ${
                inputMethod === 'file' ? 'text-primary' : 'text-text-secondary'
                }`} />
                <div className={`font-semibold text-sm ${
                inputMethod === 'file' ? 'text-primary' : 'text-text-primary'
                }`}>
                {t.manualInput.methods.file.title}
                </div>
            </button>

            <button
                onClick={() => setInputMethod('commit')}
                className={`p-4 rounded-xl border-2 transition-all ${
                inputMethod === 'commit'
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-card hover:border-secondary'
                }`}
            >
                <GitBranch className={`w-6 h-6 mx-auto mb-2 ${
                inputMethod === 'commit' ? 'text-primary' : 'text-text-secondary'
                }`} />
                <div className={`font-semibold text-sm ${
                inputMethod === 'commit' ? 'text-primary' : 'text-text-primary'
                }`}>
                {t.manualInput.methods.commit.title}
                </div>
            </button>

            <button
                onClick={() => setInputMethod('pr')}
                className={`p-4 rounded-xl border-2 transition-all ${
                inputMethod === 'pr'
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-card hover:border-secondary'
                }`}
            >
                <GitPullRequest className={`w-6 h-6 mx-auto mb-2 ${
                inputMethod === 'pr' ? 'text-primary' : 'text-text-secondary'
                }`} />
                <div className={`font-semibold text-sm ${
                inputMethod === 'pr' ? 'text-primary' : 'text-text-primary'
                }`}>
                {t.manualInput.methods.pr.title}
                </div>
            </button>
            </div>
        </div>

        {/* Input Area */}
        <div className="bg-background-secondary border border-border rounded-xl p-6">
          {inputMethod === 'paste' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-text-primary">{t.manualInput.pasteArea.label}</label>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1.5 bg-card hover:bg-background-secondary text-text-secondary rounded-lg text-sm transition-colors border border-border"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-success" />
                      {t.manualInput.pasteArea.copied}
                    </>
                  ) : (
                    <>
                      <Clipboard className="w-4 h-4" />
                      {t.manualInput.pasteArea.copy}
                    </>
                  )}
                </button>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={t.manualInput.pasteArea.placeholder}
                className="w-full h-[300px] p-4 bg-background border border-border rounded-lg text-text-primary font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-border-focus"
                spellCheck={false}
              />
            </div>
          )}

          {inputMethod === 'file' && (
            <div className="space-y-4">
              <label className="text-sm font-semibold text-text-primary">{t.manualInput.fileArea.label}</label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer bg-background">
                <Upload className="w-12 h-12 text-text-disabled mx-auto mb-4" />
                <p className="text-text-primary font-medium mb-2">{t.manualInput.fileArea.drop}</p>
                <p className="text-xs text-text-disabled">
                  {t.manualInput.fileArea.supports}
                </p>
              </div>
            </div>
          )}

          {inputMethod === 'commit' && (
            <div className="space-y-4">
              <label className="text-sm font-semibold text-text-primary">{t.manualInput.commitArea.label}</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-text-secondary mb-1 block">{t.manualInput.commitArea.repoUrl}</label>
                  <input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-border-focus"
                  />
                </div>
                <div>
                  <label className="text-xs text-text-secondary mb-1 block">{t.manualInput.commitArea.commitHash}</label>
                  <input
                    type="text"
                    value={commitHash}
                    onChange={(e) => setCommitHash(e.target.value)}
                    placeholder="e.g., a1b2c3..."
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-border-focus"
                  />
                </div>
              </div>
            </div>
          )}

          {inputMethod === 'pr' && (
            <div className="space-y-4">
              <label className="text-sm font-semibold text-text-primary">{t.manualInput.prArea.label}</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-text-secondary mb-1 block">{t.manualInput.prArea.repoUrl}</label>
                  <input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-border-focus"
                  />
                </div>
                <div>
                  <label className="text-xs text-text-secondary mb-1 block">{t.manualInput.prArea.prNumber}</label>
                  <input
                    type="text"
                    value={prNumber}
                    onChange={(e) => setPrNumber(e.target.value)}
                    placeholder="e.g., 123"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-border-focus"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-6 border-t border-border">
        <button
          onClick={handleContinue}
          disabled={!taskTitle.trim()}
          className="px-8 py-3 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t.manualInput.confirmBtn}
        </button>
      </div>
    </div>
  );
}
