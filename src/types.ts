// IconMoon Types
type Selection = {
  name?: string;
  order: number;
};

type Icon = {
  paths: string[];
};

export type IconMoon = {
  selection: Selection[];
  icons: Icon[];
};

// Parser Types
export type IconMap = Record<string, Icon>;
