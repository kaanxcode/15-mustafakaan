import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const gunAyYil = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

  const showDatePicker = () => {
    setShow(true);
  };

  const hideDatePicker = () => {
    setShow(false);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    hideDatePicker();
    setDate(currentDate);
  };

  return (
    <SafeAreaView>
      <Formik initialValues={{}}>
        {({ handleChange }) => (
          <View>
            <TouchableOpacity onPress={showDatePicker}>
              <TextInput
                style={styles.input}
                placeholder="Tarih Seçiniz"
                value={gunAyYil}
                onChangeText={handleChange('tarihSecici')}
                editable={false}
              />
            </TouchableOpacity>

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default DatePicker;
