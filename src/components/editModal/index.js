import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Input from '../input';

const EditModal = ({
  visible,
  closeModal,
  willEditText,
  setWillEditText,
  onComfirm,
  hasError,
  errorMessage,
}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentWrapper}>
          <Text style={styles.title}>Güncelle</Text>
          <Input
            value={willEditText}
            onChangeText={text => setWillEditText(text)}
            placeholder="Güncellenecek text"
          />
          {hasError && (
            <Text style={styles.validationText}> {errorMessage}</Text>
          )}

          <View style={styles.buttonsWrapper}>
            <TouchableOpacity
              onPress={closeModal}
              style={styles.closeBtnWrapper}>
              <Text style={styles.closeBtn}>Kapat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmBtnWrapper}
              onPress={onComfirm}>
              <Text style={styles.confirmBtn}>Onayla</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
