import { useRouter } from "next/router"
import DefaultErrorPage from "next/error"

const ReviewDetail = () => {
  const router = useRouter()
  const { productId, reviewId } = router.query

  const isNumeric = (value) => {
    return /^-?\d+$/.test(value)
  }

  if (!isNumeric(reviewId) || reviewId < 0) {
    return <DefaultErrorPage statusCode={404}/>
  }
  return <h1>Review {reviewId} from Product {productId}</h1>
}

export default ReviewDetail
