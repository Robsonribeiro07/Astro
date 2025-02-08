"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useDeleyIncialization() {

    const [isThemeIsready, setIsThemeIsReady] = useState(false)

    const {theme} = useTheme()

    useEffect(() => {
        if(theme) {
            const timer = setTimeout(() => setIsThemeIsReady(true), 200)
            return () => clearTimeout(timer)
        }
    }, [theme])

    return { isThemeIsready }
} 