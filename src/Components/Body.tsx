import React from 'react'
import { Input } from './Input'
import { Countries } from './Countries'
import { Filter } from './Filter'

export const Body = () => {
  return (
    <div>
      <Input/>
      <Filter/>
      <Countries/>
    </div>
  )
}
