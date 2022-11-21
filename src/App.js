import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className="card--list">
      {cards}
      </section>
    </div>
  );
}

export default App;
