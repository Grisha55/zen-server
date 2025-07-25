import fs from 'fs';
import path from 'path';
import { DATA_FILE } from '../config/constants.js';

const dataPath = path.join(process.cwd(), DATA_FILE);

export class DataModel {
  static init() {
    if (!fs.existsSync(dataPath)) {
      fs.writeFileSync(dataPath, '[]', 'utf-8');
    }
  }

  static readData() {
    return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  }

  static saveData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  }
}