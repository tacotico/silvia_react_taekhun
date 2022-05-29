import ClientPage from '@pages/ClientPage';
import HomePage from '@pages/HomePage';
import MainLayout from '@pages/MainLayout';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/client' element={<ClientPage />} />
          <Route path='/*' element={<Navigate replace to='/home' />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
