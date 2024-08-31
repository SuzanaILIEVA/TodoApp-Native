import React, {useState} from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './src/components/header';
import generalStyles from './src/utils/generalStyles';
import Input from './src/components/input';
import {colors} from './src/utils/contants';
import Todo from './src/components/todo';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText('');
  };

  return (
    <SafeAreaView style={[generalStyles.flex1, generalStyles.bgWhite]}>
      <View>
        <Header title="My ToDo App" />

        <Input
          placeholder="deneme"
          hasIcon
          iconName="pluscircle"
          onIconPress={addTodo}
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.todosWrapper}>
        {todos.length === 0 ? (
          <Text style={styles.emtyText}>
            Henüz Kayıtlı Bir Todo Bulunmamaktadır.
          </Text>
        ) : (
          <ScrollView style={styles.scrollView}>
            {todos?.map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todosWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  emtyText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default App;
