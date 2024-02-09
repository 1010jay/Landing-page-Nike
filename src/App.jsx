import {  CustomerReviews, Hero, Footer, PopularProduct, Services, SpecialOffer, Subscribe, SuperQuality} from './Sections';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './shop';
import Nav from './Components/nav';


const LandingPage = () => (
  <main className="Relative">
      <Nav />

      <section className="xl:padding-1 wide:padding-b">
          <Hero />
      </section>
      <section className="padding">
          <PopularProduct />
      </section>
      <section className="padding">
          <SuperQuality />
      </section>
      <section className="padding-x py-10">
          <Services />
      </section>
      <section className="padding">
          <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
          <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
          <Footer />
      </section>
  </main>
);

const App = () => (
  <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Shop />} />
          {/* Add more routes as needed */}
      </Routes>
  </Router>
);
/* const App =() =>(
  <main className="Relative">
    <Nav/>
    
    <section className="xl:padding-1 wide:padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProduct/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>

  </main>
); */

export default App;