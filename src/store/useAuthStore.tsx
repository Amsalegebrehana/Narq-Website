import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { config } from '../../config';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  //  actions
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name?: string) => Promise<void>;
  signOut: () => void;
  clearError: () => void;
}

// Create the store with persistence
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      
      // Sign in implementation
      signIn: async (email, password) => {
        set({ isLoading: true, error: null });
        console.log("email, password >>>>>>>>>>>>>", email, password);

        console.log("config.baseUrl ?", config.baseUrl);
        try {
          const response = await fetch(`${config.baseUrl}/auth/signin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'accept': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          })
          console.log("response", response);

          if (!response.ok) {
            throw new Error('Invalid email or password');
          }

          const data = await response.json();
          // Assuming the backend returns { user: User, token: string }
          set({ 
            // user: data.user,
            token: data.token,
            isAuthenticated: true,
            isLoading: false 
          });
          console.log("data", data);

          // Store token in localStorage for persistence
          localStorage.setItem('auth-token', data.token);
          return data;
        } catch (error: any) {
          set({ 
            error: error.message, 
            isLoading: false,
            isAuthenticated: false,
            token: null
          });
          throw error;
        }
      },
      
      // Sign up implementation
      signUp: async (email, password, name="name") => {

        console.log("email, password >>>>>>>>>>>>>", email, password);

        set({ isLoading: true, error: null });
        
        try {
          console.log("config.baseUrl ?", config.baseUrl); 

          const response = await fetch(`${config.baseUrl}/auth/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
          })

          if (!response.ok) {
            throw new Error('Registration failed');
          }

          const data = await response.json();
          // Assuming the backend returns { user: User, token: string }
          set({
            user: data.user,
            token: data.token,
            isAuthenticated: true,
            isLoading: false
          });

          console.log(data)
          return data
        } catch (error: any) {
          set({
            error: error.message,
            isLoading: false,
            token: null
          });
          throw error;
        }
      },
      
      // sign out
      signOut: () => {
        localStorage.removeItem('auth-token');
        set({ 
          user: null, 
          token: null,
          isAuthenticated: false
        });
      },
      
      clearError: () => set({ error: null })
    }),
    {
      name: 'narq-auth-storage',
      skipHydration: true, // important for SSR
      partialize: (state) => ({
        // Only persist these fields
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);