import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Constants} from '../../constants/Constants';
import AxiosService from '../../services/axiosServices';
import {ApiUrls} from '../../services/URLS';
import Video from 'react-native-video';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';

const MovieDetail = ({navigation, route}) => {
  const {movieId} = route.params;
  const {movieList} = route.params;
  const [movieDetail, setMovieDetail] = useState([]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoKey, setVideoKey] = useState('');
  console.log("🚀 ~ file: MovieDetail.js:23 ~ MovieDetail ~ videoKey:", videoKey)

  useEffect(() => {
    AxiosService.getMovieDetail({
      url: `${ApiUrls.MOVIE_DETAIL(movieId)}`,
    })
      .then(response => {
        setMovieDetail(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]);

  useEffect(() => {
    AxiosService.getMovieDetail({
      url: `${ApiUrls.VIDEO(movieId)}`,
    })
      .then(response => {
        // console.log(
        //   '🚀 ~ file: MovieDetail.js:41 ~ useEffect ~ response:',
        //   response.data,
        // );
        const videoResults = response.data.results;

        if (videoResults.length > 0) {
          setVideoKey(videoResults[0].key);
        }
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, []);

  const VideoPlayer = () => {
    return (

    <View style={{backgroundColor: 'transparent'}}>
      {/* <Video
        source={{uri: `https://www.youtube.com/watch?v=${videoKey}`}} 
        // ref={ref => {
        //   this.player = ref;
        // }} // Store reference
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        style={{  width: '100%',
        height: '100%',
        position: 'absolute',}}
      /> */}
      
       <Video
         source={{uri: `https://www.youtube.com/watch?v=${videoKey}`}}
        paused={false}
        style={{
          width: '100%',
          width: 500,
          height: '100%',
          height: 500,
          // position: 'absolute'
        }}
        repeat={true}
        resizeMode={'cover'}
        onError={(error)=>console.log('error', error)}
        controls={true}
      />
      {/* <MediaControls
        isFullScreen={true}
        // duration={duration}
        // isLoading={isLoading}
        mainColor="orange"
        // onFullScreen={noop}
        // onPaused={onPaused}
        // onReplay={onReplay}
        // onSeek={onSeek}
        // onSeeking={onSeeking}
        // playerState={playerState}
        // progress={currentTime}
      /> */}
      <Text onPress={() => setIsVideoPlaying(false)} style={{color: 'red', alignSelf: 'center'}}>Done</Text>
    </View>
    )
  };

  return (
    <>
      {(isVideoPlaying && videoKey) ? (
        <VideoPlayer />
      ) : (
        <ScrollView style={styles.mainView}>
          <Image
            style={styles.imageView}
            source={{
              uri: `${Constants.IMAGE_URL}${movieDetail?.poster_path}`,
            }}
          />
          <View style={{position: 'absolute', top: '40%', alignSelf: 'center'}}>
            <TouchableOpacity
              style={{
                width: 220,
                height: 45,
                backgroundColor: '#61C3F2',
                borderRadius: 10,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '700',
                }}>
                Get Tickets
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>setIsVideoPlaying(true)}
              style={{
                width: 220,
                height: 45,
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#61C3F2',
                borderRadius: 10,
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '700',
                }}>
                Watch Trailer
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondContainer}>
            <Text style={styles.description}>Overview</Text>
            <Text>{movieDetail.overview}</Text>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  imageView: {
    height: 420,
    resizeMode: 'stretch',
  },
  secondContainer: {
    // flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  thirdContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  infoTitle: {fontSize: 12},
  infoTitleData: {fontSize: 14, color: 'black', fontWeight: 'bold'},
  fourthContainer: {
    flex: 1,
  },
  description: {
    marginTop: 8,
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flatListContainer: {
    flex: 1,
    marginTop: 4,
  },
  movieItemContainer: {margin: 4},
  similarImageView: {
    height: 150,
    width: 120,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  artistImageView: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginHorizontal: 4,
    borderWidth: 1.5,
    borderColor: 'blue',
    resizeMode: 'cover',
  },
});
export default MovieDetail;
