import React, {Component} from 'react'
import {
  StyleSheet,
 } from 'react-native'
import Video from 'react-native-video'
import Layout from '../components/Layout'
import Loader from '../../widgets/components/Loader'
import ControlLayout from '../components/ControlLayout'
import PlayPause from '../components/PlayPause'

class Player extends Component {
  state = {
    loading: true
  }
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }

  playPause = () => {

  }
  render () {
    return (
        <Layout
          loading={this.state.loading}
          video={
            <Video
              source={{
                uri: "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
              }}
              style={styles.video}
              resizeMode="contain"
              onBuffer={this.onBuffer}
              //controls
              controls={
                <ControlLayout>
                  <PlayPause
                    onPress={this.playPause}
                  />
                  <Text>progress bar</Text>
                  <Text>time left</Text>
                  <Text>full screen</Text>
                </ControlLayout>
              }
            />
          }
          loader={
            <Loader />
          }
          >
        </Layout>
    )
  }
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%'
    // position: 'absolute',
    // top: 0
  }
})

export default Player
