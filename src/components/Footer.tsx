import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-purple-400">
      <div className="flex items-center justify-between p-4">
        <ul className="flex gap-2">
          <li className="text-xs italic text-white">Github</li>
          <li className="text-xs italic text-white">Porfolio</li>
        </ul>
        <p className="text-sm text-white">Desenvolvido por Iarlen Reis.</p>
      </div>
    </footer>
  )
}

export default Footer
