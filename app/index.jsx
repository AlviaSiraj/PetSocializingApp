import { StatusBar } from "expo-status-bar";
import { Redirect, Link, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
//makes it work for web
import { NativeWindStyleSheet } from "nativewind";
import CustomButton from "../components/CustomButton";
NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}} >
        <View className="w-full items-center justify-center h-100 px-6">
          <Image source={images.logo}
            className="w-[300px] h-[190px]"
            resizeMode="contain"
            />
             <Image
            source={images.polaroids}
            className="w-[150%] h-[308px] mt-[-60] items-center justify-center"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover other{"\n"}
              Dog Owners with{" "}
              <Text className="text-secondary-200">Puppy Pals</Text>
            </Text>

          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where your love for your pets goes beyond your home
          </Text>

         <CustomButton title="Sign In"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"/>

<Text className="text-sm font-pregular text-gray-100 mt-2 text-center">
            Dont Have An Account?
          </Text>
          <Link className="text-secondary font-pblack" href="/sign-up">
            Sign Up
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
