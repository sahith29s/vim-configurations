import { useRef } from "react"


const DemoRef = () => {
    const myRef: any = useRef(null)
    const handler = () => {

        myRef.addEventListener("click", () => {
            console.log("sahith")
        })
    }


    return (
        <>
            <div ref={myRef}>

                <button onClick={handler}>Nava</button>
                <div>Sahith</div>
                <div>Ganesh</div>
            </div>

        </>
    )
}

export default DemoRef