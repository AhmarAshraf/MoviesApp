import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AxiosService from '../../services/axiosServices';
import {ApiUrls} from '../../services/URLS';
import GenresList from '../genresList/GenresList';

const Watch = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    AxiosService.getMovieGenres({
      url: ApiUrls.GENRE_LIST,
    })
      .then(response => {
        console.log(
          '🚀 ~ file: Watch.js:17 ~ useEffect ~ response:',
          response.data.genres,
        );
        setGenresList(response.data.genres);
      })
      .catch(error => {
        console.log('🚀 ~ file: Watch.js:19 ~ useEffect ~ error:', error);
      });
  }, []);

  return (
    <View style={styles.mainView}>
      <GenresList
        genres={genresList}
        // loadMoreData={() => {
        //     setPageNumber(pageNumber + 1)
        // }}
        onPress={item => console.log('show movies')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: '10%'
  },
});

export default Watch;
