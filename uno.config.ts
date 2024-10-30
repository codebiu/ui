// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    // 直接在标签写
    presetAttributify({
      /* preset options */
    }),
    // taiwindcss等规则
    presetUno()
    // ...custom presets
  ],
  rules: [
    // 抽屉
    ['m-1', { margin: '0.3rem' }],
    ['grid-center', { 'grid-template-rows': 'auto minmax(0, 1fr) auto' }],
    ['text-align-last-justify', { 'text-align-last': 'justify' }]
  ],
  shortcuts: [
    //Lime green teal emerald
    {
      // CSS 后者具有更高的优先级
      /**
       * 基础 字体 背景
       */
      // 字体
      'font-default': 'font-normal text-left',
      // 字体
      'font-deep-0': 'text-lg font-medium text-left',
      'font-deep-1': 'text-base font-default',
      'font-deep-2': 'text-sm font-default',
      'font-deep-3': 'text-xs font-default',
      // 文字颜色
      // 背景文字颜色
      'bg-danger-0': 'bg-gray-50 dark:bg-red-950 text-red-950 dark:text-gray-50',
      'bg-danger-1': 'bg-gray-100 dark:bg-red-900 text-red-900 dark:text-gray-100',
      'bg-danger-2': 'bg-gray-200 dark:bg-red-800 text-red-800 dark:text-gray-200',
      'bg-danger-3': 'bg-gray-300 dark:bg-red-700 text-red-700 dark:text-gray-300',
      'bg-danger-4': 'bg-gray-400 dark:bg-red-600 text-red-600 dark:text-gray-400',
      // 半透明
      'bg-deep-0-op35': 'bg-gray-50/35 dark:bg-gray-950/35 text-deep-0',
      'bg-deep-1-op35': 'bg-gray-100/35 dark:bg-gray-900/35 text-deep-1',
      'bg-deep-2-op35': 'bg-gray-200/35 dark:bg-gray-800/35 text-deep-2',
      // 前景色 标识线等
      'fbg-deep-0': 'bg-gray-50 dark:bg-gray-950',
      'fbg-deep-1': 'bg-gray-100 dark:bg-gray-900',
      'fbg-deep-2': 'bg-gray-200 dark:bg-gray-800',
      'fbg-deep-3': 'bg-gray-300 dark:bg-gray-700',
      'fbg-deep-4': 'bg-gray-400 dark:bg-gray-600',
      // 边框
      // 鼠标
      'pointer-default': 'select-none  cursor-pointer',
      /**
       * 按钮
       */
      'btn-default': 'px-4 py-1 rounded  bg-blue-500 text-white hover:bg-blue-700 pointer-default',
      'btn-danger-0': 'px-4 py-1 rounded bg-danger-0 hover:bg-danger-2 pointer-default',
      'btn-0': 'px-4 py-1 rounded pointer-default bg-deep-0 hover:bg-deep-2',
      'btn-1': 'px-4 py-1 rounded pointer-default bg-deep-1 hover:bg-deep-3',
      'btn-2': 'px-4 py-1 rounded pointer-default bg-deep-2 hover:bg-deep-4',
      /**
       * 布局
       */
      'full-fex': 'absolute w-full h-full flex',
      // 居中
      'position-center': 'absolute top-0 left-0 right-0 bottom-0  m-auto',
      'flex-center': 'flex items-center justify-center',
      // 水平居中分开两边
      'mini-text-center-between': 'flex items-center justify-between',
      //flex 内容居中  flex items-center justify-center
      // 主页三段布局
      'grid-head-center-foot': 'min-h-full grid grid-center'
    },
    // 背景文字颜色
    [
      /^bg-deep-(\d+)$/,
      ([, d]) =>
        `bg-gray-${+d == 0 ? 50 : +d * 100} dark:bg-gray-${+d == 0 ? 950 : 1000 - +d * 100} text-deep-${d}`
    ],
    // 文字颜色  'text-deep-0': 'text-gray-950 dark:text-gray-50', 'text-deep-1': 'text-gray-900 dark:text-gray-100',
    [
      /^text-deep-(\d+)$/,
      ([, d]) =>
        `text-gray-${+d == 0 ? 950 : 1000 - +d * 100} dark:text-gray-${+d == 0 ? 50 : +d * 100}`
    ],
    // btn
    [
      /^btn-deep-(\d+)$/,
      ([, d]) => `px-4 py-1 rounded pointer-default bg-deep-${d} hover:bg-deep-${+d + 1} `
    ]
  ],
  theme: {
    colors: {
      // transparent: 'transparent',
      // black: '#000',
      // white: '#fff',
      // gray: {
      //   100: '#000',
      // }
    }
  }
})
