import { useRouter } from "next/router"
const [pageNo] = () => {
    const router = useRouter()
    const pageNumber = router.query.pageNo
  return (
    <div>{pageNumber}</div>
  )
}

export default [pageNo]