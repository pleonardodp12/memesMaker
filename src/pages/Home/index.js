import React from 'react';
import { Wrapper, Card, Templates } from './styles';
import logo from '../../images/logo.svg';

export default function Home() {
  return (
    < Wrapper>
      <img src={logo} alt="memeMaker"/>
      <Card>
        <h1> Selecione um template</h1>
        <Templates>
          <button type="button">
            <img src="" alt="Template 1"></img>
          </button>
          <button type="button">
            <img src="" alt="Template 1"></img>
          </button>
          <button type="button">
            <img src="" alt="Template 1"></img>
          </button>
          <button type="button">
            <img src="" alt="Template 1"></img>
          </button>
        </Templates>
      </Card>
    </Wrapper>
  );
};