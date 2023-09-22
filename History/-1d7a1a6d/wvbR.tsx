import { useRef } from "react"


const DemoRef = () => {
    const myRef : any = useRef(null)

    const handler = () => {
        if (myRef.current.contains(e.target)) {
        }
    }

    handler()


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