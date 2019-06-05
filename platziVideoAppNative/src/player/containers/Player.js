import React, {Component} from 'react'
import {
  StyleSheet,
 } from 'react-native'
import Video from 'react-native-video'
import Layout from '../components/Layout'
import Loader from '../../widgets/components/Loader'

class Player extends Component {
  state = {
    loading: true
  }
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
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
