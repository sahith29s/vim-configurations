import { useRef } from "react"


const DemoRef = () => {
    const myRef: any = useRef()
    const handler = () => {
        // myRef.current.value = "sahith"
        console.log(myRef.current.innerHTML)

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