import React from 'react'
import Categories__accordion from './Categories__accordion'

function Shop__aside() {
  return (
    <aside className='hidden lg:flex basis-[25%] h-fit border p-4 md:sticky top-16'>
      <div>
        {/* accordion */}
        <Categories__accordion />
        {/* content */}
        <div className="p-5">
          <h3 className="text-slate-900 text-sm font-semibold">CUSTOM HTML BLOCK</h3>
          <h6 className="text-slate-300 text-[9px] my-1 font-semibold">This is a custom sub-title.</h6>
          <p className='text-slate-500 '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus
          </p>
        </div>
      </div>
    </aside>
  )
}

export default Shop__aside