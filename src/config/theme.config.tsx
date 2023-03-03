import React from "react"
import {CssBaseline, ThemeProvider, createTheme} from "@mui/material"

type ThemeProp ={
    children: JSX.Element
}

export enum themePalette {
    BG="#12181b",
    LIME = "#C8FA5F",
    FONT_GLOBAL="'jetBrains Mono',monospace"
    }
const theme = createTheme({
    palette:{
        mode:"dark",
        background: {
            default: themePalette.BG,
        },
        primary:{
            main:themePalette.LIME
        },
    },
    typography:{
        fontFamily:themePalette.FONT_GLOBAL,
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:'none',
                    boxShadow:'none',
                    borderRadius:'1em',
                }
            }
        }
    }
})
export const ThemeConfig:React.FC<ThemeProp> = ({children}) =>{
    return(
       <ThemeProvider theme={theme}>
             <CssBaseline/>
              {children}
       </ThemeProvider>
    )
}