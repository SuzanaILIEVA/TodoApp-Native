import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/contants';

const Todo = ({todo = {}, todos = [], setTodos = () => {}}) => {
  const deleteTodo = () => {
    Alert.alert(
      'Silme işlemi',
      `${todo?.id} numarali todo'yu silmek istiyor musun?`,
      [
        {
          text: 'Vazgeç',
        },
        {
          text: 'Sil',
          onPress: () => {
            const filtredTodo = todos.filter(item => item.id !== todo.id);
            setTodos(filtredTodo);
          },
          style: 'destructive',
        },
      ],
    );
  };

  const changeCompleted = () => {
    Alert.alert(
      'Görev tamamlandı mı?',
      "Görev tamamlandı olarak 'işaretlenecek",
      [
        {text: 'Vazgeç'},
        {
          text: todo.completed ? 'İşareti Kaldir' : 'işaretle',
          onPress: () => {
            const tempArry = []; // bos bir dizi olustur
            for (let i = 0; i < todos.length; i++) {
              if (todos[i].id !== todo.id) {
                tempArry.push(todos[i]);
              } else {
                const newTodo = {
                  ...todo,
                  completed: !todo.completed,
                };
                tempArry.push(newTodo);
              }
            }

            setTodos(tempArry);
          },
          style: 'destructive',
        },
      ],
    );
  };
  return (
    <View style={styles.todoWrapper}>
      <View>
        <Text style={[styles.title, todo.completed && styles.complatedTodo]}>
          {' '}
          {todo?.text}
        </Text>
        <Text style={styles.date}>
          {new Date(todo?.date).toLocaleDateString('tr-TR')}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={changeCompleted}>
          <Icon
            name={todo?.completed ? 'checkcircle' : 'checkcircleo'}
            size={20}
            color={colors.green}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" size={20} color={colors.bgPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircle" size={20} color={colors.red} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
