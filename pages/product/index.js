import Link from "next/link"

const Product = () => {
  return (
    <div>
      <Link href="./product/1">
        <a>
          <h1>
            Product 1
          </h1>
        </a>
      </Link>
      <Link href="./product/2">
        <a>
          <h1>
            Product 2
          </h1>
        </a>
      </Link>
      <Link href="./product/3">
        <a>
          <h1>
            Product 3
          </h1>
        </a>
      </Link>
    </div>
  )
}

export default Product
