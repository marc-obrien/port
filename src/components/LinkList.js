import React, { PureComponent } from 'react';

import styled from 'styled-components';

const ListContainer = styled.ul `
  padding: 1rem 2rem 0 1rem;
  list-style: none;
  @media (max-width: 700px) {
    padding: 0 1.5rem 0 1rem;
    min-width: 0;
  }
`
const ListItem = styled.li `
  display: inline-block;
  margin-right: 1.5rem;
  color: #6B6B6B;
  cursor: pointer;

  @media (max-width: 700px) {
    display: block;
    margin: 1rem 0;
  }

  &:hover {
    color: #ffffff;
  }

  &::before {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }

  transition: color 300ms;

`

class LinkList extends PureComponent {

  render() {
    return (
      <ListContainer>
        <a href='https://www.linkedin.com/in/marcobrien2/' target="_blank">
          <ListItem className='icon-linkedin'>
            <p>LinkedIn</p>
          </ListItem>
        </a>
        <a href='https://github.com/marcosfdev' target="_blank">
          <ListItem className='icon-github'>
            <p>GitHub</p>
          </ListItem>
        </a>
        <a href='mailto:marcobrien11@gmail.com'>
          <ListItem className='icon-envelop'>
            <p>Email</p>
          </ListItem>
        </a>
      </ListContainer>
    )
  }
}

export default LinkList
