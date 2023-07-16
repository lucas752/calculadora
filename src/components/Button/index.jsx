// eslint-disable-next-line react/prop-types
export default function Button({ text }) {
    return(
        <button className="bg-[#3a3a3a] w-[3.8rem] h-[3.8rem] rounded-full text-white hover:bg-[#2a2a2a] font-semibold">{text}</button>
    )
}