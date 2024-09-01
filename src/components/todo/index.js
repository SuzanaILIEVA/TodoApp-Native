import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/contants';
import EditModal from '../editModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jsx} from 'react/jsx-runtime';

const Todo = ({todo = {}, todos = [], setTodos = () => {}}) => {
  const [openModal, setOpenModal] = useState(false);
  const [willEditText, setWillEditText] = useState(todo.text);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
            AsyncStorage.setItem('@todos', JSON.stringify(filtredTodo)).then(
              () => setTodos(filtredTodo),
            );
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

            AsyncStorage.setItem('@todos', JSON.stringify(tempArry)).then(() =>
              setTodos(tempArry),
            );
          },
          style: 'destructive',
        },
      ],
    );
  };

  const editTodo = () => {
    /**validation(inputu bos birakinca hata verir) */
    if (willEditText === '') {
      setHasError(true);
      setErrorMessage('Text Alanı Boş Bırakılamaz');
      setTimeout(() => {
        setHasError(false);
        setErrorMessage('');
      }, 2000);
    }

    /**Guncelleme */
    const tempArry = [];

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== todo.id) {
        tempArry.push(todos[i]);
      } else {
        const updatedTodo = {
          ...todo,
          text: willEditText,
        };
        tempArry.push(updatedTodo);
      }
    }

    AsyncStorage.setItem('@todos', JSON.stringify(tempArry)).then(() => {
      setTodos(tempArry);
      setOpenModal(false);
    });
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
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Icon name="edit" size={20} color={colors.bgPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircle" size={20} color={colors.red} />
        </TouchableOpacity>
      </View>
      <EditModal
        willEditText={willEditText}
        setWillEditText={setWillEditText}
        visible={openModal}
        closeModal={() => setOpenModal(false)}
        onComfirm={editTodo}
        hasError={hasError}
        errorMessage={errorMessage}
      />
    </View>
  );
};

export default Todo;
