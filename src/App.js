 import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceCard  from './priceCard';

function App() {
 
  let priceCard =[
{
title :'Free',
price : 0
},
{
  title :'plus',
  price : 29
  },
  {
    title :'pro',
    price : 49
    }
  ]

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">

      {
priceCard.map((card) => {
   return <PriceCard></PriceCard>
})

      }

        </div>
      </div>
    </section>



  );
}

export default App;
