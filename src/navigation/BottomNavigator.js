import { View, StyleSheet } from 'react-native';
import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BusinessIcon from '@mui/icons-material/Business';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function BottomNavigator() {
  const [value, setValue] = React.useState(0);

  return (
    <View style={styles.container}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Sites" icon={<BusinessIcon />} />
        <BottomNavigationAction label="Salles" icon={<DoorFrontIcon />} />
        <BottomNavigationAction label="Créneaux" icon={<AccessTimeIcon />} />
        <BottomNavigationAction label="Compte" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'fixed', 
    bottom: 0, 
    left: 0, 
    right: 0,
    borderTopWidth: 2,
  },
});