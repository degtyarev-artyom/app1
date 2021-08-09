/* button */
export const getButtonCode = ({
  buttonExternalClass,
  buttonTheme,
  buttonSize,
  buttonType,
  buttonFocus,
  buttonActive,
  buttonChildren
}) => `<Button
  externalClass="${buttonExternalClass}"
  theme="${buttonTheme}"
  size="${buttonSize}"
  type="${buttonType}"${
  buttonFocus ? '\r\n  focus' : ''}${
  buttonActive ? '\r\n  active' : ''}
>
  ${buttonChildren}
</Button>`
