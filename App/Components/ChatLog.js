import React from 'react'
import { FlatList, View } from 'react-native'
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage'

const ChatLog = ({ chats }) => (
  <View style={{flex: 1, flexDirection: 'column', width: '100%'}} >
    <FlatList
      inverted
      data={chats}
      renderItem={({ item }) => <ChatMessage chatMessage={item} /> }
      keyExtractor= {(item, index) => index}
    />
  </View>
)

ChatLog.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      user_email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default ChatLog
