import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    // A common use case is scanning files from the root directory
    include: ['src/**/*.{vue,html,jsx,tx,tsx}'],
    // if you are excluding files, make sure you always include node_modules and .git
    exclude: ['node_modules', '.git', 'dist']
  },
  theme: {
    extend: {
      colors: {
        primary: '#1890ff'
      }
    }
  }
})
