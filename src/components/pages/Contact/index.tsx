import React from 'react';

import Page from 'components/Page';
import Section from 'components/Section';
import SplitSection from 'components/SplitSection';

import useAutogrow from 'hooks/useAutogrow';
import css from './index.module.scss';

const Contact: React.FC = () => (
  <Page header='contact' subheader='Robert Messerle'>
    <Section>
      <SplitSection>
        <Field label='Your name' placeholder='John Doe' type='text' />
        <Field label='Your email' placeholder='john.doe@domain.com' type='email' />
      </SplitSection>
      <Field label='Your message' type='textarea' />
      <SplitSection>
        <input className={css.inputButton} type='reset' value='Clear' />
        <input className={css.inputButton} type='submit' value='Send' />
      </SplitSection>
    </Section>
  </Page>
);

export default Contact;

interface TextInputProps {
  label: string;
  placeholder?: string;
  type: 'text' | 'textarea' | 'email';
}
const Field: React.FC<TextInputProps> = ({ label, placeholder, type }) => {
  const autogrowRef = useAutogrow();

  return (
    <label className={css.label}>
      <span>{label}</span>
      {type === 'textarea' ? (
        <textarea className={css.textArea} ref={autogrowRef} />
      ) : (
        <input className={css.input} type={type} placeholder={placeholder} />
      )}
    </label>
  );
};
