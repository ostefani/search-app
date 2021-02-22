import styled from 'styled-components';
import Search from 'public/search.svg';

const Container = styled.div.attrs(() => ({ className: 'dropdown-container' }))`
  position: absolute;
  top: 100%;
  left: initial;
  right: 0;
  width: 0;
  margin: 8px 0;
  max-height: ${({ maxHeight }) => maxHeight}px;
  background: ${({ theme: { colors: { dropdownColor } } }) => dropdownColor};
  color: ${({ theme: { colors: { primary } } }) => primary};
  overflow: hidden;
  opacity: 0;
  min-width: 100%;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  transition: box-shadow 0.5s ease, opacity 0.5s ease, width 0.5s ease, max-height .5s ease;
  border-radius: 4px;
  z-index: 4;

  ${({ isActive }) => isActive && (`
    opacity: 1;
    width: 100px;
  `)};
`;

const Items = styled.ul.attrs(() => ({ className: 'dropdown-list' }))`
  padding-left: 0;
  margin: 0 auto;
  list-style: none;
`;

const Item = styled.li.attrs(() => ({ className: 'dropdown-item', 'aria-label': 'search-option' }))`
  padding: 5px;
  cursor: pointer;
  outline: none;
  transition: color .3s ease;
  padding: 20px 20px 20px 48px;
  border-bottom: 1px solid ${({ theme: { colors: { primary } } }) => primary};
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-position: left 16px center;
  background-size: 16px 16px;
  font-size: 1.3rem;

  &:hover, &:focus {
    color: ${({ theme: { colors: { active } } }) => active};
    transition: color .3s ease;
  }
`;

export {
    Container,
    Items,
    Item,
};
