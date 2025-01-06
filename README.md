# TypeScript RPG Character Creator

This was an experiment using ChatGPT to teach a programming toolchain and workflow. On the whole, the experience was quite positive.

This work was done in a ChatGPT [session](https://chatgpt.com/c/677418e0-9dd4-8009-a606-bb418a45d77b) on January 5, 2025. Unfortunately, I cannot share the session because OpenAI does not yet support sharing of session with user-uploaded user images. I am happy to share the session in any reasonably easy ad-hoc way, or once OpenAI makes it easier.

This README summary was written primarily by ChatGPT. It also created a summary [TUTORIAL](TUTORIAL.md) of the session.

## Project Overview

This project is a TypeScript-based React application built using the **Vite** bundler. It is designed as a learning project to explore the TypeScript language, modern React best practices, advanced tooling, and UI frameworks. The primary feature of the application is a **character creation tool** for a hypothetical RPG game, which demonstrates state management, dynamic updates, and modular design.

## Live view

### Application

The live application is available at: [Type RPG](https://deg.github.io/type-rpg).

### Documentation

Browse the project documentation: [Project Docs](https://deg.github.io/type-rpg/docs).

## What We Accomplished

### **1. Development Environment Setup**

- **Vite Configuration**:

  - Set up a modern Vite-based React application with TypeScript.
  - Optimized the Vite configuration for fast development and clean builds.

- **VSCode Configuration**:

  - Integrated TypeScript, ESLint, and Prettier for a seamless developer experience.
  - Customized inlay hints and editor settings to reduce noise and improve productivity.
  - Set up workspace-specific and user-specific settings for streamlined code editing.

- **Tooling**:
  - Added support for **styled-components** with Babel configuration.
  - Integrated **Ant Design (AntD)** as the primary UI library for reusable components.
  - Configured `typedoc` to generate documentation for the TypeScript codebase.
  - Implemented a GitHub Actions CI workflow to deploy the app and documentation to GitHub Pages:
    - The app is hosted at the repository's GitHub Pages root (`/`).
    - TypeScript documentation is hosted in a subdirectory (`/docs`).
    - The workflow ensures every `main` branch commit triggers automatic deployment.
    - Used `peaceiris/actions-gh-pages` to manage the deployment process with an orphaned `gh-pages` branch.

---

### **2. Application Features**

#### **Core Functionality**

- **Character Creation**:

  - Allows the user to create a character with customizable attributes such as `name`, `strength`, and `agility`.
  - Tracks character health, level, experience points (XP), and inventory.

- **Monster Interaction**:

  - Includes a list of monsters with unique stats.
  - Enables fighting monsters, dynamically updating character stats based on the outcome.

- **Healing Mechanic**:
  - Allows the user to heal the character using a dedicated button.

#### **UI Enhancements**

- Replaced plain HTML forms and buttons with **Ant Design components**:
  - Used `Form`, `Input`, `InputNumber`, `Card`, `Button`, and `Progress` components.
  - Enhanced layout with `Space` and `List` components.
- Added polished styling with **styled-components** for custom components where needed.

#### **State Management**

- Used React’s `useState` for managing the character and application state.
- Implemented reusable logic functions such as:
  - `updateCharacter`: Dynamically updates character properties.
  - `fightMonster`: Updates character stats after battling a monster.
  - `healCharacter`: Heals the character by a specified amount.

---

### **3. TypeScript Exploration**

#### **Key Language Features Used**

- **Type Annotations**:
  - Strongly typed props, state, and function parameters/returns.
- **Utility Types**:
  - Used `Partial` for dynamic updates.
- **Custom Types**:
  - Defined reusable types/interfaces for `Character` and `Monster` objects.
- **Advanced Features**:
  - Leveraged conditional types, mapped types, and template literal types.
- **Nullish Coalescing and Optional Chaining**:
  - Safely handled optional values throughout the application.

#### **Tooling**

- Configured TypeScript `strict` mode for maximum type safety.
- Added `typedoc` to generate browsable documentation for the codebase.
- Used ESLint and Prettier to enforce coding standards and formatting.

---

## Remaining Work and Future Enhancements

### **1. Advanced Features**

- **Global State Management**:

  - Migrate character state to a global state manager such as Context API or Redux.
  - Add middleware or side effects to handle asynchronous actions (e.g., data fetching).

- **Monster Generation**:

  - Dynamically generate monsters with procedural stats instead of a hardcoded list.

- **Inventory Management**:
  - Add functionality to pick up and use items from the inventory.
  - Implement drag-and-drop or other advanced interactions for managing inventory.

### **2. Styling Improvements**

- **Dark Mode**:

  - Add a toggle for light and dark themes using styled-components or Ant Design’s theming support.

- **Responsive Design**:
  - Improve mobile responsiveness using Ant Design’s Grid system.

### **3. Testing**

- Add unit tests for critical functions (`updateCharacter`, `fightMonster`, etc.) using Jest or Vitest.
- Add integration and end-to-end tests using Cypress or Playwright.

### **4. Backend Integration**

- Add a backend using Node.js and Express to persist character data.
- Use TypeScript on both frontend and backend for shared types.
- Implement RESTful or GraphQL APIs.

### **5. Additional UI Improvements**

- Use modals or advanced components from Ant Design for better user interactions (e.g., confirmation dialogs).
- Add animations for transitions between character states (e.g., leveling up or taking damage).

---

## How to Run the Project

### Prerequisites

1. Ensure you have **Node.js** (version 16 or higher) installed.
2. Install dependencies using:

   ```bash
   npm install
   ```

### Start the Development Server

```bash
npm run dev
```

### Build the Application

```bash
npm run build
```

### Run TypeDoc to Generate Documentation

```bash
npm run docs
```

Generated documentation will be available in the `docs/` directory.

---

## Notes for Future Development

- This project serves as both a TypeScript learning tool and a boilerplate for future applications.
- All configuration files, including `tsconfig.json`, `vite.config.ts`, and `typedoc.json`, have been optimized for simplicity and performance.
- Modular design principles have been followed to ensure scalability.

For questions or future enhancements, refer to this README or consult with future ChatGPT sessions for guidance.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Contact [David Goldfarb](mailto:deg@degel.com) for more details or any questions.
