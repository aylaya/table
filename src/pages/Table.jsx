import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import "./table.css";


function Table({setRoute}) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setRecipes(data.products))  
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Layout setRoute={setRoute}>
      <h1>Information about Products </h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="main-border">ID</th>
            <th className="main-border">Image</th>
            <th className="main-border">Name</th>
            <th className="main-border">Category</th>
            <th className="main-border">Brand</th>
            <th className="main-border">Discount Percentage</th>
            <th className="main-border">Rating</th>
            <th className="main-border">Price</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td className="borders">{recipe.id}</td>
              <td className="borders">
                <img src={recipe.thumbnail} alt={recipe.title} className="h-10 w-10 rounded-full" />
              </td>
              <td className="borders">{recipe.title}</td>
              <td className="borders">{recipe.category}</td>
              <td className="borders">{recipe.brand}</td>
              <td className="borders">{recipe.discountPercentage}</td>
              <td className="borders">{recipe.rating}</td>
              <td className="borders">{recipe.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default Table;
