import antfu from '@antfu/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default antfu(
  {
    typescript: true,
  },
  {
    rules: {
      'default-case': 'error',
      'no-unsafe-finally': 'error',
      'no-trailing-spaces': 'warn',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-types': 'off',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-console': 'off',
      'style/brace-style': ['warn', '1tbs'],
      // 引用时必须按照顺序
      'import/order': [
        'warn',
        {
          groups: [
            'type',
            'builtin',
            'object',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '~/**',
              group: 'external',
              position: 'after',
            },
          ],
        },
      ],
    },
  },
  [
    oxlint.configs['flat/recommended'],
  ],
)
