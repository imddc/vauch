import antfu from '@antfu/eslint-config'
import router from '@tanstack/eslint-plugin-router'
import oxlint from 'eslint-plugin-oxlint'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    react: true,
    typescript: true,
    jsx: true,
  },
  {
    files: ['**/*.tsx?', '**/*.jsx?'],
    ignores: [
      'node_modules/',
      '**/node_modules/**/',
      'pnpm-lock.yaml',
      '**/pnpm-lock.yaml/**',
    ],
  },
  {
    rules: {
      // forwordRef必须传入ref
      'react/ensure-forward-ref-using-ref': 'error',
      // 禁止使用this.state  替换为回调函数的形式
      'react/no-access-state-in-setstate': 'error',
      'react/no-array-index-key': 'warn',
      // 禁止使用children
      'react/no-children-count': 'error',
      'react/no-children-map': 'error',
      'react/no-children-only': 'error',
      'react/no-children-prop': 'error',
      'react/no-children-for-each': 'error',
      'react/no-children-to-array': 'error',
      // 类组件
      // 禁止使用类组件
      'react/no-class-component': 'error',
      // 没有未使用的类组件成员
      'react/no-unused-class-component-members': 'error',
      // 没有注释节点
      'react/no-comment-textnodes': 'error',
      // 没有旧版生命周期
      'react/no-component-will-mount': 'error',
      'react/no-component-will-update': 'error',
      'react/no-component-will-receive-props': 'error',
      'react/no-redundant-should-component-update': 'error',
      'react/no-unsafe-component-will-mount': 'error',
      'react/no-unsafe-component-will-update': 'error',
      'react/no-unsafe-component-will-receive-props': 'error',
      'react/no-set-state-in-component-did-mount': 'error',
      'react/no-set-state-in-component-did-update': 'error',
      'react/no-set-state-in-component-will-update': 'error',
      // 没有createRef
      'react/no-create-ref': 'error',
      // 没有defaultProps
      'react/no-default-props': 'error',
      // 没有突变状态
      'react/no-direct-mutation-state': 'error',
      // 没有未使用的state
      'react/no-unused-state': 'error',
      // 没有重复key
      'react/no-duplicate-key': 'error',
      // 条件渲染使用布尔值或三元表达式
      // 'react/no-leaked-conditional-rendering': 'error',
      // 组件名必须
      'react/no-missing-component-display-name': 'error',
      // key 必须
      'react/no-missing-key': 'error',
      // 没有嵌套组件定义
      'react/no-nested-components': 'error',
      // 组件props类型由ts定义
      'react/no-prop-types': 'error',
      // context值必须使用稳定值 即预先定义的值
      'react/no-unstable-context-value': 'error',
      'react/no-unstable-default-props': 'error',
      // 没有无用的fragment
      'react/no-useless-fragment': 'error',
      // 首选解构附值
      'react/prefer-destructuring-assignment': 'error',
      // 组件的props必须是只读的
      // 'react/prefer-read-only-props': 'error',
      // 使用速记写法
      'react/prefer-shorthand-boolean': 'error',
      'react/prefer-shorthand-fragment': 'error',

      // 禁止给void元素children
      'react-dom/no-children-in-void-dom-elements': 'error',

      // 禁止使用dangerouslySetInnerHTML 方式xss
      'react-dom/no-dangerously-set-innerhtml': 'error',
      'react-dom/no-dangerously-set-innerhtml-with-children': 'error',
      // button 必须给type
      'react-dom/no-missing-button-type': 'error',
      // iframe sandbox必须是true
      'react-dom/no-missing-iframe-sandbox': 'error',
      'react-dom/no-unsafe-iframe-sandbox': 'error',
      // 没有命名空间
      'react-dom/no-namespace': 'error',
      // 禁止使用ReactDOM.render 的返回值
      'react-dom/no-render-return-value': 'error',
      'react-dom/no-script-url': 'error',
      // 防止使用 target="_blank" 不带 rel="noreferrer noopener" .
      'react-dom/no-unsafe-target-blank': 'error',
      // 确保自定义hooks使用其他hooks
      'react-hooks-extra/ensure-custom-hooks-using-other-hooks': 'error',
      // 确保usecallback使用非空deps
      'react-hooks-extra/ensure-use-callback-has-non-empty-deps': 'error',
      'react-hooks-extra/ensure-use-memo-has-non-empty-deps': 'error',
      // 不在useEffect中使用setstate
      'react-hooks-extra/no-direct-set-state-in-use-effect': 'error',
      'react-hooks-extra/no-direct-set-state-in-use-layout-effect': 'error',
      // useState初始化时可能使用函数，react建议传入getter而不是直接调用函数，这样会确保只在初始化的时候只调用一次
      'react-hooks-extra/prefer-use-state-lazy-initialization': 'error',

      'react-naming-convention/component-name': [
        'warn',
        { rule: 'PascalCase', excepts: ['MyComponent'] },
      ],

      // jsx
      'style/jsx-sort-props': [
        'error',
        {
          callbacksLast: true, // 将回调属性放在最后
          shorthandFirst: true, // 将简写属性放在前面
          noSortAlphabetically: false, // 按字母顺序排序
          reservedFirst: true, // 将保留的属性放在前面
          ignoreCase: true, // 忽略大小写
          locale: 'auto', // 自动检测语言环境
        },
      ],

      // ts
      '@typescript-eslint/array-type': 'error',

      // simple
      'default-case': 'error',
      'no-unsafe-finally': 'error',
      'no-trailing-spaces': 'warn',
      // 关闭eslint-comments/no-unlimited-disable 不需要限制
      'eslint-comments/no-unlimited-disable': 'off',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-types': 'off',
      'no-html-link-for-pages': 'off',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-console': 'off',
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
    ...router.configs['flat/recommended'],
    ...tailwindcss.configs['flat/recommended'],
    oxlint.configs['flat/recommended']
  ]
)
