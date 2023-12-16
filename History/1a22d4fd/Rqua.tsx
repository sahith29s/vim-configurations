import { useState } from "react";

const TicTacToe = () => {
    const defaultData = [null, null, null, null, null, null, null, null, null]
    const [ticOrToe, setTicOrToe] = useState<(null | string)[]>(defaultData);
    const [whoPlay, setWhoPlay] = useState<boolean>(true);
    const [isWin, setIsWin] = useState<{ isWin: boolean, whoWin: string }>({ isWin: false, whoWin: "" });

    const [howManyTimesWin, setHowManyTimesWin] = useState<{ cross: number, zero: number }>({ cross: 0, zero: 0 });


    const winArray =
        [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

    const checkForWin = (ticOrToeArray: (null | string)[]) => {
        for (const element of winArray) {
            if (
                ticOrToeArray[element[0]] == ticOrToeArray[element[1]]
                && ticOrToeArray[element[0]] == ticOrToeArray[element[2]] &&
                ticOrToeArray[element[0]] != null
            ) {
                let anyvar: (string | null) = ticOrToeArray[element[0]];
                (anyvar == "X")
                    ?
                    setHowManyTimesWin({ ...howManyTimesWin, cross: howManyTimesWin.cross + 1 })
                    :
                    setHowManyTimesWin({ ...howManyTimesWin, zero: howManyTimesWin.zero + 1 });

                if (anyvar != null) {
                    setIsWin({ isWin: true, whoWin: anyvar });
                }
                setTicOrToe(defaultData);
                setCrossOrZero(true);
            }
        }
    };


    const handleClick = (e: any, num: number) => {
        let array = [...ticOrToe];
        if (array[num]) return;
        array[num] = whoPlay ? "setWhoPlay" : "0";
        setCrossOrZero(!whoPlay);
        setWhoPlay(array);
        checkForWin(array);
    };

    return (
        <>
            <header className="bg-green-500 text-white text-center py-2 mb-5">
                <h1 className="text-4xl font-extrabold font-serif">Tic Tac Toe</h1>
            </header>
            <div className="mx-auto flex sm:flex-row flex-col items-center sm:justify-around container mb-5">
                <div className="sm:w-full sm:ml-[10rem] text-center">
                    <div className="flex m-1 gap-2">
                        <div onClick={(e) => handleClick(e, 0)} className="ticTacToeBox border-l border-b border-r">{ticOrToe[0]}</div>
                        <div onClick={(e) => handleClick(e, 1)} className="ticTacToeBox border-l border-b border-r">{ticOrToe[1]}</div>
                        <div onClick={(e) => handleClick(e, 2)} className="ticTacToeBox border-l border-b border-r">{ticOrToe[2]}</div>
                    </div>

                    <div className="flex m-1 gap-3">
                        <div onClick={(e) => handleClick(e, 3)} className="ticTacToeBox border-r border-t border-b ">{ticOrToe[3]}</div>
                        <div onClick={(e) => handleClick(e, 4)} className="ticTacToeBox border">{ticOrToe[4]}</div>
                        <div onClick={(e) => handleClick(e, 5)} className="ticTacToeBox border-t  border-b border-l">{ticOrToe[5]}</div>
                    </div>

                    <div className="flex m-1 gap-3">
                        <div onClick={(e) => handleClick(e, 6)} className="ticTacToeBox border-t border-r border-l">{ticOrToe[6]}</div>
                        <div onClick={(e) => handleClick(e, 7)} className="ticTacToeBox border-t border-r border-l">{ticOrToe[7]}</div>
                        <div onClick={(e) => handleClick(e, 8)} className="ticTacToeBox border-t border-r border-l">{ticOrToe[8]}</div>
                    </div>
                </div>


                <div className="w-full mt-5 flex-col sm:mt-0 sm:flex justify-center items-center">

                    <div>{}</div>
                    <div className="flex gap-5">
                        <div className="flex flex-col items-center">
                            <div className="font-bold">PLAYER 1 (X)</div>
                            <div className="font-bold text-2xl">{howManyTimesWin.cross}</div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="font-bold">PLAYER 2 (0)</div>
                            <div className="font-bold text-2xl">{howManyTimesWin.zero}</div>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}

export default TicTacToe