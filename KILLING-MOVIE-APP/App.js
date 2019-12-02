import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CommonBtn from "./components/CommonBtn";
import {movies} from "./api/movies";

class App extends React.Component{
  state ={
    viewPopular: null,
    loading: false
  }
  

  componentDidMount = async() => {
    let popular, NowPlaying;

    try{
      popular = await movies.getPopular();
      NowPlaying = await movies.getNowPlaying();
    }
    catch(error){
        alert("영화 데이터를 가져오는데 실패함...");
        console.log(error);
    }
    finally{
      popular = popular.data.results;
    }
  };

  render(){
    const { viewPopular, loading} = this.state;
    <view style={styles.container}>
      <view style={styles.btnArea}>
        <CommonBtn>popular</CommonBtn>
        <CommonBtn>NowPlaying</CommonBtn>
      </view>
    
    {loading? (viewPopular.map(movie => <text>{movie.title}</text>)) : (<text>로딩중</text>)}
    </view>
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
