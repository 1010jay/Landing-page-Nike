import Nav from "./Components/Nav"
import Footer from "./Sections/Footer"
import ShopPageHero from "./Sections/ShopPageHero";



const Shop=() => {
    return (
        
        <main className="Relative">
            <Nav/>

            <section className="xl:padding-1 wide:padding-b">
                
                <ShopPageHero/>
            </section>

            <section className="bg-black padding-x padding-t pb-8">
                <Footer/>

            </section>
        </main>
        
        
    );
}

export default Shop;