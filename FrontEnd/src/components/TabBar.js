import { Dimensions, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, {Component} from 'react';
import styles from './TabBarStyles.js';
import posed from "react-native-pose";


const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;

const SpotLight = posed.View({
    route0: { x: 0 },
    route1: { x: tabWidth },
    route2: { x: tabWidth * 2 },
    route3: { x: tabWidth * 3 }
  });



export default class TabBar extends Component{
    render(){
        const {
            renderIcon,
            getLabelText,
            activeTintColor,
            inactiveTintColor,
            onTabPress,
            onTabLongPress,
            getAccessibilityLabel,
            navigation
          } = this.props;

          const { routes, index: activeRouteIndex } = navigation.state;

        return (

            <View style={styles.container}>
                <View style={StyleSheet.absoluteFillObject}>
                    <SpotLight style={styles.spotLight} pose={`route${activeRouteIndex}`} />
                 </View>
            


                {routes.map((route, routeIndex) => {
                    const isRouteActive = routeIndex === activeRouteIndex;
                    const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
                

                    return (
                        <TouchableOpacity
                            key={routeIndex}
                            style={styles.tabButton}
                            onPress={() => {onTabPress({ route });}}
                            onLongPress={() => {onTabLongPress({ route });}}
                            accessibilityLabel={getAccessibilityLabel({ route })}
                        >
                            {renderIcon({ route, focused: isRouteActive, tintColor })}

                            <Text>{getLabelText({ route })}</Text>
                        </TouchableOpacity>
                    );
                })}   
          </View>
        );
    }
}