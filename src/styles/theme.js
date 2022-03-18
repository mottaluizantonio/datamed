import styled from "styled-components";
import { palette, colorManager } from "./palette";
export const Container = styled.section`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: 100vw;
    height: 100vh;
    position: ${({ style }) => (!!style?.zIndex ? style.zIndex : "absolute")};
    z-index: ${({ style }) => (!!style?.zIndex ? style.zIndex : 0)};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : "1% 6%")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "space-between")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "15px")};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.container))};
    color: ${colorManager("color", palette.presets.font)};
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "0px")};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    box-sizing: border-box;
`;
export const Header = styled.section`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "75px")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : "0px")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "row")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "space-between")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "15px")};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.header))};
    color: ${colorManager("color", palette.presets.font)};
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "0px")};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    box-sizing: border-box;
`;
export const Content = styled.section`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "100%")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : "0px")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "row")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "initial")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "15px")};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.content))};
    color: ${colorManager("color", palette.presets.font)};
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    box-sizing: border-box;
    img {
        width: ${({ style }) => (!!style?.img?.width ? style.img.width : "100%")};
        height: ${({ style }) => (!!style?.img?.height ? style.img.height : "auto")};
        border-radius: ${({ style }) => (!!style?.img?.borderRadius ? style.img.borderRadius : "12px")};
    }
`;
export const ColumnBox = styled.section`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "auto")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "initial")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "initial")};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "15px")};
    box-sizing: border-box;
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.ColumnBox))};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    img {
        width: ${({ style }) => (!!style?.img?.width ? style.img.width : "auto")};
        height: ${({ style }) => (!!style?.img?.height ? style.img.height : "auto")};
        border-radius: ${({ style }) => (!!style?.img?.borderRadius ? style.img.borderRadius : "12px")};
    }
`;
export const RowBox = styled.div`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "auto")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    flex-wrap: ${({ style }) => (!!style?.flexWrap ? style.flexWrap : "nowrap")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "row")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "initial")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "initial")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "15px")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
    box-sizing: border-box;
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.RowBox))};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    img {
        width: ${({ style }) => (!!style?.img?.width ? style.img.width : "100%")};
        height: ${({ style }) => (!!style?.img?.height ? style.img.height : "auto")};
        border-radius: ${({ style }) => (!!style?.img?.borderRadius ? style.img.borderRadius : "12px")};
    }
`;
export const FormBox = styled.form`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "auto")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "initial")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "25px")};
    box-sizing: border-box;
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : "20px")};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.form))};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    img {
        width: ${({ style }) => (!!style?.img?.width ? style.img.width : "100%")};
        height: ${({ style }) => (!!style?.img?.height ? style.img.height : "auto")};
        border-radius: ${({ style }) => (!!style?.img?.borderRadius ? style.img.borderRadius : "12px")};
    }
`;
export const FieldBox = styled.div`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "auto")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "center")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "initial")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
    box-sizing: border-box;
    gap: ${({ style }) => (!!style?.gap ? style.gap : "10px")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.FieldBox))};
    label {
        width: 100%;
        height: 36%;
        font-size: 15px;
        display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
        box-sizing: border-box;
        color: ${colorManager("color", palette.presets.label)};
        font-weight: 500;
        padding-left: 10px;
    }
    input {
        width: 100%;
        height: 64%;
        padding: 16px 10px;
        font-size: 16px;
        display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
        border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
        box-sizing: border-box;
        color: ${colorManager("color", palette.presets.font)};
        box-sizing: border-box;
        border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
        border: 1.2px solid ${(prop) => (prop?.error ? palette.error : colorManager("background", palette.presets.input))};
        background-color: ${(prop) => (prop?.error ? palette.error : colorManager("background", palette.presets.input))};
        ::placeholder {
            color: ${colorManager("color", palette.presets.placeholder)};
        }
        :focus {
            outline: 1.2px solid ${(prop) => colorManager("focus", palette.presets.focus)};
        }
    }
    select {
        width: 100%;
        height: 64%;
        padding: 0 16px 0 16px;
        font-size: 16px;
        display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
        border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
        box-sizing: border-box;
        color: ${(prop) => (prop?.error ? palette.error : palette.presets.font)};
        box-sizing: border-box;
        border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
        border: 1.2px solid ${(prop) => (prop?.error ? palette.error : colorManager("background", palette.presets.select))};
        background-color: ${(prop) => (prop?.error ? palette.error : colorManager("background", palette.presets.select))};
        cursor: pointer;
        option {
            color: ${colorManager("color", palette.presets.option)};
            font-size: 18px;
            font-weight: 400;
        }
        ::placeholder {
            color: ${colorManager("color", palette.presets.placeholder)};
        }
        :focus {
            outline: 1.2px solid ${(prop) => colorManager("focus", palette.presets.focus)};
        }
    }
`;
export const Button = styled.button`
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : !!prop?.fullWidth ? "100%" : "auto")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "48px")};
    background-color: ${(prop) => colorManager("background", prop.bgColor || palette.presets.button)};
    color: ${(prop) => colorManager("color", prop.bgColor || palette.presets.button)};
    border: 1.2px solid ${(prop) => colorManager("background", prop.bgColor || palette.presets.button)};
    padding: ${(prop) => (!!prop?.style ? (prop.style?.padding ? prop.style.padding : "0px") : "11px 22px")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
    box-sizing: border-box;
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    :hover {
        background-color: ${(prop) => colorManager("hover", prop.bgColor || palette.presets.button)};
        border: 1.2px solid ${(prop) => colorManager("hover", prop.bgColor || palette.presets.button)};
        cursor: pointer;
    }
    :disabled {
        background-color: ${(prop) => colorManager("disable", prop.bgColor || palette.presets.button)};
        border: 1.2px solid ${(prop) => colorManager("disable", prop.bgColor || palette.presets.button)};
        cursor: not-allowed;
        :hover {
            background-color: ${(prop) => colorManager("disableHover", prop.bgColor || palette.presets.button)};
            border: 1.2px solid ${(prop) => colorManager("disableHover", prop.bgColor || palette.presets.button)};
        }
    }
`;
export const Title = styled.h1`
    max-width: 100%;
    margin: 0px;
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    font-weight: ${({ style }) => (!!style?.fontWeight ? style.fontWeight : "bold")};
    font-size: ${({ style }) => (!!style?.fontSize ? style.fontSize : "45px")};
    color: ${colorManager("color", palette.presets.font)};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "default")};
`;
export const Text = styled.span`
    max-width: 100%;
    margin: 0px;
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    font-weight: ${({ style }) => (!!style?.fontWeight ? style.fontWeight : "normal")};
    font-size: ${({ style }) => (!!style?.fontSize ? style.fontSize : "18px")};
    color: ${colorManager("color", palette.presets.font)};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "default")};
`;
export const ModalBox = styled.section`
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "100%")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    color: ${colorManager("color", palette.presets.font)};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "default")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    position: ${({ style }) => (!!style?.position ? style.position : "absolute")};
    z-index: ${({ style }) => (!!style?.zIndex ? style.zIndex : 9999)};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "center")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.modal))};
    box-sizing: border-box;
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    img {
        width: ${({ style }) => (!!style?.img?.width ? style.img.width : "100%")};
        height: ${({ style }) => (!!style?.img?.height ? style.img.height : "auto")};
        border-radius: ${({ style }) => (!!style?.img?.borderRadius ? style.img.borderRadius : "12px")};
    }
`;
