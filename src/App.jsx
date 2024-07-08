import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResetStyle from './styles/ResetStyle';
import MainPage from './pages/MainPage';
import QuizzPage from './pages/QuizzPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/quizz/:idQuizz" element={<QuizzPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
