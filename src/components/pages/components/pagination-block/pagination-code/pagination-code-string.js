export const getPaginationCode = ({
  paginationExternalClass,
  paginationTotal,
}) => `<Pagination
  externalClass="${paginationExternalClass}"
  total={${paginationTotal}}
  count={[5, 10, 25, 50, 100]}
  handlePage={handlePage}
/>`
