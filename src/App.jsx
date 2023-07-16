//import Button from './components/Button'

import Button from "./components/Button"
import Display from "./components/Display"

function App() {

  return (
    <div className='bg-[#2a2a2a] w-[100vw] h-[100vh] flex items-center justify-center'>
      <div className='bg-[#202020] h-[90vh] w-[25rem] rounded-2xl shadow-2xl p-7 flex items-center flex-col gap-8'>
        <Display text={'8 + 5'} result={'13'}/>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <Button text={'MC'}/>
          <Button text={'MR'}/>
          <Button text={'M+'}/>
          <Button text={'M-'}/>
          <Button text={'X'}/>
          <Button text={'+'}/>
          <Button text={'-'}/>
          <Button text={'/'}/>
          <Button text={'1'}/>
          <Button text={'2'}/>
          <Button text={'3'}/>
          <Button text={'4'}/>
          <Button text={'5'}/>
          <Button text={'6'}/>
          <Button text={'7'}/>
          <Button text={'8'}/>
          <Button text={'9'}/>
          <Button text={'0'}/>
          <Button text={'.'}/>
          <Button text={'DEL'}/>
          <Button text={'='}/>
        </div>
      </div>
    </div>
  )
}

export default App
