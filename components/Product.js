import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { addToCart } from "./Redux/action";
import { useDispatch } from "react-redux";
export default function Product(props) {
  const item = props.item;
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <View
      style={{
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 3,
        borderBottomColor: "black",
      }}
    >
      <Text style={{ fontSize: 25 }}>{item.name}</Text>
      <Text style={{ fontSize: 25 }}>{item.price}</Text>
      <Text style={{ fontSize: 25 }}>{item.color}</Text>
      <Image source={{ uri: item.image }} style={{ height: 100, width: 100 }} />
      <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
