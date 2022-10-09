import React from "react";
import { FlatList } from "react-native";
import {
    VictoryAxis,
    VictoryChart,
    VictoryLabel,
    VictoryLine,
    VictoryTheme,
} from "victory-native";
import ItemCard from "../../molecules/ItemCard";
import { ProductDetailsProps } from "./interfaces";
import {
    Container,
    ContentCard,
    GrathContainer,
    Line,
    OpaqueText,
    Title,
} from "./styles";

import { format, parseISO } from "date-fns";

type ChartData = {
    x: string | undefined;
    y: number | undefined;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
    const data: ChartData[] = product.transactions.map((item) => {
        const timestamp = parseISO(item.timeStamp);
        const date = format(timestamp, "dd/MM");
        const time = format(timestamp, "HH:mm");

        return {
            x: `${date}\n${time}`,
            y: item.price,
        };
    });
    return (
        <Container>
            <ContentCard>
                <Title>{product?.name || "default"}</Title>
            </ContentCard>

            <ContentCard>
                <GrathContainer>
                    <VictoryChart
                        width={350}
                        height={320}
                        domainPadding={{ x: 20 }}
                        theme={VictoryTheme.material}
                    >
                        <VictoryLabel
                            text="Histórico de preços"
                            x={175}
                            y={30}
                            textAnchor="middle"
                        />
                        <VictoryAxis
                            axisLabelComponent={<VictoryLabel dy={-25} />}
                            dependentAxis
                            label="Preço (R$)"
                        />
                        <VictoryAxis
                            axisLabelComponent={<VictoryLabel dy={30} />}
                            label="Data da compra"
                        />
                        <VictoryLine
                            style={{
                                data: { stroke: "#2293F7" },
                                parent: { border: "1px solid #ccc" },
                            }}
                            data={data}
                        />
                    </VictoryChart>
                </GrathContainer>
                <OpaqueText>
                    Últimas vezes que esse produto foi comprado
                </OpaqueText>
                <FlatList
                    data={product.transactions}
                    renderItem={({ item, index }) => {
                        const timestamp = parseISO(item.timeStamp);
                        const date = format(timestamp, "dd/MM");
                        const time = format(timestamp, "HH:mm");

                        return (
                            <ItemCard
                                key={index + item.title}
                                title={"Compra realizada"}
                                value={item.price}
                                date={date}
                                time={time}
                            />
                        );
                    }}
                    ItemSeparatorComponent={() => <Line />}
                />
            </ContentCard>
        </Container>
    );
};

export default ProductDetails;
