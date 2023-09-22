import { useRef } from "react"


const DemoRef = () => {
    const myRef = useRef()
    return (
        <>

            <div ref={myRef}>

                <div>Nava</div>
                <div>Sahith</div>
                <div>Ganesh</div>
            </div>

        </>
    )
}

export default DemoRef