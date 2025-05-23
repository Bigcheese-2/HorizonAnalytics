import { ThemeProvider } from "@/components/theme/theme-provider";
import LandingPage from "@/components/landing/LandingPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="landing-theme">
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;