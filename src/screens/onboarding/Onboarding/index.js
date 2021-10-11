import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import Leaderboard from '../../app/Leaderboard';
import {Navigation} from 'react-native-navigation';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: 'App.Main',
                },
              },
            ],
            options: {
              topBar: {
                visible: false,
              },
            },
          },
        },
      })}
      onDone={Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: 'App.Main',
                },
              },
            ],
            options: {
              topBar: {
                visible: false,
              },
            },
          },
        },
      })}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../../../assets/images/img1.png')} />,
          title: 'Introduce Yourself',
          subtitle:
            'Give your customers peace of mind by sending a personal bio before the appointment',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../../../assets/images/img2.png')} />,
          title: 'Request Reviews',
          subtitle:
            'With FiledOps, you can easily request reviews by sending pluseChecks to your customers',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../../../assets/images/img3.png')} />,
          title: 'See your Reviews & Rank',
          subtitle:
            'See your reviews and where stand in the company at a glance with the FieldOps Leaderboard',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
