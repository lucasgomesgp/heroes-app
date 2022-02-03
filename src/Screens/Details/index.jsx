import { TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Back, Candle, Earth, Scale, Weight } from "../../utils/icons";
import { useNavigation } from "@react-navigation/native";
import { Container, WrapperImg, WrapperMovies, ImageBg, Texts, Content, AlterEgo, Name, Icons, IconWrapper, Small, Description, Movies, Movie, TitleMovie, Header } from "./styles";

export function Details({ route, navigation }) {
    const data = route.params;
    return (
        <>
            <Header>
                <Back style={{ position: "absolute", top: 40, left: 20, zIndex: 5 }} width={40} height={40} onPress={() => { navigation.goBack() }} />
            </Header>
            <LinearGradient colors={['#000000', 'rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0.8)']} style={{ flex: 1 }}>
                <Container>
                    <WrapperImg>
                        <ImageBg source={data.imagePath} resizeMode="cover" >
                            <Texts>
                                <AlterEgo>{data.alterEgo}</AlterEgo>
                                <Name>{data.name}</Name>
                            </Texts>
                            <Content style={{ elevation: 2 }}>
                                <Icons>
                                    <IconWrapper>
                                        <Candle width={30} height={30} />
                                        <Small>{new Date().getFullYear()-data.caracteristics.birth} anos</Small>
                                    </IconWrapper>
                                    <IconWrapper>
                                        <Weight width={30} height={30} />
                                        <Small>{data.caracteristics.weight.value}kg</Small>
                                    </IconWrapper>
                                    <IconWrapper>
                                        <Scale width={30} height={30} />
                                        <Small>{data.caracteristics.height.value}m</Small>
                                    </IconWrapper>
                                    <IconWrapper>
                                        <Earth width={30} height={30} />
                                        <Small>{data.caracteristics.universe}</Small>
                                    </IconWrapper>
                                </Icons>
                                <Description>
                                    {data.biography}
                                </Description>
                            </Content>
                        </ImageBg>
                        <WrapperMovies>
                            <TitleMovie>Filmes</TitleMovie>
                            <Movies horizontal showsHorizontalScrollIndicator={false}>
                                {data.movies?.map((movie) => (
                                    <TouchableOpacity key={new Date()+"."+Math.random()}>
                                        <Movie source={movie} resizeMode="contain" />
                                    </TouchableOpacity>
                                ))}
                            </Movies>
                        </WrapperMovies>
                    </WrapperImg>
                </Container>
            </LinearGradient>
        </>
    );
}