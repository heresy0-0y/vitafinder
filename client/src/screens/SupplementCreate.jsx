import { useState } from "react";
import MyButton from "../components/MyButton";
import Select from "../components/Select"
import StyledInput from '../components/StyledInput'
import {StyledLabel} from '../components'

export default function SuplementCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    nutrition_StyledLabel_url: "",
    price: "",
    retail_url: "",
    brand_id: "",
  });
  const [required, setRequired] = useState(false)
  const {
    name,
    image_url,
    nutrition_StyledLabel_url,
    price,
    retail_url,
    brand_id,
  } = formData;
  const { handleCreate, brands } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (formData.brand_id) {
      setRequired(prevState => prevState = true)
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Create Supplement</h3>
      <StyledLabel htmlFor="supplement name">
        Name:
        </StyledLabel>
        <StyledInput type="text" name="name" value={name} onChange={handleChange} />
      
      <br />
      <StyledLabel>
        Brand:
        <Select
          defaultValue="default"
          value={brand_id}
          name="brand_id"
          onChange={handleChange}
        >
          <option value="default" disabled={required} >
            --Select a Brand--
          </option>
          {brands.map((brand) => (
            <option value={brand.id} key={brand.id}>
              {brand.name}
            </option>
          ))}
        </Select>
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
        Nutrition StyledLabel URL:
        <StyledInput
          type="text"
          name="nutrition_StyledLabel_url"
          value={nutrition_StyledLabel_url}
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
