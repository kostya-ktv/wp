import { EnvVariables } from "config/env/types";

export interface BuildPath {
  entry: string;
  src: string;
  html: string;
  output: string;
  favicon: string;
  locales: string;
}

export interface BuildOptions {
  port: number;
  paths: BuildPath;
  mode: EnvVariables["MODE"];
  platform: EnvVariables["PLATFORM"];
  isProd: boolean;
  isDev: boolean;
  withAnalyzer?: boolean;
}
