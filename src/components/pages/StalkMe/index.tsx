import React from 'react';

import Page from 'components/Page';
import Section from 'components/Section';

import css from './index.module.scss';

function StalkMe() {
  return (
    <Page header='stalk me' subheader='on social media'>
      <Section centered>
        <p>I am highly stalkable through various forms of social media, so stalk away!</p>
      </Section>
      <div className={css.contentWrapper}>
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
      </div>
    </Page>
  );
}

export default StalkMe;

interface ListProps {
  children: React.ReactNode;
  title: string;
}

const List = ({ children, title }: ListProps) => (
  <div className={css.listWrapper}>
    <h1>{title}</h1>
    <div>{children}</div>
  </div>
);

interface ListItemProps {
  href: string;
  icon: string;
  title: string;
}

const ListItem = ({ href, icon, title }: ListItemProps) => (
  <a className={css.listItemWrapper} href={href} target='_blank' rel='noopener noreferrer'>
    <i className={`fa fa-${icon}`} />
    <span>{title}</span>
  </a>
);
