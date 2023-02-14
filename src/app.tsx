import { Router } from 'router';
import { GlobalStyles } from 'style/global-styles';
import { theme } from 'style/theme';
import { ThemeProvider } from 'styled-components';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
