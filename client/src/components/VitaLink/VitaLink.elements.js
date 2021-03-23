import {Link} from 'react-router-dom'
import styled from "styled-components";
import {Container} from "../../globalStyles"

export const StyledLink = styled(Link)`
    padding: .3em .7em;
    text-shadow: .2px .2px .3px;
    color: #ffe8c4;
    text-decoration: none;
    :hover {
        color: cadetblue;
        cursor: pointer;
    }
`;

export const LinkContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
`