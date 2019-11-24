import React from 'react'

export const Die = () => {
  let dieValues = ['one', 'two', 'three', 'four', 'five', 'six']
  let dieValue = dieValues[(Math.random() * dieValues.length) | 0]
  let classes = `fas fa-dice-${dieValue} fa-5x`
  return (
    <div>
      <i
        style={{ color: 'DodgerBlue', display: 'block', margin: 15 }}
        className={classes}
      />
    </div>
  )
}
