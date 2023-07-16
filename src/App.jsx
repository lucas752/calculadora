//import Button from './components/Button'

import Button from "./components/Button"
import Display from "./components/Display"

function App() {

  return (
    <div className='bg-[#2a2a2a] w-[100vw] h-[100vh] flex items-center justify-center'>
      <div className='bg-[#202020] h-[90vh] w-[25rem] rounded-2xl shadow-2xl p-7 flex items-center flex-col gap-5'>
        <Display/>
        <div>

        </div>
        <Button/>
      </div>
    </div>
  )
}

export default App
