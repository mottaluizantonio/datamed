import { RowBox } from "../theme";
import { Grid, HeadField, GridHead, GridContent, ContentLine, LineField, Text, Title } from "./style";
export const Datagrid = ({ title = "Grid", columns = [], data = [], width = "100%" }) => {
    return (
        <Grid width={width}>
            <RowBox style={{ padding: "10px" }}>
                <Title>{title}</Title>
            </RowBox>
            <GridHead>
                {columns.map((column) => (
                    <HeadField key={column.key + "_column"} width={`${column.width}%`}>
                        <label>{column.label}</label>
                    </HeadField>
                ))}
            </GridHead>
            <GridContent>
                {data.map((iten) => (
                    <ContentLine width={`${iten.width}%`}>
                        {columns.map((column) => {
                            return (
                                <LineField width={`${column.width}%`}>
                                    <Text>{iten[column.key]}</Text>
                                </LineField>
                            );
                        })}
                    </ContentLine>
                ))}
            </GridContent>
        </Grid>
    );
};
