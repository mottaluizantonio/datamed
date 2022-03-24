import styled from "styled-components";
import { palette, colorManager } from "./style";
export const Grid = styled.section`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : "20px 15px")};
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "100%")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "initial")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "initial")};
    box-sizing: border-box;
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
    background-color: ${(prop) => (!!prop?.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.Grid.background))};
    border: 1.2px solid ${(prop) => (!!prop?.bgColor ? colorManager("background", prop.bgColor) : colorManager("border", palette.presets.Grid.border))};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    /* gap: ${({ style }) => (!!style?.gap ? style.gap : "2px")}; */
`;
export const GridHead = styled.section`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "60px")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : "0px")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "row")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "space-between")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "center")};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.Grid.GridHead.background))};
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px  12px  0px 0px")};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    box-sizing: border-box;
    border-top: 1.2px solid ${colorManager("border", palette.presets.Grid.GridHead.border)};
    border-right: 1.2px solid ${colorManager("border", palette.presets.Grid.GridHead.border)};
`;
export const HeadField = styled.div`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "75px")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "center")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "initial")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "0px")};
    box-sizing: border-box;
    gap: ${({ style }) => (!!style?.gap ? style.gap : "10px")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : "20px")};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    border-left: 1.2px solid ${(prop) => (!!prop.bgColor ? colorManager("border", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("border", palette.presets.Grid.GridHead.HeadField.border))};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.Grid.GridHead.HeadField.background))};
    label {
        width: 100%;
        height: 36%;
        font-size: 18px;
        display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
        box-sizing: border-box;
        color: ${colorManager("color", palette.presets.Grid.GridHead.HeadField.label)};
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
        color: ${colorManager("color", palette.presets.Grid.GridHead.HeadField.input.font)};
        box-sizing: border-box;
        border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "5px")};
        border: none;
        background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.Grid.GridHead.HeadField.input.background))};
        ::placeholder {
            color: ${colorManager("color", palette.presets.Grid.GridHead.HeadField.input.placeholder)};
        }
        :focus {
            outline: none;
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
        color: ${colorManager("color", palette.presets.Grid.GridHead.HeadField.select.font)};
        box-sizing: border-box;
        border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "5px")};
        border-top: 1.2px solid ${(prop) => (prop?.error ? palette.error : colorManager("border", palette.presets.Grid.GridHead.HeadField.select.border))};
        background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.Grid.GridHead.HeadField.select.background))};
        cursor: pointer;
        option {
            color: ${colorManager("option", palette.presets.Grid.GridHead.HeadField.select.option)};
            font-size: 18px;
            font-weight: 400;
        }
        :focus {
            outline: 1.2px solid ${colorManager("focus", palette.presets.Grid.GridHead.HeadField.select.focus)};
        }
    }
`;
export const GridContent = styled.section`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "100%")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : " 0 20px 20px 20px")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "initial")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "initial")};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.Grid.GridContent.background))};
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "auto")};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "0px  0px  12px 12px")};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
    box-sizing: border-box;
    gap: ${({ style }) => (!!style?.gap ? style.gap : "15px")};
    border: 1.2px solid ${colorManager("border", palette.presets.Grid.GridContent.border)};
`;
export const ContentLine = styled.div`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "auto")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    flex-wrap: ${({ style }) => (!!style?.flexWrap ? style.flexWrap : "nowrap")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "row")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "initial")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "initial")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : 0)};
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
    box-sizing: border-box;
    gap: ${({ style }) => (!!style?.gap ? style.gap : "25px")};
    overflow: ${({ style }) => (!!style?.overflow ? style.overflow : "none")};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.Grid.GridContent.ContentLine.border))};
    border-bottom: 1.2px solid ${colorManager("border", palette.presets.Grid.GridContent.ContentLine.border)};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "auto")};
`;
export const LineField = styled.div`
    opacity: ${({ style }) => (!!style?.opacity ? style.opacity : "initial")};
    padding: ${({ style }) => (!!style?.padding ? style.padding : "10px 20px")};
    width: ${(prop) => (!!prop?.width ? prop.width : !!prop?.style?.width ? prop.style.width : "100%")};
    height: ${(prop) => (!!prop?.height ? prop.height : !!prop?.style?.height ? prop.style.height : "100%")};
    display: ${(prop) => (!!prop?.hidden ? (!prop.hidden ? "flex" : "none") : "flex")};
    flex-direction: ${({ style }) => (!!style?.flexDirection ? style.flexDirection : "column")};
    justify-content: ${({ style }) => (!!style?.justifyContent ? style.justifyContent : "center")};
    align-items: ${({ style }) => (!!style?.alignItems ? style.alignItems : "initial")};
    gap: ${({ style }) => (!!style?.gap ? style.gap : "10px")};
    box-sizing: border-box;
    border-radius: ${({ style }) => (!!style?.borderRadius ? style.borderRadius : "12px")};
    border-left: 1.2px solid ${colorManager("border", palette.presets.Grid.GridContent.ContentLine.LineField.border)};
    background-color: ${(prop) => (!!prop.bgColor ? colorManager("background", prop.bgColor) : !!prop?.backgroundColor ? prop.backgroundColor : colorManager("background", palette.presets.Grid.GridContent.ContentLine.LineField.background))};
    cursor: ${({ style }) => (!!style?.cursor ? style.cursor : "pointer")};
`;
