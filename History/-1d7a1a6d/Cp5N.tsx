import { useRef } from "react"


const DemoRef = (e) => {
    const myRef = useRef()
    const handler = () => {
        if (myRef.current.contains(e.target)) {

        }
    }

    return (
        <>
            <div ref={myRef.current}>

                <div onClick={() => handler(e)}>Nava</div>
                <div>Sahith</div>
                <div>Ganesh</div>
            </div>

        </>
    )
}

export default DemoRef