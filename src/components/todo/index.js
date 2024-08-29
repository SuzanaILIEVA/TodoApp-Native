import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/contants';

const Todo = ({todo = {}}) => {
  return (
    <View style={styles.todoWrapper}>
      <View>
        <Text style={styles.title}> {todo?.text}</Text>
        <Text style={styles.date}>
          {new Date(todo?.date).toLocaleDateString('tr-TR')}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity>
          <Icon
            name={todo?.completed ? 'checkcircle' : 'checkcircleo'}
            size={20}
            color={colors.green}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" size={20} color={colors.bgPrimary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="closecircle" size={20} color={colors.red} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
