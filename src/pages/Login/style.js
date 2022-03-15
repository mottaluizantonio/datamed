import styled from "styled-components";
import { Grey0, Grey3, Grey1 } from "../../styles/palette";
export const Content = styled.section`
    width: 100%;
    max-width: 370px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 42px 22px;
    background: ${Grey3};
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    gap: 34px;
`;
export const FooterBox = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 22px;
    box-sizing: border-box;
    label {
        font-weight: 600;
        font-size: 12px;
        color: ${Grey1};
    }
`;
