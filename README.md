# Pack & Play

## Description

Pack & Play is a monorepo project using TypeScript designed to facilitate the creation and management of technology projects. This repository includes interactive scripts that allow you to quickly set up new projects and add modules to existing projects, with multilingual support for Spanish and English.

## Requirements

- Node.js v21.6.1
- npm v10.2.4

## Installation

First, clone the repository and then install the necessary dependencies by running the following command:

```bash
npm install
```

## Configuration

The first time you run the program, you will be prompted to select a language (English or Spanish). This setting will be saved and used for future runs.

**Usage**

To start the interactive menu, use the following command:

```bash
npm start
```

You will be presented with a menu that allows you to:

Create a new project: Set up a new project from scratch.
Add modules to an existing project: Add new modules to an already existing project.
Exit: Exit the program.

**Test**

To run a simple test script, use the following command:

```bash
npm run hello
```

This will execute a basic TypeScript script to ensure everything is set up correctly.


## Project Structure
    
```
project-pack-and-play/
├── scripts/
│   ├── questions/
│   │   ├── language.ts
│   │   ├── mainMenu.ts
│   ├── main.ts
├── settings/
│   └── .gitkeep
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
```