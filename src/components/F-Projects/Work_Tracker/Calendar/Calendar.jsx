import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RotaTable from '../RotaTable/RotaTable';
import RotaEdit from '../RotaEdit/RotaEdit';

const RotaWrapper = styled.div`

`

export default function Calendar() {

  const [edit, setEdit] = useState(false);

  const handleEditClick = () => {
    setEdit((edit) => !edit);
  };

  return (
    <RotaWrapper>
      { edit ? <RotaEdit Edit={handleEditClick}  ></RotaEdit> : <RotaTable Edit={handleEditClick} ></RotaTable>}
    </RotaWrapper>
  );
}
