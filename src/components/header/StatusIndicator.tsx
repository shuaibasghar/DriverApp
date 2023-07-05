import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type StatusIndicatorProps = {
  size: number;
  color: string;
  text: string;
  textStyle?: object;
};

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  size,
  color,
  text,

  textStyle,
}) => {
  const indicatorStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: color,
  };

  return (
    <View style={styles.indicatorContainer}>
      <View style={[styles.indicator, indicatorStyle]} />
      <Text style={[textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    backgroundColor: '#163DC8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: 7,
    paddingHorizontal: 10,
    borderRadius: 20,
    // width: '30%',
  },
  indicator: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default StatusIndicator;
