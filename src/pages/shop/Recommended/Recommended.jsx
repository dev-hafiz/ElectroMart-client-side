/* eslint-disable react/prop-types */
import Button from "../../../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Apple" title="Apple" />
          <Button
            onClickHandler={handleClick}
            value="Microsoft"
            title="Microsoft"
          />
          <Button onClickHandler={handleClick} value="Amazon" title="Amazon" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
