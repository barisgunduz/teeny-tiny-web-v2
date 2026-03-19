export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  slug: string;
  icon: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  color: string;
}

export interface Cheatsheet {
  id: string;
  title: string;
  slug: string;
  category: string;
  sections: CheatsheetSection[];
}

export interface CheatsheetSection {
  title: string;
  items: CheatsheetItem[];
}

export interface CheatsheetItem {
  label: string;
  value: string;
  description?: string;
}

export interface Roadmap {
  id: string;
  title: string;
  slug: string;
  description: string;
  steps: RoadmapStep[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  resources: string[];
  status: "beginner" | "intermediate" | "advanced";
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: string;
  prompt: string;
  tags: string[];
}

export interface DummyDataSet {
  id: string;
  name: string;
  slug: string;
  description: string;
  generate: (count: number) => unknown[];
}
