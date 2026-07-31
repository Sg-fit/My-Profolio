module.exports = function (eleventyConfig) {
  // Copy the css/ folder straight through to the build output
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("audio");
  eleventyConfig.addPassthroughCopy("scores");
  eleventyConfig.addPassthroughCopy("js");

  // Don't turn the README into a page
  eleventyConfig.ignores.add("README.md");

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
