import styled from "styled-components/native";
import Button from "../../atoms/Button";
import ButtonIcon from "../../atoms/ButtonIcon";
import Text from "../../atoms/Text";
import { StatusText } from "./interfaces";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.SECONDARY_1};
    padding: 18px 18px 0px 18px;
`;

export const ContentCard = styled.View`
    background-color: ${({ theme }) => theme.colors.LIGHT};
    width: 100%;
    max-height: 58%;
    justify-content: center;
    align-items: center;
    padding: 14px;
    margin-bottom: 24px;
    border-radius: 7px;
    elevation: 4;
`;

export const OpaqueText = styled(Text).attrs(() => ({
    color: "SECONDARY_2",
}))``;

export const SpendProgressContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SpendProgressBox = styled.View``;

export const SpendProgressText = styled(Text).attrs(
    ({ status }: StatusText) => ({
        color: status > 0 ? "SUCCESS" : "DANGER",
    })
)<StatusText>``;

export const ItensContainer = styled.View`
    flex: 4;
`;

export const EmptyListContainer = styled.View`
    align-items: center;
`;

export const EmptyListText = styled(Text).attrs(() => ({
    color: "PRIMARY_0",
    letterCase: "capitalize",
}))``;

export const ControlCotainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonWrapper = styled.View`
    width: 80%;
`;

export const DoneButton = styled(Button)``;

export const AddButton = styled(Button)``;

export const PlusButton = styled(ButtonIcon)`
    border-radius: 100px;
`;

export const ModalContainer = styled.View`
    padding: 2px 15px;
`;

export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`;
