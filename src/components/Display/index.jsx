// eslint-disable-next-line react/prop-types
export default function Display({text, result}) {
    return(
        <div className="w-[90%] h-[20%] border border-[#3a3a3a]  rounded-2xl flex items-center text-white font-bold justify-between px-8">
            <div className="flex flex-col h-[100%] items-start justify-between py-1">
                <div className="text-[7px]">
                {'M'}
                </div>
                <div>
                {text}
                </div>
            </div>
            <div className="text-[1.7rem]">
                {result}
            </div>
        </div>
    )
}