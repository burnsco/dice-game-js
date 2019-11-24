import React from 'react'

export const Die = ({ value }) => {
  let classes = `fas fa-dice-${value} fa-5x`
  return (
    <div>
      <i
        style={{ color: 'DodgerBlue', display: 'block', margin: 15 }}
        className={classes}
      />
    </div>
  )
}
