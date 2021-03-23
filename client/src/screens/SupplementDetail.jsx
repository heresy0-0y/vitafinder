import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSupplement } from "../services/supplements";
import MyButton from "../components/MyButton";
import Select from "../components/Select"
import StyledInput from '../components/StyledInput'
import {StyledLabel} from '../components'
import {Rows} from '../components'

export default function SupplementDetail(props) {
  const [supplementItem, setSupplementItem] = useState(null);
  const [vitaminAmounts,setVitaminAmounts] = useState([])
  const [vitaminAmount, setVitaminAmount] = useState({
    vitamin_id: "",
    weight: "",
    units: "",
    supplement_id: "" 
  });
  const { vitamin_id, weight, units, supplement_id } = vitaminAmount;
  const { id } = useParams();
  const { vitamins, addVitaServing, amountsPerServing } = props;

  useEffect(() => {
    const fetchSupplementItem = async () => {
      const supplementData = await getSupplement(id);
      setSupplementItem(supplementData);
      setVitaminAmount(prevstate => ({
        ...prevstate,
        supplement_id: id}))
    };
    fetchSupplementItem();
  }, [id, amountsPerServing]);

  useEffect(()=> {
    const supplementAmounts = amountsPerServing.filter((amounts) => {
      return Number(supplement_id) === Number(id)
    })
    setVitaminAmounts(supplementAmounts)
    console.log(supplementAmounts);
  },[supplement_id, id, amountsPerServing])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVitaminAmount((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addVitaServing(vitaminAmount);
  };

  return (
    <div>
      <h3>{supplementItem?.name}</h3>
      <h2>{supplementItem?.price}</h2>
      {vitaminAmounts.map(amount =>
        (
          <h5>{vitamins.find((vitamin)=> (vitamin.id===(amount.vitamin_id))).name} {amount.weight} {amount.units}</h5>
        ))}
      <form onSubmit={handleSubmit}>
        <Rows><StyledLabel htmlFor="vitamin"></StyledLabel>
        <Select
          defaultValue="default"
          name="vitamin_id"
          value={vitamin_id}
          onChange={handleChange}
        >
          <option value="default">
            --Select a Vitamin--
          </option>
          {vitamins.map((vitamin) => (
            <option value={vitamin.id} key={vitamin.id}>
              {vitamin.name}
            </option>
          ))}
        </Select>
        
        <StyledLabel htmlFor="amount per serving, milligrams">
          Amount per serving (in 
          <Select defaultValue="default" name="units" value={units} onChange={handleChange}>
            <option value="default">-units-</option>
            <option value="milligrams">milligrams</option>
            <option value="micrograms">micrograms</option>
          </Select>):
          <StyledInput
            onChange={handleChange}
            type="number"
            name="weight"
            value={weight}
          />
        </StyledLabel>
        <MyButton>add</MyButton>
        </Rows>
      </form>
    </div>
  );
}
