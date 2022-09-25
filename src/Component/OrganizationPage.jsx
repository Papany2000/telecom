
import { useMemo, useState, useEffect, useContext} from 'react';
import Table from './Table'
import AddOrganizationForm from './AddOrganizationForm'
import { Link } from 'react-router-dom'
import { FcEmptyTrash } from "react-icons/fc";
import { GrDocumentDownload } from "react-icons/gr";
import { useParams } from 'react-router-dom'
import { getOrganizations, removeOrganization } from '../api/Organization'
import { ModalContext } from './Context/ModalContext'
import Modal from './Modal';

function OrganizationPage() {
  const routeParams = useParams();
  const { modal, open, close } = useContext(ModalContext)
  const [organizations, setOrganizations] = useState([]);
  useEffect(() => {
    getOrganizations(routeParams.id)
      .then(
        (result) => {
          setOrganizations(result.data);
        }
      )
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
            accessor: 'phone'
          },
          {
            Header: 'Почта',
            accessor: 'email'
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
          },
          {
            Header: 'Личный тел.',
            accessor: 'managerPersonalPhone',
          },
          {
            Header: 'Почта',
            accessor: 'managerEmail',
            width: 100,
            minWidth: 150,
            whiteSpace: 'unset',
            disableFilters: true,
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
            disableFilters: true,
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
                  <GrDocumentDownload />
                </Link>
              </span>
            )},
          },
          {
            Header: 'del',
            id: 'del',
            accessor: (str) => 'del',
            disableFilters: true,
            Cell: (tableProps) => (
              <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                onClick={async () => {
              
                 await removeOrganization(tableProps.row.original.id)
                  setOrganizations((await getOrganizations()).data)
                }}>
                <FcEmptyTrash />
              </span>
            ),
          },
        ]
      },
    ],
   [organizations]
  )
  
  const [addFormData, setAddFormData] = useState(
    {
      name: '',
      phone: '',
      email: '',
      manager: '',
      managerWorkPhone: '',
      managerPersonalPhone: '',
      managerEmail: '',
      supportEmail: '',
      supprotPhone: ''
    }
  )
  const a = { 
    id: 'id',
    name: "Организация",
    phone: "телефон",
    email: "почта",
    manager: "менеджер",
    managerWorkPhone: "тел. рабочий",
    managerPersonalPhone: "тел. личный",
    managerEmail: "почта",
    supportEmail: "почта поддержки",
    supprotPhone: "тел. поддержки",
    dog: "договор",
    del: "del",
  }
   
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="w-screen mx-auto">
        <div>
          <h1 className='text-xl text-center font-semibold'>Список организаций партнёров Телеком СП</h1>
          <div className='container-2xl mx-auto'>
          <button className='absolute top right-2 rounded-full bg-red-700 text-white text-2xl px-4 py-2' onClick={open}>+</button>
            <Table columns={columns} data={organizations} a={a}/>
            {modal && <Modal  title='Create new Organization' onClose={close}>
        <AddOrganizationForm  setOrganizations = {setOrganizations} />
      </Modal>}
          </div>
        </div>
      </main>
    </div>
  );
}






export default OrganizationPage;