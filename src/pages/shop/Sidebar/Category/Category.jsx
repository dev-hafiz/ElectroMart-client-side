/* eslint-disable react/prop-types */
import Input from "../../../../components/Input";
import "./Category.css";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="smartwatch"
          title="Smart Watch"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="headphone"
          title="Head Phone"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="camera"
          title="camera"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
