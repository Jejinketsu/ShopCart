import { getTheme } from "../global/styles/theme";
import { useAppSelector } from "./redux";

const useGetTheme = () => {
    const { theme } = useAppSelector((state) => state.global);

    return { themeName: theme, theme: getTheme(theme) };
};

export default useGetTheme;
