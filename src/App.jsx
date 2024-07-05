import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResetStyle from './styles/ResetStyle';
import ListQuizz from './pages/ListQuizz';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListQuizz/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
