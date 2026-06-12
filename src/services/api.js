
import axios from "axios";

const api = axios.create({
  baseURL: "https://gerenciamento-tarefas-backend-1.onrender.com/api",
});

export default api;