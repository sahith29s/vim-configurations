import { useState } from "react"

const Toast = () => {
    const [toastState, setToastState] = useState<boolean>(false)
    return (
        <>


            {/* <div className={`${toastState ? "hidden " : " "}` fixed mb-10 bottom-0 left-11 }> */}
            <div className={ `${"sahith"}` "sahith man"}>
                <div className="bg-blue-400 w-[30rem] h-[5rem]">
                    <span className="bg-white px-2 mt-1 mr-1 rounded-3xl float-right">x</span>
                </div>
            </div >

        </>
    )
}

export default Toast