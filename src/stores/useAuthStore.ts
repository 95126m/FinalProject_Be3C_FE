import { create } from 'zustand';
import { checkAuth } from '@/api';

type RoleCodeTypes = '' | 'USER' | 'TRADER' | 'MANAGER' | 'ADMIN';

interface AuthConfig {
  isLoggedIn: boolean;
  memberId: number;
  email: string;
  nickname: string;
  roleCode: RoleCodeTypes;
  profileImage: string | null;
}

interface AuthStateProps extends AuthConfig {
  setAuthState: (authData: AuthConfig) => void;
  resetAuthState: () => void;
  initializeAuth: () => Promise<void>;
}

const resetState = (set: Function) => {
  set({
    isLoggedIn: false,
    memberId: 0,
    email: '',
    nickname: '',
    role: '',
    profileImage: null,
  });
  localStorage.removeItem('token');
};

const updateState = (set: Function, authData: AuthConfig) => {
  set({
    isLoggedIn: true,
    memberId: authData.memberId,
    email: authData.email,
    nickname: authData.nickname,
    roleCode: authData.roleCode,
    profileImage: authData.profileImage,
  });
};

const useAuthStore = create<AuthStateProps>((set) => ({
  isLoggedIn: false,
  memberId: 0,
  email: '',
  nickname: '',
  roleCode: '',
  profileImage: null,

  setAuthState: (authData) => updateState(set, authData),

  resetAuthState: () => resetState(set),

  initializeAuth: async () => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const authData = await checkAuth();
        updateState(set, authData.data);
      } catch {
        resetState(set);
      }
    }
  },
}));

export default useAuthStore;