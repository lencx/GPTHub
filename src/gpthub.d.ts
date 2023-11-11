declare namespace GPTHub {
  export interface GPTInfo {
    id: string;
    name: string;
    logo?: string | null;
    author?: string | null;
    description?: string | null;
    updated_at?: string | null;
    tags?: string[] | null;
    prompt_starters?: string[] | null;
    welcome_message?: string | null;
    // 1: DALL•E
    // 2: Browsing
    // 3: Data Analysis
    tools?: (number | null)[] | null;
  }

  export interface SVGWrapProps extends React.SVGProps<SVGSVGElement> {
    children?: React.ReactNode;
    size?: number | string;
    onClick?: (e: React.MouseEvent) => void;
  }
}