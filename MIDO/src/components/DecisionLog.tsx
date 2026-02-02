import { VerificationData } from '../App';
import { CheckCircle, Clock, User, FileText, RefreshCw, Save } from 'lucide-react';
import { translations, Language } from '../utils/translations';

interface DecisionLogProps {
  data: VerificationData;
  onBack: () => void;
  onComplete: () => void;
  lang: Language;
}

export function DecisionLog({ data, onComplete, lang }: DecisionLogProps) {
  const date = new Date().toLocaleString(lang === 'ko' ? 'ko-KR' : 'en-US');
  const t = translations[lang];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center p-3 bg-success/10 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h2 className="text-3xl font-bold text-text-primary">{t.decisionLog.title}</h2>
        <p className="text-text-secondary">{t.decisionLog.desc}</p>
      </div>

      {/* Decision Summary Card */}
      <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
        <div className="bg-background-secondary/50 p-6 border-b border-border">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-xl text-text-primary">{data.taskTitle || "Untitled Task"}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                    data.decision === 'use' ? 'bg-success/10 text-success' :
                    data.decision === 'fix' ? 'bg-primary/10 text-primary' :
                    'bg-destructive/10 text-destructive'
                }`}>
                    {data.decision === 'use' ? t.decisionLog.status.approved : 
                     data.decision === 'fix' ? t.decisionLog.status.fixed : t.decisionLog.status.rejected}
                </span>
            </div>
        </div>
        
        <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <div className="text-xs text-text-secondary uppercase font-semibold flex items-center gap-1">
                        <User className="w-3 h-3" /> {t.decisionLog.judge}
                    </div>
                    <div className="text-text-primary font-medium">{t.decisionLog.currentUser}</div>
                </div>
                <div className="space-y-1">
                    <div className="text-xs text-text-secondary uppercase font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {t.decisionLog.timestamp}
                    </div>
                    <div className="text-text-primary font-medium">{date}</div>
                </div>
            </div>

            <div className="space-y-2">
                 <div className="text-xs text-text-secondary uppercase font-semibold flex items-center gap-1">
                    <FileText className="w-3 h-3" /> {t.decisionLog.actionSummary}
                </div>
                <div className="p-4 bg-background border border-border rounded-lg text-sm text-text-primary">
                    {data.decision === 'use' && t.decisionLog.summaryText.use}
                    {data.decision === 'fix' && t.decisionLog.summaryText.fix}
                    {data.decision === 'ignore' && t.decisionLog.summaryText.ignore}
                </div>
            </div>

            {data.purpose && (
                <div className="space-y-2">
                    <div className="text-xs text-text-secondary uppercase font-semibold">{t.decisionLog.context}</div>
                    <p className="text-sm text-text-secondary">{data.purpose}</p>
                </div>
            )}
        </div>

        <div className="bg-background-secondary/30 p-4 border-t border-border flex justify-between items-center">
             <span className="text-xs text-text-disabled">Log ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
             <button className="text-primary hover:text-primary-hover text-sm font-medium flex items-center gap-1 transition-colors">
                <FileText className="w-4 h-4" /> {t.decisionLog.viewReport}
             </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 pt-4">
        <button
          onClick={onComplete}
          className="px-6 py-3 bg-card hover:bg-background-secondary text-text-primary rounded-lg border border-border shadow-sm transition-all flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          {t.decisionLog.startNew}
        </button>
        <button
          onClick={() => {alert(t.decisionLog.alertSaved)}}
          className="px-8 py-3 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-lg shadow-lg transition-all flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          {t.decisionLog.savePattern}
        </button>
      </div>
    </div>
  );
}
