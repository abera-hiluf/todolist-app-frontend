import axios from "axios";

// You can adjust baseURL if needed to match your backend server address
const instance = axios.create({
  baseURL: "https://to-dolist-back-end.onrender.com/api",
});


// Fetch all tasks
export const fetchTasks = () => instance.get("/tasks");

// Create a new task
export const createTask = (data) => instance.post("/tasks", data);

// Fetch all sessions
export const fetchSessions = () => instance.get("/sessions");

// Create a new session
export const createSession = (data) => instance.post("/sessions", data);
