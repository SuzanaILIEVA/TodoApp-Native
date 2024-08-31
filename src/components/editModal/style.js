import {StyleSheet} from 'react-native';
import {colors} from '../../utils/contants';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBg,
  },
  modalContentWrapper: {
    backgroundColor: colors.white,
    margin: 'auto',
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
    marginTop: 20,
  },
  closeBtnWrapper: {
    borderWidth: 1,
    borderColor: colors.textPrimary,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
  },
  closeBtn: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  confirmBtnWrapper: {
    borderWidth: 1,
    borderColor: colors.bgPrimary,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: colors.bgPrimary,
  },
  confirmBtn: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
  validationText: {
    color: colors.red,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;
