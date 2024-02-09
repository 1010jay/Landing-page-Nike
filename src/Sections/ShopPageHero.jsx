import {products} from "../Constants"
import PopularProductCard  from "../Components/PopularProductCard"
const ShopPageHero = () => {
  return (
    <section className="w-full py-20 justify-center min-h-screen gap-10 max-container ">
      <div className="">
  <h1 className='mt-10 font-palanquin text-4xl font-bold'>Shop <span className="text-coral-red">Page</span></h1></div> <br />

  <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>


    </section>
  )
}

export default ShopPageHero