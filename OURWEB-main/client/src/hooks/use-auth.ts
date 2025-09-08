import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { type User } from '@shared/schema';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem('zetubridge_user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setAuthState({
          user,
          isLoading: false,
          isAuthenticated: true,
        });
      } catch (error) {
        localStorage.removeItem('zetubridge_user');
        setAuthState({
          user: null,
          isLoading: false,
          isAuthenticated: false,
        });
      }
    } else {
      setAuthState({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await apiRequest('POST', '/api/auth/login', { email, password });
      const data = await response.json();
      
      setAuthState({
        user: data.user,
        isLoading: false,
        isAuthenticated: true,
      });
      
      localStorage.setItem('zetubridge_user', JSON.stringify(data.user));
      return { success: true, user: data.user };
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Login failed' };
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await apiRequest('POST', '/api/auth/register', { name, email, password });
      const data = await response.json();
      
      setAuthState({
        user: data.user,
        isLoading: false,
        isAuthenticated: true,
      });
      
      localStorage.setItem('zetubridge_user', JSON.stringify(data.user));
      return { success: true, user: data.user };
    } catch (error) {
      console.error('Registration failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Registration failed' };
    }
  };

  const logout = () => {
    setAuthState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
    localStorage.removeItem('zetubridge_user');
  };

  return {
    ...authState,
    login,
    register,
    logout,
  };
}
