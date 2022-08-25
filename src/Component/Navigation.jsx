import React from 'react'
import {NavLink} from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
      <span className="font-bold">Tелеком  2022</span>

      <span>
        <NavLink to="/" className="mr-2 hover:bg-sky-700">Организации</NavLink>
        <NavLink to="/contract" className="mr-2 hover:bg-sky-700">Договора</NavLink>
        <NavLink to="/orders" className="mr-2 hover:bg-sky-700">Заказы</NavLink>
      </span>
    </nav>
  )
}