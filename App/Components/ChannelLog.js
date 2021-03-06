import React from 'react'
import { FlatList, View, Text } from 'react-native'
import ConnectedChannelLogForm from '../Containers/ConnectedChannelLogForm';

const ChannelLog = ({ channels, navigate }) => (
  <View style={{flex: 1, flexDirection: 'column', width: '100%'}} >
    <FlatList
      data={channels}
      renderItem={({item}) => (
        <Text onPress={() => navigate('SingleChat', {channelId: item.id})}>
          {item.name}
        </Text>
      )}
      keyExtractor= {item => item.id}
    />
    <ConnectedChannelLogForm />
  </View>
)

export default ChannelLog
