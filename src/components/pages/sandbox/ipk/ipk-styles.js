import css from 'styled-jsx/css'
import { staffColors } from 'styling/staff/staff-styling-themes'

export const staticStyles = css`
  @import 'src/styling/scss/styling-mixins.scss';

  .IPK {
    &__title {
      background: ${staffColors.orange};

      /* green */
      .theme-green & {
        background: ${staffColors.green};
      }

      /* purple */
      .theme-purple & {
        background: ${staffColors.purple};
      }

      /* blue */
      .theme-blue & {
        background: ${staffColors.blue};
      }

      /* red */
      .theme-red & {
        background: ${staffColors.red};
      }

      /* orange */
      .theme-orange & {
        background: ${staffColors.orange};
      }

      /* grey */
      .theme-grey & {
        background: ${staffColors.grey};
      }
    }
  }
`
