# Tutorial: Learning TypeScript, Vite, and React with RPG Character Creator

## Preface

This tutorial was created by ChatGPT to summarize what we did in this project (see [README](README.md)). I have not proofread nor verified much in here so tread with caution.

---

Welcome to the **TypeScript RPG Character Creator** project tutorial! This guide walks you through the concepts, tools, and techniques explored during the development of this project. By the end, you’ll have a solid grasp of TypeScript, React, Vite, and modern development practices, all while building and extending this fun RPG-themed application.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setting Up the Development Environment](#setting-up-the-development-environment)
3. [Building the Application](#building-the-application)
4. [Exploring TypeScript Features](#exploring-typescript-features)
5. [Enhancing the UI with Ant Design](#enhancing-the-ui)
6. [Styling with Styled-Components](#styling-with-styled-components)
7. [Generating Documentation with TypeDoc](#generating-documentation-with-typedoc)
8. [Configuring CI with GitHub Pages](#configuring-ci)
9. [Additional Tips and Tricks](#additional-tips-and-tricks)

---

## Project Overview

This project is a **learning tool** designed to teach TypeScript and modern web development. Key features include:

- Building a **React application** with TypeScript using **Vite**.
- Managing state and interactions in a character creation RPG.
- Exploring advanced TypeScript features such as utility types, strict mode, and custom types.
- Leveraging popular tools like **Ant Design** and **styled-components** for enhanced UI.

---

## Setting Up the Development Environment

### 1. **Install Prerequisites**

Ensure you have the following installed:

- **Node.js** (version 16 or later)
- A code editor like **VSCode**

### 2. **Initialize the Project**

Run the following commands to set up a new Vite project with React and TypeScript:

```bash
npm create vite@latest type-rpg --template react-ts
cd type-rpg
npm install
```

### 3. **Configure VSCode**

- Install extensions:

  - **ESLint**
  - **Prettier**
  - **TypeScript Hero**

- Open `settings.json` and add:

```json
{
  "editor.formatOnSave": true,
  "typescript.inlayHints.parameterNames.enabled": "none",
  "typescript.inlayHints.parameterTypes.enabled": false,
  "eslint.format.enable": true,
  "prettier.singleQuote": true
}
```

---

## Building the Application

### 1. **Define Types**

Create reusable types for the application in `src/types/character.ts`:

```typescript
export interface Character {
  name: string;
  strength: number;
  agility: number;
  health: number;
  maxHealth: number;
  inventory: Item[];
  level: number;
  xp: number;
}

export interface Item {
  name: string;
  type: "weapon" | "armor" | "potion";
}
```

### 2. **Add State Management**

Use React’s `useState` to manage character state in `CharacterCreator`:

```tsx
const [character, setCharacter] = useState<Character>({
  name: "",
  strength: 10,
  agility: 10,
  health: 100,
  maxHealth: 100,
  inventory: [],
  level: 1,
  xp: 0,
});
```

### 3. **Implement Character Updates**

Add utility functions in `src/logic/character.ts`:

```typescript
export const updateCharacter = (
  character: Character,
  updates: Partial<Character>
): Character => ({
  ...character,
  ...updates,
});
```

---

## Exploring TypeScript Features

### 1. **Utility Types**

Use TypeScript’s built-in types like `Partial` to simplify updates:

```typescript
const handleStateUpdate = (updates: Partial<Character>) => {
  setCharacter((prev) => updateCharacter(prev, updates));
};
```

### 2. **Optional Properties and Default Values**

Use optional chaining and nullish coalescing:

```tsx
<p>{character.name ?? "Unnamed Character"}</p>
```

### 3. **Strict Type Checking**

Ensure `tsconfig.json` enables strict mode:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

---

## Enhancing the UI

### 1. **Add Ant Design**

Install Ant Design and import styles:

```bash
npm install antd
```

In `index.tsx`:

```tsx
import "antd/dist/reset.css";
```

### 2. **Replace HTML with AntD Components**

Update the form in `CharacterCreator`:

```tsx
<Form layout="vertical">
  <Form.Item label="Name">
    <Input
      value={character.name}
      onChange={(e) => handleStateUpdate({ name: e.target.value })}
    />
  </Form.Item>
</Form>
```

---

## Styling with Styled-Components

### 1. **Install Styled-Components**

```bash
npm install styled-components
npm install --save-dev @types/styled-components
```

### 2. **Create Styled Components**

Example:

```tsx
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;
```

---

## Generating Documentation with TypeDoc

### 1. **Install TypeDoc**

```bash
npm install --save-dev typedoc
```

### 2. **Configure TypeDoc**

Add `typedoc.json`:

```json
{
  "entryPoints": ["src"],
  "out": "docs",
  "includeVersion": true
}
```

### 3. **Generate Documentation**

Run:

```bash
npx typedoc
```

---

## Configuring-CI

---

To automate the deployment of both the app and its TypeScript documentation, we set up a GitHub Actions workflow (`deploy.yml`). This CI/CD pipeline ensures that every push to the `main` branch builds and deploys the project to GitHub Pages.

### Key Features

- The app is built using `npm run build`, and the output is deployed to the root of the `gh-pages` branch.
- Documentation is generated using `npm run docs` and is deployed to the `/docs` subdirectory.
- The app (`dist/`) and docs (`docs/`) are merged, ensuring both are deployed in a single step.
- The workflow is triggered by every push to the `main` branch.
- `peaceiris/actions-gh-pages` is used to manage the `gh-pages` branch.

## Additional Tips and Tricks

### Debugging

- Use `vite build --debug` to inspect your build configuration.
- Add breakpoints in VSCode for runtime debugging.

### Testing

- Add unit tests with Jest or Vitest.
- Write end-to-end tests with Cypress or Playwright.

### CI/CD

- Automate builds and documentation with GitHub Actions.

---

Congratulations! You’ve completed this tutorial, which serves as both a learning journey and a foundation for future TypeScript projects. For questions or further enhancements, revisit this guide or explore the [project repository](https://github.com/deg/type-rpg).
