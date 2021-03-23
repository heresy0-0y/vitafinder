import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyButton from "../components/MyButton";
import Select from "../components/Select"
import StyledInput from '../components/StyledInput'
import {StyledLabel} from '../components'

export default function SuplementEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    nutrition_label_url: "",
    price: "",
    retail_url: "",
    brand_id: "",
  });
  const {
    name,
    image_url,
    nutrition_label_url,
    price,
    retail_url,
    brand_id,
  } = formData;
  const { supplements, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const supplementItem = supplements.find(
        (supplement) => supplement.id === Number(id)
      );
      setFormData({
        name: supplementItem.name,
        price: supplementItem.price,
        image_url: supplementItem.image_url,
        nutrition_label_url: supplementItem.nutrition_label_url,
        retail_url: supplementItem.retail_url,
      });
    };
    if (supplements.length) {
      prefillFormData();
    }
  }, [supplements, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3>Edit Supplement</h3>
      <StyledLabel>
        Name:
        <StyledInput type="text" name="name" value={name} onChange={handleChange} />
      </StyledLabel>
      <br />
      <StyledLabel>
        Price:
        <StyledInput
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </StyledLabel>
      <br />
      <StyledLabel>
        Image URL:
        <StyledInput
          type="text"
          name="image_url"
          value={image_url}
          onChange={handleChange}
        />
      </StyledLabel>
      <br />
      <StyledLabel>
        Nutrition Label URL:
        <StyledInput
          type="text"
          name="nutrition_label_url"
          value={nutrition_label_url}
          onChange={handleChange}
        />
      </StyledLabel>
      <br />
      <StyledLabel>
        Retail URL:
        <StyledInput
          type="text"
          name="retail_url"
          value={retail_url}
          onChange={handleChange}
        />
      </StyledLabel>
      <br />
      <MyButton>Submit</MyButton>
    </form>
  );
}
