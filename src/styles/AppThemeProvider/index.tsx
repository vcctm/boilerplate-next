import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { ReactElement, useMemo } from 'react';
import { defaultThemeOptions } from 'styles/theme';

interface Props {
  children: ReactElement;
}

function AppThemeProvider({ children }: Props): ReactElement {
  const theme = createTheme(defaultThemeOptions('dark' as PaletteMode))
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;