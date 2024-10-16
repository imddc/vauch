import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'
import oxlint from 'eslint-plugin-oxlint'

export default antfu(
  {
    vue: true,
    typescript: true,
    unocss: false,
  },
  {
    ignores: [
      'node_modules/',
      '**/node_modules/**/',
      'pnpm-lock.yaml',
      '**/pnpm-lock.yaml/**',
    ],
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-async-in-computed-properties': 'error',
      'vue/no-parsing-error': 'error',
      'vue/no-export-in-script-setup': 'warn',
      'vue/no-expose-after-await': 'warn',
      'vue/no-lifecycle-after-await': 'warn',
      'vue/no-watch-after-await': 'warn',
      'vue/no-mutating-props': 'warn',
      'vue/no-multiple-template-root': 'warn',
      'vue/no-ref-as-operand': 'warn',
      'vue/no-reserved-component-names': 'warn',
      'vue/no-reserved-keys': 'warn',
      'vue/no-reserved-props': 'warn',
      'vue/no-shared-component-data': 'warn',
      'vue/no-side-effects-in-computed-properties': 'warn',
      'vue/no-template-key': 'warn',
      'vue/no-unused-components': 'warn',
      'vue/no-unused-vars': 'warn',
      'vue/no-use-computed-property-like-method': 'warn',
      'vue/no-useless-template-attributes': 'warn',
      'vue/prefer-import-from-vue': 'warn',
      'vue/require-component-is': 'warn',
      'vue/require-prop-type-constructor': 'warn',
      'vue/require-render-return': 'warn',
      'vue/require-slots-as-functions': 'warn',
      'vue/require-toggle-inside-transition': 'warn',
      'vue/require-valid-default-prop': 'warn',
      'vue/return-in-computed-property': 'warn',
      'vue/return-in-emits-validator': 'warn',
      'vue/use-v-on-exact': 'warn',
      'vue/valid-attribute-name': 'warn',
      'vue/valid-define-emits': 'warn',
      'vue/valid-define-props': 'warn',
      'vue/valid-next-tick': 'warn',
      'vue/valid-template-root': 'warn',
      'vue/valid-v-bind': 'warn',
      'vue/valid-v-html': 'warn',
      'vue/valid-v-cloak': 'warn',
      'vue/valid-v-if': 'warn',
      'vue/valid-v-else-if': 'warn',
      'vue/valid-v-else': 'warn',
      'vue/valid-v-for': 'warn',
      'vue/require-v-for-key': 'warn',
      'vue/no-use-v-if-with-v-for': 'warn',
      'vue/no-v-for-template-key-on-child': 'warn',
      'vue/no-v-text-v-html-on-component': 'warn',
      'vue/valid-v-is': 'warn',
      'vue/valid-v-memo': 'warn',
      'vue/valid-v-model': 'warn',
      'vue/valid-v-on': 'warn',
      'vue/valid-v-once': 'warn',
      'vue/valid-v-pre': 'warn',
      'vue/valid-v-show': 'warn',
      'vue/valid-v-slot': 'warn',
      'vue/valid-v-text': 'warn',

      'vue/attribute-hyphenation': 'warn',
      'vue/component-definition-name-casing': ['error', 'kebab-case'],
      'vue/first-attribute-linebreak': [
        'error',
        { singleline: 'ignore', multiline: 'below' },
      ],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'always',
          selfClosingTag: {
            singleline: 'never',
            multiline: 'always',
          },
        },
      ],
      'vue/html-closing-bracket-spacing': [
        'error',
        {
          startTag: 'never',
          endTag: 'never',
          selfClosingTag: 'always',
        },
      ],
      'vue/html-end-tags': 'warn',
      'vue/multiline-html-element-content-newline': [
        'error',
        {
          ignoreWhenEmpty: true,
          ignores: ['pre', 'textarea'],
          allowEmptyLines: false,
        },
      ],
      'vue/mustache-interpolation-spacing': 'warn',
      'vue/no-multi-spaces': ['error', { ignoreProperties: false }],
      'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
      'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
      'vue/one-component-per-file': 'error',
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/require-default-prop': 'error',
      'vue/require-explicit-emits': ['error', { allowProps: false }],
      'vue/require-prop-types': 'error',
      'vue/v-bind-style': ['error', 'shorthand'],
      'vue/v-on-event-hyphenation': ['error', 'always'],
      'vue/v-on-style': ['error', 'shorthand'],
      'vue/v-slot-style': [
        'error',
        {
          atComponent: 'shorthand',
          default: 'shorthand',
          named: 'shorthand',
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 3,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      'vue/attributes-order': [
        'warn',
        {
          order: [
            'DEFINITION',
            'CONDITIONALS',
            'LIST_RENDERING',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: false,
        },
      ],
      'vue/no-lone-template': ['error'],
      'vue/order-in-components': [
        'error',
        {
          order: [
            'el',
            'name',
            'key',
            'parent',
            'functional',
            ['delimiters', 'comments'],
            ['components', 'directives', 'filters'],
            'extends',
            'mixins',
            ['provide', 'inject'],
            'ROUTER_GUARDS',
            'layout',
            'middleware',
            'validate',
            'scrollToTop',
            'transition',
            'loading',
            'inheritAttrs',
            'model',
            ['props', 'propsData'],
            'emits',
            'setup',
            'asyncData',
            'data',
            'fetch',
            'head',
            'computed',
            'watch',
            'watchQuery',
            'LIFECYCLE_HOOKS',
            'methods',
            ['template', 'render'],
            'renderError',
          ],
        },
      ],
      'vue/this-in-template': ['error', 'never'],

      'vue/block-lang': ['error', { script: { lang: 'ts' } }],
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/block-tag-newline': [
        'error',
        { singleline: 'always', multiline: 'always', maxEmptyLines: 0 },
      ],
      'vue/component-api-style': ['error', ['script-setup', 'composition']],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/define-macros-order': [
        'error',
        {
          order: [
            'defineOptions',
            'defineModel',
            'defineProps',
            'defineEmits',
            'defineSlots',
          ],
          defineExposeLast: false,
        },
      ],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/enforce-style-attribute': [
        'error',
        { allow: ['scoped', 'module', 'plain'] },
      ],
      'vue/html-button-has-type': [
        'error',
        { button: true, submit: true, reset: true },
      ],
      'vue/html-comment-content-spacing': ['error', 'always'],
      'vue/html-comment-indent': ['error', 2],
      'vue/match-component-file-name': [
        'error',
        { extensions: ['jsx,tsx,vue'], shouldMatchCase: false },
      ],
      'vue/match-component-import-name': 'error',
      'vue/no-duplicate-attr-inheritance': 'error',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-ref-object-reactivity-loss': 'error',
      'vue/no-root-v-if': 'error',
      'vue/no-setup-props-reactivity-loss': 'error',
      'vue/no-undef-properties': ['error', {}],
      'vue/no-unused-refs': 'error',
      'vue/no-use-v-else-with-v-for': 'error',
      'vue/no-useless-mustaches': [
        'error',
        { ignoreIncludesComment: true, ignoreStringEscape: true },
      ],
      'vue/no-useless-v-bind': 'error',
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/prefer-define-options': 'error',
      'vue/prefer-prop-type-boolean-first': 'error',
      'vue/prefer-separate-static-class': 'error',
      'vue/prefer-true-attribute-shorthand': ['error', 'always'],
      'vue/require-explicit-slots': 'error',
      'vue/require-macro-variable-name': [
        'error',
        {
          defineProps: 'props',
          defineEmits: 'emit',
          defineSlots: 'slots',
          useSlots: 'slots',
          useAttrs: 'attrs',
        },
      ],
    },
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
      'no-html-link-for-pages': 'off',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-console': 'off',
      'sort-imports': ['error', {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      }],
    },
  },
  [...tailwindcss.configs['flat/recommended']],
  { ...oxlint.configs['flat/recommended'] },
)
