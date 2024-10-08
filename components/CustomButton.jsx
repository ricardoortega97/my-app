import { Text, TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlepress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
    onPress={handlepress}
    activeOpacity={0.7}
    
    className={`bg-secondary rounded-xl min-h-[62] justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-50' : ''}`}>
        <Text className={`'text-primary font-psemibold text-lg ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )  
}

export default CustomButton