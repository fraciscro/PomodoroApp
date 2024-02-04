import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Pomodoro from './components/Pomodoro';
import Training from './components/Training';
import ApiPage from './components/ApiPage';
import ChatGPT from './components/ChatGPT';
import ErrorPage from './components/ErrorPage.tsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/training" element={<Training />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/apipage" element={<ApiPage />} />
        <Route path="/chatgpt" element={<ChatGPT />} />
      </Routes>
    </>
  );
}

export default App;
