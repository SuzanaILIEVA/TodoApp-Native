import {StyleSheet} from 'react-native';
import {colors} from '../../utils/contants';

const styles = StyleSheet.create({
  todoWrapper: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: colors.textPrimary,
    fontSize: 17,
    marginBottom: 10,
  },
  date: {
    color: colors.textPrimary,
  },
  iconsWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
});
export default styles;
