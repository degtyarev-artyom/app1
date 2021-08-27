import styled from 'styled-components'
import { hsla, lightness } from 'styling/js/styling-ligthness-saturation'
import { staffColorsCode, staffColorsMain, staffThemesMain } from 'styling/staff/staff-styling-themes'

export const StaffColorText = styled.span(({
  color,
  themeCode,
  currentTheme
}) => {
  const isDefault = currentTheme === staffThemesMain.default

  return {
    color,
    transition: 'color 0.3s ease',
    "::selection": {
      background: isDefault
        ? lightness(staffColorsCode[themeCode].background, 20)
        : hsla(staffColorsMain[currentTheme], -30, 0, 70),
      color: isDefault
        ? lightness(color, 25)
        : staffColorsCode[themeCode].background
    }
  }
})
