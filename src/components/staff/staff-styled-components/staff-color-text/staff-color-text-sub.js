import { hsla, lightness } from 'functions/staff-styling-hsla-func'
import styled from 'styled-components'
import { staffColorsCode, staffColors, staffThemes } from 'styling/staff/staff-styling-themes'

export const StaffColorTextSub = styled.span(({
  color,
  themeCode,
  currentTheme
}) => {
  const isDefault = currentTheme === staffThemes.default

  return {
    color,
    transition: 'color 0.3s ease',
    "::selection": {
      background: isDefault
        ? lightness(staffColorsCode[themeCode].background, 20)
        : hsla(staffColors[currentTheme], -30, 0, 70),
      color: isDefault
        ? lightness(color, 25)
        : staffColorsCode[themeCode].background
    }
  }
})
