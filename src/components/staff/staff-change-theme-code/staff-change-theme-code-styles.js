import css from 'styled-jsx/css'

export const getDynamicStyles = (staffColorsCode) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';
    
    .StaffChangeThemeCode {
      &__item {
        &--darcula {
          background: ${staffColorsCode.darcula.component};

          &:before {
            background: ${staffColorsCode.darcula.background};
          }
        }

        &--vscode {
          background: ${staffColorsCode.vscode.component};

          &:before {
            background: ${staffColorsCode.darcula.background};
          }
        }
      }
    }
  `
}
