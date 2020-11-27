import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const Home = () => {
   // Dummy data
   const [trending, setTrending] = useState([
      {
         id: 0,
         name: 'Nike Air Zoom Pegasus 36',
         img: images.nikePegasus36,
         bgColor: '#BF012C',
         type: 'RUNNING',
         price: '$186',
         sizes: [6, 7, 8, 9, 10]
      },
      {
         id: 1,
         name: 'Nike Metcon 5',
         img: images.nikeMetcon5Black,
         bgColor: '#D39C67',
         type: 'TRAINING',
         price: '$135',
         sizes: [6, 7, 8, 9, 10, 11, 12]
      },
      {
         id: 2,
         name: 'Nike Air Zoom Kobe 1 Protro',
         img: images.nikeZoomKobe1Protro,
         bgColor: '#7052A0',
         type: 'BASKETBALL',
         price: '$199',
         sizes: [6, 7, 8, 9]
      }
   ]);
   return (
      <View style={styles.container}>
         <Text style={{marginTop: SIZES.radius, marginHorizontal: SIZES.padding, ...FONTS.largeTitleBold}}>TRENDING</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: COLORS.white
   }
});

export default Home;