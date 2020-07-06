import React, { useState, useEffect } from 'react';
import { Wrapper, Card, Templates, Form, Button } from './styles';
import logo from '../../images/logo.svg';

export default function Home() {
  const [templates, setTemplates ] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch('https://api.imgflip.com/get_memes');
      const { data: { memes } } = await resp.json();
      setTemplates(memes)
    })();
  }, []);

  const handleInputChange = (index) => (e) => {
    const newValues = boxes;
    newValues[index] = e.target.value;
    setBoxes(newValues); 
  };

  function handleSelectTemplate(template) {
    setSelectedTemplate(template);
    setBoxes([]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const params = {
      template_id: selectedTemplate.id,
      username: 'leozinho123',
      password: 'cid123456',
      boxes: boxes.map(text => ({ text })),
    }
  }
  return (
    <Wrapper>
      <img src={logo} alt="memeMaker"/>
      <Card>
        <h1> Selecione um template</h1>
        <Templates>
          {templates.map((template) =>(
            <button
              type="button"
              key={template.id}
              onClick={() => handleSelectTemplate(template)}
              className={template.id === selectedTemplate?.id ? 'selected' : ''}
            >
              <img src={template.url} alt={template.name}></img>
            </button>
          ))}
        </Templates>

        <h2>Textos</h2>
        <Form onSubmit={handleSubmit}>
          {selectedTemplate && (
            <>
              {( new Array(selectedTemplate.box_count)).fill('').map((_, index) => (
                <input
                  key={String(Math.random())}
                  type="text" placeholder={`Text #${index+1}`}
                  onChange={handleInputChange(index)}
                />
              ))}

              <Button type="submit">MakeMyMeme!</Button>
            </>
          )}
        </Form>
      </Card>
    </Wrapper>
  );
};