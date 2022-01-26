export const getPaginationCode = ({
  paginationClassName,
  paginationTotal,
}) => `<Pagination
  className="${paginationClassName}"
  total={${paginationTotal}}
  count={[5, 10, 25, 50, 100]}
  handlePage={handlePage}
/>`
