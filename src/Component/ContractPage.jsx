import { useMemo, useState } from 'react';
import Table from './Table'
import AddContractsForm from './AddContractsForm'
import { nanoid } from 'nanoid'
import { useParams, Link } from 'react-router-dom';
import { FcEmptyTrash } from "react-icons/fc";
import { GrDocumentDownload } from "react-icons/gr";

function ContractPage() {
  const { id } = useParams()
  const contractData = [
    {
      id: 0,
      organizationId: 0,
      number: "Договор № 1 от 22.08.2022",
      description: "Расходный договор на предоставление каналов передачи данных",
      isProfitable: false,
      fileUuid: 'путь к файле договора в виде uuid'
    },
    {
      id: 1,
      organizationId: 0,
      number: "Договор № 2 от 22.08.2022",
      description: "Доходный договор на предоставление каналов передачи данных",
      isProfitable: true,
      fileUuid: 'путь к файле договора в виде uuid'
    },
  ];

  const [contracts, setContracts] = useState(id ? contractData.filter(el => el.organizationId === Number(id)) : contractData)
  const columns1 = useMemo(
    () => [
      {
        Header: 'Номер договора',
        accessor: 'number'
      },
      {
        Header: 'Краткое содержание',
        accessor: 'description',
        width: 500,
        minwidth: 300,
        whiteSpace: 'unset',
      },
      {
        Header: 'Путь к файлу',
        accessor: 'fileUuid',
        width: 350,
        minwidth: 200,
        whiteSpace: 'unset',
      },
      {
        Header: 'Заказы',
        id: 'Заказы',
        accessor: (str) => 'Заказы',
        width: 50,
        disableFilters: true,
        Cell: (tableProps) => (
          <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
            <Link to={`/orders/${tableProps.row.id}`}>
              <GrDocumentDownload />
            </Link>
          </span>
        ),
      },
      {
        Header: 'del',
        id: 'del',
        accessor: (str) => 'del',
        width: 50,
        disableFilters: true,
        Cell: (tableProps) => (
          <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            onClick={() => {
              // ES6 Syntax use the rvalue if your data is an array.  
              const contractsCopy = [...contracts];
              // It should not matter what you name tableProps. It made the most sense to me.
              contractsCopy.splice(tableProps.row.index, 1);
              setContracts(contractsCopy);
            }}>
            <FcEmptyTrash />
          </span>
        ),
      },
    ],
    [contracts]
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
    const contract = {
      organizationId: nanoid(),
      phone: addFormData.number,
      email: addFormData.description,
      manager: addFormData.isProfitable,
      managerWorkPhone: addFormData.fileUuid,
    }
    const newContracts = [...contracts, contract]
    setContracts(newContracts)
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="w-90vn mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <h1 className='text-center italic font-bold my-5'>Список договоров Телеком СП</h1>
        <div className='container'>
          <Table columns={columns1} data={contracts} />
          <AddContractsForm change={handleAddFormChange} submit={handleAddFormSubmit} text={'Добавить договор'} />
        </div>
      </main>
    </div>
  );
}






export default ContractPage;