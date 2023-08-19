import React from 'react'
import {TextField} from "@material-ui/core"

export default function NumericInput(props) {
  return (
    <TextField value={props.value}
               onChange={(e) =>
                 props.decimal
                   ? props.onChange(parseDecimal(e.currentTarget.value))
                   : props.onChange(parseInteger(e.currentTarget.value))
               }/>
  )
}

function parseInteger(string) {
  return handleNegativeSigns(removeNonIntegerChars(string))
}

function removeNonIntegerChars(string) {
  return string.replace(/[^0-9-]/g, '')
}

/**
 * Parsing decimal is accomplished through wholesale operations
 *
 * First we remove any non-decimal characters (not a number, '.', or '-')
 * Then we remove all negative signs except the leading one
 * Then we remove all but the first period in the string
 *
 * This wholesale approach was preferred as it appeared more readable than a
 * strategy that parses character by character.
 */
function parseDecimal(string) {
  return handlePeriods(handleNegativeSigns(removeNonDecimalChars(string)))
}

function removeNonDecimalChars(string) {
  return string.replace(/[^0-9.-]/g, '')
}

/**
 * Removes all but leading dash in string
 */
function handleNegativeSigns(string) {
  const dash = /-/g
  return string.charAt(0) === '-'
    ? '-' + string.replace(dash, '')
    : string.replace(dash, '')
}

/**
 * Removes all but first period in string
 */
function handlePeriods(string) {
  const periodIdx = string.indexOf('.'),
    period = /\./g

  return periodIdx === -1
    ? string.replace(period, '')
    : (string.substring(0, periodIdx).replace(period, '')
      + '.'
      + string.substring(periodIdx + 1).replace(period, ''))
}
