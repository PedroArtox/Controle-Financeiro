import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
    padding-top: 15px;
    text-aling: ${(props) => (props.alignCenter ? 'center' : 'start')};
    word-break: break-all;

    svg {
        width: 18px;
        heigth: 18px;
    }
`;