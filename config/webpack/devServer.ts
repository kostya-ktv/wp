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
        /* react router dom required
          but works only with DevServer
          for static data need to proxy to index.html
        */
        historyApiFallback: true,
        // Enable default Hot Module Replacement
        hot: true,
      }
    : undefined;
}
