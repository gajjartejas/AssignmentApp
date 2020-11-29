import * as React from 'react';
import {StyleSheet, Text} from 'react-native';

//App Modules
import {Colors, FontSize} from '../Theme/index';

//Redux
import {useSelector} from 'react-redux';
import {ILoginState} from '../Models/reducers/login';

//Redux state interface
interface IState {
  loginReducer: ILoginState;
}

export default function WelcomeMessageView() {
  //Get username and user id from store
  const id = useSelector((state: IState) => state.loginReducer.id);
  const user = useSelector((state: IState) => state.loginReducer.username);

  return (
    <Text style={styles.titleText}>{`${
      id ? 'Welcome ' + user : 'Welcome Guest\nPlease login to continue'
    } `}</Text>
  );
}

const styles = StyleSheet.create({
  //Title text
  titleText: {
    color: Colors.primary,
    fontSize: FontSize.veryLarge,
    paddingVertical: 20,
    marginHorizontal: 20,
  },
});
