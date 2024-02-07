import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login.tsx';
import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
import Pomodoro from './components/Pomodoro.tsx';
import Training from './components/Training.tsx';
import ApiPage from './components/ApiPage.tsx';
import ChatGPT from './components/ChatGPT.tsx';
import ErrorPage from './components/ErrorPage.tsx';
import Todo from './components/Todo.tsx';

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
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
