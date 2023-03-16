import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";
import * as Linking from "expo-linking";
import { Entypo } from "@expo/vector-icons";

const AppIntro = () => {
  const [text, setText] = useState<any>();

  let location: String = `Javits Corner 34th and 11th ave, New York, NY`;
  let longitude: number = 40.75594534;
  let latitude: number = -74.0020617;

  const openAddressOnMap = (label: any, lon: number, lat: number) => {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    const lonLat: any = `${lon},${lat}`;
    const url: any = Platform.select({
      ios: `${scheme}${label}@${lonLat}`,
      android: `${scheme}${lonLat}(${label})`,
    });
    //Linking.openURL(url); //apple maps
    Linking.openURL(`https://maps.google.com/?q=${lon},${lat}`); //google maps
  };

  return (
    <View>
      <Text style={styles.title} accessibilityHint="Where would you like to go">
        Where would you like to go?
      </Text>

      <TextInput
        placeholder="Ex: 199 Chambers St"
        value={text}
        onChangeText={setText}
        style={styles.inputText}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => openAddressOnMap(location, longitude, latitude)}
      >
        <Text style={styles.buttonText} accessibilityHint="button to speak">
          Locate
        </Text>
      </TouchableOpacity>

      <TouchableHighlight style={styles.micButton} onPress={() => null}>
        <View>
          <Entypo style={styles.micIcon} name="mic" size={24} color="#ffffff" />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
  },

  inputText: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#000000",
    height: 45,
    bottom: -30,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },

  button: {
    width: 280,
    height: 50,
    backgroundColor: "#000000",
    borderRadius: 5,
    marginBottom: 20,
    position: "absolute",
    bottom: -120,
    alignSelf: "center",
    right: 100,
  },

  //how it looks
  //where its placed
  //how it functions

  micButton: {
    backgroundColor: "#000000",
    width: 80,
    height: 50,
    borderRadius: 5,
    alignSelf: "center",
    bottom: -120,
    marginBottom: 20,
    position: "absolute",
    left: 310,
  },

  micIcon: {
    left: 25,
    bottom: -15,
  },
});

export default AppIntro;
