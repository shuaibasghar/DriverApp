import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function DispatcherDetailScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dr Anna Mackey</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.innerBody}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/pic.png')}
              style={{position: 'relative'}}
            />
            <View style={styles.editIcon}>
              <Image source={require('../../../assets/images/editIcon.png')} />
            </View>
            <Text style={styles.guruText}>Guru Trucking LLC</Text>
          </View>
          <View style={styles.name}>
            <Text style={styles.companyInfoText}>Company Info</Text>
            <View style={styles.DetailContainer}>
              <View style={styles.DetailContainerInfo}>
                <Text style={styles.HeadingText}>Name: </Text>
                <Text style={styles.HeadingDetailText}>ABC LLC</Text>
              </View>
              <View style={styles.DetailContainerInfo}>
                <Text style={styles.HeadingText}>USDOT: </Text>
                <Text style={styles.HeadingDetailText}>ABC LLC</Text>
              </View>
            </View>
            <View style={styles.DetailContainerInfo}>
              <Text style={styles.HeadingText}>MC: </Text>
              <Text style={styles.HeadingDetailText}>ABC LLC</Text>
            </View>
            <View style={styles.DetailContainerInfo}>
              <Text style={styles.HeadingText}>Authority Expiration: </Text>
              <Text style={styles.HeadingDetailText}>FEB 20, 2023</Text>
            </View>
            <View style={styles.uploadContainer}>
              <View style={styles.uploadContainerContent}>
                <View style={styles.uploadIcon}>
                  <Image source={require('../../../assets/images/arrow.png')} />
                  <Text style={styles.uploadIconText}>Upload</Text>
                </View>
                <Text style={styles.uploadContainerContentText}>
                  MC Authority
                </Text>
              </View>
              <View style={styles.uploadContainerContent}>
                <View style={styles.uploadIcon}>
                  <Image source={require('../../../assets/images/arrow.png')} />
                  <Text style={styles.uploadIconText}>Upload</Text>
                </View>
                <Text style={styles.uploadContainerContentText}>W9</Text>
              </View>
              <View style={styles.uploadContainerContent}>
                <View style={styles.uploadIcon}>
                  <Image source={require('../../../assets/images/arrow.png')} />
                  <Text style={styles.uploadIconText}>Upload</Text>
                </View>
                <Text style={styles.uploadContainerContentText}>COL</Text>
              </View>
            </View>
          </View>

          {/* Vehicle info */}
          <View style={styles.Vehicle}>
            <Text style={styles.companyInfoText}>Vehicle Info</Text>
            <View style={styles.DetailContainer}>
              <View style={styles.DetailContainerInfo}>
                <Text style={styles.HeadingText}>Year: </Text>
                <Text style={styles.HeadingDetailText}>2023</Text>
              </View>
              <View style={styles.DetailContainerInfo}>
                <Text style={styles.HeadingText}>Make: </Text>
                <Text style={styles.HeadingDetailText}>ABC LLC</Text>
              </View>
            </View>
            <View style={styles.DetailContainer}>
              <View style={styles.DetailContainerInfo}>
                <Text style={styles.HeadingText}>Model: </Text>
                <Text style={styles.HeadingDetailText}>2023</Text>
              </View>
              <View style={styles.DetailContainerInfo}>
                <Text style={styles.HeadingText}>License Plate: </Text>
                <Text style={styles.HeadingDetailText}>1234214</Text>
              </View>
            </View>
            <View style={styles.DetailContainerInfo}>
              <Text style={styles.HeadingText}>Weight Rating: </Text>
              <Text style={styles.HeadingDetailText}>35000 Pounds</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4666FF',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
  },
  body: {
    flex: 9,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  innerBody: {
    flex: 1,
    gap: 10,
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    position: 'absolute',
    top: -8,
    right: 137,
  },
  name: {
    marginHorizontal: 16,
    borderRadius: 11,
    height: 235,
    borderWidth: 1,
    borderColor: '#9AA8B733',
    padding: 10,
  },

  guruText: {fontSize: 22, color: '#333333', fontFamily: 'Poppins-SemiBold'},
  companyInfoText: {
    fontSize: 16,
    color: '#4666FF',
    fontFamily: 'Poppins-Medium',
  },
  DetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DetailContainerInfo: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  HeadingText: {
    fontSize: 13,
    color: '#333333',
    fontFamily: 'Poppins-Medium',
  },
  HeadingDetailText: {
    fontSize: 13,
    color: '#9AA8B7',
    fontFamily: 'Poppins-Medium',
  },

  uploadContainer: {
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 10,
    // alignItems: 'center',
  },
  uploadContainerContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
  uploadContainerContentText: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: '#3C4253',
  },
  uploadIcon: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#E3E3E3',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    gap: 5,
  },
  uploadIconText: {
    fontSize: 9,
    fontFamily: 'Poppins-Medium',
    color: '#3C4253',
  },
  Vehicle: {
    marginHorizontal: 16,
    borderRadius: 11,
    height: 110,
    borderWidth: 1,
    borderColor: '#9AA8B733',
    padding: 10,
  },
});
