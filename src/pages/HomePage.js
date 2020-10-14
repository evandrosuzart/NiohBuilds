import React from "react";
import { Button } from "react-native-elements";
import { ScrollView, Text, View } from "react-native";
import { getBuilds } from "../buildinfos";
import { styles } from "././../../assets/styles/Styles";
const HomePage = (props) => {
  const { navigate } = props.navigation;
  const builds = getBuilds();
  const goToBuildHomePage = (buildProps) => {
    navigate("BuildHome", buildProps);
  };

  const GoToMasters = () => {
    navigate("Masters");
  };

  const GoToComunity = () => {
    navigate("Comunity");
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}> Nioh & Soul 's Brothers</Text>
          <Text style={styles.title} />
          <Text style={styles.title}> Comunidades </Text>
          <Button
            type="clear"
            titleStyle={styles.btnTitle}
            title={"Lista de mestres psn"}
            onPress={GoToMasters}
          />
          <Button
            type="clear"
            titleStyle={styles.btnTitle}
            title={"Links Comunidades"}
            onPress={GoToComunity}
          />
          <Text style={styles.title} /> <Text style={styles.title} />
          <Text style={styles.title}> Builds </Text>
          <ScrollView>
            {builds.map((build, index) => (
              <View style={styles.btnPages} key={`${index}`}>
                <Button
                  type="clear"
                  titleStyle={styles.btnTitle}
                  title={build.props.title}
                  onPress={() => {
                    goToBuildHomePage(build.props);
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
