// IconMoon Types
type Selection = {
  name: string;
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
