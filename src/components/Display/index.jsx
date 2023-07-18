// eslint-disable-next-line react/prop-types
export default function Display({expression, result, memory}) {
    // eslint-disable-next-line react/prop-types
    const formattedResult = Number(result).toFixed(2);
    return(
        <div className="w-[90%] h-[20vh] border border-[#3a3a3a]  rounded-2xl flex items-center text-white font-bold justify-between px-8">
            <div className="flex flex-col h-[100%] items-start justify-between py-2">
                <div className="text-xs">
                    {memory}
                </div>
                <div className="text-lg">
                    {expression}
                </div>
            </div>
            <div className="text-2xl h-[100%] flex items-end py-2">
                {parseFloat(formattedResult)}
            </div>
        </div>
    )
}