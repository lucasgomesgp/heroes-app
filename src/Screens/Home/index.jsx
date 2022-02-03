import { colors } from '../../utils/colors';
import { Alien, Antihero, Hero, Human, Marvel, Menu, Search, Villain } from '../../utils/icons';
import { heroes, aliens, antiHeroes, humans, villains } from '../../../assets/application';
import { CharacterSelected } from '../../components/CharacterSelected';
import { Container, Texts, Text, Header, Title, Icons, Icon, Characters, Infos, TitleCharacter, SubTitleBtn } from './styles';

export const Home = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Menu width={35} height={35} />
        <Marvel />
        <Search width={35} height={35} />
      </Header>
      <Texts>
        <Text>Bem vindo ao Marvel Heroes</Text>
        <Title>Escolha o seu personagem</Title>
      </Texts>
      <Icons>
        <Icon style={{ backgroundColor: colors.blue, marginLeft: 0 }} >
          <Hero width={40} height={40} />
        </Icon>
        <Icon style={{ backgroundColor: colors.red }}>
          <Villain width={40} height={40} />
        </Icon>
        <Icon style={{ backgroundColor: colors.purple }}>
          <Antihero width={40} height={40} />
        </Icon>
        <Icon style={{ backgroundColor: colors.green }}>
          <Alien width={40} height={40} />
        </Icon>
        <Icon style={{ backgroundColor: colors.redLight }}>
          <Human width={40} height={40} />
        </Icon>
      </Icons>
      <Infos>
        <TitleCharacter>Heróis</TitleCharacter>
        <SubTitleBtn>Ver tudo</SubTitleBtn>
      </Infos>
      <Characters horizontal showsHorizontalScrollIndicator={false}>
        {heroes.map((hero) => (
          <CharacterSelected key={hero.name} name={hero.name} alterEgo={hero.alterEgo} imagePath={hero.imagePath} abilities={hero.abilities} biography={hero.biography} movies={hero.movies} caracteristics={hero.caracteristics}/>
        ))}
      </Characters>
      <Infos>
        <TitleCharacter>Vilãos</TitleCharacter>
        <SubTitleBtn>Ver tudo</SubTitleBtn>
      </Infos>
      <Characters horizontal showsHorizontalScrollIndicator={false}>
        {villains.map((villain) => (
          <CharacterSelected key={villain.name} name={villain.name} alterEgo={villain.alterEgo} imagePath={villain.imagePath} abilities={villain.abilities} biography={villain.biography} movies={villain.movies} caracteristics={villain.caracteristics} />
        ))}
      </Characters>
      <Infos>
        <TitleCharacter>Antiheróis</TitleCharacter>
        <SubTitleBtn>Ver tudo</SubTitleBtn>
      </Infos>
      <Characters horizontal showsHorizontalScrollIndicator={false}>
        {antiHeroes.map((anti) => (
          <CharacterSelected key={anti.name} name={anti.name} alterEgo={anti.alterEgo} imagePath={anti.imagePath} abilities={anti.abilities} biography={anti.biography} movies={anti.movies} caracteristics={anti.caracteristics} />
        ))}
      </Characters>
      <Infos>
        <TitleCharacter>Alienígenas</TitleCharacter>
        <SubTitleBtn>Ver tudo</SubTitleBtn>
      </Infos>
      <Characters horizontal showsHorizontalScrollIndicator={false}>
        {aliens.map((alien) => (
          <CharacterSelected key={alien.name} name={alien.name} alterEgo={alien.alterEgo} imagePath={alien.imagePath} abilities={alien.abilities} biography={alien.biography} movies={alien.movies} caracteristics={alien.caracteristics} />
        ))}
      </Characters>
      <Infos>
        <TitleCharacter>Humanos</TitleCharacter>
        <SubTitleBtn>Ver tudo</SubTitleBtn>
      </Infos>
      <Characters horizontal showsHorizontalScrollIndicator={false}>
        {humans.map((human) => (
          <CharacterSelected key={human.name} name={human.name} alterEgo={human.alterEgo} imagePath={human.imagePath} abilities={human.abilities} biography={human.biography} movies={human.movies} caracteristics={human.caracteristics}/>
        ))}
      </Characters>
    </Container>
  );
};

