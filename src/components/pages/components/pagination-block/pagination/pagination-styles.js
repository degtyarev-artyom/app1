import { lightness } from 'functions/staff-styling-hsla-func'
import css from 'styled-jsx/css'
import { colors } from 'styling/js/styling-themes'

export const staticStyles = css`
  @import 'src/styling/scss/styling-mixins.scss';

  .Pagination {
    &__count-item {
      :global(&--active) {
        color: ${lightness(colors.purple, -25)} !important;
        box-shadow: 0 0 0 1px ${colors.green};

        /* green */
        .Pagination__theme-green & {
          color: ${lightness(colors.purple, -25)} !important;
          box-shadow: 0 0 0 1px ${colors.green};
        }

        /* blue */
        .Pagination__theme-blue & {
          color: ${lightness(colors.orange, -25)} !important;
          box-shadow: 0 0 0 1px ${colors.blue};
        }

        /* purple */
        .Pagination__theme-purple & {
          color: ${lightness(colors.orange, -25)} !important;
          box-shadow: 0 0 0 1px ${colors.purple};
        }

        /* red */
        .Pagination__theme-red & {
          color: ${lightness(colors.blue, -25)} !important;
          box-shadow: 0 0 0 1px ${colors.red};
        }

        /* orange */
        .Pagination__theme-orange & {
          color: ${lightness(colors.purple, -25)} !important;
          box-shadow: 0 0 0 1px ${colors.orange};
        }

        /* steelblue */
        .Pagination__theme-steelblue & {
          color: ${lightness(colors.blue, -25)} !important;
          box-shadow: 0 0 0 1px ${colors.steelblue};
        }

        /* steelblue */
        .Pagination__theme-steelblue & {
          color: ${lightness(colors.blue, -25)} !important;
          box-shadow: 0 0 0 1px ${colors.steelblue};
        }

        /* greyOlive */
        .Pagination__theme-greyOlive & {
          color: ${colors.olive} !important;
          box-shadow: 0 0 0 1px ${colors.grey};
        }

        /* greyBlue */
        .Pagination__theme-greyBlue & {
          color: ${lightness(colors.blue, -15)} !important;
          box-shadow: 0 0 0 1px ${colors.grey};
        }

        /* greyPurple */
        .Pagination__theme-greyPurple & {
          color: ${lightness(colors.purple, -25)} !important;
          box-shadow: 0 0 0 1px ${colors.grey};
        }

        /* greyRed */
        .Pagination__theme-greyRed & {
          color: ${lightness(colors.red, -10)} !important;
          box-shadow: 0 0 0 1px ${colors.grey};
        }

        /* greyOrange */
        .Pagination__theme-greyOrange & {
          color: ${lightness(colors.orange, -20)} !important;
          box-shadow: 0 0 0 1px ${colors.grey};
        }
      }
    }
  }
`
