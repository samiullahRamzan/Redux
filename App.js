import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ScrollView, Button } from 'react-native';
import Header from './components/Header';
import Product from './components/Product';
 import store from './components/Redux/store';


export default function App() {
  
  const products=[
     {
       id:0,
       name:'Apple Iphone',
       price:30000,
       color:'black',
       image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAATlBMVEX///8AAAD6+vrw8PBXV1c+Pj7Ozs6VlZVtbW17e3v19fXk5OSPj4+6urphYWGurq5ISEgpKSlzc3PGxsYJCQk5OTmIiIhOTk4RERGhoaEntDRZAAABIElEQVR4nO3b2w6CMBBF0U5BVCiKIF7+/0elgChGDDVDjMk+L0ZSOistr8cYQsi/JEuCkulOt+4ogTk6qzc/rUPH+9Sp1ny7+2a+yE7rDPJ2t3Ubd5g48f734Lp1rTlXAvjN9vc/ZTeoSqMhWS0nc+6el/d1e4/WmZ8WIqvhPpNuULx9ZHOR4tqfTDK8tRIpdL6CqNkqflxn+enahwMwNm7Y0RIAv/NUXpYtAzCmcpu3cdXToiUBswIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAIGJdcZr+lV3IZ13zmRrHmMyo6zY1q0ennVa/2PsMT/t1Mx7rw+Zp1P5/fFh4JIQvmBqouF5evG0HHAAAAAElFTkSuQmCC'
     },
     {
      id:1,
      name:'Android',
      price:30000,
      color:'black',
      image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAATlBMVEX///8AAAD6+vrw8PBXV1c+Pj7Ozs6VlZVtbW17e3v19fXk5OSPj4+6urphYWGurq5ISEgpKSlzc3PGxsYJCQk5OTmIiIhOTk4RERGhoaEntDRZAAABIElEQVR4nO3b2w6CMBBF0U5BVCiKIF7+/0elgChGDDVDjMk+L0ZSOistr8cYQsi/JEuCkulOt+4ogTk6qzc/rUPH+9Sp1ny7+2a+yE7rDPJ2t3Ubd5g48f734Lp1rTlXAvjN9vc/ZTeoSqMhWS0nc+6el/d1e4/WmZ8WIqvhPpNuULx9ZHOR4tqfTDK8tRIpdL6CqNkqflxn+enahwMwNm7Y0RIAv/NUXpYtAzCmcpu3cdXToiUBswIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAIGJdcZr+lV3IZ13zmRrHmMyo6zY1q0ennVa/2PsMT/t1Mx7rw+Zp1P5/fFh4JIQvmBqouF5evG0HHAAAAAElFTkSuQmCC'
    },
    {
      id:2,
      name:'Samsung',
      price:30000,
      color:'black',
      image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAATlBMVEX///8AAAD6+vrw8PBXV1c+Pj7Ozs6VlZVtbW17e3v19fXk5OSPj4+6urphYWGurq5ISEgpKSlzc3PGxsYJCQk5OTmIiIhOTk4RERGhoaEntDRZAAABIElEQVR4nO3b2w6CMBBF0U5BVCiKIF7+/0elgChGDDVDjMk+L0ZSOistr8cYQsi/JEuCkulOt+4ogTk6qzc/rUPH+9Sp1ny7+2a+yE7rDPJ2t3Ubd5g48f734Lp1rTlXAvjN9vc/ZTeoSqMhWS0nc+6el/d1e4/WmZ8WIqvhPpNuULx9ZHOR4tqfTDK8tRIpdL6CqNkqflxn+enahwMwNm7Y0RIAv/NUXpYtAzCmcpu3cdXToiUBswIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAIGJdcZr+lV3IZ13zmRrHmMyo6zY1q0ennVa/2PsMT/t1Mx7rw+Zp1P5/fFh4JIQvmBqouF5evG0HHAAAAAElFTkSuQmCC'
    },
    {
      id:3,
      name:'Xioami',
      price:30000,
      color:'black',
      image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAATlBMVEX///8AAAD6+vrw8PBXV1c+Pj7Ozs6VlZVtbW17e3v19fXk5OSPj4+6urphYWGurq5ISEgpKSlzc3PGxsYJCQk5OTmIiIhOTk4RERGhoaEntDRZAAABIElEQVR4nO3b2w6CMBBF0U5BVCiKIF7+/0elgChGDDVDjMk+L0ZSOistr8cYQsi/JEuCkulOt+4ogTk6qzc/rUPH+9Sp1ny7+2a+yE7rDPJ2t3Ubd5g48f734Lp1rTlXAvjN9vc/ZTeoSqMhWS0nc+6el/d1e4/WmZ8WIqvhPpNuULx9ZHOR4tqfTDK8tRIpdL6CqNkqflxn+enahwMwNm7Y0RIAv/NUXpYtAzCmcpu3cdXToiUBswIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAIGJdcZr+lV3IZ13zmRrHmMyo6zY1q0ennVa/2PsMT/t1Mx7rw+Zp1P5/fFh4JIQvmBqouF5evG0HHAAAAAElFTkSuQmCC'
    },
     


  ]

  return (
  
        <View style={styles.container}>
            <Header/>
            
            <ScrollView showsVerticalScrollIndicator={false}>
            {
            products.map((item)=>  <Product item={item} />  )}
            </ScrollView>
            <StatusBar hidden={false} backgroundColor='orange' style='auto'/>
        </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    
  },
});
