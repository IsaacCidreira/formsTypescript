import { Route, Routes } from 'react-router-dom';
import { Home } from './Page/Home';
import { Select } from './Page/Select';
import { Sucess } from './Page/Sucess';

export const RoutesContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/" end element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/sucess" element={<Sucess />} />
      </Routes>
    </>
  );
};
