import nuxtConfig from './nuxt.config'
export default {
  theme: {},
  plugins: [],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
    `!./**/*.{spec,test}.*` // mind the ! at the start
  ],
  purge: {
    content (defaultContents) {
      return defaultContents
        .map(path => join(nuxtConfig.srcDir, path))
        .map(file => file.replace('.js', '.ts'))
    }
  }
}
