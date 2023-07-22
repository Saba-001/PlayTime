import styled from "styled-components/native";

import { schemeColor } from "../../types";
import { SafeAreaView } from "react-native-safe-area-context";

export const CustomSafeView = styled(SafeAreaView)<schemeColor>`
  flex: 1;

  background-color: ${({ isDark }) => (isDark ? "red" : "green")};
`;

export const ContentWrapper = styled.View`
  flex: 1;

  background-color: #ee632c;

  overflow: hidden;
`;
