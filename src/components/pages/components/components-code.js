/* button */
export const getButtonCode = ({
  buttonSize,
  buttonTheme,
  buttonChildren,
  buttonNoFocus,
  buttonExternalClass
}) => `<Button
  externalClass="${buttonExternalClass}"
  size="${buttonSize}"
  theme="${buttonTheme}"${
  buttonNoFocus ? '\r\n  noFocus' : ''}
>
  ${buttonChildren}
</Button>`
