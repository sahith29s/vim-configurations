import React, { useState, useCallback } from 'react';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = useCallback(
    (value: string): void => {
      setInput((prevInput) => prevInput + value);
    },
    []
  );

  const handleClear = useCallback((): void => {
    setInput('');
  }, []);

  const handleCalculate = useCallback((): void => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  }, [input]);

  const renderButton = useCallback(
    (value: string) => (
      <button
        className="p-4 bg-gray-300 text-gray-800 text-2xl rounded"
        onClick={() => handleButtonClick(value)}
        key={value}
      >
        {value}
      </button>
    ),
    [handleButtonClick]
  );

  const renderOperator = useCallback(
    (operator: string) => (
      <button
        className="p-4 bg-orange-500 text-white text-2xl rounded"
        onClick={() => handleButtonClick(operator)}
        key={operator}
      >
        {operator}
      </button>
    ),
    [handleButtonClick]
  );



  const renderCalculateButton = useCallback(
    (label: string) => (
      <button
        className="col-span-2 p-4 bg-orange-500 text-white text-2xl rounded"
        onClick={handleCalculate}
        key={label}
      >
        {label}
      </button>
    ),
    [handleCalculate]
  );

  const renderClearButton = useCallback(
    (label: string) => (
      <button
        className="w-full p-4 bg-red-500 text-white text-2xl rounded"
        onClick={handleClear}
        key={label}
      >
        {label}
      </button>
    ),
    [handleClear]
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <input
          type="text"
          className="w-full mb-4 p-2 text-2xl text-right border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          value={input}
          readOnly
        />

        <div className="grid grid-cols-4 gap-4">
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderOperator('/')}
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderOperator('*')}
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
          {renderOperator('-')}
          {renderButton('0')}
          {renderCalculateButton('=')}
          {renderOperator('+')}
        </div>

        <div className="mt-4 grid grid-cols-4 gap-4">
          {renderClearButton('C')}
          <button
            className="w-full p-4 bg-red-500 text-white text-2xl rounded" onClick={() => {
              let arr : string = input;
              arr.slice(0, arr.length - 1 )
              alert(arr)
            }}
          >Ce</button>
        </div>
      </div>
    </div>
  );
};

export default App;
