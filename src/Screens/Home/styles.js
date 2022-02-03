import styled from 'styled-components/native';
import { colors } from '../../utils/colors';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${colors.primarySilver};
    margin-top: 20px;
`;

export const Texts = styled.View`
    padding-left: 40px;
    margin-top: 40px;

`;
export const Text = styled.Text`
    color: #000;
    font-size: 18px;
    font-family: Gilroy-Medium;
    color: ${colors.primaryGrey};
`;
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
`;
export const Title = styled.Text`
    font-size: 44px;
    font-family: Gilroy-Heavy;
`;
export const Icons = styled.View`
    flex-direction: row;
    width: 100%;
    height: 80px;
    padding: 4px;
    justify-content: center;
    margin-top: 20px;
`;

export const Icon = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    margin-left: 12px;
    border-radius: 50px;

`;

export const Characters = styled.ScrollView`
    width: 100%;
    margin-bottom: 10px;
`;

export const Infos = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 30px;
    margin-top: 20px;
`; 
export const TitleCharacter = styled.Text`
    font-family: Gilroy-Bold;
    font-size: 24px;
    color: ${colors.primaryRed};
`; 

export const SubTitleBtn = styled.Text`
    font-size: 18px;
    font-family: Gilroy-Medium;
    color: ${colors.primaryGrey};
`;