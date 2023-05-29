import OurProducts from "../components/OurProducts";
import ProductsHero from "../components/ProductsHero";
import useFetch from "../components/useFetch";
import data from "../../database/db";

const Products = () => {
    // const {data: Products,error,isLoading} = useFetch('http://localhost:7001/Products');
  return (
    <>
    {data.Products && data.Products.map(item => {
        return(
            <>
            {item.content && item.content.map(item => {
                return(
                    <>
                    {item.hero && item.hero.map(hero => {
                        return(
                            <ProductsHero hero={hero} />
                        )
                    })}
                    {item.products && item.products.map(products => {
                        return(
                            <OurProducts products = {products} />
                        )
                    })}
                    </>
                )
            })}
            </>
        )
    })}
    </>
  )
}

export default Products