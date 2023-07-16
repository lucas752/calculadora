import {useState} from "react"
import * as math from 'mathjs'

import Button from "../Button"
import Display from "../Display"
import { Backspace } from "@phosphor-icons/react"

export default function Calculator() {
    const [expression, setExpression] = useState("")
    const [result, setResult] = useState("")

    function addToExpression(val) {
        setExpression((expression) => [...expression, val])
    }

    function clearInput() {
        setExpression('')
        setResult('')
    }

    function deleteInput() {
        setExpression(expression.slice(0, -1))
        setResult('')
    }

    function calculateResult() {
        try {
        const input = expression.join("")
        console.log(input)

        setResult(math.evaluate(input))
        } catch (error) {
        alert("Operação inválida")
        }
    }

    return (
        <div className='bg-[#202020] h-[95vh] w-[25rem] rounded-2xl shadow-2xl px-7 py-8 flex items-center justify-between flex-col gap-8'>
            <Display expression={expression} result={result}/>
            <div className="flex flex-col gap-3 w-[90%] items-end">
            <div className="flex justify-between w-[100%]">
                <Button text={'MC'} textColor={'text-blue-400'}/>
                <Button text={'MR'} textColor={'text-blue-400'}/>
                <Button text={'M+'} textColor={'text-blue-400'}/>
                <Button text={'M-'} textColor={'text-blue-400'}/>
            </div>
            <div className="flex justify-between w-[100%]">
                <Button text={'+'} handleClick={addToExpression} textColor={'text-blue-400'}/>
                <Button text={'-'} handleClick={addToExpression} textColor={'text-blue-400'}/>
                <Button text={'*'} handleClick={addToExpression} textColor={'text-blue-400'}/>
                <Button text={'/'} handleClick={addToExpression} textColor={'text-blue-400'}/>
            </div>
            <div className="flex justify-between w-[100%]">
                <Button text={'1'} handleClick={addToExpression}/>
                <Button text={'2'} handleClick={addToExpression}/>
                <Button text={'3'} handleClick={addToExpression}/>
                <Button text={'4'} handleClick={addToExpression}/>
            </div>
            <div className="flex justify-between w-[100%]">
                <Button text={'5'} handleClick={addToExpression}/>
                <Button text={'6'} handleClick={addToExpression}/>
                <Button text={'7'} handleClick={addToExpression}/>
                <Button text={'8'} handleClick={addToExpression}/>
            </div>
            <div className="flex justify-between w-[100%]">
                <Button text={'9'} handleClick={addToExpression}/>
                <Button text={'0'} handleClick={addToExpression}/>
                <Button text={'.'} handleClick={addToExpression}/>
                <Button text={'='} handleClick={calculateResult} backgroundColor={'bg-blue-400'}/>
            </div>
            <div className="w-[100%] flex justify-between">
                <div className="w-[3.8rem] h-[3.8rem]"></div>
                <div className="w-[3.8rem] h-[3.8rem]"></div>
                <Button text={'C'} handleClick={clearInput} textColor={'text-red-400'}/>
                <Button text={<Backspace size={25} weight="bold" color="#f87171"/>} handleClick={deleteInput} />
            </div>
        </div>
      </div>
    )
}