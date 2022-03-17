import { Grid } from "@chakra-ui/react";
import { FacilityCard } from "./FacilityCard";

export function Facilities() {
    return (
        <Grid width="100%" 
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg:"repeat(6, 1fr)"}}
        gap={6} 
        mb="2rem"
        >
            <FacilityCard name="Aratu" indicator="good"  />            
            <FacilityCard name="Campinas Matriz" indicator="bad"  />            
            <FacilityCard name="Curitiba" indicator="good"  />            
            <FacilityCard name="Santo Amaro" indicator="average"  />            
            <FacilityCard name="Campinas Freios" indicator="bad"  />            
            <FacilityCard name="Diadema Rexroth" indicator="good"  />            
            <FacilityCard name="Porto Ferreira" indicator="bad"  />            
            <FacilityCard name="Itatiba" indicator="good"  />            
            <FacilityCard name="Louveira" indicator="average"  />            
            <FacilityCard name="Campina Grande" indicator="bad"  />            
            <FacilityCard name="Manaus" indicator="good"  />            
            <FacilityCard name="Idaiatuba" indicator="average"  />            
        </Grid>
    );
}
