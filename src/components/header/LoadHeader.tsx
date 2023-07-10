import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import BackIcon from '../../assets/icons/BackIcon';
import TripleDotIcon from '../../assets/icons/TripleDotIcon';

interface LoadHeaderProps {
  title?: string;
  color?: string;
  tripleDotIconColor?: string;
  backButtonColor?: string;
}

const LoadHeader: React.FC<LoadHeaderProps> = ({
  title,
  color,
  tripleDotIconColor,
  backButtonColor,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackIcon fillColor={backButtonColor} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 22, fontFamily: 'Poppins-SemiBold', color}}>
          {title}
        </Text>
      </View>
      <View style={styles.settingIcon}>
        <TripleDotIcon fillColor={tripleDotIconColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  backButton: {},
  titleContainer: {},

  settingIcon: {},
});

export default LoadHeader;
