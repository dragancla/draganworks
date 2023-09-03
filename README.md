# DraganWorks by Anton Dragan

![DraganWorks](src/images/resume-screenshot.jpg?raw=true 'DraganWorks')

<div align="left">
<img alt="GitHub package.json semver" src="https://img.shields.io/badge/dynamic/json.svg?query=$.version&uri=https://raw.githubusercontent.com/dragancla/draganworks/main/package.json&label=version&style=flat&color=purple">
<img alt="GitHub Actions build" src="https://github.com/dragancla/draganworks/actions/workflows/build-and-deploy.yaml/badge.svg">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dragancla/draganworks?style=flat&color=blue">
<img alt="GitHub Node version used" src="https://img.shields.io/badge/node-18.16.0-darkgreen">
<img alt="GitHub package.json React version" src="https://img.shields.io/github/package-json/dependency-version/dragancla/draganworks/react?style=flat&color=darkblue">
<img alt="GitHub package.json Next.js version" src="https://img.shields.io/github/package-json/dependency-version/dragancla/draganworks/next?style=flat&color=black">
</div>

## Description

This is my React-based personal resume website, built with TypeScript and the Next.js framework, styled with Tailwind CSS, and populated with data from a single file.

## Instructions

### 1. Make sure you have what you need

To build this website, you will need to have the latest stable versions of Node and Yarn downloaded and installed on your machine. If you don't already have them, you can get Node [here,](https://nodejs.org/en/download/) and Yarn [here.](https://yarnpkg.com/getting-started/install)

### 2. Clone or fork the repo (and star if you like!)

Next, clone or fork the repo and download it to your development machine using the green `Code` button at the top of the repo page.

### 3. Install dependencies and run

Once you have your own copy of this repo forked or cloned, open the folder in your favorite terminal and run `yarn install` to install dependencies. Following this, run `yarn dev` to run the project. In your terminal you should be given the url of the running instance (usually http://localhost:3000 unless you have something else running).

### 4. Customize the data

All of the data for the site is driven via a file at `/src/data/data.tsx`. This is where you'll find the existing content, and updating the values here will be reflected on the site. If you have the site running as described above, you should see these changes reflected on save. The data types for all of these items are given in the same folder in the `dataDef.ts` file. Example images can be found at `src/images/` and are imported in the data file.

### 5. Next.js Config

First, you need to configure Next.js to support static exports. To do this, specifiy the output type as `export`, set the base path, and disable automatic image optimization [since dynamic features don't work](https://nextjs.org/blog/next-12-3#disable-image-optimization-stable) with static exports.

1. Add the following to the `next.config.js` file:

```js
// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: 'export',

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

2. Place a `.nojekyll` file in the `/public` directory to disable Github Pages from trying to create a [Jekyll](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/) website.

```treeview
.
├── src/
├── public/
│   └── .nojekyll
├── next.config.js
```

### 5. Set up GitHub Actions

### 6. Configure Github Repository

Next you need to configure Github for automated deployments via GitHub Actions.

The following settings use the new [Github Action Workflow](https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/) to deploy.

1. Go to your repository's **Settings** tab
2. Click "Pages" in the sidebar
3. Under "Build and Deployment", select "Github Actions" as the source:

![screenshot of github pages settings](https://github.com/gregrickaby/nextjs-github-pages/assets/200280/a5f757c3-f515-4ca2-aadf-d2979c2c3bf5)

### 7. Setup GitHub Actions

This is where the magic happens! This [workflow file](https://github.com/gregrickaby/nextjs-github-pages/blob/main/.github/workflows/deploy.yml) will automatically build and deploy the app when you push to the `main` branch.

1. Create a `build-and-deploy.yaml` file in the `/.github/workflows` directory

```treeview
.
├── .github/
│   └── workflows
│       └── build-and-deploy.yaml
├── src/
├── next.config.js
```

2. Use the contents of <https://github.com/gregrickaby/nextjs-github-pages/blob/main/.github/workflows/deploy.yml> as a baseline and set up your own version of the pipeline. Or just use the entire file.

### 8. Push to Github

Now that everything is configured, you can push your code to Github. This will trigger the Github Action workflow and deploy your app to Github Pages.

You should see the website deployed to GitHub Pages in a few minutes. 🚀
