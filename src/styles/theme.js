import styled from "styled-components";
import { primary, primaryFocus, negative, Grey0, Grey1, Grey2, Grey3, Grey4 } from "./palette";
const getColorsPalette = (retorno, bgColor) => {
    let palette = {};
    switch (bgColor) {
        case "primary": {
            palette.background = primary;
            palette.hover = primaryFocus;
            palette.disable = Grey1;
            palette.disableHover = Grey2;
            return palette[retorno];
        }
        case "Grey1": {
            palette.background = Grey1;
            palette.hover = Grey2;
            palette.disable = Grey3;
            palette.disableHover = Grey2;
            return palette[retorno];
        }
        case "Grey2": {
            palette.background = Grey2;
            palette.hover = Grey3;
            palette.disable = Grey3;
            palette.disableHover = Grey2;
            return palette[retorno];
        }
        case "Grey3": {
            palette.background = Grey3;
            palette.hover = Grey2;
            palette.disable = Grey1;
            palette.disableHover = Grey2;
            return palette[retorno];
        }
        case "Grey4": {
            palette.background = Grey4;
            palette.hover = Grey3;
            palette.disable = Grey2;
            palette.disableHover = Grey3;
            return palette[retorno];
        }
        case "negative": {
            palette.background = negative;
            palette.hover = negative;
            palette.disable = negative;
            palette.disableHover = negative;
            return palette[retorno];
        }
        case "transparent": {
            palette.background = "transparent";
            palette.hover = "transparent";
            palette.disable = "transparent";
            palette.disableHover = "transparent";
            return palette[retorno];
        }
        default: {
            palette.background = bgColor;
            palette.hover = bgColor;
            palette.disable = bgColor;
            palette.disableHover = bgColor;
            return palette[retorno];
        }
    }
};
export const Container = styled.main`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: 100vw;
    height: 100vh;
    position: ${({ style }) => (!!style?.zIndex ? style.zIndex : "absolute")};
    z-index: ${({ style }) => (!!style?.zIndex ? style.zIndex : 0)};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : "40px 0 45px 0")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "center")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "15px")};
    background-color: ${(prop) => (!!prop.bgColor ? getColorsPalette("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : "initial")};
    color: ${Grey0};
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "0px")};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    box-sizing: border-box;
`; //Definir um modo onde fica salvo as cores padrões do temapadroes para fundos imputs e botões
export const Header = styled.header`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${({ style }) => (!!style?.width ? style.width : "100%")};
    height: ${({ style }) => (!!style?.height ? style.height : "auto")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : "1% 12%")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "row")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "space-between")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "20x")};
    background-color: ${(prop) => (!!prop.bgColor ? getColorsPalette("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : "initial")};
    color: ${Grey0};
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "0px")};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    box-sizing: border-box;
`;
export const Content = styled.body`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${({ style }) => (!!style?.width ? style.width : "100%")};
    height: ${({ style }) => (!!style?.height ? style.height : "auto")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : "1% 12%")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "initial")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "20x")};
    background-color: ${(prop) => (!!prop.bgColor ? getColorsPalette("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : "initial")};
    color: ${Grey0};
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "4px")};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    box-sizing: border-box;
`;
export const ColumnBox = styled.section`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    width: ${({ style }) => (!!style?.width ? style.width : "100%")};
    height: ${({ style }) => (!!style?.height ? style.height : "auto")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "initial")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "25px")};
    box-sizing: border-box;
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "4px")};
    background-color: ${(prop) => (!!prop.bgColor ? getColorsPalette("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : "transparent")};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    img {
        width: ${({ style }) => (!!style?.img?.width ? style.img.width : "100%")};
        height: ${({ style }) => (!!style?.img?.height ? style.img.height : "auto")};
        border-radius: ${({ style }) => (!!style?.img?.borderRadius ? style.img.borderRadius : "4px")};
    }
`;
export const RowBox = styled.div`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${({ style }) => (!!style?.width ? style.width : "100%")};
    height: ${({ style }) => (!!style?.height ? style.height : "auto")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    flex-wrap: ${({ style }) => (!!style?.flexWrap ? style.flexWrap : "nowrap")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "row")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "initial")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "25px")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "4px")};
    box-sizing: border-box;
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    background-color: ${(prop) => (!!prop.bgColor ? getColorsPalette("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : "transparent")};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    img {
        width: ${({ style }) => (!!style?.img?.width ? style.img.width : "100%")};
        height: ${({ style }) => (!!style?.img?.height ? style.img.height : "auto")};
        border-radius: ${({ style }) => (!!style?.img?.borderRadius ? style.img.borderRadius : "4px")};
    }
`;
export const FormBox = styled.form`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${({ style }) => (!!style?.width ? style.width : "100%")};
    height: ${({ style }) => (!!style?.height ? style.height : "100%")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "initial")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "25px")};
    box-sizing: border-box;
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "4px")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    background-color: ${(prop) => (!!prop.bgColor ? getColorsPalette("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : "transparent")};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
`;
export const FieldBox = styled.div`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${({ style }) => (!!style?.width ? style.width : "100%")};
    height: ${({ style }) => (!!style?.height ? style.height : "75px")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "center")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "initial")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "4px")};
    box-sizing: border-box;
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    background-color: ${(prop) => (!!prop.bgColor ? getColorsPalette("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : "transparent")};
    label {
        width: 100%;
        height: 36%;
        font-size: 12px;
        display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
        box-sizing: border-box;
        color: ${Grey0};
    }
    input {
        width: 100%;
        height: 64%;
        padding: 16px 10px;
        font-size: 16px;
        display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
        border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "4px")};
        box-sizing: border-box;
        color: ${Grey0};
        border: 1.2px solid ${(prop) => (prop?.error ? negative : Grey2)};
        background-color: ${(prop) => (prop?.error ? negative : Grey2)};
        box-sizing: border-box;
        border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "4px")};
        ::placeholder {
            color: ${Grey1};
        }
        :focus {
            outline: 1.2px solid ${(prop) => Grey1};
        }
    }
    select {
        width: 100%;
        height: 64%;
        padding: 0 16px 0 16px;
        font-size: 16px;
        display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
        border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "4px")};
        box-sizing: border-box;
        color: ${(prop) => (prop?.error ? Grey1 : Grey0)};
        box-sizing: border-box;
        border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "4px")};
        cursor: pointer;
        option {
            color: ${Grey1};
            font-size: 18px;
            font-weight: 400;
        }
        border: 1.2px solid ${(prop) => (prop?.error ? negative : Grey2)};
        background-color: ${(prop) => (prop?.error ? negative : Grey2)};
        ::placeholder {
            color: ${Grey1};
        }
        :focus {
            outline: 1.2px solid ${(prop) => Grey1};
        }
    }
`;
export const Button = styled.button`
    width: ${(prop) => (!!prop?.fullWidth ? "100%" : !!prop?.style?.width ? prop.style.width : "auto")};
    height: ${({ style }) => (!!style?.height ? style.height : "48px")};
    background-color: ${(prop) => getColorsPalette("background", !!prop.bgColor ? prop.bgColor : "primary")};
    color: #ffffff;
    border: 1.2px solid ${(prop) => getColorsPalette("background", !!prop.bgColor ? prop.bgColor : "primary")};
    padding: ${(prop) => (!!prop?.style ? (prop.style?.padding ? prop.style.padding : "0px") : "11px 22px")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "4px")};
    box-sizing: border-box;
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    :hover {
        background-color: ${(prop) => getColorsPalette("hover", !!prop.bgColor ? prop.bgColor : "primaryFocus")};
        border: 1.2px solid ${(prop) => getColorsPalette("hover", !!prop.bgColor ? prop.bgColor : "primaryFocus")};
        cursor: pointer;
    }
    :disabled {
        background-color: ${(prop) => getColorsPalette("disable", !!prop.bgColor ? prop.bgColor : "Grey1")};
        border: 1.2px solid ${(prop) => getColorsPalette("disable", !!prop.bgColor ? prop.bgColor : "Grey1")};
        cursor: not-allowed;
        :hover {
            background-color: ${(prop) => getColorsPalette("disableHover", !!prop.bgColor ? prop.bgColor : "Grey2")};
            border: 1.2px solid ${(prop) => getColorsPalette("disableHover", !!prop.bgColor ? prop.bgColor : "Grey2")};
        }
    }
`;
export const Title = styled.h1`
    max-width: 100%;
    margin: 0px;
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    font-weight: ${({ style }) => (!!style?.fontWeight ? style.fontWeight : "bold")};
    font-size: ${({ style }) => (!!style?.fontSize ? style.fontSize : "18px")};
    color: ${Grey0};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "default")};
`;
export const Text = styled.span`
    max-width: 100%;
    margin: 0px;
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    font-weight: ${({ style }) => (!!style?.fontWeight ? style.fontWeight : "500")};
    font-size: ${({ style }) => (!!style?.fontSize ? style.fontSize : "12px")};
    color: ${Grey1};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "default")};
`;
export const ModalBox = styled.section`
    width: ${({ style }) => (!!style?.width ? style.width : "100%")};
    height: ${({ style }) => (!!style?.height ? style.height : "100%")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    color: ${Grey1};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "default")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    /* display: ${(prop) => (!!prop?.state ? "flex" : "none")}; */
    position: ${({ style }) => (!!style?.position ? style.position : "absolute")};
    z-index: ${({ style }) => (!!style?.zIndex ? style.zIndex : 9999)};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "center")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "4px")};
    background-color: ${(prop) => (!!prop.bgColor ? getColorsPalette("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : "transparent")};
    box-sizing: border-box;
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
`;
