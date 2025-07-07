import React, { useEffect, useState } from "react";
import {View,Text,TextInput,Button,ScrollView,ActivityIndicator,Image,StyleSheet, TouchableOpacity, ImageBackground,
} from "react-native";

const API_KEY = "d2e1d59648974f41a0b203715250707"; // Cambia por tu clave real

export default function App() {
  const [cityInput, setCityInput] = useState("");
  const [cities, setCities] = useState([]);
  const [loadingCity, setLoadingCity] = useState(false);
  const [error, setError] = useState("");
  const [splashVisible, setSplashVisible] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSplashVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Autocompletado de ciudades
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (cityInput.length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${cityInput}`
        );
        const data = await res.json();
        setSuggestions(data);
        setShowSuggestions(true);
      } catch (err) {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [cityInput]);

  const fetchWeather = async (cityName) => {
    setLoadingCity(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&lang=es`
      );
      if (!res.ok) {
        throw new Error("Ciudad no encontrada");
      }

      const data = await res.json();
      const weather = {
        name: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        icon: `https:${data.current.condition.icon}`,
        description: data.current.condition.text,
      };

      setCities([...cities, weather]);
      setCityInput("");
      setSuggestions([]);
      setShowSuggestions(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingCity(false);
    }
  };

  const removeCity = (index) => {
    const newCities = [...cities];
    newCities.splice(index, 1);
    setCities(newCities);
  };

  if (splashVisible) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("./assets/Logo.jpeg")} // Cambia por tu imagen
          style={styles.splashImage}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
  <ImageBackground
    source={require("./assets/fondo1.jpg")} // <-- Cambia el nombre por tu imagen
    style={styles.background}
    resizeMode="cover"
  >
    <View style={styles.container}>
      <Text style={styles.title}>🌤️ Mi App del Clima</Text>

      <TextInput
        placeholder="Escribe una ciudad"
        value={cityInput}
        onChangeText={(text) => {
          setCityInput(text);
          setShowSuggestions(true);
        }}
        style={styles.input}
      />

      {showSuggestions && suggestions.length > 0 && (
        <View style={styles.suggestionBox}>
          {suggestions.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => fetchWeather(item.name)}
              style={styles.suggestionItem}
            >
              <Text style={styles.suggestionText}>
                {item.name}, {item.country}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {loadingCity && (
        <ActivityIndicator size="large" color="#fff" style={{ margin: 10 }} />
      )}

      {error !== "" && <Text style={styles.error}>{error}</Text>}

      <ScrollView style={{ marginTop: 20 }}>
        {cities.map((city, index) => (
          <View key={index} style={styles.weatherCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cityTitle}>
                {city.name}, {city.country}
              </Text>
              <TouchableOpacity onPress={() => removeCity(index)}>
                <Text style={styles.deleteButton}>❌</Text>
              </TouchableOpacity>
            </View>

            <Image source={{ uri: city.icon }} style={styles.weatherIcon} />
            <Text style={styles.temperature}>{city.temp}°</Text>
            <Text style={styles.description}>{city.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  </ImageBackground>
);

}

const styles = StyleSheet.create({
  // Splash
  background: {
  flex: 1,
  width: "100%",
  height: "100%",
},

  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6C4CF1",
  },
  splashImage: {
    width: 200,
    height: 200,
  },

  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#fff",
  },

  input: {
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 10,
    fontSize: 16,
  },

  error: {
    color: "red",
    marginTop: 5,
    marginBottom: 10,
    textAlign: "center",
  },

  weatherCard: {
    backgroundColor: "#8F72F8",
    borderRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 30,
    marginBottom: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 6,
  },

  cardHeader: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cityTitle: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "600",
  },

  weatherIcon: {
    width: 120,
    height: 120,
    marginTop: 20,
    marginBottom: 10,
  },

  temperature: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },

  description: {
    fontSize: 18,
    color: "#FFFFFF",
    fontStyle: "italic",
  },

  deleteButton: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  suggestionBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    maxHeight: 200,
  },

  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  suggestionText: {
    fontSize: 16,
    color: "#333",
  },
});
