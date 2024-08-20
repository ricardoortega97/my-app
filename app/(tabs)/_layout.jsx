import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants';
//the Icon on the tabs design and adjustments
const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image  
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} 
            style={{color : color}}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <> 
            <Tabs
            screenOptions={{
                tabBarShowLabel : false,
                ///when the tab button is called, it will be highlighted yellow 
                tabBarActiveTintColor : '#FFA001',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor : '#161622',
                    borderTopWidth : 1,
                    borderTopColor : '#232533',
                    height : 84
                }
                }}
            >
                <Tabs.Screen
                ///calls the layout of the tabs folder
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        //call of the function from the top line 
                        <TabIcon 
                        icon={icons.home}
                        color={color}
                        name='Home'
                        focused={focused}
                        /> 
                    )
                }}
                />
                <Tabs.Screen
                name='bookmarks'
                options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                        icon={icons.bookmark}
                        color={color}
                        name='Bookmark'
                        focused={focused}
                        /> 
                    )
                }}
                />
                <Tabs.Screen
                name='create'
                options={{
                    title: 'Create',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                        icon={icons.plus}
                        color={color}
                        name='Create'
                        focused={focused}
                        /> 
                    )
                }}
                />
                <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                        icon={icons.profile}
                        color={color}
                        name='profile'
                        focused={focused}
                        /> 
                    )
                }}
            />
        </Tabs>
        </>
    )
}

export default TabsLayout