import React from 'react'
import {NavLink} from 'react-router-dom'
import Greeting from './Greeting'

export function Navigation() {
  return (
    <nav className="w-screen h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white ">
      <span className="font-bold">Tелеком СП  2022</span>
      <Greeting/>
      <span>
      <NavLink to="/" className="mr-2 hover:bg-sky-700">Войти</NavLink>
        <NavLink to="/organization" className="mr-2 hover:bg-sky-700">Организации</NavLink>
        <NavLink to="/contract" className="mr-2 hover:bg-sky-700">Договора</NavLink>
        <NavLink to="/orders" className="mr-2 hover:bg-sky-700">Заказы</NavLink>
      </span>
    </nav>
  )
}