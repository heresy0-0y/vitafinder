import { useState, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import {
  destroySupplement,
  getSupplements,
  postSupplement,
  putSupplement,
} from "../services/supplements";
import { addVitaminToSupplement, getAmountOfVitaPerServing } from "../services/vitaminsSupplements";
import { getVitamins } from "../services/vitamins";
import { getBrands } from "../services/brands";
import Supplements from "../screens/Supplements";
import Vitamins from "../screens/Vitamins";
import Brands from "../screens/Brands";
// import MyButton from "../components/MyButton";
import SupplementCreate from "../screens/SupplementCreate";
import SupplementEdit from "../screens/SupplementEdit";
import SupplementDetail from "../screens/SupplementDetail";

export default function MainContainer(props) {
  const [supplements, setSupplements] = useState([]);
  const [vitamins, setVitamins] = useState([]);
  const [brands, setBrands] = useState([]);
  const [amountsPerServing, setAmountsPerServing] = useState([]);
  const history = useHistory();
  // const {currentUser} = props

  useEffect(() => {
    const fetchSupplements = async () => {
      const supplements = await getSupplements();
      setSupplements(supplements);
    };
    fetchSupplements();
  }, []);

  useEffect(() => {
    const fetchVitamins = async () => {
      const vitamins = await getVitamins();
      setVitamins(vitamins);
    };
    fetchVitamins();
  }, []);

  useEffect(() => {
    const fetchBrands = async () => {
      const brands = await getBrands();
      setBrands(brands);
    };
    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchAmountsPerServing = async () => {
      const amounts = await getAmountOfVitaPerServing();
      setAmountsPerServing(amounts)
    }
    fetchAmountsPerServing()
  }, [])

  const handleCreate = async (formData) => {
    const newSupplement = await postSupplement(formData);
    setSupplements((prevState) => [...prevState, newSupplement]);
    history.push("/supplements");
  };

  const handleDelete = async (id) => {
    await destroySupplement(id);
    setSupplements((prevState) =>
      prevState.filter((supplement) => supplement.id !== id)
    );
    history.push(`/supplements`)
  };

  const handleUpdate = async (id, formData) => {
    const updatedSupplement = await putSupplement(id, formData);
    setSupplements((prevState) =>
      prevState.map((supplement) => {
        return supplement.id === Number(id) ? updatedSupplement : supplement;
      })
    );
    history.push("/supplements");
  };

  const addVitaServing = async (vitaminData) => {
    const newAmountPerSeving = await addVitaminToSupplement(vitaminData);
    setAmountsPerServing((prevState) => [...prevState, newAmountPerSeving])
    history.push(`/supplement/${vitaminData.supplement_id}`);
  };

  return (
    <Switch>
      <Route path="/supplement/new">
        <SupplementCreate handleCreate={handleCreate} brands={brands} />
      </Route>
      <Route path="/supplement/:id/edit">
        <SupplementEdit
          supplements={supplements}
          handleUpdate={handleUpdate}
          brands={brands}
        />
      </Route>
      <Route path="/supplement/:id">
        <SupplementDetail
          vitamins={vitamins}
          brands={brands}
          addVitaServing={addVitaServing}
          amountsPerServing={amountsPerServing}
        />
      </Route>
      {/* change route back to /supplements when theres a home/landing page */}
      <Route path="/">
        <Supplements
          supplements={supplements}
          handleDelete={handleDelete}
          brands={brands}
        />
      </Route>
      <Route path="/vitamins">
        <Vitamins vitamins={vitamins} />
      </Route>
      <Route path="/brands">
        <Brands brands={brands} />
      </Route>
    </Switch>
  );
}
