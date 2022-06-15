import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/Mealitem';
import { useCallback, useEffect, useState } from 'react';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {

    const fetchMealsHandler = async () => {

      setIsLoading(true);
      
      const response = await fetch('https://react-food-ordering-app-9d7a9-default-rtdb.firebaseio.com/meals.json');

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }  

        const responseData = await response.json(); //Returns an object but we want an array

        console.log("Response Data: ", responseData);

        const loadedMeals = [];

        //For loop to transfer data from an object to an array.
        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
        setMeals(loadedMeals);
        setIsLoading(false);
    };

    fetchMealsHandler().catch(error => {
      setIsLoading(false);
      setHttpError(error.message)
    });

  }, []);

  if (isLoading) {
    return (
    <section className={styles.mealsLoading}>
      <p>Loading...</p>
    </section>
    );
  };

  if (httpError) {
    return (
      <section className={styles.mealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

    const mealsList = meals.map(meal => 
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