const light_theme = {
    colors: {
        ACCENTED_0: "#2293F7",
        ACCENTED_1: "#003A6D",
        ACCENTED_2: "#276131",

        PRIMARY_0: "#ADB0B5",
        PRIMARY_1: "#5A5C5F",
        PRIMARY_2: "#333333",

        SECONDARY_0: "#E5E7EA",
        SECONDARY_1: "#E1E1E1",
        SECONDARY_2: "#BCBCBC",

        SUCCESS: "#81BE00",
        DANGER: "#BE0B00",
        ALERT: "#FFBB12",
        DISABLED: "#EAEAEA",

        LIGHT: "#FFFFFF",
        DARK: "#000000",
    } as const,
};

const dark_theme = {
    colors: {
        ACCENTED_0: "#2293F7",
        ACCENTED_1: "#003A6D",
        ACCENTED_2: "#276131",

        PRIMARY_0: "#ADB0B5",
        PRIMARY_1: "#5A5C5F",
        PRIMARY_2: "#333333",

        SECONDARY_0: "#677180",
        SECONDARY_1: "#737373",
        SECONDARY_2: "#5e5e5e",

        SUCCESS: "#81BE00",
        DANGER: "#BE0B00",
        ALERT: "#FFBB12",
        DISABLED: "#EAEAEA",

        LIGHT: "#262930",
        DARK: "#FAFAFA",
    } as const,
};

export function getTheme(theme: "light" | "dark") {
    return {
        colors: theme === "light" ? light_theme.colors : dark_theme.colors,
        fonts: {
            THIN: "Montserrat_100Thin",
            LIGHT: "Montserrat_300Light",
            REGULAR: "Montserrat_400Regular",
            MEDIUM: "Montserrat_500Medium",
            SEMI_BOLD: "Montserrat_600SemiBold",
            BOLD: "Montserrat_700Bold",
            SEMIBOLD: "Montserrat_600SemiBold",
            BLACK: "Montserrat_900Black",
        } as const,
        fontSizes: {
            h1: 96,
            h2: 60,
            h3: 48,
            h4: 34,
            h5: 24,
            h6: 20,
            subtitle1: 16,
            subtitle2: 14,
            body1: 16,
            body2: 14,
            caption: 12,
            button: 14,
            overline: 10,
        },
    };
}

export default getTheme("light");
