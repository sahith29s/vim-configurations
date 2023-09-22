import { useRef } from "react"


const DemoRef = () => {
    const myRef: any = useRef(null)

    myRef.addEventListener("click", () => {
        console.log("sahith")
    })


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