# InputField Component with Storybook

## Overview
InputField component built with React + TypeScript, styled with CSS, and documented using Storybook.

## Features
- Variants: Filled, Outlined, Ghost
- Sizes: Small, Medium, Large
- States: Loading, Invalid, Disabled
- Supports helper/error text
- Fully interactive in Storybook Controls

## Functions (Component API)
Here are the key props/functions used in the InputField:

- **label** → Label for the input  
- **placeholder** → Placeholder text  
- **variant** → `filled | outlined | ghost`  
- **size** → `sm | md | lg`  
- **disabled** → Boolean to disable input  
- **invalid** → Boolean to show error state  
- **helperText** → Additional helper or error text  

## Approach

1. **Component-first**  
   Each component has its own folder containing:
   - The component file (`.tsx`)
   - Styling (`.css`)
   - Storybook story (`.stories.tsx`)  

2. **Reusable & Modular**  
   Components are designed to be reusable across projects, keeping code DRY and consistent.

3. **Storybook Documentation**  
   Each component has interactive stories demonstrating props, behaviors, and variations.

4. **Styling Consistency**  
   CSS or Tailwind is used to maintain a consistent design system across components.

5. **Professional Workflow**  
   - Git initialized with `.gitignore`  
   - Components committed with meaningful messages  
   - Remote GitHub repository linked  
   - Storybook deployed via GitHub Pages for live demonstration

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
