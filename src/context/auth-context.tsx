'use client'

import { deleteCookie, getCookie } from "cookies-next";
import { setCookie } from "cookies-next/client";
import React, { createContext } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    signIn: (token: string) => void;
    signOut: () => void;
    recoveryToken: () => string | undefined;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
    var isAuthenticated = !!recoveryToken();

    function signIn(token: string) {
        setCookie("cadastro-de-aluno.token", token)
    }

    function signOut() {
        deleteCookie("cadastro-de-aluno.token")
    }

    function recoveryToken() {
        const cookie = getCookie("cadastro-de-aluno.token")

        const token = cookie?.toString();

        return token;
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, signIn, signOut, recoveryToken}}>
            {children}
        </AuthContext.Provider>
    )
}