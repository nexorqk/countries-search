import { Route, Routes } from "react-router-dom";

import { Home } from "./components/home";
import { Layout } from "./components/layout";
import { NotFound } from "./components/not-found";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          {/* <Route to='/detail' element={<Detail />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
