import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 5%;
    padding: 8px;
    border-bottom: solid 1px black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    h1 {
        font-size: 20px;
    }

    `

export const Menu = styled.ul`
    margin: 0px;
    width: 30%;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: black;
        font-weight: 600;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`