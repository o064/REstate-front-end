import { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import type { sessinToken } from '../types/User';
interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (data: sessinToken) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    const stored = Cookies.get('session');
    return stored ? JSON.parse(stored).jwtToken : null;
  });

  const login = (data: sessinToken) => {
    const jwtToken = data.jwtToken;
    setToken(jwtToken);
    Cookies.set('session', JSON.stringify(data), { expires: 7 });
  };

  const logout = () => {
    Cookies.remove('session');
    setToken(null);
  };

  const value: AuthContextType = {
    isAuthenticated: !!token,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
