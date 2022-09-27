import { useMemo, useState,useEffect, useContext } from 'react';
import Table from './Table'
import AddContractsForm from './AddContractsForm'
import { useParams, Link } from 'react-router-dom';
import { FcEmptyTrash } from "react-icons/fc";
import { GrDocumentDownload } from "react-icons/gr";
import { getContracts,  removeContract} from '../api/Contract'
import { ModalContext } from './Context/ModalContext'
import Modal from './Modal';
import {Loader} from './Loader'
import {ErrorMessage} from './Error.Message'

function ContractPage() {
  const routeParams = useParams();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { modal, open, close } = useContext(ModalContext)
  const [contracts, setContracts] = useState([])
  useEffect(() =>  {
   
    setError('')          // очистка ошибки при вторичной загрузке
    setLoading(true)
    getContracts(routeParams.id)
    .then(
      (result) => {
        setContracts(result.data);
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        setError(error.message)
      })
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


  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
        {loading && <Loader/>}
       {error && <ErrorMessage error={error}/>}
      <main className="w-90vn mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <h1 className='text-center italic font-bold my-5'>Список договоров Телеком СП</h1>
        <div className='container'>
        <button className='absolute top right-2 rounded-full bg-red-700 text-white text-2xl px-4 py-2' onClick={open}>+</button>
          <Table columns={columns1} data={contracts} a={a} />
          {modal && <Modal  title='Create new Organization' onClose={close}>
        <AddContractsForm setContracts = {setContracts} />
      </Modal>}
        </div>
      </main>
    </div>
  );
}






export default ContractPage;