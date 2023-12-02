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

const MovieDetail = ({navigation, route}) => {
  const {movieId} = route.params;
  const [movieDetail, setMovieDetail] = useState([]);


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


 

  return (
    <>
       
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
