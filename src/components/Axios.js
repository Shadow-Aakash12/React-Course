import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './stylesheet/Axios.css'

const Axios = () => {
    
    const[meals,setMeals] = useState([])
    useEffect(() => {
      axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
          .then((res) => {
              setMeals(res.data.meals);
          })
    }, [])

  return (
    <div className='meal-box'>
        <h1>Using Axios to Fetch API in React JS</h1>
        <h3>Fetching Meals of user from API</h3>

        <h4>{meals && 
                meals.map((meal) => (
                    <h5 key={meal.idMeal}>{meal.strMeal}</h5>
                    ))
            }</h4>
        <div className='meal-box-1'>
            {meals &&
                        meals.map((meal) => (
                            <img key={meal.idMeal} src={meal.strMealThumb} alt={meal.strMeal} width={400} className='meal-box-img'/>
                            ))
                        }
            <h4>Instructions</h4>
            {   meals && 
                            meals.map((meal) => (
                                <p key={meal.idMeal}>{meal.strInstructions}</p>
                                ))
            }
            </div>
    </div>
  )
}

export default Axios