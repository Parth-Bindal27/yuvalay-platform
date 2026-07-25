import { createContext, useContext, useMemo, useState } from "react";

const ParticleContext = createContext(null);

export function ParticleProvider({ children }) {

    const [mode, setMode] = useState("float");

    const value = useMemo(() => ({

        mode,

        setMode

    }), [mode]);

    return (

        <ParticleContext.Provider value={value}>

            {children}

        </ParticleContext.Provider>

    );

}

export function useParticleController() {

    const context = useContext(ParticleContext);

    if (!context) {

        throw new Error(
            "useParticleController must be used inside ParticleProvider"
        );

    }

    return context;

}