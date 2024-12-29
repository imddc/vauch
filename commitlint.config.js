export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // ✨ Features
        'fix', // 🐛 Bug Fixes
        'docs', // 📝 Documentation
        'style', // 💄 Styles
        'refactor', // ♻️ Refactors
        'perf', // ⚡️ Performance
        'test', // ✅ Tests
        'build', // 📦 Build System
        'ci', // 👷 Continuous Integration
        'chore', // 🔧 Chores
        'revert', // ⏪ Reverts
      ],
    ],
    'type-empty': [2, 'never'], // type不能为空
    'type-case': [0, 'always', 'lower-case'], // type不限制大小写
    'subject-empty': [2, 'never'], // subject（简短得描述）不能为空
    'subject-max-length': [1, 'always', 50], // subject最大长度，超出只会警告，不阻止提交
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
  },
}
