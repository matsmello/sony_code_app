import React from "react";
import { View, Text } from "react-native";
import * as S from "./styles";
import { colors, typography } from "./../../settings/default";

export default function index() {
  return (
    <S.Container>
      <S.Scrollable>
        <S.Container>
          <S.Clickable>
            <S.Avatar source={require("./../../images/person.png")} />
          </S.Clickable>
          <S.MinimumContainer>
            <S.Title>Bábara Pigle</S.Title>
            <S.SubTitle>Maior fã da Anitta no Brasil</S.SubTitle>
          </S.MinimumContainer>
          <S.MinimumContainer>
            <S.Row>
              <S.Card>
                <S.SubTitle style={{ color: colors.orange }}>
                  Essa semana
                </S.SubTitle>
                <S.SubTitle
                  style={{
                    color: colors.white,
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: typography.h1,
                  }}
                >
                  3.585
                </S.SubTitle>
                <S.SubTitle
                  style={{ color: colors.white, textAlign: "center" }}
                >
                  Pts
                </S.SubTitle>
              </S.Card>
              <S.Card>
                <S.SubTitle style={{ color: colors.orange }}>Total</S.SubTitle>
                <S.SubTitle
                  style={{
                    color: colors.white,
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: typography.h1,
                  }}
                >
                  250.441
                </S.SubTitle>
                <S.SubTitle
                  style={{ color: colors.white, textAlign: "center" }}
                >
                  Pts
                </S.SubTitle>
              </S.Card>
            </S.Row>
          </S.MinimumContainer>
          <S.MinimumContainer style={{ justifyContent: "flex-start" }}>
            <S.SubTitle style={{ alignSelf: "flex-start" }}>
              Top 10 artistas preferidas
            </S.SubTitle>
          </S.MinimumContainer>
        </S.Container>
      </S.Scrollable>
    </S.Container>
  );
}
