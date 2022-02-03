import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Header = styled.View``;
export const Container = styled.ScrollView`
    flex: 1;
`;
export const WrapperImg = styled.View`
    flex: 1;
`;
export const ImageBg = styled.ImageBackground`
    width: 100%;
    height: 680px;
`;
export const Texts = styled.View`
    position: absolute;
    top: 200px;
    padding: 0 40px;
`;
export const AlterEgo = styled.Text`
    color: ${colors.primarySilver};
    font-size: 20px;
    font-family: Gilroy-Regular;
`;
export const Name = styled.Text`
    color: ${colors.primarySilver};
    font-size: 40px;
    font-family: Gilroy-Heavy;
`;

export const Content = styled.ScrollView`
    position: absolute;
    top: 300px;
    width: 100%;
`;
export const Icons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: ${colors.primarySilver};
`;

export const IconWrapper = styled.View`
    align-items: center;
`;

export const Small = styled.Text`
    font-family: Gilroy-Medium;
    margin-top: 10px;
    font-size: 15px;
    color: ${colors.primarySilver};
`;
export const Description = styled.Text`
    padding: 30px;
    color: ${colors.primarySilver};
    font-size: 16px;
    line-height: 18px;
    font-family: Gilroy-Regular;
`;

export const WrapperMovies = styled.ScrollView`
    margin-top: 50px;
    flex: 1;
    padding-bottom: 20px;
`;
export const Movies = styled.ScrollView`
    flex-direction: row;
`;

export const Movie = styled.Image`
    width: 140px;
    height: 280px;
    margin-left: 20px;
`;
export const TitleMovie = styled.Text`
    color: #FFFFFF;
    padding-left: 30px;
    font-size: 24px;
    font-family: Gilroy-Heavy;
    font-size: 28px;
`;