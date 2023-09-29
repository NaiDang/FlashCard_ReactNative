import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <Text style={styles.title}>LETTER A SETS</Text>
      <View style={styles.cardContainerRed}>
        <View style={styles.cardRed}>
          <Text style={styles.cardText}>a</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Letter a</Text>
          <Text style={styles.subText}>The letter a is lowercase</Text>
        </View>
      </View>
      <Text style={styles.title}>LETTER B SETS</Text>
      <View style={styles.cardContainerOrange}>
        <View style={styles.cardOrange}>
          <Text style={styles.cardText}>b</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Letter b</Text>
          <Text style={styles.subText}>The letter b is lowercase</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
  },
  header:{
    backgroundColor:"#FFF",
    width:"100%",
    height:100,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
  },
  headerText:{
    fontSize: 25,
    marginTop:40,
  },
  title: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  cardContainerRed: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    marginBottom: 100,
  },
  cardRed: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#DC143c",
    width: "13%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  cardText: {
    color: "#fff",
    fontSize: 25,
  },
  textContainer: {
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
  },
  subText: {
    fontSize: 12,
    color: "#DCDCDC",
  },
  cardContainerOrange: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
  },
  cardOrange: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#F29F05",
    width: "13%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
});
