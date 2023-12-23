export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google', 'plugin:vue/vue3-essential'],
  overrides: [
    {
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    semi: ['error', 'always'],
  },
}
