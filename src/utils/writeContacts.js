import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

// Записуємо дані у файл 'output.txt'
export const writeContacts = (async () => {
  try {
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
})();
