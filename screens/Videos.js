import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Video from 'react-native-video'

const Videos = () => {
    return (
        <View>
            <Text>This is video page</Text>
            {/* <Video
                source={{ uri: 'https://www.youtube.com/watch?v=Hf4MJH0jDb4&t=2240s' }}
                ref={(ref) => {
                    this.player = ref
                }}                                      // Store reference
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onError={this.videoError}
                style={styles.backgroundVideo}
            /> */}
        </View>
    )
}

export default Videos

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})
