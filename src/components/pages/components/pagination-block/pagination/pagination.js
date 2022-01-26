import classNames from 'classnames'
import { themes } from 'styling/js/styling-themes'
import './pagination.scss'
import { staticStyles } from './pagination-styles'
import { Button, ButtonProps } from 'components/pages/components/button-block/button/button'
import { objToSearch, searchToObj } from 'functions/staff-get-func'
import { useHistory } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'

const Pagination = ({
  className,
  theme,
  paginationId,
  total,
  count,
  handlePage,
  ...rest
}) => {
  const checkRange = (count, start, end) => {
    if (count < start) return start
    if (count > end) return end
    return count
  }

  const history = useHistory()
  const inputRef = useRef()
  const pageNumberGET = paginationId ? `page-number-${paginationId}` : 'page-number'
  const pageCountGET = paginationId ? `page-count-${paginationId}` : 'page-count'

  const changeSearch = (page, count) => {
    const currentSearch = searchToObj(history.location.search)
    const search = objToSearch({
      ...currentSearch,
      [pageNumberGET]: page,
      [pageCountGET]: count
    })
    history.replace({ ...history.location, search })
  }
  
  /* page count active */
  const countSearch = searchToObj(history.location.search)[pageCountGET]
  const [pageCountActive, setPageCountActive] = useState(
    count.includes(Number(countSearch)) ? Number(countSearch) : count[0]
  )

  /* page count */
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

  /* first */
  const pageNumberRef = useRef(pageNumberActive)
  const pageCountRef = useRef(pageCountActive)
  useMemo(() => {
    handlePage(pageNumberRef.current, pageCountRef.current)
  }, [handlePage])

  /* first */
  useEffect(() => {
    inputRef.current.value = pageNumberRef.current
  }, [])
  
  /* page number */
  const pageChange = (pageNumber, pageCount) => {
    pageNumber = validPage(`${pageNumber}`)
    inputRef.current.value = pageNumber
    const pageIsChanged = pageNumber !== pageNumberActive
    const countIsChanged = pageCount !== pageCountActive
    if (!pageIsChanged && !countIsChanged) return

    changeSearch(pageNumber, pageCount)

    if (pageIsChanged) setPageNumberActive(pageNumber)
    if (countIsChanged) setPageCountActive(pageCount)
    handlePage(pageNumber, pageCount)
  }
  
  /* previous */
  const previous = () => {
    const page = checkRange(pageNumberActive - 1, 1, pageCount)
    pageChange(page, pageCountActive)
  }
  const previousDisabled = pageNumberActive <= 1 || !pageNumberActive

  /* next */
  const next = () => {
    const page = checkRange(pageNumberActive + 1, 1, pageCount)
    pageChange(page, pageCountActive)
  }
  const nextDisabled = pageNumberActive >= pageCount

  /* input */
  const onFocus = ({ target }) => target.select()
  const onInput = e => {
    const valid = e.target.value.split('')
      .filter(item => item.search(/[0-9]/) !== -1).join('')
    e.target.value = valid ? checkRange(valid, 1, pageCount) : valid
  }
  const onKeyDown = e => {
    const { code, target: { value } } = e
    if (code === 'ArrowUp') {
      e.target.value = checkRange(Number(value) + 1, 1, pageCount)
      return
    }
    if (code === 'ArrowDown') {
      e.target.value = checkRange(Number(value) - 1, 1, pageCount)
      return
    }
    if (code !== 'Enter') return
    pageChange(value, pageCountActive)
  }
  const onBlur = ({ target: { value } }) => {
    pageChange(value, pageCountActive)
  }

  /* count */
  const onCount = num => () => {
    if (num === pageCountActive) return
    pageChange(1, num)
  }

  return (
    <div
      className={classNames('Pagination', {
        [className]: className,
        [`Pagination__theme-${theme}`]: theme
      })}
      {...rest}
    >
      <div className="Pagination__left">

        {/* input */}
        <input
          ref={inputRef}
          className="Pagination__input"
          type="text"
          onFocus={onFocus}
          onInput={onInput}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
        <div className="Pagination__page-count">
          из { pageCount }
        </div>

        {/* previous */}
        <Button
          className="Pagination__previous"
          theme={theme}
          type="normal"
          active
          onClick={previous}
          disabled={previousDisabled}
          focus
        >
          Previous
        </Button>

        {/* next */}
        <Button
          className="Pagination__next"
          theme={theme}
          type="normal"
          active
          onClick={next}
          disabled={nextDisabled}
          focus
        >
          Next
        </Button>
      </div>
      <div className="Pagination__right">

        {/* count */}
        <div className="Pagination__count-list">
          {count.map((num, i) => (
            <Button
              className={classNames('Pagination__count-item', {
                'Pagination__count-item--active': num === Number(pageCountActive)
              })}
              theme={theme}
              size={ButtonProps.size.m}
              key={i}
              onClick={onCount(num)}
            >
              { num }
            </Button>
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
