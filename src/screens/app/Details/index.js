import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
const Details = (props) => {
  this.state = {
    tableHead: ['Product Dimensions', '3.94 x 3.94 x 3.94 inches;\nOunces'],
    tableData: [
      ['Item Weight', '0.16 ounces'],
      ['manufacture', 'Revlon'],
      ['ASIN', 'BO01QX72V0'],
      ['Item model number', '309973529991'],
      ['Customer Reviews', '4.4 out of 5 stars 16,630 Reviews'],
      [
        'Best Sellers Rank',
        ' #369 in Beauty & Personal Care (See Top 100 in\n' +
          'Beauty & Personal Care)\n' +
          '#4 in Lipstick',
      ],
      ['Discounted by manufacturer', 'Yes'],
    ],
  };
  const state = this.state;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
            Details
          </Text>
          <View style={{marginTop: 10, marginBottom: 10, flexDirection: 'row'}}>
            <Text style={[styles.text, {fontWeight: '100', marginRight: 10}]}>
              Brand
            </Text>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>Revlon</Text>
          </View>

          <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>

          <View style={{marginTop: 10, marginBottom: 10, flexDirection: 'row'}}>
            <Text style={[styles.text, {fontWeight: '100', marginRight: 10}]}>
              Color
            </Text>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>Orange</Text>
          </View>
          <View style={{marginTop: 10, marginBottom: 10, flexDirection: 'row'}}>
            <Text style={[styles.text, {fontWeight: '100', marginRight: 10}]}>
              Item Dimensions
            </Text>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>3*94</Text>
            <Text style={[styles.text, {fontWeight: '100', marginRight: 10}]}>
              Inches
            </Text>
          </View>
          <Text style={{fontWeight: 'bold', marginRight: 10, marginTop: 10}}>
            From the manufacture
          </Text>
          <View style={styles.topContainer}>
            <Image
              source={require('../../../assets/images/manu.png')}
              style={styles.manu}
            />
          </View>

          <Text style={{fontWeight: 'bold', marginRight: 10, marginTop: 10}}>
            Why we love it
          </Text>
          <View style={styles.topContainer}>
            <Image
              source={require('../../../assets/images/welove.png')}
              style={styles.love}
            />
          </View>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 18,
              marginTop: 15,
              fontWeight: 'bold',
              color: '#333',
            }}>
            Product informations
          </Text>
          <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row
                data={state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={state.tableData} textStyle={styles.text} />
            </Table>
          </View>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 18,
              marginTop: 15,
              fontWeight: 'bold',
              color: '#333',
            }}>
            Related Products
          </Text>
          <View style={styles.cardsWrapper}>
            <View style={[styles.card, {marginRight: 10}]}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../../assets/images/relat.png')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={[styles.cardTitle, {alignSelf: 'center'}]}>
                  Revlon{'\n'}Lipstick
                </Text>
                <Text
                  style={[
                    styles.cardDetails,
                    {
                      marginTop: 5,
                      fontFamily: 'HelveticaNeue',
                      color: '#52575D',
                      alignSelf: 'center',
                    },
                  ]}>
                  $120
                </Text>
              </View>
            </View>

            <View style={[styles.card, {marginLeft: 50}]}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../../assets/images/relate.png')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={[styles.cardTitle, {alignSelf: 'center'}]}>
                  Revlon{'\n'}Lipstick
                </Text>
                <Text
                  style={[
                    styles.cardDetails,
                    {
                      marginTop: 5,
                      fontFamily: 'HelveticaNeue',
                      color: '#52575D',
                      alignSelf: 'center',
                    },
                  ]}>
                  $120
                </Text>
              </View>
            </View>

            <View style={[styles.card, {marginLeft: 50}]}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../../assets/images/relat.png')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={[styles.cardTitle, {alignSelf: 'center'}]}>
                  Revlon{'\n'}Lipstick
                </Text>
                <Text
                  style={[
                    styles.cardDetails,
                    {
                      marginTop: 5,
                      fontFamily: 'HelveticaNeue',
                      color: '#52575D',
                      alignSelf: 'center',
                    },
                  ]}>
                  $120
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  cardsWrapper: {
    marginTop: 0,
    width: '70%',
    flexDirection: 'row',
    marginLeft: 35,
  },
  card: {
    height: 200,
    marginVertical: 10,
    flexDirection: 'column',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 2,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  cardInfo: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  dm: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#34FFB9',
    position: 'absolute',
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: '#41444B',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: '50%',
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.38)',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: '#CABFAB',
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  manu: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginTop: 15,
  },
  love: {
    width: 320,
    height: 320,
    resizeMode: 'contain',

    marginTop: 15,
  },
  formContainer: {
    paddingTop: 32,
    width: '70%',
  },
});
