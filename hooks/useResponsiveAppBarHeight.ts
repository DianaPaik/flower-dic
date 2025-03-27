import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * @param withSearch - 검색창이 포함된 AppBar (height = 120)
 * @param small - title-only AppBar (height = 56)
 * 기본값은 withSearch = false, small = false → default로 56 사용
 */
export const useResponsiveAppBarHeight = ({
  withSearch = false,
  small = false,
}: {
  withSearch?: boolean;
  small?: boolean;
} = {}) => {
  const insets = useSafeAreaInsets();

  let baseHeight = 56;

  if (withSearch) {
    baseHeight = 120;
  } else if (small) {
    baseHeight = 56;
  }
  return insets.top + baseHeight;
};
