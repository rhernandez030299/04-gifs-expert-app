import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  // const categories = ['One punch', 'Samurai', 'Dragon ball'];

  const [categories, setCategories] = useState(['One punch'])

  // const handleAdd = () => {
  //   setCategories([...categories, 'Naruto']);
  //   setCategories(cats => [...cats, 'Naruto2']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr />
      
      <ol>
        { 
          categories.map( category => 
            // <li key={category}>{category}</li>
            <GifGrid 
              key={category}
              category={category}
            />            
          )
        }        
      </ol>  
    </>
  )
};

export default GifExpertApp;