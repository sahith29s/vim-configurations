

import React from 'react'

const App = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow p-4 rounded-lg w-64">
          <div className="text-4xl font-bold mb-4">{result}</div>
          <div className="grid grid-cols-4 gap-2">
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('1')}
            >
              1
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('2')}
            >
              2
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('3')}
            >
              3
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('+')}
            >
              +
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('4')}
            >
              4
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('5')}
            >
              5
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('6')}
            >
              6
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('-')}
            >
              -
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('7')}
            >
              7
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('8')}
            >
              8
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('9')}
            >
              9
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('*')}
            >
              *
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('0')}
            >
              0
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              onClick={() => handleClick('.')}
            >
              .
            </button>
            <button
              classname="bg-gray-200 hover:bg-gray-300 p-2 rounded"
              
                </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
            onClick={() => handleClick('/')}
          >
            /
          </button>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>


    </>
  )

}

export default App