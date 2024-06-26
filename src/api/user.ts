// src/api/user.ts
import axios from 'axios';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  username: string;
}

export const loginUser = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>('/login', payload);
  return response.data;
};

export const logoutUser = async (): Promise<void> => {
  await axios.post('/logout');
};
