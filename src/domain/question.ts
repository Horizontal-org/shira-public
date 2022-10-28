import { App } from "./app";
import { Explanation } from "./explanation";

export interface Question {
  id: string;
  isPhising: boolean;
  content: string; 
  apps: App[];
  explanations: Explanation[]
}