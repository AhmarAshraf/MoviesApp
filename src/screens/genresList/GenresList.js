import React from 'react';
import {Text} from 'react-native';
import {
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const GenresList = props => {
  const {genres, onPress, } = props;

  const genreItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.genreItemContainer}
        onPress={() => onPress(item)}>
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
  },
  divider: {
    backgroundColor: 'grey',
    height: 0.5,
  },
});

export default GenresList;
