import { DataModel } from '../models/dataModel.js';

/**
 * @function handlePostRequest
 * @description Обрабатывает POST-запрос для сохранения данных формы
 * @param {http.IncomingMessage} req
 * @param {http.ServerRespose} res
 * @returns {Promise<void>}
 */

export const handlePostRequest = async (req, res) => {
  let body = '';
  
  req.on('data', chunk => body += chunk.toString());

  req.on('end', () => {
    try {
      const userData = JSON.parse(body);
      const allData = DataModel.readData();
      
      allData.push({
        timestamp: new Date().toISOString(),
        ...userData
      });

      DataModel.saveData(allData);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: error.message }));
    }
  });
};