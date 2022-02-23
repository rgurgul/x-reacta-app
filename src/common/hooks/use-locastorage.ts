import { useState } from "react";

export const useLocalStorage = (name: string, defaultValue: string = "") => {
    const [state, setState] = useState(() => {
        return localStorage.getItem(name) || defaultValue;
    });

    const setValue = (value: string) => {
        localStorage.setItem(name, value);
        setState(value);
    };

    return [state, setValue] as const;
};
