import React, { useState } from "react";
function ChnageBgColor() {
    const [color, setColor] = useState('black');
    return (

        <div className="w-full h-screen flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
            <h1 className="text-3xl font-bold underline text-white mb-8">CHANGE BACKGROUND COLOR</h1>

            <div className="flex gap-4 flex-wrap justify-center">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor('red')}>Red</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor('blue')}>Blue</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor('green')}>Green</button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor('yellow')}>Yellow</button>
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor('purple')}>Purple</button>
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor('pink')}>Pink</button>
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" onClick={() => setColor('black')}>Black</button>
            </div>
        </div>
    )
}
export default ChnageBgColor