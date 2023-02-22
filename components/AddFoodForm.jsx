import { Divider, Input } from 'antd';

function AddFoodForm(props) {
    return (
      <form>
        <Divider>Add Food Entry</Divider>
  
        <label>Name</label>
        <Input value={props.name} type="text" onChange={props.handleNameChange} />
  
        <label>Image</label>
        <Input value={props.image} type="text" onChange={props.handleNameChange} />
  
        <label>Calories</label>
        <Input value={props.calories} type="number" onChange={props.handleCaloriesChange}/>
  
        <label>Servings</label>
        <Input value={props.servings} type="number" onChange={props.handleServingsChange}/>
  
        <button type="submit">Create</button>
      </form>
    );
  }
  
  export default AddFoodForm;