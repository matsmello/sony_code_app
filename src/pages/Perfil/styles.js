import styled from "styled-components/native";
import { colors, typography } from "./../../settings/default";

export const Container = styled.View`
  background-color: ${colors.primary};
  flex: 1;
  align-items: center;
  padding: 0px 10px;
`;

export const Clickable = styled.TouchableOpacity``;

export const Avatar = styled.Image`
  width: 220px;
  height: 220px;
  border-width: 3px;
  border-radius: 700px;
  border-color: red;
  margin-top: 20px;
`;

export const View = styled.View`
  justify-content: center;
`;

export const MinimumContainer = styled.View`
  min-height: 140px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Scrollable = styled.ScrollView``;

export const Title = styled.Text`
  font-size: ${typography.h1};
  color: ${colors.white};
`;

export const SubTitle = styled.Text`
  font-size: ${typography.h2};
  color: ${colors.white};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const Card = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  width: 45%;
  height: 100px;
  border-radius: 10px;
  justify-content: space-evenly;
  padding: 10px;
`;
