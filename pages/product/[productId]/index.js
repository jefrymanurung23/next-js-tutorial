import { useRouter } from "next/router"
import DefaultErrorPage from "next/error"

const ProductDetail = () => {
  const router = useRouter()
  const { productId } = router.query

  const isNumeric = (value) => {
    return /^-?\d+$/.test(value)
  }

  if (!isNumeric(productId) || productId < 0) {
    return <DefaultErrorPage statusCode={404}/>
  }
  return <h1>Product {productId}</h1>
}

export default ProductDetail
