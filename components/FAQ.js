import React from 'react'
import List from './List'

function FAQ({specialties}) {
  return (
    <div class="space-y-4 max-w-[80%]">
    {specialties.map((specialty, index) => { return (
        <details key={index} class="group [&_summary::-webkit-details-marker]:hidden "  close >
      <summary
      class="flex items-center justify-between p-4  rounded-lg cursor-pointer "
      >
        <h2 class=" ">
        {specialty.name}
        </h2>
  
        <svg
          class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
            />
        </svg>
      </summary>
  

  <ul class=" space-y-1 list-disc list-inside " >
  {specialty.modules.map((module, index) => {
          return (
            <li
            className=''
            key={index}>{module}</li>
          );
        })}

</ul>     
    </details>
  )
  }  )}
  
  </div>
  
  )
}

export default FAQ