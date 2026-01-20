// vite.config.ts
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

// Importe o array de projetos do seu arquivo workspace
import workspace from './vitest.workspace'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    // Configurações globais se necessário, como coverage
    globals: true,
    projects: workspace,
  },
})
