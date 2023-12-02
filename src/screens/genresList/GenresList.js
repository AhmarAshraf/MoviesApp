import React, {useState} from 'react';
import {Text} from 'react-native';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Constants} from '../../constants/Constants';

const GenresList = props => {
  const {genres, onPress, loadMoreData} = props;
  console.log("🚀 ~ file: GenresList.js:15 ~ GenresList ~ genres:", genres)
  const [isLoading, setIsLoading] = useState(true);
  const genreItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.genreItemContainer}
        onPress={() => onPress(item)}>
        {/* <ImageBackground
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
          /> */}
          <Text
            style={{
              position: 'absolute',
              bottom: 15,
              marginLeft: 20,
              color: 'black',
              fontSize: 18,
              fontWeight: '700',
            }}>
            {item.name}
          </Text>
        {/* </ImageBackground> */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        style={styles.flatListContainer}
        data={genres}
        extraData={genres}
        renderItem={genreItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.2}
        // onEndReached={() => loadMoreData()}
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
    
    genreItemContainer: { margin: 4, backgroundColor:'yellow', height: 100,
    borderRadius: 18},
  imageView: {
    height: 180,
    borderRadius: 18,
    // resizeMode: 'contain',
  },
  divider: {
    backgroundColor: 'grey',
    height: 0.5,
  },
});

export default GenresList;
