/* eslint-disable react/prop-types */
import "./TopCategoryCard.css";

const TopCategoryCard = ({ product }) => {
  const { img, stock, title } = product || {};
  return (
    <div className="category-card ">
      <div className="category-img">
        <img src={img} alt="icon" />
      </div>
      <div className="category-des">
        <p className="category-title">{title}</p>
        <p className="stock-des">{stock} Products</p>
        <button className="view-btn">View More</button>
      </div>
    </div>
  );
};

export default TopCategoryCard;
