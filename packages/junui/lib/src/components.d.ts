import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    JButton: typeof components.Button;
    JIcon: typeof components.Icon;
  }
}
export {};

