import React, {Component} from 'react'
import {
  StyleSheet,
  Text
 } from 'react-native'
import Video from 'react-native-video'
import Layout from '../components/Layout'
import Loader from '../../widgets/components/Loader'
import ControlLayout from '../components/ControlLayout'
import PlayPause from '../components/PlayPause'

class Player extends Component {
  state = {
    loading: true,
    paused: false
  }
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }

  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }
  render () {
    return (
        <Layout
          loading={this.state.loading}
          loader={
            <Loader />
          }
          video={
            <Video
              source={{uri: "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"}}
              style={styles.video}
              resizeMode="contain"
              onBuffer={this.onBuffer}
              paused={this.state.paused}
              control={
                <ControlLayout>
                  <PlayPause
                    onPress={this.playPause}
                    paused={this.state.paused}
                  />
                  <Text>progress bar</Text>
                  <Text>time left</Text>
                  <Text>full screen</Text>
                </ControlLayout>
              }
              //controls
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
    height: '100%'
    // position: 'absolute',
    // top: 0
  }
})

export default Player
