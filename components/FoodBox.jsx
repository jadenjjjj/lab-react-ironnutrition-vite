// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
const { name, image, calories, servings} = props.food;
const { onDelete } = props;

const handleDelete = () => {
  onDelete(props.food);
}

  return (
    <Col>
      <Card
        title={ name }
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={ image } height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} kcal </b>
        </p>
        <Button type="primary" onClick={handleDelete}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
