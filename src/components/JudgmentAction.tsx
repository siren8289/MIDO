import { useState } from 'react';
import { VerificationData } from '@/types';
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, Shield, AlertOctagon, ArrowRight, Activity } from 'lucide-react';
import { translations, Language } from '../utils/translations';

interface JudgmentActionProps {
  data: VerificationData;
  onUpdate: (data: VerificationData) => void;
  onNext: () => void;
  onBack: () => void;
  lang: Language;
}

export function JudgmentAction({ data, onUpdate, onNext, onBack, lang }: JudgmentActionProps) {
  const [selectedAction, setSelectedAction] = useState<'use' | 'fix' | 'ignore' | null>(null);
  
  const t = translations[lang];

  const risks = [
    {
      id: 1,
      type: 'security',
      severity: 'high',
      title: t.judgment.mock.risk1Title,
      description: t.judgment.mock.risk1Desc,
      recommendation: t.judgment.mock.risk1Rec,
      code: 'db.query("SELECT * FROM users WHERE id = " + userId);',
      line: 42
    },
    {
      id: 2,
      type: 'logic',
      severity: 'medium',
      title: t.judgment.mock.risk2Title,
      description: t.judgment.mock.risk2Desc,
      recommendation: t.judgment.mock.risk2Rec,
      code: 'user.balance -= amount;',
      line: 85
    }
  ];

  const handleAction = (action: 'use' | 'fix' | 'ignore') => {
    setSelectedAction(action);
    // In a real app, we would handle the logic here (e.g., opening a fix editor)
    // For this prototype, we'll mark the decision and proceed
    onUpdate({
        ...data,
        result: {
            ...data.result,
            status: action === 'use' ? 'passed' : action === 'fix' ? 'warning' : 'failed',
            // Mock other required fields
            overallScore: 85,
            confidenceLevel: 'high',
            humanReviewRequired: false,
            riskCount: risks.length,
            verificationTime: 1.2,
            risks: risks
        },
        decision: action
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
            <h2 className="text-3xl font-bold text-text-primary mb-2">{t.judgment.title}</h2>
            <p className="text-text-secondary">{t.judgment.desc}</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-background-secondary rounded-full border border-border">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-text-primary">{t.judgment.aiConfidence}: High (92%)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: AI Analysis Result */}
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                {t.judgment.aiAnalysis}
            </h3>
            <div className="space-y-4">
                {risks.map((risk) => (
                    <div key={risk.id} className="bg-card border border-border rounded-xl p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                                {risk.severity === 'high' ? (
                                    <AlertOctagon className="w-5 h-5 text-destructive" />
                                ) : (
                                    <AlertTriangle className="w-5 h-5 text-warning" />
                                )}
                                <span className="font-semibold text-text-primary">{risk.title}</span>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full uppercase font-bold ${
                                risk.severity === 'high' ? 'bg-destructive/10 text-destructive' : 'bg-warning/10 text-warning'
                            }`}>
                                {risk.severity} {t.judgment.risk}
                            </span>
                        </div>
                        <p className="text-sm text-text-secondary mb-3">{risk.description}</p>
                        <div className="bg-background-secondary rounded p-3 font-mono text-xs text-text-primary border border-border">
                            {risk.code}
                        </div>
                        <div className="mt-3 pt-3 border-t border-border">
                            <div className="text-xs font-semibold text-primary mb-1">{t.judgment.aiSuggestion}</div>
                            <p className="text-sm text-text-primary">{risk.recommendation}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Right: Team Guidelines & Action */}
        <div className="space-y-8">
            {/* Guidelines */}
            <div className="space-y-4">
                 <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    {t.judgment.relevantGuidelines}
                </h3>
                <div className="bg-background-secondary/30 border border-border rounded-xl p-6 space-y-4">
                    <div className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="text-sm text-text-primary">
                            {t.judgment.mock.policy1}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="text-sm text-text-primary">
                            {t.judgment.mock.policy2}
                        </p>
                    </div>
                </div>
            </div>

            {/* Action Area */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-text-primary mb-6 text-center">{t.judgment.makeDecision}</h3>
                
                <div className="grid grid-cols-1 gap-4">
                    <button
                        onClick={() => handleAction('use')}
                        className={`p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between group ${
                            selectedAction === 'use'
                                ? 'border-success bg-success/5'
                                : 'border-border hover:border-success/50'
                        }`}
                    >
                        <div>
                            <div className="font-bold text-text-primary group-hover:text-success transition-colors">{t.judgment.actions.use.title}</div>
                            <div className="text-sm text-text-secondary">{t.judgment.actions.use.desc}</div>
                        </div>
                        <CheckCircle className={`w-6 h-6 ${selectedAction === 'use' ? 'text-success' : 'text-text-disabled'}`} />
                    </button>

                    <button
                        onClick={() => handleAction('fix')}
                        className={`p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between group ${
                            selectedAction === 'fix'
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                        }`}
                    >
                        <div>
                            <div className="font-bold text-text-primary group-hover:text-primary transition-colors">{t.judgment.actions.fix.title}</div>
                            <div className="text-sm text-text-secondary">{t.judgment.actions.fix.desc}</div>
                        </div>
                        <Shield className={`w-6 h-6 ${selectedAction === 'fix' ? 'text-primary' : 'text-text-disabled'}`} />
                    </button>

                    <button
                        onClick={() => handleAction('ignore')}
                        className={`p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between group ${
                            selectedAction === 'ignore'
                                ? 'border-destructive bg-destructive/5'
                                : 'border-border hover:border-destructive/50'
                        }`}
                    >
                        <div>
                            <div className="font-bold text-text-primary group-hover:text-destructive transition-colors">{t.judgment.actions.ignore.title}</div>
                            <div className="text-sm text-text-secondary">{t.judgment.actions.ignore.desc}</div>
                        </div>
                        <XCircle className={`w-6 h-6 ${selectedAction === 'ignore' ? 'text-destructive' : 'text-text-disabled'}`} />
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Navigation */}
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
          disabled={!selectedAction}
          className="px-8 py-3 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {t.judgment.finalizeBtn}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
