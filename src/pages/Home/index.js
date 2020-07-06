import React from 'react';
import { Wrapper, Card, Templates, Form, Button } from './styles';
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

        <h2>Textos</h2>
        <Form>
          <input type="text" placeholder=" Texto #1" />
          <input type="text" placeholder=" Texto #1" />
          <input type="text" placeholder=" Texto #1" />

          <Button type="submit">MakeMyMeme!</Button>
        </Form>
      </Card>
    </Wrapper>
  );
};