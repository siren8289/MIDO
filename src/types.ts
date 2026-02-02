export interface VerificationData {
  taskTitle?: string;
  purpose?: string;
  code: string;
  inputMethod?: string;
  scope: string[];
  profile: 'quick' | 'standard' | 'strict';
  decision?: 'use' | 'fix' | 'ignore';
  result?: {
    overallScore: number;
    confidenceLevel: 'high' | 'mid' | 'low';
    humanReviewRequired: boolean;
    status: 'passed' | 'warning' | 'failed';
    riskCount: number;
    verificationTime: number;
    risks: Array<{
      id: number;
      line: number;
      type: string;
      severity: string;
      title: string;
      description: string;
      code: string;
      recommendation: string;
    }>;
  };
}
