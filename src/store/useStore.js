import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      // Auth state
      isAuthenticated: localStorage.getItem("authToken") !== null,
      user: null,
      isLoading: false,
      error: null,

      // Navigation state
      lastVisitedPage: '/',
      setLastVisitedPage: (page) => set({ lastVisitedPage: page }),

      // Auth actions
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const response = await fetch("http://localhost:8081/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          const data = await response.json();

          if (response.ok) {
            localStorage.setItem("authToken", data.token || "1234");
            set({
              isAuthenticated: true,
              user: data.user || { email },
              isLoading: false
            });
            return true;
          } else {
            set({
              error: data.message || "Invalid credentials",
              isLoading: false
            });
            return false;
          }
        } catch (error) {
          set({
            error: "An error occurred during login",
            isLoading: false
          });
          return false;
        }
      },

      signup: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          const response = await fetch("http://localhost:8081/api/users/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          const data = await response.json();

          if (response.ok) {
            set({ isLoading: false });
            return true;
          } else {
            set({
              error: data.message || "Error during signup",
              isLoading: false
            });
            return false;
          }
        } catch (error) {
          set({
            error: "An error occurred during signup",
            isLoading: false
          });
          return false;
        }
      },

      logout: () => {
        localStorage.removeItem("authToken");
        set({
          isAuthenticated: false,
          user: null
        });
      },

      clearError: () => set({ error: null }),

      checkTokenExpiration: () => {
        const token = localStorage.getItem("authToken");
        if (!token) {
          return false;
        }
        return true;
      },
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        lastVisitedPage: state.lastVisitedPage,
      }),
    }
  )
);

export default useStore;