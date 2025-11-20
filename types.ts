
export interface ChartData {
  name: string;
  value: number;
  fill?: string;
  uv?: number; // For secondary line charts
  category?: string;
}

export interface BomItem {
  category: string;
  name: string;
  cost: number;
  subtotal: number;
  quantity: number;
}

export interface CompetitorData {
  feature: string;
  traditional: string;
  smartGen1: string;
  smartLearn: string;
  oursScore?: number; // 1-5 stars
}

export interface RiskItem {
  name: string;
  prob: number; // 1-3 (Low, Med, High)
  impact: number; // 1-3 (Low, Med, High)
  category: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  duration: string;
  items: string[];
}
