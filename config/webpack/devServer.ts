import type { Configuration as DevServerConfig } from "webpack-dev-server";
import { BuildOptions } from "./types";

export default function buildDevServer({
  isDev,
  port,
}: BuildOptions): DevServerConfig {
  return isDev
    ? {
        port: port ?? 3000,
        open: true,
      }
    : undefined;
}
