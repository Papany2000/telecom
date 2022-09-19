
import { useMemo, useState, useEffect } from 'react';
import Table from './Table'
import AddOrganizationForm from './AddOrganizationForm'
import { Link } from 'react-router-dom'
import { FcEmptyTrash } from "react-icons/fc";
import { GrDocumentDownload } from "react-icons/gr";
import { useParams } from 'react-router-dom'
import { getOrganizations, postOrganization, removeOrganization } from '../api/Organization'

function OrganizationPage() {
  const routeParams = useParams();
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
            id: 'Договора',
            accessor: (str) => 'Договора',
            disableFilters: true,
            Cell: (tableProps) => (
              <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
                <Link to={`/contract/${tableProps.row.id}`}>
                  <GrDocumentDownload />
                </Link>
              </span>
            ),
          },
          {
            Header: 'del',
            id: 'del',
            accessor: (str) => 'del',
            disableFilters: true,
            Cell: (tableProps) => (
              <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                onClick={async () => {
                  console.log(tableProps.row.original.id)
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
  const handleAddFormChange = (event) => {
    event.preventDefault()
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value
    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  }
  const handleAddFormSubmit = async (event) => {
    event.preventDefault()
    const organization = {
      name: addFormData.name,
      phone: addFormData.phone,
      email: addFormData.email,
      manager: addFormData.manager,
      managerWorkPhone: addFormData.managerWorkPhone,
      managerPersonalPhone: addFormData.managerPersonalPhone,
      managerEmail: addFormData.managerEmail,
      supportEmail: addFormData.supportEmail,
      supprotPhone: addFormData.supprotPhone
    }
    postOrganization(organization)
    setOrganizations((await getOrganizations()).data)
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="w-screen mx-auto">
        <div>
          <h1 className='text-xl text-center font-semibold'>Список организаций партнёров Телеком СП</h1>
          <div className='container-2xl mx-auto'>
            <Table columns={columns} data={organizations} />
            <AddOrganizationForm change={handleAddFormChange} submit={handleAddFormSubmit} text={'Добавить организацию'} />
          </div>
        </div>
      </main>
    </div>
  );
}






export default OrganizationPage;