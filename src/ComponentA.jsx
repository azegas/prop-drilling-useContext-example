import { useState, createContext } from 'react'
import ComponentB from './ComponentB'

// 1. Creating a context object
export const UserContext = createContext()

function ComponentA() {

  const [user, setUser] = useState("Kisielius")

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>

      {/* 2. Providing a value to all children components */}
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  )
}

export default ComponentA
