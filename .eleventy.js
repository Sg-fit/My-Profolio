module.exports = function (eleventyConfig) {
  // Copy the css/ folder straight through to the build output
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("favicon.svg");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    // Set by the GitHub Actions workflow. Leave "/" for local dev.
    pathPrefix: process.env.PATH_PREFIX || "/"
  };
};
