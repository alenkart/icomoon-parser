// IconMoon Types
export type Selection = {
  name: string;
};

export type Icon = {
  paths: string[];
};

export type IconMoon = {
  selection: Selection[];
  icons: Icon[];
};

// Parser Types
export type Icons = {
  name: string;
  paths: string[];
}[];
