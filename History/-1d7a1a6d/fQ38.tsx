import { useRef } from "react"


const DemoRef = () => {
    const myRef : any = useRef(null)

    const handler = (e : any) => {
        console.log(myRef.current.contains)
        if (myRef.current.contains(e.target)) {
            
        }
    }

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