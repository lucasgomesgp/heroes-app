import React, { createContext, useEffect, useState } from "react";

export const CharactersContext = createContext({});

export function CharactersProvider({ children }) {
    const [characters, setCharacters] = useState();
    return (
        <CharactersContext.Provider value={{ characters, setCharacters }}>
            {children}
        </CharactersContext.Provider>
    );
}
