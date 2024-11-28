import {Button, SafeAreaView} from "react-native";
import {RootRoutes} from "../../Navigation/RootNavigation/RootRoutes.ts";

const TestScreen1 = ({navigation} : {navigation: any}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#000"}}>
            <Button title={"Click me"} onPress={() => {
                navigation.navigate(RootRoutes.TestScreen2);
            }}/>
        </SafeAreaView>
    );
};

export default TestScreen1;
