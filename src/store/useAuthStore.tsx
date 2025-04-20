import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name?: string;
}


interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  //  actions
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
  clearError: () => void;
}

// to be replaced
const MOCK_USERS: Record<string, { password: string, user: User }> = {};

// Create the store with persistence
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      
      // Sign in implementation
      signIn: async (email, password) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 800));
          
          // Check if user exists in our mock database
          const userRecord = MOCK_USERS[email];
          
          if (!userRecord || userRecord.password !== password) {
            throw new Error('Invalid email or password');
          }
          
          // Success
          set({ 
            user: userRecord.user,
            isAuthenticated: true,
            isLoading: false 
          });
        } catch (error: any) {
          set({ 
            error: error.message, 
            isLoading: false,
            isAuthenticated: false
          });
        }
      },
      
      // Sign up implementation
      signUp: async (email, password, name) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 800));
          
          // Check if email already exists
          if (MOCK_USERS[email]) {
            throw new Error('Email already in use');
          }
          
          // Create new user
          const newUser: User = {
            id: Date.now().toString(),
            email,
            name
          };
          
          // Save to mock DB
          MOCK_USERS[email] = { password, user: newUser };
          
          //  sign in after registration
          set({
            user: newUser,
            isAuthenticated: true,
            isLoading: false
          });
        } catch (error: any) {
          set({
            error: error.message,
            isLoading: false
          });
        }
      },
      
      // sign out
      signOut: () => {
        set({ 
          user: null, 
          isAuthenticated: false
        });
      },
      
      clearError: () => set({ error: null })
    }),
    {
      name: 'narq-auth-storage', // unique name for localStorage
      skipHydration: true, // important for SSR
    }
  )
);