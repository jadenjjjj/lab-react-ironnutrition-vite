// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {

    const { foodList, setFilteredFoodList } = props;

    const handleSearch = (event) => {
        const { value } = event.target;

        const filteredList = foodList.filter((food) => 
        food.name.toLowerCase().includes(value.toLowerCase()));

        setFilteredFoodList(filteredList);
    };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;