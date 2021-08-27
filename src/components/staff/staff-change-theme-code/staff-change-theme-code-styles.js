import css from 'styled-jsx/css'

export const getDynamicStyles = (staffColorsCode) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';
    
    .StaffChangeThemeCode {
      &__item {
        /* darcula */
        &--darcula {
          background: ${staffColorsCode.darcula.prop};

          &:before {
            background: ${staffColorsCode.darcula.background};
          }
        }

        /* vscode */
        &--vscode {
          background: ${staffColorsCode.vscode.prop};

          &:before {
            background: ${staffColorsCode.vscode.background};
          }
        }

        /* monokai */
        &--monokai {
          background: ${staffColorsCode.monokai.prop};

          &:before {
            background: ${staffColorsCode.monokai.background};
          }
        }
      }
    }
  `
}
