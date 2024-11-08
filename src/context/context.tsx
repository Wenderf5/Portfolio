import { useState, createContext } from "react";


interface contextInterface {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext<contextInterface | null>(null);

export function ContextProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Context.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </Context.Provider>
    )
}