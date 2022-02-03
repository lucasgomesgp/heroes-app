import { Text } from "react-native";
import { heroes, aliens, antiHeroes, humans, villains } from '../../assets/application';

export async function getCharacters() {
    return {
        heroes: { ...heroes },
        villains: { ...villains },
        antiHeroes: { ...antiHeroes },
        aliens: { ...aliens },
        humans: { ...humans }
    };
}