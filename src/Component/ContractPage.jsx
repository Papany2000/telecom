import { useMemo, useState,useEffect } from 'react';
import Table from './Table'
import AddContractsForm from './AddContractsForm'
import { useParams, Link } from 'react-router-dom';
import { FcEmptyTrash } from "react-icons/fc";
import { GrDocumentDownload } from "react-icons/gr";
import { getContracts, postContract, removeContract, getContract } from '../api/Contract'


function ContractPage() {
  const routeParams = useParams();
  const [contracts, setContracts] = useState([])
  useEffect(() => {
    getContracts(routeParams.id)
      .then(
        (result) => {
          setContracts(result.data);
        }
      )
  }, [routeParams.id])

  const columns1 = useMemo(
    () => [
      {
        Header: 'id',
        accessor: 'id',
      },
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
        id: 'zacaz',
        accessor: (str) => 'zacaz',
        width: 50,
        disableFilters: true,
        Cell: (tableProps) => (
          <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
            <Link to={`/orders/${tableProps.row.original.id}`}>
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
          onClick={async () => {
           await removeContract(tableProps.row.original.id)
            setContracts((await getContracts()).data)
          }}>
            <FcEmptyTrash />
          </span>
        ),
      },
    ],
    [contracts]
  )
  const a = { 
    id: 'id',
    organizationId: "id организации",
    number: "№ договора",
    description: "краткое содержание",
    isProfitable: "доходный расходный",
    fileUuid: "путь к файлу",
    zacaz: "заказы",
    del: "del",
  }
  const [addFormData, setAddFormData] = useState(
    {
      organizationId: {},
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
  const handleAddFormSubmit = async (event) => {
    event.preventDefault()
    const contract = {
      organizationId:  addFormData.organizationId,
      number: addFormData.number,
      description: addFormData.description,
      isProfitable: addFormData.isProfitable,
      fileUuid: addFormData.fileUuid,
    }
    postContract(contract)
    setContracts((await getContracts()).data)
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="w-90vn mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <h1 className='text-center italic font-bold my-5'>Список договоров Телеком СП</h1>
        <div className='container'>
          <Table columns={columns1} data={contracts} a={a} />
          <AddContractsForm change={handleAddFormChange} submit={handleAddFormSubmit} text={'Добавить договор'} />
        </div>
      </main>
    </div>
  );
}






export default ContractPage;