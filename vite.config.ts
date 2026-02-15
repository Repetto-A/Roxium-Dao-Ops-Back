import { getConnectBaseViteConfig } from "@powerhousedao/builder-tools";
import { defineConfig, mergeConfig, type UserConfig } from "vite";

export default defineConfig(({ mode }) => {
  const baseConnectViteConfig = getConnectBaseViteConfig({
    mode,
    dirname: import.meta.dirname,
  });

  const additionalViteConfig: UserConfig = {
    server: {
      allowedHosts: [
        'roxium-dao-ops-back-production.up.railway.app',
        'localhost',
        '.railway.app', // Allow all Railway domains
      ],
    },
  };

  const config = mergeConfig(baseConnectViteConfig, additionalViteConfig);

  return config;
});
