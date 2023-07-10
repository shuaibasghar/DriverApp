import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
interface TasksProps {
  name?: string;
  amount?: string;
}

const Tasks: React.FC<TasksProps> = ({name, amount}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.taskText}>Tasks</Text>
        <View style={styles.taskTextDetailContainer}>
          <Text style={styles.taskTextDetail}>{name}</Text>
          <Text style={styles.taskTextDetail}>{amount}</Text>
        </View>
        <View style={styles.taskTextDetailContainer}>
          <Text style={styles.taskTextDetail}>{name}</Text>
          <Text style={styles.taskTextDetail}>{amount}</Text>
        </View>
        <View style={styles.taskTextDetailContainer}>
          <Text style={styles.taskTextDetail}>{name}</Text>
          <Text style={styles.taskTextDetail}>{amount}</Text>
        </View>
        <View style={styles.taskTextDetailContainer}>
          <Text style={styles.taskTextDetail}>{name}</Text>
          <Text style={styles.taskTextDetail}>{amount}</Text>
        </View>
        <View style={styles.taskTextDetailContainer}>
          <Text style={styles.taskTextDetail}>{name}</Text>
          <Text style={styles.taskTextDetail}>{amount}</Text>
        </View>
        <View style={styles.taskTextDetailContainer}>
          <Text style={styles.taskTextDetail}>{name}</Text>
          <Text style={styles.taskTextDetail}>{amount}</Text>
        </View>
        <View style={styles.taskTextDetailContainer}>
          <Text style={styles.taskTextDetail}>{name}</Text>
          <Text style={styles.taskTextDetail}>{amount}</Text>
        </View>
        <View style={styles.taskTextDetailContainer}>
          <Text style={styles.taskTextDetail}>{name}</Text>
          <Text style={styles.taskTextDetail}>{amount}</Text>
        </View>
        <View style={styles.taskTextDetailContainer}>
          <Text style={styles.taskTextDetail}>{name}</Text>
          <Text style={styles.taskTextDetail}>{amount}</Text>
        </View>
        <View style={styles.taskTextDetailContainer}>
          <Text style={styles.taskTextDetail}>{name}</Text>
          <Text style={styles.taskTextDetail}>{amount}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#9AA8B733',
    marginBottom: 10,
    elevation: 4,
  },
  innerContainer: {
    padding: 10,
  },
  taskText: {
    fontSize: 14,
    color: '#4666FF',
    fontFamily: 'Poppins-Medium',
  },
  taskTextDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTextDetail: {
    fontSize: 12,
    color: '#333333',
    fontFamily: 'Poppins-Regular',
  },
});
export default Tasks;
