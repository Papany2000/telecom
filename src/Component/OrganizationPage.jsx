
import { useMemo } from 'react';
import Table from './Table'


function OrganizationPage() {
  const columns = useMemo(
    () => [
     
      {Header: 'Организации',
      columns: [
        {Header: 'id',
        accessor: 'id'
      },
        {Header: 'Организация',
        accessor: 'name'
      },
        {Header: 'Телефон',
        accessor: 'phone'
      },
        {Header: 'Почта',
        accessor: 'email'
      },
      ]
    },
    
      {Header: 'Менеджер',
      columns:[
        {Header: 'Имя Фамилия ',
        accessor: 'manager'},
        {Header: 'Рабочий тел.',
        accessor: 'managerWorkPhone',
      },
      {Header: 'Личный тел.',
      accessor: 'managerPersonalPhone',
    },
      {Header: 'Почта',
      accessor: 'managerEmail',
    },
      ]
  },
        {Header: 'Поддержка',
     columns: [
      {Header: 'Почта',
      accessor: 'supportEmail',
    },
    {Header: 'Телефон',
    accessor: 'supprotPhone',
  },
     ],
   },
    ],
     []
  )
  const data = useMemo(() =>  [
    {
      id: 1,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    {
      id: 2,
      name: "ООО Вымпелком",
      phone: "234-678-943",
      email: "beeline@email.ru",
      manager: "Владимир Попов",
      managerWorkPhone: "8-915-435-67-89",
      managerPersonalPhone: "8-915-435-67-88",
      managerEmail: "ghj@yandex.ru", 
      supportEmail: "pop@rambler.ru",
      supprotPhone: "356-897-567"
    },
    {
      id: 3,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    {
      id: 4,
      name: "ООО Вымпелком",
      phone: "234-678-943",
      email: "beeline@email.ru",
      manager: "Владимир Попов",
      managerWorkPhone: "8-915-435-67-89",
      managerPersonalPhone: "8-915-435-67-88",
      managerEmail: "ghj@yandex.ru", 
      supportEmail: "pop@rambler.ru",
      supprotPhone: "356-897-567"
    },
    {
      id: 5,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    {
      id: 6,
      name: "ООО Вымпелком",
      phone: "234-678-943",
      email: "beeline@email.ru",
      manager: "Владимир Попов",
      managerWorkPhone: "8-915-435-67-89",
      managerPersonalPhone: "8-915-435-67-88",
      managerEmail: "ghj@yandex.ru", 
      supportEmail: "pop@rambler.ru",
      supprotPhone: "356-897-567"
    },
    {
      id: 7,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    {
      id: 8,
      name: "ООО Вымпелком",
      phone: "234-678-943",
      email: "beeline@email.ru",
      manager: "Владимир Попов",
      managerWorkPhone: "8-915-435-67-89",
      managerPersonalPhone: "8-915-435-67-88",
      managerEmail: "ghj@yandex.ru", 
      supportEmail: "pop@rambler.ru",
      supprotPhone: "356-897-567"
    },
    {
      id: 9,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    {
      id: 10,
      name: "ООО Вымпелком",
      phone: "234-678-943",
      email: "beeline@email.ru",
      manager: "Владимир Попов",
      managerWorkPhone: "8-915-435-67-89",
      managerPersonalPhone: "8-915-435-67-88",
      managerEmail: "ghj@yandex.ru", 
      supportEmail: "pop@rambler.ru",
      supprotPhone: "356-897-567"
    },
    {
      id: 11,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    {
      id: 12,
      name: "ООО Вымпелком",
      phone: "234-678-943",
      email: "beeline@email.ru",
      manager: "Владимир Попов",
      managerWorkPhone: "8-915-435-67-89",
      managerPersonalPhone: "8-915-435-67-88",
      managerEmail: "ghj@yandex.ru", 
      supportEmail: "pop@rambler.ru",
      supprotPhone: "356-897-567"
    },
    {
      id: 13,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    {
      id: 14,
      name: "ООО Вымпелком",
      phone: "234-678-943",
      email: "beeline@email.ru",
      manager: "Владимир Попов",
      managerWorkPhone: "8-915-435-67-89",
      managerPersonalPhone: "8-915-435-67-88",
      managerEmail: "ghj@yandex.ru", 
      supportEmail: "pop@rambler.ru",
      supprotPhone: "356-897-567"
    },
    {
      id: 15,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    {
      id: 16,
      name: "ООО Вымпелком",
      phone: "234-678-943",
      email: "beeline@email.ru",
      manager: "Владимир Попов",
      managerWorkPhone: "8-915-435-67-89",
      managerPersonalPhone: "8-915-435-67-88",
      managerEmail: "ghj@yandex.ru", 
      supportEmail: "pop@rambler.ru",
      supprotPhone: "356-897-567"
    },
    {
      id: 17,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    {
      id: 18,
      name: "ООО Вымпелком",
      phone: "234-678-943",
      email: "beeline@email.ru",
      manager: "Владимир Попов",
      managerWorkPhone: "8-915-435-67-89",
      managerPersonalPhone: "8-915-435-67-88",
      managerEmail: "ghj@yandex.ru", 
      supportEmail: "pop@rambler.ru",
      supprotPhone: "356-897-567"
    },
    {
      id: 19,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    {
      id: 20,
      name: "ООО Вымпелком",
      phone: "234-678-943",
      email: "beeline@email.ru",
      manager: "Владимир Попов",
      managerWorkPhone: "8-915-435-67-89",
      managerPersonalPhone: "8-915-435-67-88",
      managerEmail: "ghj@yandex.ru", 
      supportEmail: "pop@rambler.ru",
      supprotPhone: "356-897-567"
    },
    {
      id: 21,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    {
      id: 22,
      name: "ООО Вымпелком",
      phone: "234-678-943",
      email: "beeline@email.ru",
      manager: "Владимир Попов",
      managerWorkPhone: "8-915-435-67-89",
      managerPersonalPhone: "8-915-435-67-88",
      managerEmail: "ghj@yandex.ru", 
      supportEmail: "pop@rambler.ru",
      supprotPhone: "356-897-567"
    },
    {
      id: 23,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    {
      id: 24,
      name: "ООО Вымпелком",
      phone: "234-678-943",
      email: "beeline@email.ru",
      manager: "Владимир Попов",
      managerWorkPhone: "8-915-435-67-89",
      managerPersonalPhone: "8-915-435-67-88",
      managerEmail: "ghj@yandex.ru", 
      supportEmail: "pop@rambler.ru",
      supprotPhone: "356-897-567"
    },
    {
      id: 25,
      name: "ООО Мегафон",
      phone: "333-444-555",
      email: "megafon@email.ru",
      manager: "Сергей Иванов",
      managerWorkPhone: "8-920-876-45-56",
      managerPersonalPhone: "8-920-876-45-57",
      managerEmail: "Papany34rambler.ru", 
      supportEmail: "megafon@email.ru",
      supprotPhone: "555-666-777"
    },
    
  ], [])
 

  return (
    <div className="container mx-auto">
    <Table columns = {columns} data = {data}/>
    </div>
  );
}

export default OrganizationPage;