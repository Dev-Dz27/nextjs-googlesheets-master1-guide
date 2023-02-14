import React from 'react'

const List = ({specialtie}) => {
  return (
<div>


<h2 class="mb-2 text-lg font-semibold ">:</h2>
{specialtie.map((specialtie, i) =>
{
    return (
        <ul class="max-w-md space-y-1 list-disc list-inside " key={index}>
    <li>
    {specialtie.modules}
    </li>

</ul>
    )
}

)}
</div>

  )
}

export default List