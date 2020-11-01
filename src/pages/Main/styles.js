import styled from "styled-components/native";
import { colors, typography } from "./../../settings/default";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Clickable = styled.TouchableOpacity``;

export const TopChart = styled.Image`
  width: 100%;
  height: 240px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-width: 3px;
  border-radius: 700px;
  border-color: red;
  margin: 10px;
`;

export const MinimumContainer = styled.View`
  min-height: 140px;
  justify-content: space-evenly;
  width: 100%;
  margin: 10px 0px;
`;

export const Icon = styled.Image`
  align-self: center;
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
  width: 132px;
  height: 193px;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Layer = styled.ImageBackground`
  flex: 1;
  margin-right: 15px;
`;

export const RowList = styled.ScrollView``;

export const MenuBottom = styled.View`
  border-color: white;
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const Button = styled.View`
  border-color: white;
  border-radius: 20px;
  height: 50px;
  width: 50px;
  justify-content: center;
`;
