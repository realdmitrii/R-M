export interface ISelectorOptions {
  value: string;
  label: string;
  status?: string;
}

export interface ISelectorProps {
  placeholder: string;
  isSmallSelector?: boolean;
  options: ISelectorOptions[];
  value?: string;
}
