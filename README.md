# FoodieBits

FoodieBits is a website that acts as a one-stop platform for all food lovers. It is packed with various features, such
as a learning platform for cuisines, a recipe search engine, and a restaurant finder.

This website is built by: Kairos Tay, Hu Bowen, Wayne Chia and Ruby Lee as part of our CSS final project.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Documentation](#documentation)
3. [Website Snapshots](#website-snapshots)

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
3. Add API keys
    - Create a `.env.local` file in the root directory of the project
    - Add the following environment variables to the `.env.local` file:
      ```env
      GOOGLE_MAPS_API_KEY=<GOOGLE_MAPS_API_KEY>
      ```
    - Replace `<GOOGLE_MAPS_API_KEY>` with your Google Maps API key
4. Run the development server
   ```bash
   npm run dev
   ```

## Documentation

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

## Website Snapshots
### Landing Page
![Landing Page](website-snapshots/landing-page(light).png)
![Landing Page](website-snapshots/landing-page(dark).png)

### Cuisines
![Cuisines](website-snapshots/cuisines(light).png)
![Cuisines](website-snapshots/cuisines(dark).png)
![Cuisines](website-snapshots/cuisines(asean).png)

### Recipes
![Recipes](website-snapshots/recipes(light).png)
![Recipes](website-snapshots/recipes(dark).png)
![Recipes](website-snapshots/recipes(example).png)

### Restaurants
![Restaurants](website-snapshots/restaurants(light).png)
![Restaurants](website-snapshots/restaurants(dark).png)
![Restaurants](website-snapshots/restaurants(example).png)
Note: The background is a little off due to the scrolling screenshot tool used; only the modal scrolls 😊

### Contact
![Contact](website-snapshots/contact(light).png)
![Contact](website-snapshots/contact(dark).png)