import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

import colors from '../../styles/colors';

const InputDispatch = (props) => {
  const {value, onChangeText, icon, onBlur, error, formControlStyle} = props;
  const [showError, setShowError] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  React.useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);
  return (
    <View style={[styles.formControl, formControlStyle]}>
      <View style={{flexDirection: 'row', padding: 4, alignItems: 'center'}}>
        <FontAwesomeIcon icon={icon} size={18} color={colors.white} />
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <View
        style={[
          styles.inputContainer,
          showError ? styles.inputContainerInvalid : styles.inputContainerValid,
        ]}>
        <TextInput
          {...props}
          style={styles.input}
          value={inputValue}
          onChangeText={onChangeText}
          onBlur={onBlur}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: '100%',
  },
  label: {
    marginLeft: 4,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderWidth: 1,
  },
  inputContainerValid: {
    borderColor: 'white',
  },
  inputContainerInvalid: {
    borderColor: 'red',
  },
  input: {
    width: '92%',
  },
  icon: {
    marginTop: 10,
  },
});

export default InputDispatch;
