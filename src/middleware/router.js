import { routes } from "../routes/apiRoutes.js";
import { handlePostRequest } from "../controllers/dataController.js";
import { preflightRequestHandler, setCorsHeaders } from "./cors.js";


export const serverRequestHandler = (req, res) => {
  const endpoint = req.url ?? "";

  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return preflightRequestHandler(res);
  }

  if (req.method === 'POST' && req.url === '/save-data') {
    return handlePostRequest(req, res);
  }

  const route = routes.find(
    (r) => endpoint === r.endpoint && req.method === r.method
  );

  if (route) {
    return route.handler(req, res);
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Route not found" }));
};
