import React from "react";
import { View, Text } from "react-native";
import * as S from "./styles";
import { colors, typography } from "./../../settings/default";
import { musics } from "../../mock";

export default function index() {
  return (
    <S.Container>
      <S.Scrollable showsVerticalScrollIndicator={false}>
        <S.Container>
          <S.Clickable
            style={{
              width: "100%",
            }}
          >
            <S.View>
              <S.ArtistBackground
                style={{
                  maxHeight: 350,
                }}
                source={require("./../../images/anitta.png")}
              >
                <S.View
                  style={{
                    backgroundColor: "rgba(0,0,0,0.25)",
                    height: "100%",
                    justifyContent: "flex-end",
                  }}
                >
                  <S.Title
                    style={{
                      fontWeight: "600",
                      margin: 10,
                      fontSize: typography.h0,
                    }}
                  >
                    Anitta
                  </S.Title>
                </S.View>
              </S.ArtistBackground>
            </S.View>
          </S.Clickable>
          <S.SubTitle
            style={{
              alignSelf: "flex-start",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            Ranking
          </S.SubTitle>
          <S.MinimumContainer style={{ paddingHorizontal: 20 }}>
            {musics.map(({ image, title, subtitle, id, position, genre }) => (
              <S.Card
                key={id}
                style={{
                  marginBottom: 10,
                }}
              >
                <S.Row>
                  <S.CompanyLogo source={image} />
                  <S.Row style={{ justifyContent: "space-between" }}>
                    <S.View style={{ marginLeft: 15 }}>
                      <S.SubTitle>{title}</S.SubTitle>
                      <S.SubTitle style={{ fontSize: typography.h4 }}>
                        {subtitle}
                      </S.SubTitle>
                    </S.View>
                    <S.View>
                      <S.SubTitle
                        style={{
                          fontSize: typography.h0,
                          color: colors.white,
                          textAlign: "center",
                        }}
                      >
                        {position}º
                      </S.SubTitle>

                      <S.SubTitle
                        style={{
                          fontSize: typography.h4,
                          color: colors.white,
                          textAlign: "center",
                        }}
                      >
                        {genre}
                      </S.SubTitle>
                    </S.View>
                  </S.Row>
                </S.Row>
              </S.Card>
            ))}
          </S.MinimumContainer>
        </S.Container>
      </S.Scrollable>
    </S.Container>
  );
}
