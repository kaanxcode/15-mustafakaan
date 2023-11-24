import { CheckBox } from '@rneui/base';
import { Formik, Field } from 'formik';
import React from 'react';
import { View, Text, Button } from 'react-native';

const MyCheckboxForm = () => {
  return (
    <Formik
      initialValues={{ checkboxValue: false }}
      onSubmit={(values) => {
        console.log('Form Gönderildi:', values);
      }}
    >
      {({ values, setFieldValue, handleSubmit }) => (
        <View>
          <Text>Checkbox Kullanımı</Text>
          <Field name="checkboxValue">
            {({ field }) => (
              <CheckBox
                title="Checkbox Başlığı"
                checked={values.checkboxValue}
                onPress={() => {
                  setFieldValue('checkboxValue', !values.checkboxValue);
                }}
              />
            )}
          </Field>

          <Button
            onPress={handleSubmit}
            title="Gönder"
          />
        </View>
      )}
    </Formik>
  );
};

export default MyCheckboxForm;
