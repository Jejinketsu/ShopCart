export interface CardListProps {
    title: string;
    subtitle: string | number;
    badge?: string | number;
    onPress: () => void;
}
