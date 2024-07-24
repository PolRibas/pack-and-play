import * as inquirer from 'inquirer';

const promptModule = inquirer.createPromptModule();

export enum LanguageCodeEnum {
  Spanish = 'es',
  English = 'en',
  French = 'fr',
  German = 'de',
}

export const languagesCodes: {
  [key: string]: string;
} = {
  [LanguageCodeEnum.Spanish]: 'Español',
  [LanguageCodeEnum.English]: 'English',
  [LanguageCodeEnum.French]: 'Français',
  [LanguageCodeEnum.German]: 'Deutsch',
}

export type LanguageCodeType = keyof typeof languagesCodes;

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
