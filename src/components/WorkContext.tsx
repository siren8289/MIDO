import { useState, useEffect } from 'react';
import { VerificationData } from '@/types';
import { FileText, History, Users, ArrowRight, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { translations, Language } from '../utils/translations';

interface WorkContextProps {
  data: VerificationData;
  onUpdate: (data: VerificationData) => void;
  onNext: () => void;
  onBack: () => void;
  lang: Language;
}

export function WorkContext({ data, onNext, onBack, lang }: WorkContextProps) {
  const [loading, setLoading] = useState(true);

  const t = translations[lang];

  // Mocking the loading of context
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-text-primary mb-2">{t.workContext.title}</h2>
        <p className="text-text-secondary">{t.workContext.desc}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Input Summary */}
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {t.workContext.targetSummary}
                </h3>
                <div className="space-y-4">
                    <div>
                        <div className="text-xs text-text-secondary uppercase font-semibold mb-1">{t.manualInput.taskTitle}</div>
                        <div className="text-text-primary font-medium">{data.taskTitle || "Untitled Task"}</div>
                    </div>
                    <div>
                        <div className="text-xs text-text-secondary uppercase font-semibold mb-1">{t.manualInput.purpose}</div>
                        <div className="text-text-primary text-sm leading-relaxed">{data.purpose || t.workContext.noPurpose}</div>
                    </div>
                    <div>
                        <div className="text-xs text-text-secondary uppercase font-semibold mb-1">{t.workContext.inputType}</div>
                        <div className="flex items-center gap-2 text-sm text-text-primary">
                            <span className="px-2 py-1 bg-background-secondary rounded text-xs font-mono">
                                {data.inputMethod || 'paste'}
                            </span>
                            <span className="text-text-disabled">•</span>
                            <span>{data.code ? `${data.code.length} ${t.common.chars}` : t.workContext.noContent}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Context Matching */}
        <div className="lg:col-span-2 space-y-6">
            {/* Similar Cases */}
            <div className="bg-background-secondary/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <History className="w-5 h-5 text-secondary" />
                    {t.workContext.pastCases}
                </h3>
                {loading ? (
                    <div className="flex items-center justify-center py-8">
                        <Loader2 className="w-6 h-6 animate-spin text-primary" />
                        <span className="ml-2 text-text-secondary">{t.workContext.searching}</span>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <div className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-medium text-primary">{t.workContext.mock.case1Title}</span>
                                <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full">{t.workContext.mock.case1Status}</span>
                            </div>
                            <p className="text-sm text-text-secondary">{t.workContext.mock.case1Desc}</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-medium text-text-primary">{t.workContext.mock.case2Title}</span>
                                <span className="text-xs bg-warning/10 text-warning px-2 py-0.5 rounded-full">{t.workContext.mock.case2Status}</span>
                            </div>
                            <p className="text-sm text-text-secondary">{t.workContext.mock.case2Desc}</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Team Guidelines */}
            <div className="bg-background-secondary/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-secondary" />
                    {t.workContext.teamPatterns}
                </h3>
                 {loading ? (
                    <div className="flex items-center justify-center py-8">
                        <Loader2 className="w-6 h-6 animate-spin text-primary" />
                        <span className="ml-2 text-text-secondary">{t.workContext.loadingGuidelines}</span>
                    </div>
                ) : (
                    <div className="space-y-3">
                         <div className="flex items-start gap-3 p-3 rounded-lg bg-card/50">
                            <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                            <div>
                                <div className="font-medium text-sm text-text-primary">{t.workContext.mock.pattern1Title}</div>
                                <div className="text-xs text-text-secondary">{t.workContext.mock.pattern1Desc}</div>
                            </div>
                         </div>
                         <div className="flex items-start gap-3 p-3 rounded-lg bg-card/50">
                            <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                            <div>
                                <div className="font-medium text-sm text-text-primary">{t.workContext.mock.pattern2Title}</div>
                                <div className="text-xs text-text-secondary">{t.workContext.mock.pattern2Desc}</div>
                            </div>
                         </div>
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between pt-6 border-t border-border">
        <button
            onClick={onBack}
            className="px-6 py-2 bg-card hover:bg-background-secondary text-text-primary rounded-lg border border-border transition-colors flex items-center gap-2"
        >
            <ArrowLeft className="w-4 h-4" />
            {t.common.back}
        </button>
        <button
          onClick={onNext}
          disabled={loading}
          className="px-8 py-3 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {loading ? t.workContext.analyzing : t.workContext.proceedBtn}
          {!loading && <ArrowRight className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
