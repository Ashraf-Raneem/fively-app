import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`flex-1 mt-8 justify-center items-center bg-[#1E1F28]`}>
      <Text style={tw`text-white`}>Open up App.js to start working app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
