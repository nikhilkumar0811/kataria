import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ image, title, subtitle }) => {
  return (
    <div className="category-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <button>Shop Now</button>
    </div>
  );
};

export default CategoryCard;
