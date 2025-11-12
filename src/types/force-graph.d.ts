export type NodeDatum = {
  id: string;
  href?: string;
  label?: string;
  size?: number;
  group?: string | number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
};

export type LinkDatum = SimulationLinkDatum<NodeDatum> & {
  source: string;
  target: string;
};

export type GraphData = {
  nodes: NodeDatum[];
  links: LinkDatum[];
};

export type GraphSize = { width: number; height: number };
