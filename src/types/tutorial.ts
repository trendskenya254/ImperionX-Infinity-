import { PageRoute, RouteParams } from '../context/NavigationContext';

export interface TutorialStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle?: string;
  caption: string;
  fullExplanation?: string;
  imageUrl: string;
  badge?: string;
  tags?: string[];
  codeSnippet?: string;
  practicalTip?: string;
  actionButton?: {
    label: string;
    targetPage: PageRoute;
    params?: RouteParams;
  };
}

export interface TutorialSequence {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  category?: string;
  estimatedMinutes?: number;
  steps: TutorialStep[];
}
