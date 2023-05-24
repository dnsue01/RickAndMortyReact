import CardGrid from "./components/CardGrid";
import React from 'react';
import { LanguageProvider } from "./services/useLanguage";

function App() {
  return (
    <LanguageProvider initialLanguage="En">


      <CardGrid />
    </LanguageProvider>
  );
}

export default App;
