import { View, Text, Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import {icons} from '../../constants'

const TabIcon=({icon,color,name,focused})=>{
    return(
        <View className="items-center justify-center mt-3">
            <Image 
            source={icon}
            resizeMethod='contain'
            tintColor={color}
            className="w-6 h-7"/>
             <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
                {name}
            </Text>
        </View>
    )
}
const TabsLayout = () => {
  return (
   <>
   <Tabs screenOptions={{
          tabBarActiveTintColor: "#eca8d0",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161644",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
    
    <Tabs.Screen
     name="home"
     options={{
       title: "Home",
       headerShown: false,
       tabBarIcon: ({ color, focused }) => (
         <TabIcon
           icon={icons.home}
           color={color}
           name="Home"
           focused={focused}
         />
       ),
     }}/>
     <Tabs.Screen
    name="post"
    options={{
        title: 'Post',
        headerShown: false,
        tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={icons.plus} 
            color ={color}
            name="Post"
            focused={focused}/>
        )
    }}/>
     <Tabs.Screen
    name="saved"
    options={{
        title: 'saved',
        headerShown: false,
        tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={icons.saved} 
            color ={color}
            name="Saved"
            focused={focused}/>
        )
    }}/>
     <Tabs.Screen
    name="profile"
    options={{
        title: 'profile',
        headerShown: false,
        tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={icons.profile} 
            color ={color}
            name="Profile"
            focused={focused}/>
            
        )
    }}/>
    
   </Tabs>
   </>
  )
}

export default TabsLayout