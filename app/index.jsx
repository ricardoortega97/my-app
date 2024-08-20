import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Ridirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return ( 
    ///Doesn't overlap any bars from devices 
    <SafeAreaView className='bg-purple-400 h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className='w-full justify-center items-center min-h-[85wh] px-4'> 
          <Image 
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image 
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless: {' '} 
              <Text className='text-secondary-200'>
                  Aora
              </Text>
            </Text>
            <Image 
              source={images.path}
              className='w-[136px] h-[15] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>
          <Text className='text-gray-100 mt-7 text-center'>
            Where creativitiy meets innovation:
            embark on a journey of limitless exporation
          </Text> 
          
          <CustomButton 
          title='Continue with Email'
          handlepress={() => router.push('/sign-in')}
          containerStyles={"w-full mt-7"}
          />
        </View>
      </ScrollView>
      <StatusBar 
        backgroundColor='#162622' style='light'
      />
    </SafeAreaView>
  );
}

