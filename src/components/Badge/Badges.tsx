import { Wrap } from "@chakra-ui/react";
import { BadgeItem } from "./BadgeItem";

export function Badges() {
    return (
        <Wrap>
            <BadgeItem name="Facility" value="Campinas Matriz" />
            <BadgeItem name="País" value="AR" />
            <BadgeItem name="Estado" value="AR - Santa Fé" />
            <BadgeItem name="Município" value="San Juan" />
            <BadgeItem name="Local" value="Centro de Distribuição" />
        </Wrap>
    );
}
