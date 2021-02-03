import React, { useState } from 'react'

const TenLittleMonkeys = () => {
  const [count, setCount] = useState(10)

  const loseMonkey = () => {
    if (count !== 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className='App'>
      <h1>10 Little Monkey Challenge</h1>
      <p>
        {count !== 0
          ? `${count}little monkeys`
          : 'no more monkeys jumping on the bed'}
      </p>
      <p>
        10 monkeys jumping on the bed one fell off and bumped his head. Momma
        called the doctor and the doctor said "No more monkey's jumping on the
        bed".
      </p>
      <button onClick={loseMonkey}>Subtract One Monkey</button>
    </div>
  )
}

export default TenLittleMonkeys
