import React from "react";
import {Rows} from '../components'
import {VitaLink} from '../components/'
import MyButton from "../components/MyButton";

export default function Supplements(props) {
  const { supplements, handleDelete } = props;

  return (
    <div>
      <h3>Supplements</h3>
      {supplements.map((supplement) => (
        <React.Fragment key={supplement.id}>
          <Rows><VitaLink to={`/supplement/${supplement.id}`}>
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
          </Rows>
        </React.Fragment>
      ))}
      <br />
      <VitaLink to="/supplement/new">
        <MyButton>Create</MyButton>
      </VitaLink>
    </div>
  );
}
