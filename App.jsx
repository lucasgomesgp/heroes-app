import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";
import { CharactersProvider } from "./src/hooks/useCharacters";

export default function App() {
  let [fontsLoaded] = useFonts({
    'Gilroy-Bold': require("./assets/fonts/gilroy-bold.ttf"),
    'Gilroy-Heavy': require("./assets/fonts/gilroy-heavy.ttf"),
    'Gilroy-Medium': require("./assets/fonts/gilroy-medium.ttf"),
    'Gilroy-Regular': require("./assets/fonts/gilroy-regular.ttf"),
    'Gilroy-Semibold': require("./assets/fonts/gilroy-semibold.ttf"),

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <CharactersProvider>
        <Routes />
      </CharactersProvider>
    </>
  );
}
