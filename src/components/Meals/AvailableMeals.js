import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/Mealitem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Pizza',
      description: 'A classic pepperoni',
      price: 10.99,
    },
    {
      id: 'm2',
      name: 'Risotto',
      description: 'Creamy chicken risotto',
      price: 15.99,
    },
    {
      id: 'm3',
      name: 'Ramen',
      description: 'Tonkotsu with an egg',
      price: 13.50,
    },
    {
      id: 'm4',
      name: 'Homemade Pie',
      description: 'Egg and bacon pie in a shortcrust pastry',
      price: 8.99,
    },
  ];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem 
      id={meal.id}
      key={meal.id} 
      name={meal.name} 
      description={meal.description} 
      price={meal.price}
    />
    )
    return (
      <section className={styles.meals}>
        <Card>
          <ul>
            {mealsList}
          </ul>
        </Card>                
      </section>
    );
};

export default AvailableMeals;