import css from 'styled-jsx/css'
import { staffColorsCode } from 'styling/staff/staff-styling-themes'

export const staticStyles = css`
  @import 'src/styling/scss/styling-mixins.scss';

  .StaffCodeWrap {
    &__subwrap {
      &--darcula {
        background: ${staffColorsCode.darcula.background};
      }

      &--vscode {
        background: ${staffColorsCode.vscode.background};
      }

      &--monokai {
        background: ${staffColorsCode.monokai.background};
      }
    }
  }
`
