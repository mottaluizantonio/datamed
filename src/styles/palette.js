export const palette = {
    success: "#64B982",
    error: "#D46D6D",
    warning: "#ff8357",
    info: "#7BB7FB",
    primary: "#7BB7FB",
    primaryFocus: "#A1CDFF",
    negative: "#D46D6D",
    negativeFocus: "#EC8B8B",
    green1: "#64B982",
    ocean1: "#29C5DA",
    grey4: "#121214",
    grey3: "#212529",
    grey2: "#343B41",
    grey1: "#868E96",
    grey0: "#F8F9FA",
    presets: {
        container: "green1",
        header: "green1",
        content: "green1",
        ColumnBox: "transparent",
        RowBox: "transparent",
        form: "grey0",
        FieldBox: "transparent",
        input: "primary",
        placeholder: "grey0",
        select: "primary",
        option: "grey1",
        button: "primary",
        focus: "green1",
        modal: "grey0",
        font: "grey0",
        label: "primary",
    },
};

export const colorManager = (retorno, color) => {
    let type = {};
    switch (color) {
        case "primary": {
            type.background = palette["primary"];
            type.hover = palette["primaryFocus"];
            type.disable = palette["grey1"];
            type.disableHover = palette["grey2"];
            type.focus = palette["primary"];
            type.color = palette["primary"];
            return type[retorno];
        }
        case "negative": {
            type.background = palette["negative"];
            type.hover = palette["negativeFocus"];
            type.disable = palette["grey1"];
            type.disableHover = palette["grey1"];
            type.focus = palette["negative"];
            type.color = palette["negative"];
            return type[retorno];
        }
        default: {
            type.background = palette[color];
            type.hover = palette[color];
            type.disable = palette[color];
            type.disableHover = palette[color];
            type.focus = palette[color];
            type.color = palette[color];
            return type[retorno];
        }
    }
};
