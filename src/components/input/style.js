import {StyleSheet} from 'react-native';
import {colors} from '../../utils/contants';

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.textPrimary,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    color: colors.textPrimary,
    flex: 1,
  },
  icon: {
    marginLeft: 10,
    fontSize: 30,
    color: colors.bgPrimary,
  },
});

export default styles;
