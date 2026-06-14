const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
// ── Token stored in sessionStorage so it survives refresh ──
// but clears when browser tab is closed (more secure than localStorage)

export const setToken = (token) => {
  sessionStorage.setItem("access_token", token);
};

export const clearToken = () => {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("refresh_token");
};

export const getToken = () => sessionStorage.getItem("access_token");

export const setRefreshToken = (token) => {
  sessionStorage.setItem("refresh_token", token);
};

export const getRefreshToken = () => sessionStorage.getItem("refresh_token");

const authHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// ── Auth ───────────────────────────────────────────────────

export const loginApi = async (username, password) => {
  const res = await fetch(`${BASE_URL}/auth/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Login failed");
  return data;
};

export const logoutApi = async () => {
  const refresh = getRefreshToken();
  if (refresh) {
    await fetch(`${BASE_URL}/auth/logout/`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({ refresh }),
    });
  }
  clearToken();
};

// ── Projects ───────────────────────────────────────────────

export const fetchProjects = async () => {
  const res = await fetch(`${BASE_URL}/projects/`);
  return res.json();
};

export const createProject = async (formData) => {
  const res = await fetch(`${BASE_URL}/projects/`, {
    method: "POST",
    headers: authHeaders(),
    body: formData,
  });
  if (!res.ok) throw new Error("Failed to create project");
  return res.json();
};

export const updateProject = async (id, formData) => {
  const res = await fetch(`${BASE_URL}/projects/${id}/`, {
    method: "PATCH",
    headers: authHeaders(),
    body: formData,
  });
  if (!res.ok) throw new Error("Failed to update project");
  return res.json();
};

export const deleteProject = async (id) => {
  const res = await fetch(`${BASE_URL}/projects/${id}/`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to delete project");
};

export const toggleFeatured = async (id) => {
  const res = await fetch(`${BASE_URL}/projects/${id}/featured/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Failed to toggle featured");
  }
  return res.json();
};

// ── Contact ────────────────────────────────────────────────

export const submitContact = async (data) => {
  const res = await fetch(`${BASE_URL}/contact/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to send message");
  return res.json();
};

export const fetchContacts = async () => {
  const res = await fetch(`${BASE_URL}/contact/list/`, {
    headers: authHeaders(),
  });
  return res.json();
};

export const markContactRead = async (id) => {
  await fetch(`${BASE_URL}/contact/${id}/read/`, {
    method: "PATCH",
    headers: authHeaders(),
  });
};

export const deleteContact = async (id) => {
  await fetch(`${BASE_URL}/contact/${id}/delete/`, {
    method: "DELETE",
    headers: authHeaders(),
  });
};
