import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.div`
  background-color: #212121;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

const Brand = styled.div`
  cursor: pointer;
  color: white;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export default () => {
  return(
    <Nav>
      <Container>
      <Link to="/"><Brand><i className="fab fa-apple fa-lg"></i></Brand></Link>
        <Link to="/mac"><NavLink>Mac</NavLink></Link>
        <Link to="/ipad"><NavLink>iPad</NavLink></Link>
        <Link to="/iphone"><NavLink>iPhone</NavLink></Link>
        <Link to="/watch"><NavLink>Watch</NavLink></Link>
        <Link to="/tv"><NavLink>TV</NavLink></Link>
        <Link to="/music"><NavLink>Music</NavLink></Link>
        <Link to="/support"><NavLink>Support</NavLink></Link>
        <NavLink><i className="fas fa-search fa-lg"></i></NavLink>
        <NavLink><i className="fas fa-shopping-bag fa-lg"></i></NavLink>
      </Container>
    </Nav>
  );
}