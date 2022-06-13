import css from 'styled-jsx/css'
import { staffColors } from 'styling/staff/staff-styling-themes'

export const staticStyles = css`
  @import 'src/styling/scss/styling-mixins.scss';

  .IPK {
    table {
      tr {

        td {
          border-bottom: 1px dashed grey;
          padding: 10px 0 10px 0;

          &:first-child {
            width: 200px;
            padding: 10px 20px 10px 0;
          }
        }
      }
    }
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
