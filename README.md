# Vue Project Setup

This README provides an overview of the tools and settings that have been set up for this Vue project. These tools help maintain code quality and consistency throughout the development process.

The template should help get you started developing with Vue 3 and TypeScript in Vite following good practices. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Tools and Settings

1. **ESLint**: ESLint is a static code analysis tool used to identify and fix problems in your JavaScript code.

2. **Prettier**: Prettier is an opinionated code formatter that ensures consistent code style across your project.

3. **ESLint Prettier Plugin**: This plugin integrates Prettier with ESLint, ensuring that your code follows both ESLint and Prettier rules.

4. **Prettier Tailwind Plugin**: This plugin extends Prettier to format Tailwind CSS code in a consistent manner.

5. **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework used for styling your Vue components.

6. **Lint-Staged**: Lint-Staged is a tool that runs linters on pre-committed files, allowing you to catch and fix issues before committing changes to version control.

7. **Husky**: Husky is a tool that sets up Git hooks to enforce code quality checks before allowing commits.

8. **Git Commit Message Linter**: This linter ensures that your commit messages follow a consistent and clear format.

## Usage

These tools and settings have already been installed and configured for this project. To use them effectively, follow these guidelines:

- Ensure that you write code adhering to ESLint and Prettier rules.
- While committing changes, `lint-staged` and `husky` will automatically lint and format your code.
- Follow the commit message format enforced by the Git Commit Message Linter for clear and consistent commit history.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions for VS Code.

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.
