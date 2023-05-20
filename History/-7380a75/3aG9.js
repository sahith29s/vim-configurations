import { useRouter } from "next/router"

const error= () => {
  const router = useRouter()
  const man = ()=>{
    router.push("/")
  }
  return (
    <div onClick={man}>
      home
    </div>
  )
}

export default error