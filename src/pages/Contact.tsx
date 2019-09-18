import * as React from 'react';
import styled from 'styled-components';

import Page from '../Page';
import Section from '../Section';
import SplitSection from '../helpers/SplitSection';

import useAutogrow from '../helpers/hooks/useAutogrow';

const { memo } = React;

const Contact: React.FC = memo(() => (
  <Page header="contact" subheader="Robert Messerle">
    <Section>
      <SplitSection>
        <Field label="Your name" placeholder="John Doe" type="text" />
        <Field
          label="Your email"
          placeholder="john.doe@domain.com"
          type="email"
        />
      </SplitSection>
      <Field label="Your message" type="textarea" />
      <SplitSection>
        <InputButton type="reset" value="Clear" />
        <InputButton type="submit" value="Send" />
      </SplitSection>
    </Section>
  </Page>
));

export default Contact;

interface TextInputProps {
  label: string;
  placeholder?: string;
  type: 'text' | 'textarea' | 'email';
}
const Field: React.FC<TextInputProps> = memo(({ label, placeholder, type }) => {
  const autogrowRef = useAutogrow();

  return (
    <Label>
      <span>{label}</span>
      {type === 'textarea' ? (
        <TextArea ref={autogrowRef} />
      ) : (
        <Input type={type} placeholder={placeholder} />
      )}
    </Label>
  );
});

const Label = styled.label`
  display: block;

  & > span {
    padding: 0 0 5px;
    font-family: var(--header-font);
    font-size: 18px;
    font-weight: normal;
    color: var(--dark-blue);
  }
`;

const Input = styled.input`
  display: block;
  border: 1px solid var(--medium-blue);
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  line-height: 40px;
  outline: none;
  letter-spacing: 0.12em;
  font-family: var(--body-font);
  font-size: 12px;
  color: var(--dark-blue);
  text-transform: uppercase;
  margin: 0 0 30px;

  &::-webkit-input-placeholder {
    color: var(--light-blue);
  }

  @media (max-width: 800px) {
    background: var(--background-lighter-blue);
    color: var(--lighter-blue);
  }
`;

const TextArea = styled.textarea`
  display: block;
  border: 1px solid var(--medium-blue);
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  line-height: 40px;
  outline: none;
  letter-spacing: 0.12em;
  font-family: var(--body-font);
  font-size: 12px;
  color: var(--dark-blue);
  text-transform: uppercase;
  margin: 0 0 30px;
  resize: none;
  overflow: hidden;
  min-height: 80px;

  @media (max-width: 800px) {
    background: var(--background-lighter-blue);
    color: var(--lighter-blue);
  }
`;

const InputButton = styled.input`
  background: transparent;
  border: 1px solid var(--medium-blue);
  color: var(--medium-blue);
  padding: 0;
  font-family: var(--header-font);
  font-size: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  box-shadow: none;
  text-shadow: none;
  line-height: 40px;
  -webkit-appearance: none;
  transition: 0.15s;
  cursor: pointer;

  &[type='submit'] {
    background: var(--medium-blue);
    color: white;
  }
`;
