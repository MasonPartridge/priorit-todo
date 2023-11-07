import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HomePage = ({ navigation }) => {
  return (
    <ScrollView style={tw`bg-white h-full`}>
      <View style={tw`pt-12 items-center`}>
        <View style={tw`bg-blue-200 px-3 py-1 rounded-full`}>
          <Text style={tw`text-blue-800 font-semibold`}>
            Community Ali
          </Text>
        </View>
      </View>

      <View style={tw`px-4 py-5`}>
        <Text style={tw`text-xl font-semibold text-gray-800`}>
          Welcome to Community Ali
        </Text>
        <Text style={tw`text-gray-500 pt-2`}>
          Your one-stop hub for connecting with meaningful community service and internship opportunities.
          Collaborate, contribute, and grow with us and our partner organizations.
        </Text>
      </View>

      <View style={tw`px-4 py-5`}>
        <Text style={tw`text-lg font-semibold text-gray-800`}>
          Get Involved
        </Text>
        <View style={tw`flex-row justify-between mt-4`}>
          <View style={tw`w-1/2 pr-2`}>
            <Button
              title="Community Service"
              onPress={() => navigation.navigate('CommunityService')}
              color="#4ade80"
            />
          </View>
          <View style={tw`w-1/2 pl-2`}>
            <Button
              title="Internships"
              onPress={() => navigation.navigate('Internships')}
              color="#60a5fa"
            />
          </View>
        </View>
      </View>
      
      {/* Additional sections for Featured Opportunities, Testimonials, etc. */}
      {/* ... */}
      
    </ScrollView>
  );
};

export default HomePage;
