import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Piece Anime",
    "Dragon Ball",
  ]);

  const onAddCategory = (newCategory) => {
    // setCategories([...categories, "New Category"]);
    // setCategories((prevCategories) => [...prevCategories, "New Category"]);

    // Prevent duplicate categories
    const duplicateCategory = categories.find(
      (category) => category.toLowerCase() === newCategory.toLowerCase()
    );

    if (duplicateCategory) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={onAddCategory}
        // setCategories={setCategories}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
