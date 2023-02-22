import { useState } from 'react';
import { Row, Button, Empty } from 'antd';
import './App.css';
import foods from './foods.json';
import FoodBox from '../components/FoodBox';
import AddFoodForm from '../components/AddFoodForm';
import Search from '../components/Search';


function App() {
  //const [count, setCount] = useState(0);
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foodList); 
  const [showAddFoodForm, setShowAddFoodForm] = useState(false);

  const handleAddFood = (food) => {
    setFoodList((prevFoodList) => [...prevFoodList, food]);
    setFilteredFoodList((prevFoodList) => [...prevFoodList, food]);
    setShowAddFoodForm(false);
  }

  const handleDeleteFood = (food) => {
      setFoodList((prevFoodlIst) => prevFoodlIst.filter((item) => item.name !== food.name));
      setFilteredFoodList((prevFilteredFoodList) => prevFilteredFoodList.filter((item) => item.name !== food.name));
    };
  
  const handleShowAddFoodForm = () => {
    setShowAddFoodForm(true);
  }

  const handleHideAddFoodForm = () => {
    setShowAddFoodForm(false);
  }

  return (
    <div className="App">
      
      <Search foodList={foodList} setFilteredFoodList={setFilteredFoodList} />

      {filteredFoodList.length === 0 
      ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No items to display" />
      
      :<Row gutter={[8, 8]}>
        {filteredFoodList.map((food, index) => (
          <FoodBox key={index} food={food} onDelete={handleDeleteFood} />
        ))}
      </Row>
      }
      {showAddFoodForm ? (<AddFoodForm onAddFood={handleAddFood} onCalcel={ handleHideAddFoodForm }/>)
                       : (<Button type='primary' onClick={handleShowAddFoodForm}>
                          ADD New Food
                       </Button>)}

      {showAddFoodForm && (
        <Button type="primary" onClick={handleHideAddFoodForm}>
          Hide form
        </Button>
      )}
    </div>
  )
}

export default App
