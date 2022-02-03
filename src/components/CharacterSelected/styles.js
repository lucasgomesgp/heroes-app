import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Character = styled.TouchableOpacity`
    position: relative;
    height: 300px; 
    width: 200px;
    margin-left: 20px;
`;
export const Image = styled.Image`
    width: 200px; 
    height: 300px; 
    border-radius: 50px;
`;
export const Title = styled.Text`
    position: absolute; 
    bottom: 2px;
    left: 20px;
    font-size: 34px;
    color: ${colors.primarySilver};
    font-family: Gilroy-Heavy;
`;
export const SubTitle = styled.Text`
    position: absolute; 
    bottom: 70px; 
    left: 20px; 
    color: ${colors.primarySilver};
    font-size: 18px;
`;