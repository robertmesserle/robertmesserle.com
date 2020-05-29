import React from 'react';
import styled from 'styled-components';

import Page from 'components/Page';
import Section from 'components/Section';

function StalkMe() {
  return (
    <Page header='stalk me' subheader='on social media'>
      <Section centered>
        <p>I am highly stalkable through various forms of social media, so stalk away!</p>
      </Section>
      <ContentWrapper>
        <List title='Personal'>
          <ListItem href='http://facebook.com/robert.messerle' icon='facebook' title='Facebook' />
          <ListItem href='http://twitter.com/Bobbo_O' icon='twitter' title='Twitter' />
          <ListItem href='http://steamcommunity.com/id/domifer/' icon='steam' title='Steam' />
          <ListItem
            href='https://www.flickr.com/photos/robertmesserle/'
            icon='flickr'
            title='Flickr'
          />
        </List>
        <List title='Professional'>
          <ListItem href='https://github.com/robertmesserle' icon='github' title='Github' />
          <ListItem href='https://codepen.io/robertmesserle' icon='codepen' title='CodePen' />
          <ListItem
            href='https://www.linkedin.com/in/robertmesserle'
            icon='linkedin'
            title='LinkedIn'
          />
          <ListItem
            href='http://stackoverflow.com/users/1200182/robert-messerle'
            icon='stack-overflow'
            title='StackOverflow'
          />
        </List>
      </ContentWrapper>
    </Page>
  );
}

export default StalkMe;

const ContentWrapper = styled.div`
  overflow: hidden;
  margin-top: 50px;
`;

interface ListProps {
  children: React.ReactNode;
  title: string;
}

const List = ({ children, title }: ListProps) => (
  <ListWrapper>
    <h1>{title}</h1>
    <div>{children}</div>
  </ListWrapper>
);

const ListWrapper = styled.div`
  font-family: var(--body-font);
  text-transform: uppercase;
  color: var(--dark-blue);
  text-align: center;

  & + & {
    margin-top: 50px;
  }

  & > h1 {
    font-family: var(--body-font);
    font-weight: 700;
    font-size: 18px;
    margin: 0 0 30px;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-column-gap: 10px;
    grid-row-gap: 30px;
    width: 430px;
    margin: 0 auto;
    @media (max-width: 470px) {
      grid-template-columns: repeat(2, 100px);
      width: 210px;
    }
  }

  @media (max-width: 800px) {
    padding-bottom: 50px;
    padding-top: 0;
    color: var(--lighter-blue);
  }
`;

interface ListItemProps {
  href: string;
  icon: string;
  title: string;
}

const ListItem = ({ href, icon, title }: ListItemProps) => (
  <ListItemWrapper href={href} target='_blank'>
    <i className={`fa fa-${icon}`} />
    <span>{title}</span>
  </ListItemWrapper>
);

const ListItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  color: var(--dark-blue);
  transition: 175ms ease-out;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  text-align: center;

  &:hover {
    transform: scale(1.2);
    i.fa {
      background-color: var(--background-lighter-blue);
      box-shadow: 0 0 5px var(--light-blue);
    }
  }

  i.fa {
    width: 75px;
    height: 75px;
    line-height: 75px;
    text-align: center;
    transition: ease-in 175ms;
    transition-delay: 90ms;
    font-size: 34px;
    border-radius: 50%;
    border: 1px solid var(--light-blue);
    margin-bottom: 5px;
  }

  span {
    font-family: var(--header-font);
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.12em;
  }

  @media (max-width: 800px) {
    color: var(--lighter-blue);
  }
`;
