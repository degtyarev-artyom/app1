import css from 'styled-jsx/css'

export const getDynamicStyles = (staffColorsCode) => {
  return css`
    .StaffCodeWrap {
      &__subwrap {
        &--darcula {
          background: ${staffColorsCode.darcula.background};
        }

        &--vscode {
          background: ${staffColorsCode.vscode.background};
        }
      }
    }
  `
}
