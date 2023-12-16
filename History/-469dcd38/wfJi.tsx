import { useState } from "react"

const Toast = () => {
    const [toastState, setToastState] = useState<boolean>(false)
    return (
        <>
            <div className={`${toastState ? "" : "hidde"} fixed rounded-md bg-blue-400 mb-10 bottom-0 left-11 `}>
                <div className="w-[30rem] h-[5rem]">
                    <span className="bg-white px-2 mt-1 mr-1 rounded-3xl float-right">x</span>
                    <div className="clear-both">  sahith</div>
                </div>
            </div >

        </>
    )
}

export default Toast