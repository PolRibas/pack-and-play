import * as inquirer from 'inquirer';

const promptModule = inquirer.createPromptModule();

const languagesCodes: {
  [key: string]: string;
} = {
  "es": 'Español',
  "en": 'English',
}

const key = "lang";

export const selectLanguage = async (): Promise<string> => {
  const answers = await promptModule([
    {
      type: 'list',
      name: key,
      message: 'Select language / Seleccione el idioma:',
      choices: Object.values(languagesCodes),
    },
  ]);

  const selectedLanguage = Object.keys(languagesCodes).find((k: string) => answers[key] === languagesCodes[k]);

  return selectedLanguage || "en"; // Default to "en" if not found
};
