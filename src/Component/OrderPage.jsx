import { useMemo, useState, useEffect, useContext } from 'react';
import Table from './Table'
import AddOrderForm from './AddOrderForm'
import { useParams } from 'react-router-dom';
import { FcEmptyTrash } from "react-icons/fc";
import { getOrders, removeOrder } from '../api/Order'
import { ModalContext } from './Context/ModalContext'
import Modal from './Modal';


function OrderPage() {
  const routeParams = useParams();
  const { modal, open, close } = useContext(ModalContext)
  const [orders, setOrders] = useState([])
  useEffect(() => {
    getOrders(routeParams.id)
      .then(
        (result) => {
          setOrders(result.data);
        }
      )
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
           await removeOrder(tableProps.row.original.id)
            setOrders((await getOrders()).data)
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
      contractId: '',
      number: '',
      description: '',
      type: '',
      supportEmail: '',
      supprotPhone: '',
      supprotEmialTemplate: '',
    }
  )
  const a = { 
    id: 'id',
    contractId: "id договора",
    number: "№ заказа",
    description: "краткое содержание",
    type: "тип файла",
    supportEmail: "почта поддержки",
    supprotPhone: "тел. поддержки",
    supprotEmialTemplate: "сообщение",
    del: "удалить"
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="w-90vn mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <h1 className='text-center italic font-bold my-5'>Список  заказов</h1>
        <div>
        <button className='absolute top right-2 rounded-full bg-red-700 text-white text-2xl px-4 py-2' onClick={open}>+</button>
          <Table columns={columns2} data={orders} a={a}/>
          {modal && <Modal  title='Create new Organization' onClose={close}>
        <AddOrderForm  setOrders = {setOrders} />
      </Modal>}
        </div>
      </main>
    </div>
  );
}

export default OrderPage;