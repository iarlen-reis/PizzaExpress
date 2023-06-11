import React from 'react'

const Header = () => {
  return (
    <div className="w-full bg-purple-400">
      <div className="m-auto flex w-full max-w-[1200px] items-center justify-between  p-4">
        <h1 className="text-2xl font-bold text-white">Pizzaria</h1>
        <nav>
          <ul className="flex items-center gap-2">
            <li className="text-base italic text-white">Teste 1</li>
            <li className="text-base italic text-white">Teste 2</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
