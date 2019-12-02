import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CommonBtn from "./components/CommonBtn";
import {movies} from "./api/movies";

class App extends React.Component{
  componentDidMount = async() => {
    let popular, NowPlaying;

    try{
      popular = await movies.getPopular();
      NowPlaying = await movies.getNowPlaying();
    }
    catch(error){

    }
    finally{

    }
  };

  render(){
    <view style={styles.container}>
      <view style={styles.btnArea}>
        <CommonBtn>popular</CommonBtn>
        <CommonBtn>NowPlaying</CommonBtn>
      </view>
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
