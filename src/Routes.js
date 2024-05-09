import { SubmodulePage } from './SubmodulePage';
import { MainPage } from './MainPage';

const routes = () => {
  return [
    { path: '/submodulePage', element: <SubmodulePage /> },
    { path: '/mainPage', element: <MainPage /> },
  ];
};

export { routes };
