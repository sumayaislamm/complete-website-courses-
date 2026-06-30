import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.js';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
};

export default AppRoutes;