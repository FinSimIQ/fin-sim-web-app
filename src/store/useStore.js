/* import { create } from 'zustand';
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

export default useStore; */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Login function
      login: async (email, password) => {
        set({ isLoading: true, error: null });

        try {
          console.log("Sending login request with:", { email, password });

          const response = await fetch("http://localhost:8081/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          const data = await response.json();
          console.log("Login API response:", data);

          // Check if login was successful (array of users returned)
          if (Array.isArray(data) && data.length > 0 && data[0]._id) {
            // Store the complete user object with ID
            const userData = {
              id: data[0]._id,
              email: data[0].email,
              fullName: data[0].fullName || '',
            };

            // Store the auth token
            localStorage.setItem("authToken", "dummy-token");

            set({
              user: userData,
              isAuthenticated: true,
              isLoading: false
            });

            return true;
          } else {
            // Handle login failure
            set({
              error: data.message || "Invalid credentials",
              isLoading: false,
              isAuthenticated: false
            });
            return false;
          }
        } catch (error) {
          console.error("Login error:", error);
          set({
            error: error.message || "Login failed",
            isLoading: false,
            isAuthenticated: false
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
          console.error("Signup error:", error);
          set({
            error: "An error occurred during signup",
            isLoading: false
          });
          return false;
        }
      },

      // Logout function
      logout: () => {
        localStorage.removeItem("authToken");
        set({ user: null, isAuthenticated: false });
      },

      // Check token expiration
      checkTokenExpiration: () => {
        const token = localStorage.getItem("authToken");
        return !!token; // Return true if token exists
      },

      clearError: () => set({ error: null }),

      setLastVisitedPage: (page) => set({ lastVisitedPage: page }),
    }),
    {
      name: 'finsim-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useStore;