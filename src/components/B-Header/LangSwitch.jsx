import React, { useState } from 'react';
import Toggler from 'components/common/Toggler';
import styled, { keyframes } from 'styled-components';
import { store } from 'configureStore';
import { toggleLang } from 'actions/toggleLang.actions';
import { PolskaFlaga } from 'img/index';
import { EnglishFlag } from 'img/index';

const appear = keyframes`
  0% {
        display: none;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
`;

const Wrapper = styled.div`
  animation: ${appear} 1s ease-out;
`;

export default function LangSwitch() {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(!checked);
    store.dispatch(toggleLang(checked));
  };

  return (
    <Wrapper>
      <Toggler
        checkedImg={EnglishFlag}
        uncheckedImg={PolskaFlaga}
        onChange={onChange}
        checked={checked}
      ></Toggler>
    </Wrapper>
  );
}
