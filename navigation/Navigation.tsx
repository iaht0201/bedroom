import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import Search from '../screen/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, View, Text } from 'react-native';
import React from 'react';
import { themeColor } from '../theme/themeColor';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const ios = Platform.OS == 'ios';
export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={TabBarBottom} options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={Search} />

            </Stack.Navigator >
        </NavigationContainer>
    );

}

function TabBarBottom() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => menuIcons(route, focused),
            tabBarStyle: {
                marginBottom: 20,
                height: 75,
                alignItems: 'center',

                borderRadius: 100,
                marginHorizontal: 20,
                backgroundColor: themeColor.bgColor,

            },
            tabBarItemStyle: {
                marginTop: ios ? 30 : 0,

            }
        })}

        >
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="search" component={Search} />

        </Tab.Navigator>
    )

}

const menuIcons = (route: any, focused: any) => {
    let icon;


    if (route.name === 'home') {
        icon = focused ? <Text> T</Text> : <Text>A</Text>
    } else if (route.name === 'search') {
        icon = focused ? <Text>B</Text> : <Text>C</Text>
    }


    let buttonClass = focused ? "bg-white" : "";
    return (
        <View className={"flex items-center rounded-full p-3 shadow " + buttonClass}>
            {icon}
        </View>
    )
}