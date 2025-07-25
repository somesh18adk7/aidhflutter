import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState('');

  const handleVoiceInput = () => {
    setOutput('🗣️ You asked: What is the price of wheat?\n📈 Wheat price is ₹2,100 per quintal');
  };

  const handleUploadPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setOutput('🧪 Dummy diagnosis: Fungal infection detected. Use Neem-based spray.');
    }
  };

  const handleCheckPricesSchemes = () => {
    setOutput(
      '📈 Mandi Price:\nWheat – ₹2,100/quintal\n\n📜 Scheme:\nPM-KISAN – ₹6,000/year income support'
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌾 GrowWise (Demo)</Text>

      <View style={styles.buttonContainer}>
        <Button title="🎤 Talk to GrowWise" onPress={handleVoiceInput} />
        <View style={styles.spacer} />
        <Button title="📷 Upload Crop Photo" onPress={handleUploadPhoto} />
        <View style={styles.spacer} />
        <Button title="📈 Check Prices/Schemes" onPress={handleCheckPricesSchemes} />
      </View>

      {image && <Image source={{ uri: image }} style={styles.image} />}

      {output !== '' && (
        <View style={styles.outputBox}>
          <Text style={styles.outputText}>{output}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  spacer: {
    height: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  outputBox: {
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
  },
  outputText: {
    fontSize: 16,
    lineHeight: 22,
  },
});
