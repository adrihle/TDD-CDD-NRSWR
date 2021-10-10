import { createContext, useState } from 'react';

export const LangContext = createContext({
    lang: 'es',
    setLang: () => null
})

export const Lang = ({children}: Props): JSX.Element => {
    const [lang, setLang] = useState('es');
    const toggleLang = () => setLang(lang === 'es'? 'en' : 'es');
    const value = {lang, setLang: toggleLang};
    return (
        <LangContext.Provider value={value}>
            {Array.isArray(children)
                ?
                children.map(child => child)
                :
                children
            }
        </LangContext.Provider>
    )
}

interface Props {
    children: JSX.Element | JSX.Element[]
}