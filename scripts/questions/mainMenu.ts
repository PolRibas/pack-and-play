import * as inquirer from 'inquirer';

const promptModule = inquirer.createPromptModule();

export const mainMenu = async (language: string) => {
  const messages = {
    en: {
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
    es: {
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
    }
  };

  const langMessages = messages[language as 'en' | 'es'];

  console.log(`${langMessages.welcome} (${language})`);

  const answers = await promptModule([
    {
      type: 'list',
      name: 'action',
      message: langMessages.question,
      choices: langMessages.options,
    },
  ]);

  const { action } = answers;

  switch(action) {
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
