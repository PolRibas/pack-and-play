import * as fs from 'fs';
import * as path from 'path';
import { selectLanguage, mainMenu } from './questions';

interface Config {
  language: string;
}

const CONFIG_PATH = path.join(__dirname, '..', 'settings', 'config.json');

const loadConfig = (): Config | null => {
  if (fs.existsSync(CONFIG_PATH)) {
    const rawData = fs.readFileSync(CONFIG_PATH, 'utf-8');
    return JSON.parse(rawData);
  }
  return null;
};

const saveConfig = (config: Config) => {
  if (!fs.existsSync(path.dirname(CONFIG_PATH))) {
    fs.mkdirSync(path.dirname(CONFIG_PATH), { recursive: true });
  }
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf-8');
};

const main = async () => {
  let config = loadConfig();

  if (!config) {
    const language = await selectLanguage();
    config = { language };
    saveConfig(config);
  }

  await mainMenu(config.language);
};

main();
