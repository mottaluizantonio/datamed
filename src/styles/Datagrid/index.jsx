import { Button, FieldBox, RowBox } from "../theme";
import { Grid, HeadField, GridHead, GridContent, ContentLine, LineField, Text, Title } from "./style";
export const Datagrid = ({ title = "Grid", columns = [], data = [], width = "100%", options = {} }) => {
    const { showTitle = true, showFilter = true, emptyMsg = "Nada foi encontrado!" } = options;
    const onClickButton = (callback, iten) => (callback !== undefined ? callback(iten) : console.error("error: missing key 'onclick' in column object"));
    return (
        <Grid width={width}>
            <RowBox style={{ padding: "10px", alignItems: "center", justifyContent: "space-between" }}>
                <Title hidden={!showTitle}>{title}</Title>
                <FieldBox hidden={!showFilter} width="60%">
                    <input placeholder="Filtro"></input>
                </FieldBox>
            </RowBox>
            <GridHead>
                {columns.map(({ key = "", width = 100, label = "Column" }) => (
                    <HeadField key={`${key}_column`} width={`${width}%`}>
                        <label>{label}</label>
                    </HeadField>
                ))}
            </GridHead>
            <GridContent>
                {data !== undefined && data.length > 0 ? (
                    data.map((iten, i) => (
                        <ContentLine key={i} width={`${iten.width}%`}>
                            {columns.map(({ key = "", width = 100, type = "text", onclick }, i) => {
                                return type.toLowerCase() === "text" ? (
                                    <LineField key={`${key}_data-${i}`} width={`${width}%`}>
                                        <Text>{iten[key]}</Text>
                                    </LineField>
                                ) : type.toLowerCase() === "button" ? (
                                    <LineField key={`${key}_button-${i}`} width={`${width}%`}>
                                        <Button onClick={() => onClickButton(onclick, iten)}>{key}</Button>
                                    </LineField>
                                ) : (
                                    <></>
                                );
                            })}
                        </ContentLine>
                    ))
                ) : (
                    <ContentLine width="100%" height="100%">
                        <LineField style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: "2em", fontWeight: "bold" }}>{emptyMsg}</Text>
                        </LineField>
                    </ContentLine>
                )}
            </GridContent>
        </Grid>
    );
};
