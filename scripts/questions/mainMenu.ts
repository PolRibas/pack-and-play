import * as inquirer from 'inquirer';
import { LanguageCodeEnum, LanguageCodeType } from './language';

const promptModule = inquirer.createPromptModule();

const messages: {
  [key in LanguageCodeType]: {
    welcome: string;
    question: string;
    options: string[];
    selectedCreate: string;
    selectedAddModules: string;
    selectedExit: string;
    invalidOption: string;
  };
} = {
  [LanguageCodeEnum.English]: {
    welcome: 'Welcome to the Pack and Play for technological projects with TypeScript',
    question: 'What would you like to do?',
    options: [
      'Option 1: Create a new project',
      'Option 2: Add modules to an existing project',
      'Option 3: Exit',
    ],
    selectedCreate: 'You selected to create a new project.',
    selectedAddModules: 'You selected to add modules to an existing project.',
    selectedExit: 'You selected to exit.',
    invalidOption: 'Invalid option.',
  },
  [LanguageCodeEnum.Spanish]: {
    welcome: 'Bienvenido al Pack and Play para proyectos tecnológicos con TypeScript',
    question: '¿Qué te gustaría hacer?',
    options: [
      'Opción 1: Crear un nuevo proyecto',
      'Opción 2: Agregar módulos a un proyecto existente',
      'Opción 3: Salir',
    ],
    selectedCreate: 'Has seleccionado crear un nuevo proyecto.',
    selectedAddModules: 'Has seleccionado agregar módulos a un proyecto existente.',
    selectedExit: 'Has seleccionado salir.',
    invalidOption: 'Opción no válida.',
  },
  [LanguageCodeEnum.French]: {
    welcome: 'Bienvenue dans le Pack and Play pour les projets technologiques avec TypeScript',
    question: 'Que voulez-vous faire?',
    options: [
      'Option 1: Créer un nouveau projet',
      'Option 2: Ajouter des modules à un projet existant',
      'Option 3: Quitter',
    ],
    selectedCreate: 'Vous avez sélectionné de créer un nouveau projet.',
    selectedAddModules: 'Vous avez sélectionné d\'ajouter des modules à un projet existant.',
    selectedExit: 'Vous avez sélectionné de quitter.',
    invalidOption: 'Option invalide.',
  },
  [LanguageCodeEnum.German]: {
    welcome: 'Willkommen bei Pack and Play für technologische Projekte mit TypeScript',
    question: 'Was möchtest du tun?',
    options: [
      'Option 1: Ein neues Projekt erstellen',
      'Option 2: Module zu einem vorhandenen Projekt hinzufügen',
      'Option 3: Beenden',
    ],
    selectedCreate: 'Sie haben ausgewählt, ein neues Projekt zu erstellen.',
    selectedAddModules: 'Sie haben ausgewählt, Module zu einem vorhandenen Projekt hinzuzufügen.',
    selectedExit: 'Sie haben ausgewählt, zu beenden.',
    invalidOption: 'Ungültige Option.',
  }
};

export const mainMenu = async (language: LanguageCodeType) => {

  const langMessages = messages[language];

  const answers = await promptModule([
    {
      type: 'list',
      name: 'action',
      message: langMessages.question,
      choices: langMessages.options,
    },
  ]);

  const { action } = answers;

  switch (action) {
    case langMessages.options[0]:
      console.log(langMessages.selectedCreate);
      break;
    case langMessages.options[1]:
      console.log(langMessages.selectedAddModules);
      break;
    case langMessages.options[2]:
      console.log(langMessages.selectedExit);
      break;
    default:
      console.log(langMessages.invalidOption);
  }
};
