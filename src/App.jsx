import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResetStyle from './styles/ResetStyle';
import MainPage from './pages/MainPage';
import QuizzPage from './pages/QuizzPage';
import CreatePage from './pages/CreatePage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/quizz/:idQuizz" element={<QuizzPage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
