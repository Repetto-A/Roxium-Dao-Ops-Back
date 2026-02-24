import { getConnectBaseViteConfig } from "@powerhousedao/builder-tools";
import { defineConfig, mergeConfig, type UserConfig } from "vite";

export default defineConfig(({ mode }) => {
  const baseConnectViteConfig = getConnectBaseViteConfig({
    mode,
    dirname: import.meta.dirname,
  });

  const additionalViteConfig: UserConfig = {
    server: {
      host: true,
      allowedHosts: [
        'back-staging-8bb8.up.railway.app',
        'roxium-dao-ops-back-production.up.railway.app',
        'localhost',
        '.railway.app', // Allow all Railway domains
      ],
    },
    preview: {
      host: true,
      allowedHosts: [
        'back-staging-8bb8.up.railway.app',
        'roxium-dao-ops-back-production.up.railway.app',
        'localhost',
        '.railway.app', // Allow all Railway domains
      ],
    },
  };

  const config = mergeConfig(baseConnectViteConfig, additionalViteConfig);

  return config;
});
