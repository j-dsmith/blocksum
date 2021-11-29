import { createContext, useState } from 'react';

const ResultsContext = createContext({
  resultsParagraphs: [],
  setResultsParagraphs: function () {},
});

export function ResultsContextProvider({ children }) {
  const [resultsParagraphs, setResultsParagraphs] = useState([]);

  const context = {
    resultsParagraphs,
    setResultsParagraphs,
  };

  return (
    <ResultsContext.Provider value={context}>
      {children}
    </ResultsContext.Provider>
  );
}

export default ResultsContext;
