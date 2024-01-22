export interface BuildPath {
  entry: string;
  src: string;
  html: string;
  output: string;
}
export type BuildMode = "production" | "development";

export interface BuildOptions {
  port: number;
  paths: BuildPath;
  mode: BuildMode;
  isProd: boolean;
  isDev: boolean;
  withAnalyzer?: boolean;
}
