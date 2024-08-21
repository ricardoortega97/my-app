import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import { images } from "../../constants"
import FromField from '../../components/FromField'
import  CustomButton from "../../components/CustomButton"

const SignUP = () => {
  const [form, setForm] = useState({
    username : '',
    email : '',
    password : ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView> 
        <View className="w-full justify-center  px-4 my-6">

          <Image source={images.logo} resizeMode='contain'  className="w-[115px] h=[35px]"/>

          <Text className="text-2xl text-white text-semiold mt-5 font-psemibold">
            Sign up to Aora
          </Text>

          <FromField 
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form,
              username : e
            })} 
            otherStyles="mt-10"
            ///autofills infomation such as email/password/names
          /> 
          <FromField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form,
              email : e
            })} 
            otherStyles="mt-7"
            ///autofills infomation such as email/password/names
            keyboardType="email-address"
          /> 
          <FromField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form,
              password : e
            })} 
            otherStyles="mt-7"
          /> 
          <CustomButton 
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already Have an Account?
            </Text>
            <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUP