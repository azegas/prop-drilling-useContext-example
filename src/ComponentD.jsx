import { useContext } from 'react'
import { UserContext } from './ComponentA'

// 3. ComponentD is a consumer component
function ComponentD() {

  // 4. Consuming the value from UserContext
  const user = useContext(UserContext)

  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default ComponentD
