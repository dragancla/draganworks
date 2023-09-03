# DraganWorks by Anton Dragan

![DraganWorks](src/images/resume-screenshot.jpg?raw=true 'DraganWorks')

<div align="left">
<img alt="GitHub package.json semver" src="https://img.shields.io/badge/version-2.0.0-purple">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dragancla/draganworks?style=flat&color=yellow">
<img alt="GitHub Node version" src="https://img.shields.io/badge/node-18.16.0-green">
<img alt="GitHub package.json React version" src="https://img.shields.io/github/package-json/dependency-version/dragancla/draganworks/react?style=flat">
<img alt="GitHub package.json Next.js version" src="https://img.shields.io/github/package-json/dependency-version/dragancla/draganworks/next?style=flat">
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

### 5. Build and deploy
TODO: write information about how to set up next.config.js for static webpage deployment and CSS fixes, how the GH Actions workflow works, the .nojekyll workarounds and all the other gachas.