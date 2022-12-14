import { useMemo, useState, useEffect, useContext } from 'react';
import Table from './Table'
import AddOrderForm from './AddOrderForm'
import { useParams } from 'react-router-dom';
import { FcEmptyTrash } from "react-icons/fc";
import { getOrders, removeOrder } from '../api/Order'
import { ModalContext } from './Context/ModalContext'
import Modal from './Modal';
import {Loader} from './Loader'
import {ErrorMessage} from './Error.Message'

function OrderPage() {
  const routeParams = useParams();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { modal, open, close } = useContext(ModalContext)
  const [orders, setOrders] = useState([])
  useEffect(() =>  {
    setError('')          // очистка ошибки при вторичной загрузке
    setLoading(true)
    getOrders(routeParams.id)
    .then(
      (result) => {
        setOrders(result.data);
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        setError(error.message)
      })
  }, [routeParams.id])
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
          onClick={async () => {
            const res =  window.confirm('Вы уверены')
            if(!res){return false}
           await removeOrder(tableProps.row.original.id)
            setOrders((await getOrders()).data)
          }}>
            <FcEmptyTrash style = {{margin:  'auto',}}/>
          </span>
        ),
      },
    ],
    [orders]
  )
  const a = { 
    contractId: "id договора",
    number: "№ заказа",
    description: "краткое содержание",
    type: "тип файла",
    supportEmail: "почта поддержки",
    supprotPhone: "тел. поддержки",
    supprotEmialTemplate: "сообщение",
    del: "удалить"
  }
  const b = { 
     "№ заказа": 'number',
    "краткое содержание": 'description',
    "тип файла": 'type',
    "почта поддержки": 'supportEmail',
    "тел. поддержки": 'supprotPhone',
    "сообщение": 'supprotEmialTemplate',
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
       {loading && <Loader/>}
       {error && <ErrorMessage error={error}/>}
      <main className="w-90vn mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <h1 className='text-center italic font-bold my-5'>Список  заказов</h1>
        <div>
        <button className='absolute top right-2 rounded-full bg-red-700 text-white text-2xl px-4 py-2' onClick={open}>+</button>
          <Table columns={columns2} data={orders} a={a} b = {b} />
          {modal && <Modal  title='Создайте новый заказ' onClose={close}>
        <AddOrderForm  setOrders = {setOrders} />
      </Modal>}
        </div>
      </main>
    </div>
  );
}

export default OrderPage;