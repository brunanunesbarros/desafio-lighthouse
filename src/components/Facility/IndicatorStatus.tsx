import { HStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface IndicatorProps {
    indicator: "good" | "bad" | "average";
}

type IndicatorStyleData = {
    height: string;
    opacity: string;
    boxShadow: string;
    borderRadius: string;
};

interface IndicatorData {
    good: IndicatorStyleData;
    average: IndicatorStyleData;
    bad: IndicatorStyleData;
}

export function IndicatorStatus({ indicator }: IndicatorProps) {
    const [indicatorData, setIndicatorData] = useState<IndicatorData>();

    useEffect(() => {
        const data = {
            good: {
                height: indicator === "good" ? "20px" : "12px",
                opacity: indicator === "good" ? "100%" : "40%",
                boxShadow: indicator === "good" ? "indicatorShadowGood" : "none",
                borderRadius: indicator === "good" ? "5px" : "3px 0 0 3px",
            },
            average: {
                height: indicator === "average" ? "20px" : "12px",
                opacity: indicator === "average" ? "100%" : "40%",
                boxShadow: indicator === "average" ? "indicatorShadowAverage" : "none",
                borderRadius: indicator === "average" ? "5px": "none",
            },
            bad: {
                height: indicator === "bad" ? "20px" : "12px",
                opacity: indicator === "bad" ? "100%" : "40%",
                boxShadow:  indicator === "bad" ? "indicatorShadowBad" : "none",
                borderRadius: indicator === "bad" ? "5px" : "0 3px 3px 0",
            },
        };
        setIndicatorData(data);
    }, [indicator]);

    return (
        <HStack
            w="100%"
            spacing={0}
            alignItems="center"
            justifyContent="center"
        >
            <Box
                w="25%"
                h={indicatorData?.good.height}
                bg="#44c553"
                opacity={indicatorData?.good.opacity}
                boxShadow={indicatorData?.good.boxShadow}
                borderRadius={indicatorData?.good.borderRadius}
            ></Box>

            <Box
                w="25%"
                h={indicatorData?.average.height}
                bg="#ffb200"
                opacity={indicatorData?.average.opacity}
                boxShadow={indicatorData?.average.boxShadow}
                borderRadius={indicatorData?.average.borderRadius}
            ></Box>

            <Box
                w="25%"
                h={indicatorData?.bad.height}
                bg="#ff4535"
                opacity={indicatorData?.bad.opacity}
                boxShadow={indicatorData?.bad.boxShadow}
                borderRadius={indicatorData?.bad.borderRadius}
            ></Box>
        </HStack>
    );
}
