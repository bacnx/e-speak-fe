import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { StoreNames } from './store-names'

interface UserInfo {
  id: string
  name: string
  email: string
}

interface AuthState {
  user: UserInfo | null
  setUser: (user: UserInfo | null) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => {
        set(() => ({ user }))
      },
    }),
    {
      name: StoreNames.AuthStore,
      partialize: (state) => ({ user: state.user }),
    },
  ),
)
