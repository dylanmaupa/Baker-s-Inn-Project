import ProductsHero from "../components/ProductsHero";
import useFetch from "../components/useFetch";

const Products = () => {
    const {data: Products,error,isLoading} = useFetch('http://localhost:7001/Products');
  return (
    <>
    {Products && Products.map(item => {
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