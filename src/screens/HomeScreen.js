import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Field, Formik } from 'formik';
import DatePicker from '../components/DatePicker';
import CityPicker from '../components/CityPicker';
import MyCheckboxForm from '../components/MyCheckboxForm';
import InfoText from '../components/InfoText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <InfoText />
      <Formik
        initialValues={{
          tcNo: '',
          kimlikSeriNo: '',
          cepTel: '',
          dogumTarihi: new Date(),
          city: 0,
          district: '',
          town: '',
          kvkkChecked: false,
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
          <View>
            <Text style={styles.label}>T.C. Kimlik No</Text>
            <TextInput
              style={styles.input}
              placeholder="11111111111"
              value={values.tcNo}
              onChangeText={handleChange('tcNo')}
            />
            <Text style={styles.label}>Kimlik Seri No</Text>
            <TextInput
              style={styles.input}
              placeholder="AAAAAAAAA"
              value={values.kimlikSeriNo}
              onChangeText={handleChange('kimlikSeriNo')}
            />
            <Text style={styles.label}>Doğum Tarihi</Text>
            <DatePicker />
            <Text style={styles.label}>Cep Telefon</Text>
            <TextInput
              style={styles.input}
              placeholder="53"
              value={values.cepTel}
              onChangeText={handleChange('cepTel')}
            />
            <CityPicker
              values={values}
              setFieldValue={setFieldValue}
              enabled={true} // You can control this based on other conditions
            />
            <Field name="kvkkChecked">
              {({ field }) => (
                <MyCheckboxForm
                  kvkkChecked={values.kvkkChecked}
                  onCheckboxChange={(value) => setFieldValue('kvkkChecked', value)}
                />
              )}
            </Field>
            <Button title="Devam Et" onPress={handleSubmit} color="#912149" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  button:{
    
  },
  // Diğer stil tanımlamaları buraya eklenir
});
