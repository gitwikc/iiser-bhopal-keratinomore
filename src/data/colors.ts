export enum ColorName {
  PRIMARY1,
  PRIMARY2,
  SECONDARY,
  DARK,
  LIGHT,
}

export const PALLETE: { [key in ColorName]: string } = {
  [ColorName.PRIMARY1]: "#6267F1",
  [ColorName.PRIMARY2]: "#8997F3",
  [ColorName.SECONDARY]: "#56D087",
  [ColorName.LIGHT]: "#E2EFF0",
  [ColorName.DARK]: "#2C3144",
};
