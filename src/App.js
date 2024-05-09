import { routes } from './Routes';
import { useRoutes } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';

import './App.css';

function App() {
  console.log('submodule project');
  const routing = useRoutes(routes());

  return <AuthProvider>{routing}</AuthProvider>;
}

export default App;
