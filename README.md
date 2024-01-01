# CSS Assignment

## Table of Contents
1. [Getting Started](#getting-started)
2. [Usage](#usage)
    1. [Development](#development)
    2. [Committing](#committing)

## Getting Started

1. Clone this repository
   ```bash
   https://github.com/Kairos-T/FoodieBits
   cd FoodieBits
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the development server
   ```bash
   npm run dev
   ```

## Usage

### Development

!! Regularly pull changes from the remote repository to your local repository to keep it up to date !!
    ```bash
    git pull
    ```

### Committing
Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages, using the following prefixes:
- `feat`: for new features/functionalities
- `fix`: for bug fixes
- `refactor`: for code refactoring (i.e. neither fixes a bug nor adds a feature)
- `chore`: routine tasks, such as dependency updates, or miscellaneous changes that don't fit the other prefixes

Examples:
```bash
git commit -m "chore: Add new dependency (package-name)"
git commit -m "feat: Add new button component (component-name)"
git commit -m "fix: Resolve rendering bug in (component-name)"
```

1. Ensure that you are on the `dev` branch when working on new changes. Pull the latest changes before working on new changes.
   ```bash
   git checkout -b dev
   ```
2. Make your changes
3. Stage your changes
   ```bash
   # Adding a specific file:
   git add (file-name)

    # Adding all files:
    git add .
   ```
4. Commit and push your changes
   ```bash
    git commit -m "chore: Add new dependency (package-name)"
    git push
    ```
5. Create a pull request on GitHub to merge your changes into the `main` branch. Ensure that all status checks pass AND that someone else has reviewed your changes before merging.

   Creating PR:
   
   ![image](https://github.com/Kairos-T/CSS/assets/80029462/2b358465-081d-4a45-a184-ac3c7ce4381c)

   Editing PR details:
   ![image](https://github.com/Kairos-T/CSS/assets/80029462/5e9c2a37-50ca-4cc6-bc63-e64f513d7a5a)

   Checks (Request review - or... let them know somewhere else)
   ![image](https://github.com/Kairos-T/CSS/assets/80029462/5a66fccf-3934-4e2f-80fd-9339222d6182)

## Documentation
To be updated
