// Base API URL — reads from env (Vite uses import.meta.env)
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002/api';

// ─── Token helpers ────────────────────────────────────────────────────────────
export const getToken = (): string | null => localStorage.getItem('token');
export const setToken = (token: string): void => localStorage.setItem('token', token);
export const removeToken = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// ─── Core fetch wrapper ───────────────────────────────────────────────────────
interface RequestOptions {
  method?: string;
  body?: unknown;
  auth?: boolean;
}

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, auth = false } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (auth) {
    const token = getToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data as T;
}

// ─── Auth API ─────────────────────────────────────────────────────────────────
export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  role: string;
  createdAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}

export const authApi = {
  register: (data: { name: string; email: string; password: string }) =>
    request<AuthResponse>('/auth/register', { method: 'POST', body: data }),

  login: (data: { email: string; password: string }) =>
    request<AuthResponse>('/auth/login', { method: 'POST', body: data }),

  getMe: () => request<{ success: boolean; user: User }>('/auth/me', { auth: true }),

  updateProfile: (data: { name?: string; bio?: string; avatar?: string }) =>
    request<{ success: boolean; message: string; user: User }>('/auth/profile', {
      method: 'PUT',
      body: data,
      auth: true,
    }),

  changePassword: (data: { currentPassword: string; newPassword: string }) =>
    request<{ success: boolean; message: string }>('/auth/change-password', {
      method: 'PUT',
      body: data,
      auth: true,
    }),
};

// ─── Blog API ─────────────────────────────────────────────────────────────────
export interface Blog {
  _id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  tags: string[];
  author: { _id: string; name: string; avatar?: string };
  authorName: string;
  featured: boolean;
  readTime: string;
  coverImage?: string;
  views: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogsResponse {
  success: boolean;
  total: number;
  page: number;
  pages: number;
  blogs: Blog[];
}

export interface BlogFilters {
  category?: string;
  search?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
}

export const blogsApi = {
  getAll: (filters: BlogFilters = {}) => {
    const params = new URLSearchParams();
    if (filters.category && filters.category !== 'All') params.set('category', filters.category);
    if (filters.search) params.set('search', filters.search);
    if (filters.featured) params.set('featured', 'true');
    if (filters.page) params.set('page', String(filters.page));
    if (filters.limit) params.set('limit', String(filters.limit));
    const query = params.toString() ? `?${params.toString()}` : '';
    return request<BlogsResponse>(`/blogs${query}`);
  },

  getById: (id: string) => request<{ success: boolean; blog: Blog }>(`/blogs/${id}`),

  getByUser: (userId: string) =>
    request<{ success: boolean; blogs: Blog[] }>(`/blogs/user/${userId}`),

  create: (data: Partial<Blog>) =>
    request<{ success: boolean; message: string; blog: Blog }>('/blogs', {
      method: 'POST',
      body: data,
      auth: true,
    }),

  update: (id: string, data: Partial<Blog>) =>
    request<{ success: boolean; message: string; blog: Blog }>(`/blogs/${id}`, {
      method: 'PUT',
      body: data,
      auth: true,
    }),

  delete: (id: string) =>
    request<{ success: boolean; message: string }>(`/blogs/${id}`, {
      method: 'DELETE',
      auth: true,
    }),
};

// ─── Contact API ──────────────────────────────────────────────────────────────
export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export const contactApi = {
  send: (data: ContactPayload) =>
    request<{ success: boolean; message: string }>('/contact', {
      method: 'POST',
      body: data,
    }),
};

// ─── Subscribe API ────────────────────────────────────────────────────────────
export const subscribeApi = {
  subscribe: (email: string) =>
    request<{ success: boolean; message: string }>('/subscribe', {
      method: 'POST',
      body: { email },
    }),

  unsubscribe: (email: string) =>
    request<{ success: boolean; message: string }>('/subscribe', {
      method: 'DELETE',
      body: { email },
    }),
};
