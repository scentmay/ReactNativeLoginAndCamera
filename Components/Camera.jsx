import React from 'react';
import { useState } from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';


const Camera = () => {
  const [image, setImage] = useState(null);

  const takePicture = () => {
    ImagePicker.launchCamera({ mediaType: 'photo' }, response => {
      if (response.uri) {
        setImage(response);
      }
    });
  };

  return (
    <View style={styles.container}>
       {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
      <TouchableOpacity onPress={takePicture}>
        <View style={styles.capture}>
          <Text style={styles.captureText}>Tomar foto</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  captureText: {
    fontSize: 14,
    color: '#000',
  },
});


export default Camera

























