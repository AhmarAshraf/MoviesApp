import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MovieList from '../../screens/moviesList/MoviesList'
import AxiosService from '../../services/axiosServices';
import { ApiUrls } from '../../services/URLS';

const Dashboard = ({navigation}) => {
    //communicate with redux
    const [pageNumber, setPageNumber] = useState(1)
    const [movieList, setMovieList] = useState([])

    // Api call
    useEffect(() => {
      AxiosService.getMovies({
        url: ApiUrls.MOVIE_LIST,
        page: pageNumber
      }).then(response => {
        setMovieList(preMovies=>[...preMovies, ...response.data.results])
      }).catch(error => {
        console.log("🚀 ~ file: Dashboard.js:19 ~ useEffect ~ error:", error)
      })
    }, [pageNumber])

    return (<View style={styles.mainView}>
        <MovieList
            movies={movieList}
            loadMoreData={() => {
                setPageNumber(pageNumber + 1)
            }}
            onPress={(item) => navigation.navigate('MovieDetail', {movieId: item.id, movieList})}/>
    </View>);
}

const styles = StyleSheet.create({
  mainView: {
      flex: 1,
      marginTop: '10%'
  }
});

export default Dashboard
