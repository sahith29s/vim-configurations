import { useRef } from "react"


const DemoRef = () => {
    const myRef : any = useRef(null)

    const handler = (e : any) => {
        // if (myRef.current.contains(e.target)) {

        // }
        myRef.addEventListener("click" , () =>{
            console.log("sahith")
        })
    }
    // console.log(myRef.current.contains)


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