import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AxiosService from '../../services/axiosServices';
import {ApiUrls} from '../../services/URLS';
import GenresList from '../genresList/GenresList';

const Watch = () => {
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    AxiosService.getMovieGenres({
      url: ApiUrls.GENRE_LIST,
    })
      .then(response => {
        setGenresList(response.data.genres);
      })
      .catch(error => {
      });
  }, []);

  return (
    <View style={styles.mainView}>
      <GenresList
        genres={genresList}
        onPress={console.log('show movies')}
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
