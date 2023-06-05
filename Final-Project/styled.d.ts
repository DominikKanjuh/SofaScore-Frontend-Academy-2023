import "styled-components";
import { ThemeType } from "./theme";
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
  //extendaj globalnu themu styled componentsa s mojom temom
}
