import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Explore from './Components/Explore/Explore';
import '@fortawesome/fontawesome-free/css/all.css';
import Search from './Components/Search/Search';
import Offerings from './Components/Offerings/Offerings';
import Places from './Components/Places/Places';
import Seamlesstravel from './Components/Seamlesstravel/Seamlesstravel';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';



const App = () => {
  return (
    <div>
      <Header/>
      <Search/>
      <Explore/>
      <Offerings/>
      <Places/>
      <Seamlesstravel/>
      <Testimonial/>
      <Footer/>
      
    </div>
  )
}

export default App