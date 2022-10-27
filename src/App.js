import './App.css';
import data from './components/data'
import React,{ useState } from 'react';
import Tours from './components/tours';

function App() {
const [tour,setTour] = useState(data);

const removeItem = (id) => {
 const newTours = tour.filter ((tour) => tour.id !== id);
 setTour(newTours);

};

if (tour.length ==0) {
  return(
    <div className='App'>
      <h1>No Tours left</h1>
      <button onClick={() => setTour(data)}>Refresh</button>
    </div>
  )
 };

  return (
    <div className="App">
    <h1>{tour.length} tours today</h1>
    <Tours tour={tour} removeItem = {removeItem}/>
    <button className='btn-clear' onClick={() => setTour([])}>Clear All</button>
    </div>
  );
}

export default App;
