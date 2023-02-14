import React from 'react'

const FAQ2 = () => {
  return (
    <div class="py-20 bg-black overflow-x-hidden">
<ul>
  {specialties.forEach((specialty) => { 
    <li> {specialty.name} </li>

   }) }
</ul>
</div>
  )
}

export default FAQ2