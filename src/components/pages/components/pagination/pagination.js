import classNames from 'classnames'
import { themes } from 'styling/js/styling-themes'
import './pagination.scss'
import { staticStyles } from './pagination-styles'
import { Button, ButtonProps } from 'components/pages/components/button/button'
import { objToSearch, searchToObj } from 'functions/staff-get-func'
import { useHistory } from 'react-router-dom'
import { useMemo, useRef, useState } from 'react'

const Pagination = ({
  externalClass,
  paginationId,
  total,
  count,
  ...rest
}) => {
  const checkRange = (count, start, end) => {
    if (count < start) return start
    if (count > end) return end
    return count
  }

  const pageNumberGET = paginationId ? `page-number-${paginationId}` : 'page-number'
  const pageCountGET = paginationId ? `page-count-${paginationId}` : 'page-count'
  const history = useHistory()
  
  /* page count active */
  const countSearch = searchToObj(history.location.search)[pageCountGET]
  const [pageCountActive, setPageCountActive] = useState(
    count.includes(Number(countSearch)) ? countSearch : `${count[0]}`
  )

  const pageCount = useMemo(() => Math.ceil(total / pageCountActive), [total, pageCountActive])

  const validPage = value => {
    if (!value || value === '0') return 1
    const page = Number(value.split('').filter(item => !['.', 'e', '-'].includes(item)).join(''))
    return page > pageCount ? pageCount : page
  }

  /* page number active */
  const [pageNumberActive, setPageNumberActive] = useState(
    validPage(searchToObj(history.location.search)[pageNumberGET] || '1')
  )

  /* first submit */
  const pageNumberRef = useRef(pageNumberActive)
  const pageCountRef = useRef(pageCountActive)
  useMemo(() => {
    console.log('submit => page =', pageNumberRef.current, 'count =', pageCountRef.current)
  }, [])
  
  const pageNumberChange = pageNumber => {
    if (pageNumber === pageNumberActive) return
    const currentSearch = searchToObj(history.location.search)
    const search = objToSearch({...currentSearch, [pageNumberGET]: pageNumber })
    history.replace({ ...history.location, search })
    setPageNumberActive(pageNumber)
  }

  const pageCountChange = pageCount => {
    if (pageCount === pageCountActive) return
    const currentSearch = searchToObj(history.location.search)
    const search = objToSearch({...currentSearch, [pageCountGET]: pageCount })
    history.replace({ ...history.location, search })
    setPageCountActive(pageCount)
  }

  const previous = () => {
    const page = checkRange(pageNumberActive - 1, 1, pageCount)
    pageNumberChange(page)
    console.log('submit => page =', page, 'count =', pageCountActive)
  }

  const next = () => {
    const page = checkRange(pageNumberActive + 1, 1, pageCount)
    pageNumberChange(page)
    console.log('submit => page =', page, 'count =', pageCountActive)
  }

  const onCount = num => () => {
    if (num === Number(pageCountActive)) return
    pageNumberChange(1)
    pageCountChange(num)
    console.log('submit => page =', 1, 'count =', num)
  }

  return (
    <div
      className={classNames('Pagination', {
        [externalClass]: externalClass,
      })}
      {...rest}
    >
      <div className="Pagination__left">

        {/* input */}
        <input
          className="Pagination__input"
          type="number"
          value={pageNumberActive}
          onFocus={({ target }) => target.select()}
          onInput={({ target: { value }}) => {
            pageNumberChange(value)}
          }
          onKeyDown={({ code, target: { value } }) => {
            if (code !== 'Enter') return
            pageNumberChange(validPage(value))
            console.log('submit => page =', validPage(value), 'count =', pageCountActive)
          }}
          onBlur={({ target: { value }}) => {
            pageNumberChange(validPage(value))
            console.log('submit => page =', validPage(value), 'count =', pageCountActive)
          }}
        />
        <div className="Pagination__page-count">
          из { pageCount }
        </div>

        {/* previous */}
        <Button
          externalClass="Pagination__previous"
          theme={ButtonProps.theme.purple}
          type="normal"
          active
          onClick={previous}
          disabled={pageNumberActive === 1 || !pageNumberActive}
        >
          Previous
        </Button>

        {/* next */}
        <Button
          externalClass="Pagination__next"
          theme={ButtonProps.theme.purple}
          type="normal"
          active
          onClick={next}
          disabled={pageNumberActive === pageCount}
        >
          Next
        </Button>
      </div>
      <div className="Pagination__right">

        {/* count */}
        <div className="Pagination__count-list">
          {count.map((num, i) => (
            <button
              className={classNames('Pagination__count-item', {
                'Pagination__count-item--active': num === Number(pageCountActive)
              })}
              key={i}
              onClick={onCount(num)}
            >
              { num }
            </button>
          ))}
        </div>
        
      </div>
      <style jsx>{ staticStyles }</style>
    </div>
  )
}

const PaginationProps = {
  theme: themes,
  size: {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
  }
}

export { Pagination, PaginationProps }
