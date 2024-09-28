import './App.css'
import Header from './Components/Header/Header';
import Quote from './Components/QuotePage/Quote';
import QuotesArray from './Components/QuotePage/Quotes';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      {
        QuotesArray.map((Obj) => (
          <Quote 
            quote={Obj.quote} 
            author={Obj.author} 
            key={Obj.quote} 
          />
        ))
      }
      <Footer />
    </>
  );
}


export default App
