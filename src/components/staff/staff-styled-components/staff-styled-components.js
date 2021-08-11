import styled from 'styled-components'
import { lightness } from 'styling/js/styling-ligthness-saturation'
import { staffColors } from 'styling/staff/staff-styling-themes'

export const StaffColorText = styled.span(({ color, theme }) => ({
  color,
  "::selection": {
    background: lightness(staffColors[theme], -20),
    color: staffColors.codeDark
  }
}))
