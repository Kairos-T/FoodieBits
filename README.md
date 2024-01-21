# FoodieBits

FoodieBits is a website that acts as a one-stop platform for all food lovers. It is packed with various features, such
as a learning platform for cuisines, a recipe search engine, and a restaurant finder.

This website is built by: Kairos Tay, Hu Bowen, Wayne Chia and Ruby Lee as part of our CSS final project.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Documentation](#documentation)

## Getting Started

1. Clone this repository
   ```bash
   https://github.com/Kairos-T/FoodieBits
   cd FoodieBits
   ```
2. Install dependencies
   ```bash
   npm install --legacy-peer-deps
   ```
3. Run the development server
   ```bash
   npm run dev
   ```

## Documentation

### Libraries Used & Reasoning

**UI:**

- [Chakra UI](https://chakra-ui.com/docs/getting-started)
    - Chakra UI is a component library that provides a set of accessible, reusable, and composable React components that
      make it easy to build websites and apps. Due to the ease of use and the features it provides, we decided to use it
      to streamline the development process.
- [Framer Motion](https://www.framer.com/motion/)
    - Framer Motion is a production-ready motion library for React. It is used to create animations for the website. We
      decided to use it to implement smooth transitions between pages and components for a better user experience.
      Additionally, it is easy to use and has a wide range of features, creating various effects.
- [React Icons](https://react-icons.github.io/react-icons/)
    - React Icons is a library that provides popular icons for use in React projects. We decided to use it to add icons
      to our website as it is simple to use and has a wide range of icons in addition to the ones provided by Chakra UI.
- [ityped](https://ityped.surge.sh/)
    - ityped is a library that allows for typing animations. We decided to use it to add a typing animation to the
      landing page to make it more interesting, giving the users ample information without overwhelming them with too
      much text at once.

**Utilities:**

Recipe Page:

- [dayjs](https://day.js.org/)
    - dayjs is a library that allows for manipulation of dates and times. It was used to format the published date of
      the recipes in the recipe search page. We decided to use it as opposed to the native JavaScript Date object as
      it can be more easily manipulated and formatted.
    - [fuse.js](https://fusejs.io/)
        - fuse.js is a library that allows for fuzzy-searching, which is a type of search that will find results even
          when there are typos or spelling mistakes. It was used to implement the search function in the recipe search
          page which improves the user experience by giving them more relevant results.
    - [remark](https://remark.js.org/)
        - remark is a library that allows for easy manipulation of markdown, aiding in the creation of the various
          recipe pages. We used it for the efficient conversion of the recipes in MDX format to be displayed on the
          website as usual pages.
    - [gray-matter](https://www.npmjs.com/package/gray-matter)
        - gray-matter is a library that allows for manipulation of front matter, which is the metadata at the top of a
          markdown file. It was used to extract the metadata from the recipes in MDX format to be used for utilities
          like sorting and tagging.

### Project Structure

- [Chakra UI](https://chakra-ui.com/docs/getting-started)
- `public/` contains all the static files used in the project (i.e. images, fonts, etc.)
    - `public/favicon` contains the favicon used in the project (i.e. the icon that appears on the browser tab)
    - `public/images/` contains all the images used in the project (create a folder for each page to organise them)
- `src/components/` contains all the components (i.e. reusable UI elements) used in the project
- `src/data/` contains all the data used in the project
    - `src/data/constants/index.jsx` contains all the constants (information usually that will be listed down) used in
      the project
    - `src/data/recipes/` contains all the recipes used for recipes SSG
- `src/layouts/` contains all the layouts used in the project (i.e. reusable page layouts)
- `src/lib/` contains all the utility functions used in the project (SSG function for recipes)
- `src/pages/` contains all the pages used in the project
- `src/styles/` contains all the styles used in the project
- `src/theme/` contains all the themes used in the project (dark/light mode and other global themes)
- `config.js` contains main configuration for the project (i.e. site title, description, etc.)
- `package.json` contains all the dependencies used in the project, should only be updated when adding new
  dependencies (use chore(deps) for commit message)