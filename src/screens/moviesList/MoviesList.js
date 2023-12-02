import React from 'react';
import {Text} from 'react-native'
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Constants} from '../../constants/Constants';

const MovieList = props => {
  const {movies, onPress, loadMoreData} = props;
  const movieItem = ({item}) => {
    console.log("🚀 ~ file: MoviesList.js:17 ~ movieItem ~ item:", item)
    return (
      <TouchableOpacity
        style={styles.movieItemContainer}
        onPress={() => onPress(item)}>
        <ImageBackground
          imageStyle={{borderRadius: 18}}
          source={{uri: `${Constants.IMAGE_URL}${item.poster_path}`}}>
          <Image
            style={styles.imageView}
            source={{
              uri: `${Constants.IMAGE_URL}${item.poster_path}`,
            }}
            onLoadEnd={() => {
              setIsLoading(false);
            }}
          />
          <Text style={{ position: 'absolute', bottom: 15, marginLeft: 20, color: 'white', fontSize: 18, fontWeight: '700'}}>{item.original_title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        style={styles.flatListContainer}
        data={movies}
        extraData={movies}
        renderItem={movieItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.2}
        onEndReached={() => loadMoreData()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  flatListContainer: {
    marginHorizontal: 4,
    marginTop: 4,
  },
  movieItemContainer: {flex: 1 / 2, margin: 4},
  imageView: {
    height: 180,
    borderRadius: 18,
  },
  divider: {
    backgroundColor: 'grey',
    height: 0.5,
  },
});

export default MovieList;
