declare namespace GPTHub {
  export interface GPTInfo {
    id: string;
    name: string;
    author?: string;
    logo: string;
    description?: string;
    // 1: DALL•E
    // 2: Browsing
    // 3: Data Analysis
    tools?: number[];
  }

  export interface SVGWrapProps extends React.SVGProps<SVGSVGElement> {
    children?: React.ReactNode;
    size?: number | string;
    onClick?: (e: React.MouseEvent) => void;
  }
}