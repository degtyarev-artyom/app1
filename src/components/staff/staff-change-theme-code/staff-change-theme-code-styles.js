import css from 'styled-jsx/css'
import { staffColorsCode } from 'styling/staff/staff-styling-themes'

export const staticStyles = css`
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
