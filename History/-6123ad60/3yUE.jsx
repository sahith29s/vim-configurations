import React from 'react'
import "../../public/output.css"
import useStore from "../../store/store"
import { useEffect, useState } from 'react'




const TextArea = () => {



    let { text, setText, totalNumberOfWords, setTotalNumberOfWords, totalNumberOfLetters, setTotalNumberOfLetters } = useStore()

    const handleUppercase = () => {
        if (text) {
            setText(text.toUpperCase())
        }
    };

    const handleLowerCase = () => {
        if (text) {
            setText(text.toLowerCase())
        }
    };

    const handleClear = () => {
        if (text) {
            setText("")
        }
    };


    const handleRemoveSpaces = () => {
        let removedSpaceText = text.split(" ")
        removedSpaceText = removedSpaceText.filter((element) => {
            return element !== "";
        })

        removedSpaceText = removedSpaceText.join(" ")
        setText(removedSpaceText)

    };

    const onChangeTextArea = (e) => {
        setText(e.target.value)
        setTotalNumberOfWords(text)
        setTotalNumberOfLetters(text)
    };




    const handleCopyText = () => {

        navigator.clipboard.writeText(text.trim())

    };



    return (
        <>
            {/* container of body stores everything  */}
            <div className="container mx-auto mt-10">

                {/* THe heading */}
                <div className="text-3xl font-serif text-center ">Enter you text here</div>


                {/* textarea  */}
                <textarea value={text} name="" onChange={
                    (e) => {
                        onChangeTextArea(e)
                    }} className="bg-slate-200 w-[100%] h-80 resize-none " id="" cols="30" rows="10"></textarea>

                {/* all the buttons  */}
                <div className="allButtonInsideThis mt-3">

                    <button onClick={handleUppercase} className="capitalize mx-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Convert to uppercase </button>

                    <button onClick={handleLowerCase} className="capitalize mx-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">convert to lower case</button>

                    <button onClick={handleClear} className="capitalize mx-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">clear</button>

                    <button onClick={handleRemoveSpaces} className="capitalize mx-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">remove spaces</button>

                    <button onClick={handleCopyText} className="capitalize mx-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">copy text</button>


                </div>


                <div>

                    words : {text === "" ? 0 : totalNumberOfWords} and letters : {text === "" ? 0 : totalNumberOfLetters}

                </div>


            </div>



        </>
    )
}

export default TextArea