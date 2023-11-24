
import React, { useEffect, useState } from 'react';
import { View,  StyleSheet, Button, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const CityPicker = ({ values, setFieldValue, enabled }) => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [towns, setTowns] = useState([]);

  useEffect(() => {
    // Fetch cities when the  mounts
    fetch('https://api.kadircolak.com/Konum/JSON/API/ShowAllCity')
      .then((response) => response.json())
      .then((data) => setCities(data));
  }, []);

  const fetchDistricts = (cityId) => {
    // Fetch districts when a city is selected
    fetch(`https://api.kadircolak.com/Konum/JSON/API/ShowDistrict?PLATE=${cityId}`)
      .then((response) => response.json())
      .then((data) => setDistricts(data));
  };

  const fetchTowns = (cityId, districtName) => {
    // Fetch towns when a district is selected
    fetch(`https://api.kadircolak.com/Konum/JSON/API/ShowTown?PLATE=${cityId}&DISTRICT=${districtName}`)
      .then((response) => response.json())
      .then((data) => setTowns(data));
  };

  return (
    <View>
      <Text>İl</Text>
      <Picker
        selectedValue={values.selectedCity}
        style={styles.picker}
        onValueChange={(itemValue) => {
          setFieldValue('selectedCity', itemValue);
          setFieldValue('selectedDistrict', '');
          setFieldValue('selectedTown', '');
          fetchDistricts(itemValue);
        }}
        enabled={enabled}
      >
        <Picker.Item label="Seçiniz" value={0} />
        {cities.map((city) => (
          <Picker.Item key={city.ID} label={city.TEXT} value={city.ID} />
        ))}
      </Picker>
      <Text>İlçe</Text>
      <Picker
        selectedValue={values.selectedDistrict}
        style={styles.picker}
        onValueChange={(itemValue) => {
          setFieldValue('selectedDistrict', itemValue);
          
          setFieldValue('selectedTown', '');
          fetchTowns(values.selectedCity, itemValue);
        }}
        enabled={values.selectedCity !== 0}
      >
        <Picker.Item label="Seçiniz" value={0} />
        {districts.map((district, index) => (
              <Picker.Item key={index} label={district.DISTRICT} value={district.DISTRICT} />
              ))}
      </Picker>
      <Text>Mahelle</Text>
      <Picker
        selectedValue={values.selectedTown}
        style={styles.picker}
        onValueChange={(itemValue) => {
          setFieldValue('selectedTown', itemValue);
        }}
        enabled={values.selectedDistrict !== '' && enabled}
      >
        <Picker.Item label="Seçiniz" value={''} />
        {towns.map((town, index) => (
          <Picker.Item key={index} label={town.TOWN} value={town.TOWN} />
        ))}
      </Picker>

      
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 250,
  },
});

export default CityPicker;