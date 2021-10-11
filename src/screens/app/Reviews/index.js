import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import colors from '../../../styles/colors';

const Reviews = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.reviewContainer}>
            <Text style={styles.title}>Customer reviews</Text>
            <View style={[styles.totalWrap, {marginTop: 10}]}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </View>
              <Text style={{marginLeft: 35}}>4.7 out of 5</Text>
            </View>
            <Text style={styles.amountText}>123 global rating</Text>

            <Text
              style={{
                marginTop: 25,
                fontSize: 16,
                fontWeight: 'bold',
                color: '#595B71',
                marginLeft: 15,
              }}>
              By feature
            </Text>
            <View style={styles.totalWrap}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#cdcdcd'}}>
                Moisturizing
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 70,
                }}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </View>
              <Text style={{marginLeft: 10}}>4.7</Text>
            </View>
            <View style={styles.totalWrap}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#cdcdcd'}}>
                Value for money
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 44,
                }}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </View>
              <Text style={{marginLeft: 10}}>4.7</Text>
            </View>
            <View style={styles.totalWrap}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#cdcdcd'}}>
                Flattering
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 94,
                }}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </View>
              <Text style={{marginLeft: 10}}>4.7</Text>
            </View>
            <View style={styles.topContainer}>
              <Image
                source={require('../../../assets/images/reveiw.png')}
                style={styles.manu}
              />
            </View>
            <Text style={{marginTop:15,fontSize: 16, fontWeight: 'bold', color: '#000000'}}>
              Read reviews this mention
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const Star = (props) => {
  return (
    <Svg width={24} height={22} viewBox="0 0 33 30" fill="none" {...props}>
      <Path
        d="M16.5 0l4.849 9.826 10.843 1.575-7.846 7.648 1.852 10.8-9.698-5.1-9.698 5.1 1.852-10.8-7.846-7.648L11.65 9.826 16.5 0z"
        fill="#FFCC48"
      />
    </Svg>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  reviewContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 30,
    minWidth: '80%',
  },
  manu: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
    marginTop: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#020202',
    marginLeft: 15,
  },
  totalWrap: {
    marginBottom: 5,
    backgroundColor: '#FFF',
    borderRadius: 40,
    alignItems: 'center',

    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  amountText: {
    fontSize: 16,
    color: '#595B71',
    marginLeft: 15,
    marginTop: 5,
  },
});
