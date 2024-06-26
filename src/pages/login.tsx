// src/components/LoginPage.tsx

import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import axiosInstance from '../api/axiosInstance';

const LoginPage: React.FC = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    loading: false,
    error: '',
  });

  const { username, password, loading, error } = user;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({ ...user, loading: true });
    try {
      const response = await axiosInstance.post('/api/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setUser({ ...user, loading: false });
      // Redirect to home page or another route upon successful login
      // history.push('/home');
    } catch (error) {
      setUser({ ...user, loading: false, error: 'Invalid credentials. Please try again.' });
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={handleInputChange}
          required
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={handleInputChange}
          required
        />
        {loading ? (
          <CircularProgress />
        ) : (
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        )}
        {error && (
          <Typography variant="body2" color="error" align="center">
            {error}
          </Typography>
        )}
      </form>
    </Container>
  );
};

export default LoginPage;
