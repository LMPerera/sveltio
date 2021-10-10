module.exports = {
  "stories": [
    "../src/lib/**/*.stories.mdx",
    "../src/lib/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  // "svelteOptions": {
  //   "preprocess": require("../svelte.config.js").preprocess
  // }
}