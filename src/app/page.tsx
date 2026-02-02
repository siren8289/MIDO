"use client";

import { useState } from 'react';
import { ManualInput } from '@/components/ManualInput';
import { WorkContext } from '@/components/WorkContext';
import { JudgmentAction } from '@/components/JudgmentAction';
import { DecisionLog } from '@/components/DecisionLog';
import { Shield, FileText, Activity, CheckCircle, Sun, Moon, Globe } from 'lucide-react';
import { translations, Language } from '@/utils/translations';

import { VerificationData } from '@/types';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDark, setIsDark] = useState(false); // Default to light mode as requested
  const [lang, setLang] = useState<Language>('ko'); // Default to Korean
  const [data, setData] = useState<VerificationData>({
    code: '',
    scope: ['logic', 'security'],
    profile: 'standard',
  });

  const t = translations[lang];

  const steps = [
    { id: 'input', name: t.app.steps.input, icon: FileText },
    { id: 'context', name: t.app.steps.context, icon: Activity }, // Using Activity as a placeholder for context/analysis
    { id: 'judgment', name: t.app.steps.judgment, icon: Shield },
    { id: 'log', name: t.app.steps.log, icon: CheckCircle },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    setCurrentStep(0);
    setData({
      code: '',
      scope: ['logic', 'security'],
      profile: 'standard',
    });
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-background transition-colors duration-300">
        {/* Header */}
        <div className="bg-background/95 backdrop-blur-xl border-b border-border shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-2">
            {/* Top Row: Logo & Theme Toggle */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-primary rounded-xl shadow-lg shadow-primary/20">
                  <Shield className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-primary tracking-tight leading-none">
                    {t.app.title}
                  </h1>
                  <p className="text-sm text-text-secondary font-medium mt-1">{t.app.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
                  className="px-3 py-1.5 rounded-full bg-card border border-border hover:bg-background-secondary hover:border-primary/30 transition-all shadow-sm flex items-center gap-2 text-sm font-medium text-text-secondary"
                >
                  <Globe className="w-4 h-4" />
                  {lang === 'en' ? 'KO' : 'EN'}
                </button>
                <div className="w-px h-6 bg-border mx-1" />
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2.5 rounded-full bg-card border border-border hover:bg-background-secondary hover:border-primary/30 transition-all shadow-sm group"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                  ) : (
                    <Moon className="w-5 h-5 text-primary group-hover:text-primary-hover transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Stepper Row */}
            <div className="max-w-4xl mx-auto pb-6">
              <div className="flex items-center justify-between relative">
                {/* Connecting Line Background */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-6 z-0" />
                
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === currentStep;
                  const isCompleted = index < currentStep;

                  return (
                    <div key={step.id} className="relative z-10 flex flex-col items-center group cursor-default flex-1">
                      {/* Icon Circle */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-3 border-2 ${
                          isActive
                            ? 'bg-primary border-primary text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-110'
                            : isCompleted
                            ? 'bg-background border-primary text-primary'
                            : 'bg-background border-border text-text-disabled'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isCompleted ? 'stroke-[2.5px]' : ''}`} />
                      </div>
                      
                      {/* Label */}
                      <div
                        className={`text-sm font-medium transition-colors duration-300 ${
                          isActive ? 'text-primary' : isCompleted ? 'text-text-secondary' : 'text-text-disabled'
                        }`}
                      >
                        {step.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-sm min-h-[600px]">
            {currentStep === 0 && (
              <ManualInput data={data} onUpdate={setData} onNext={handleNext} lang={lang} />
            )}
            {currentStep === 1 && (
              <WorkContext data={data} onUpdate={setData} onNext={handleNext} onBack={handleBack} lang={lang} />
            )}
            {currentStep === 2 && (
              <JudgmentAction data={data} onUpdate={setData} onNext={handleNext} onBack={handleBack} lang={lang} />
            )}
            {currentStep === 3 && (
              <DecisionLog data={data} onBack={handleBack} onComplete={handleComplete} lang={lang} />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-text-disabled">
            <p>
              {t.app.footer.desc}
            </p>
            <p className="mt-2">
              {t.app.footer.powered}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
