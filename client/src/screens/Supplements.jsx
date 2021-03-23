import React from "react";
import { Link } from "react-router-dom";
import {VitaLink} from '../components/'
import MyButton from "../components/MyButton";

export default function Supplements(props) {
  const { supplements, handleDelete } = props;

  return (
    <div>
      <h3>Supplements</h3>
      {supplements.map((supplement) => (
        <React.Fragment key={supplement.id}>
          <VitaLink to={`/supplement/${supplement.id}`}>
            <p>{supplement.name}</p>
          </VitaLink>
          {
            <>
              <VitaLink to={`/supplement/${supplement.id}/edit`}>
                <MyButton>edit</MyButton>
              </VitaLink>
              <MyButton onClick={() => handleDelete(supplement.id)}>
                delete
              </MyButton>
            </>
          }
        </React.Fragment>
      ))}
      <br />
      <VitaLink to="/supplement/new">
        <MyButton>Create</MyButton>
      </VitaLink>
    </div>
  );
}
