import React, {Component} from 'react'
import { StyleSheet } from 'react-native'
import Video from 'react-native-video'
import Layout from '../components/Layout'

class Player extends Component {
  render () {
    return (
        <Layout
          video={
            <Video
              source={{
                uri: "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
              }}
              style={styles.video}
              resizeMode="contain"
            />
          }
          >
        </Layout>
    )
  }
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    position: 'absolute',
    top: 0
  }
})

export default Player
