import './gesture-handler';
import RootNavigation from "./src/Navigation/RootNavigation/RootNavigation.tsx";
import {NavigationContainer} from "@react-navigation/native";

const App = () => {
    return (
        <NavigationContainer>
            <RootNavigation/>
        </NavigationContainer>
    );
};

export default App;
