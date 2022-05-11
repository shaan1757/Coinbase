import { createContext, useState, useEffect } from "react";

export const CoinbaseContext = createContext();

export const CoinbaseProvider = ({ children }) => {
    const getTopTenCoins = async () => {
        try {
            const res = await fetch("/api/getTopTen")
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <CoinbaseContext.Provider value={{
            getTopTenCoins,
        }}>
            {children}
        </CoinbaseContext.Provider>
    )
}