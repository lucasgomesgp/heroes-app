import { useNavigation } from "@react-navigation/native";
import { Character, Image, Title, SubTitle } from "./styles";

export function CharacterSelected(data) {
    const navigation = useNavigation();
    return (
        <Character onPress={() => {
            navigation.navigate("Details", {
                ...data
            });
        }}>
            <Image source={data.imagePath}  />
            <Title>{data.name}</Title>
            <SubTitle>{data.alterEgo}</SubTitle>
        </Character>
    );
}