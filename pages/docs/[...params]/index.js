import { useRouter } from "next/router"
import DeafultErrorPage from "next/error"

const DocsDetail = () => {
  const router = useRouter()
  const { params = [] } = router.query

  if (params.length === 2) {
    return <h1>Viewing docs for {params[0]} and {params[1]}</h1>
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>
  } else {
    return <DeafultErrorPage statusCode={404} />
  }
}

export default DocsDetail