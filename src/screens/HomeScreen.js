import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Field, Formik } from 'formik';
import DatePicker from '../components/DatePicker';
import CityPicker from '../components/CityPicker';
import MyCheckboxForm from '../components/MyCheckboxForm';
import InfoText from '../components/InfoText';

import { useDispatch } from 'react-redux';
import { addFormData } from './HomeScreenSlice';


function validateTCKN(tcNo) {
  // TC Kimlik No'nun 11 rakamdan oluştuğunu kontrol et
  if (!/^\d{11}$/.test(tcNo)) {
    return false;
  }

  // TC Kimlik No'nun ilk rakamı 0 (sıfır) olamaz
  if (tcNo.charAt(0) === '0') {
    return false;
  }

  // 1, 3, 5, 7, 9 basamaklarının toplamının 7 katından, 2, 4, 6, 8 basamaklarının toplamını çıkart
  var oddSum = parseInt(tcNo.charAt(0)) + parseInt(tcNo.charAt(2)) + parseInt(tcNo.charAt(4)) +
                parseInt(tcNo.charAt(6)) + parseInt(tcNo.charAt(8));
  var evenSum = parseInt(tcNo.charAt(1)) + parseInt(tcNo.charAt(3)) + parseInt(tcNo.charAt(5)) +
                 parseInt(tcNo.charAt(7));

  if ((oddSum * 7 - evenSum) % 10 !== parseInt(tcNo.charAt(9))) {
    return false;
  }

  // İlk 10 hanenin toplamından elde edilen sonucun 10’a bölümünden kalan sayı (MOD10) 11. basamaktaki sayıyı vermelidir
  var total = 0;
  for (var i = 0; i < 10; i++) {
    total += parseInt(tcNo.charAt(i));
  }
  if (total % 10 !== parseInt(tcNo.charAt(10))) {
    return false;
  }

  // Yukarıdaki şartları geçiyorsa, TC Kimlik No doğrudur
  return true;
}


export default function HomeScreen() {
  const errors = {};
  const dispatch = useDispatch();
  
  return (
    <ScrollView>
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

        validate={(values) => {
          

          // T.C. Kimlik No validasyonu
          if (!values.tcNo) {
            errors.tcNo = 'T.C. Kimlik No zorunludur';
          } else if (!validateTCKN(values.tcNo)) {
            errors.tcNo = 'Geçerli bir T.C. Kimlik No giriniz';
          }

          // Kimlik Seri No validasyonu
          if (!values.kimlikSeriNo) {
            errors.kimlikSeriNo = 'Kimlik Seri No zorunludur';
          } else if (!/^\d{9}$/.test(values.kimlikSeriNo)) {
            errors.kimlikSeriNo = 'Kimlik Seri No 9 haneli olmalıdır';
          }

          // Cep Telefon validasyonu
          if (!values.cepTel) {
            errors.cepTel = 'Cep Telefon zorunludur';
          } else if (!/^\d{10}$/.test(values.cepTel)) {
            errors.cepTel = 'Geçerli bir Cep Telefon numarası giriniz';
          }

          // Diğer alanlar için benzer validasyonları ekle

          return errors;
        }}
        onSubmit={(values) => {
          // Firebase'e veriyi eklemek için dispatch kullanın
          dispatch(addFormData(values));
        }}
      >
        
        {({ values, handleChange, handleSubmit, setFieldValue , onSubmit}) => (
          <View>
            
            <Text style={styles.label}>T.C. Kimlik No</Text>
            <TextInput
              style={styles.input}
              placeholder={errors.tcNo ? errors.tcNo : '11111111111'}
              value={values.tcNo}
              onChangeText={handleChange('tcNo')}
            />
            

            <Text style={styles.label}>Kimlik Seri No</Text>
            <TextInput
              style={styles.input}
              placeholder={errors.kimlikSeriNo ? errors.kimlikSeriNo : 'AAAAAAAAA'}
              value={values.kimlikSeriNo}
              onChangeText={handleChange('kimlikSeriNo')}
            />
             
            <Text style={styles.label}>Doğum Tarihi</Text>
            <DatePicker />
            <Text style={styles.label}>Cep Telefon</Text>
            <TextInput
              style={styles.input}
              placeholder={errors.cepTel ? errors.cepTel : '53'}
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
          
            <Button title="Devam Et" onPress={handleSubmit} color="#912149"  />
          </View>
        )}
      </Formik>
    </View>
    </ScrollView>
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
  errorText:{
    zIndex: 2,
    color: 'red',
   
  },
  button:{
    
  },
  // Diğer stil tanımlamaları buraya eklenir
});


