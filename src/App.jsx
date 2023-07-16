import Calculator from "./components/Calculator"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='bg-[#2a2a2a] w-[100vw] h-[100vh] flex items-center justify-center'>
      <ToastContainer/>
      <Calculator/>
    </div>
  )
}

export default App
