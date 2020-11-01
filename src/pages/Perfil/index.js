import React from "react";
import * as S from "./styles";
import { colors, typography } from "./../../settings/default";
import { topArtists } from "../../mock";

export default function index() {
  return (
    <S.Container>
      <S.Scrollable showsVerticalScrollIndicator={false}>
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
          <S.MinimumContainer
            style={{ justifyContent: "flex-start", minHeight: 40 }}
          >
            <S.SubTitle style={{ alignSelf: "flex-start" }}>
              Top 10 artistas preferidas
            </S.SubTitle>
          </S.MinimumContainer>
          {topArtists.map(({ title, points }, index) => (
            <S.Row style={{ justifyContent: "flex-start", marginVertical: 5 }}>
              <S.Title>{index + 1} #</S.Title>
              <S.View
                style={{
                  flexDirection: "row",
                  flexGrow: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <S.Title>{title}</S.Title>
                <S.View style={{ flexDirection: "row" }}>
                  <S.SubTitle style={{ color: colors.orange, marginRight: 10 }}>
                    {points}
                  </S.SubTitle>
                  <S.SubTitle>Pts</S.SubTitle>
                </S.View>
              </S.View>
            </S.Row>
          ))}
        </S.Container>
      </S.Scrollable>
    </S.Container>
  );
}
