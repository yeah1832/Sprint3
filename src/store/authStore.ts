import {create} from "zustand";

interface Storestate {
    isloggedIn: boolean;
    storeLogin: (token: string) => void;
    storeLogout: () => void;
}

export const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
};

const setToken = (token: string) => {
    localStorage.setItem("token", token);
};

export const removeToken = () => {
    localStorage.removeItem("taken");
};

export const useAuthStore = create<Storestate>((set) => ({
    isloggedIn: getToken() ? true : false, 
    storeLogin: (token: string) => {
        set({ isloggedIn: true });
        setToken(token);
    },
    storeLogout: () => {
        set({isloggedIn: false});
        removeToken();
    },
}));