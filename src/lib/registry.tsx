'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import {ServerStyleSheet, StyleSheetManager, ThemeProvider} from 'styled-components'
import {defaultTheme} from "@/styles/theme/default";
import {GlobalStyle} from "@/styles/theme/global";

export default function StyledComponentsRegistry({children,}: { children: React.ReactNode}) {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        styledComponentsStyleSheet.instance.clearTag()
        return <>{styles}</>
    })

    if (typeof window !== 'undefined') return <>{children}</>

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle/>
                {children}
            </ThemeProvider>
        </StyleSheetManager>
    )
}