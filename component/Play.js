import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Play() {
  const initialData = [
    { letter: "a", translation: "A" },
    { letter: "b", translation: "B" },
    { letter: "c", translation: "C" },
    { letter: "d", translation: "D" },
  ];
  const [data, setData] = useState(initialData);
  const [isFront, setIsFront] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardCount, setCardCount] = useState(initialData.length);
  const initialCardCount = initialData.length; // Lưu số lượng card ban đầu

  const handleCardPress = () => {
    setIsFront(!isFront);
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFront(true);
    } else {
      setCurrentIndex(data.length - 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFront(true);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleRemoveFromDeck = () => {
    if (data.length === 1) {
      return;
    }

    const updatedData = [...data];
    updatedData.splice(currentIndex, 1);

    if (currentIndex >= updatedData.length) {
      setCurrentIndex(updatedData.length - 1);
    }

    setData(updatedData);
    setCardCount(updatedData.length);
  };

  const handleResetDeck = () => {
    setData(initialData);
    setCurrentIndex(0);

    // Sử dụng số lượng card ban đầu khi reset
    setCardCount(initialCardCount);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Play</Text>
        <Text style={styles.headerText}>({cardCount} Cards)</Text>
      </View>
      <TouchableOpacity
        style={[styles.flex3, styles.card]}
        onPress={handleCardPress}
      >
        <Text style={styles.cardText}>
          {isFront ? data[currentIndex].letter : data[currentIndex].translation}{" "}
        </Text>
      </TouchableOpacity>

      <View style={styles.flex2}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, currentIndex === 0 && styles.fadedButton]}
            onPress={handlePrevious}
          >
            <Text
              style={[
                styles.buttonText,
                currentIndex === 0 && styles.fadedText,
              ]}
            >
              Previous
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              currentIndex === data.length - 1 && styles.fadedButton,
            ]}
            onPress={handleNext}
          >
            <Text
              style={[
                styles.buttonText,
                currentIndex === data.length - 1 && styles.fadedText,
              ]}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonRemove}
          onPress={handleRemoveFromDeck}
        >
          <Text style={styles.buttonTitle}>Remove From Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonReset} onPress={handleResetDeck}>
          <Text style={styles.buttonTitle}>Reset Deck</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 25,
    marginTop: 40,
  },
  card: {
    marginTop: 20,
    backgroundColor: "#DC143c",
    width: "90%",
    height: "30%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  flex3: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: "#fff",
    fontSize: 150,
    marginLeft: 50,
  },
  flex2: {
    flex: 2,
  },
  buttonGroup: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderWidth: 1,
    borderColor: "#DC143C",
    padding: 10,
    width: 100,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#DC143C",
    fontSize: 15,
    alignItems: "center",
  },
  fadedText: {
    color: "rgba(0, 0, 0, 0.5)", // Màu chữ mờ đi (điều chỉnh giá trị alpha để thay đổi độ mờ)
  },
  fadedButton: {
    borderColor: "rgba(0, 0, 0, 0.5)", // Màu border mờ đi (điều chỉnh giá trị alpha để thay đổi độ mờ)
  },
  buttonRemove: {
    marginTop: 20,
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: 370,
  },
  buttonReset: {
    marginTop: 20,
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: 370,
  },
  buttonTitle: {
    color: "#DC143C",
    fontSize: 20,
  },
});
