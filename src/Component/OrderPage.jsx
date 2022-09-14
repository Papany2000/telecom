import { useMemo, useState } from 'react';
import Table from './Table'
import AddOrderForm from './AddContractsForm'
import { nanoid } from 'nanoid'
import { useParams } from 'react-router-dom';
import { FcEmptyTrash } from "react-icons/fc";

function OrderPage() {
  const { id } = useParams()
  const orderData = [
    {
      contractId: 0,
      number: "Бланк Заказа №1",
      description: "Канал с Большой Морской 18 до Большой Монетной 26",
      type: 'orderType.l2Vpn',
      supportEmail: "Papany@rambler.ru",
      supprotPhone: "9209567789",
      supprotEmialTemplate: "Добрый день. К нам обратился клиент с жалобой на отсутствие связи на канале Канал с Большой Морской 26 до Большой Морской 18, арендуемом у вас по договору № 1 от 22.08.2022, бланк заказа № 1"
    },
    {
      contractId: 0,
      number: "Бланк Заказа №2",
      description: "Канал с Большой Морской 26 до Точка 2",
      type: 'orderType.l2Vpn',
      supportEmail: "Papany@rambler.ru",
      supprotPhone: "9209567788",
      supprotEmialTemplate: "Добрый день. К нам обратился клиент с жалобой на отсутствие связи на канале Канал с Большой Морской 26 до Точка 2, арендуемом у вас по договору № 1 от 22.08.2022, бланк заказа № 2"
    },
    {
      contractId: 1,
      number: "Бланк Заказа №3",
      description: "Канал с Большой Морской 26 до Точка 3",
      type: 'orderType.l2Vpn',
      supportEmail: "Papany@rambler.ru",
      supprotPhone: "9209567787",
      supprotEmialTemplate: "Добрый день. К нам обратился клиент с жалобой на отсутствие связи на канале Канал с Большой Морской 26 до Точка 3, арендуемом у вас по договору № 1 от 22.08.2022, бланк заказа № 3"
    },
    {
      contractId: 2,
      number: "Бланк Заказа №4",
      description: "Канал с Большой Морской 26 до Точка 4",
      type: 'orderType.l2Vpn',
      supportEmail: "Papany@rambler.ru",
      supprotPhone: "9209567783",
      supprotEmialTemplate: "Добрый день. К нам обратился клиент с жалобой на отсутствие связи на канале Канал с Большой Морской 26 до Точка 4, арендуемом у вас по договору № 1 от 22.08.2022, бланк заказа № 4"
    },
    {
      contractId: 3,
      number: "Бланк Заказа №1",
      description: "Интернет по адресу 1",
      type: 'orderType.internet',
      supportEmail: "Papany@rambler.ru",
      supprotPhone: "9209567589",
      supprotEmialTemplate: "Добрый день. К нам обратился клиент с жалобой на отсутствие связи Интернет по адресу 1, арендуемом у вас по договору № 1 от 22.08.2022, бланк заказа № 1"
    },
    {
      contractId: 4,
      number: "Бланк Заказа №2",
      description: "Интернет по адресу 2",
      type: 'orderType.internet',
      supportEmail: "Papany@rambler.ru",
      supprotPhone: "9209567689",
      supprotEmialTemplate: "Добрый день. К нам обратился клиент с жалобой на отсутствие связи Интернет по адресу 2, арендуемом у вас по договору № 1 от 22.08.2022, бланк заказа № 2"
    },
    {
      contractId: 5,
      number: "Бланк Заказа №3",
      description: "Интернет по адресу 3",
      type: 'orderType.internet',
      supportEmail: "Papany@rambler.ru",
      supprotPhone: "9209567989",
      supprotEmialTemplate: "Добрый день. К нам обратился клиент с жалобой на отсутствие связи Интернет по адресу 3, арендуемом у вас по договору № 1 от 22.08.2022, бланк заказа № 3"
    },
    {
      contractId: 6,
      number: "Бланк Заказа №4",
      description: "Интернет по адресу 4",
      type: 'orderType.internet',
      supportEmail: "Papany@rambler.ru",
      supprotPhone: "9209567189",
      supprotEmialTemplate: "Добрый день. К нам обратился клиент с жалобой на отсутствие связи Интернет по адресу 4, арендуемом у вас по договору № 1 от 22.08.2022, бланк заказа № 4"
    },
  ];

  const [orders, setOrders] = useState(id ? orderData.filter(el => el.contractId === Number(id)) : orderData)
  const columns2 = useMemo(
    () => [
      {
        Header: '№ заказа',
        accessor: 'number',
        width: 50,
      },
      {
        Header: 'Описание',
        accessor: 'description',
        width: 300,
        minwidth: 200,
        whiteSpace: 'unset',
      },
      {
        Header: 'Тип файла',
        accessor: 'type',
        width: 50,
      },
      {
        Header: 'Почта поддержки',
        accessor: 'supportEmail',
      },
      {
        Header: 'Тел. поддержки',
        accessor: 'supprotPhone'
      },
      {
        Header: 'Сообщение',
        accessor: 'supprotEmialTemplate',
        disableFilters: true,
        width: 650,
        minwidth: 300,
        whiteSpace: 'unset',
      },
      {
        Header: 'del',
        id: 'del',
        accessor: (str) => 'del',
        minwidth: 30,
        width: 50,
        whiteSpace: 'unset',
        disableFilters: true,
        Cell: (tableProps) => (
          <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            onClick={() => {
              // ES6 Syntax use the rvalue if your data is an array.  
              const ordersCopy = [...orders];
              // It should not matter what you name tableProps. It made the most sense to me.
              ordersCopy.splice(tableProps.row.index, 1);
              setOrders(ordersCopy);
              console.log(tableProps)
            }}>
            <FcEmptyTrash />
          </span>
        ),
      },
    ],
    [orders]
  )
  const [addFormData, setAddFormData] = useState(
    {
      organizationId: '',
      number: '',
      description: '',
      isProfitable: '',
      fileUuid: '',
    }
  )
  const handleAddFormChange = (event) => {
    event.preventDefault()
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value
    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  }
  const handleAddFormSubmit = (event) => {
    event.preventDefault()
    const order = {
      organizationId: nanoid(),
      phone: addFormData.number,
      email: addFormData.description,
      manager: addFormData.isProfitable,
      managerWorkPhone: addFormData.fileUuid,
    }
    const newOrders = [...orders, order]
    setOrders(newOrders)
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="w-90vn mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <h1 className='text-center italic font-bold my-5'>Список  заказов</h1>
        <div>
          <Table columns={columns2} data={orders} />
          <AddOrderForm change={handleAddFormChange} submit={handleAddFormSubmit} text={'Добавить заказ'} />
        </div>
      </main>
    </div>
  );
}






export default OrderPage;