// vitest.workspace.ts

export default [
  {
    // Adicione 'as const' aqui para travar o tipo como literal true
    extends: true as const,
    test: {
      name: 'unit',
      include: ['src/services/**/*.{spec,test}.ts'],
      environment: 'node',
    },
  },
  {
    extends: true as const, // Aqui também
    test: {
      name: 'e2e',
      include: ['src/http/controllers/**/*.{spec,test}.ts'],
      environment:
        './prisma/vitest-environment-prisma/prisma-test-environment.ts',
    },
  },
]
