import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        // LEAVE THIS FIELD BLANK. TAILWIND UI WILL HANDLE FONT FAMILY
        fontFamily: ''
    }
});

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MuiThemeProvider;
