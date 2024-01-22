export interface EnvVariables {
  PORT: number;
  MODE: "production" | "development";
  ANALYZER?: string;
  PLATFORM?: "mobile" | "desktop";
}
export type IEnvVariablesKeys = Record<keyof EnvVariables, any>;
