
import { useMemo, useState, useEffect, useContext } from 'react';
import Table from './Table'
import AddOrganizationForm from './AddOrganizationForm'
import { Link } from 'react-router-dom'
import { FcEmptyTrash } from "react-icons/fc";
import { GrDocumentDownload } from "react-icons/gr";
import { useParams } from 'react-router-dom'
import { getOrganizations, removeOrganization } from '../api/Organization'
import { ModalContext } from './Context/ModalContext'
import Modal from './Modal';
import { Loader } from './Loader'
import { ErrorMessage } from './Error.Message'



function OrganizationPage() {
  const routeParams = useParams();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { modal, open, close } = useContext(ModalContext)
  const [organizations, setOrganizations] = useState([]);


  useEffect(() => {

    setError('')          // очистка ошибки при вторичной загрузке
    setLoading(true)
    getOrganizations(routeParams.id)
      .then(
        (result) => {
          setOrganizations(result.data);
          setLoading(false)
        })
      .catch(error => {
        setLoading(false)
        setError(error.message)
      })
  }, [routeParams.id])


  const columns = useMemo(
    () => [

      {
        Header: 'Организации',

        columns: [
          {
            Header: 'id',
            accessor: 'id',
          },
          {
            Header: 'Организация',
            accessor: 'name',
          },
          {
            Header: 'Телефон',
            accessor: 'phone',
            minwidth: 30,
            width: 50,
          },
          {
            Header: 'Почта',
            accessor: 'email',
          },
        ]
      },

      {
        Header: 'Менеджер',
        columns: [
          {
            Header: 'Имя Фамилия ',
            accessor: 'manager',
          },
          {
            Header: 'Рабочий тел.',
            accessor: 'managerWorkPhone',
            minwidth: 30,
            width: 50,
            whiteSpace: 'unset',

          },
          {
            Header: 'Личный тел.',
            accessor: 'managerPersonalPhone',
            minwidth: 30,
            width: 50,
            whiteSpace: 'unset',

          },
          {
            Header: 'Почта',
            accessor: 'managerEmail',
            width: 100,
            minWidth: 150,
            whiteSpace: 'unset',

          },
        ]
      },
      {
        Header: 'Поддержка',
        columns: [
          {
            Header: 'Почта',
            accessor: 'supportEmail',
          },
          {
            Header: 'Телефон',
            accessor: 'supprotPhone',
            minwidth: 30,
            width: 50,
            whiteSpace: 'unset',

          },
        ],
      },
      {
        Header: 'Строка',
        columns: [
          {
            Header: 'дог. ',
            id: 'dog',
            accessor: (str) => 'dog',
            disableFilters: true,
            Cell: (tableProps) => {
              return (
                <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
                  <Link to={`/contract/${tableProps.row.original.id}`}>
                    <GrDocumentDownload style={{ margin: 'auto', }} />
                  </Link>
                </span>
              )
            },
          },
          {
            Header: 'del',
            id: 'del',
            accessor: (str) => 'del',
            disableFilters: true,
            Cell: (tableProps) => (
              <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                onClick={async () => {
                 const res =  window.confirm('Вы уверены')
                 if(!res){return false}
                  await removeOrganization(tableProps.row.original.id)
                  setOrganizations((await getOrganizations()).data)
                }}>
                <FcEmptyTrash style={{ margin: 'auto', }} />
              </span>
            ),
          },
        ]
      },
    ],
    [organizations]
  )


  const a = {               //checed
    id: 'id',
    name: "Организация",
    phone: "телефон",
    email: "почта",
    manager: "менеджер",
    managerWorkPhone: "тел. рабочий",
    managerPersonalPhone: "тел. личный",
    managerEmail: "почта менеджера",
    supportEmail: "почта поддержки",
    supprotPhone: "тел. поддержки",
    dog: "договор",
    del: "del",
  }
  const b = {                     //localStorage
    "id": 'id',
    "телефон": 'phone',
    "почта": 'email',
    "менеджер": 'manager',
    "тел. рабочий": 'managerWorkPhone:',
    "тел. личный": 'managerPersonalPhone',
    "почта менеджера": 'managerEmail',
    "почта поддержки": 'supportEmail',
    "тел. поддержки": 'supprotPhone',
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <main className="w-screen mx-auto">
        <div>
          <h1 className='text-xl text-center font-semibold'>Список организаций партнёров Телеком СП</h1>
          <div className='container-2xl mx-auto'>
            <button className='absolute top right-2 rounded-full bg-red-700 text-white text-2xl px-4 py-2' onClick={open}>+</button>
            <Table columns={columns} data={organizations} a={a} b={b} />
            {modal && <Modal title='Создайте новую организацию' onClose={close}>
              <AddOrganizationForm setOrganizations={setOrganizations} />
            </Modal>}
          </div>
        </div>
      </main>
    </div>
  );
}






export default OrganizationPage;