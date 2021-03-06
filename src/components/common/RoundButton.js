import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";

import { Dimens, Colors } from "../../themes";

export default ({ onPress, title, style }) => {
  return (
    <TouchableNativeFeedback onPress={() => onPress()}>
      <View
        style={[
          {
            width: Dimens.width * 0.7,
            borderRadius: 30,
            alignItems: "center",
            padding: 15,
            backgroundColor: Colors.intro_status,
            elevation: 10
          },
          style
        ]}
      >
        <Text style={{ color: Colors.white }}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};
