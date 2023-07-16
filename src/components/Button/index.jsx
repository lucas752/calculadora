// eslint-disable-next-line react/prop-types
export default function Button({ text, handleClick, textColor, backgroundColor }) {
    if (!textColor) {
       textColor = 'text-white' 
    }

    if (!backgroundColor) {
        backgroundColor = 'bg-[#3a3a3a]'
    }

    return(
        <button className={`${backgroundColor} w-[3.8rem] h-[3.8rem] rounded-full ${textColor} hover:opacity-75 font-bold`} onClick={() => handleClick(text)}>{text}</button>
    )
}