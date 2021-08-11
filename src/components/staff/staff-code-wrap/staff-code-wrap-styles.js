import css from 'styled-jsx/css'

export const getDynamicStyles = (staffColors) => {
  return css`
    .StaffCodeWrap {
      background: ${staffColors.codeDark};
    }
  `
}
