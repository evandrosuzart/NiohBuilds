import React from "react";

import { Text, View } from "react-native";
import { styles } from "../../../assets/styles/Styles";
import { Button } from "react-native-elements";

const BuildHome = (props) => {
  const { navigate } = props.navigation;

  const title = props.navigation.getParam("title", "");
  const goStatus = () => {
    navigate("BuildStatus", props.navigation.getParam("status", {}));
  };
  const goBonusConjunto = () => {
    navigate("BonusBuild", {
      gracas: props.navigation.getParam("gracas", []),
    });
  };
  const goWeapons = () => {
    navigate("BuildWeapons", {
      armas: props.navigation.getParam("armas", []),
    });
  };
  const goProtections = () => {
    navigate("BuildProtections", {
      protecao: props.navigation.getParam("protecao", []),
    });
  };

  const goAtalho = () => {
    navigate("ItensAtalho", {
      itensAtalho: props.navigation.getParam("itensAtalho", []),
    });
  };
  const goSpirits = () => {
    navigate("Guardioes", {
      guardioes: props.navigation.getParam("guardioes", []),
    });
  };
  const goSkills = () => {
    navigate("Habilidades", {
      habilidades: props.navigation.getParam("habilidades", []),
    });
  };

  const goCla = () => {
    navigate("Cla", {
      cla: props.navigation.getParam("cla", {}),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <View style={styles.btnPages}>
        <Button
          type="clear"
          titleStyle={styles.btnTitle}
          title="Pontos de Status"
          onPress={goStatus}
        />
      </View>
      <View style={styles.btnPages}>
        <Button
          type="clear"
          titleStyle={styles.btnTitle}
          title="Bônus de Conjunto"
          onPress={goBonusConjunto}
        />
      </View>
      <View style={styles.btnPages}>
        <Button
          title="Armas da Build"
          type="clear"
          titleStyle={styles.btnTitle}
          onPress={goWeapons}
        />
      </View>
      <View style={styles.btnPages}>
        <Button
          title="Itens de proteção da Build"
          type="clear"
          titleStyle={styles.btnTitle}
          onPress={goProtections}
        />
      </View>
      <View style={styles.btnPages}>
        <Button
          title="Itens em Atalho"
          type="clear"
          titleStyle={styles.btnTitle}
          onPress={goAtalho}
        />
      </View>
      <View style={styles.btnPages}>
        <Button
          title="Espíritos Guardiões"
          type="clear"
          titleStyle={styles.btnTitle}
          onPress={goSpirits}
        />
      </View>
      <View style={styles.btnPages}>
        <Button
          title="Habilidades Aprendidas"
          type="clear"
          titleStyle={styles.btnTitle}
          onPress={goSkills}
        />
      </View>
      <View style={styles.btnPages}>
        <Button
          title="Clã Ideal"
          type="clear"
          titleStyle={styles.btnTitle}
          onPress={goCla}
        />
      </View>
    </View>
  );
};

export default BuildHome;
