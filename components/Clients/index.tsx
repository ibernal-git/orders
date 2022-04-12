import { useI18N } from '../../ context/i18n'

const MOCK_ORDERS = [
  {
    id: '1',
    orderDate: '2020-01-01',
    orderFinishDate: '2020-01-02',
    client: {
      name: 'Imanol'
    },
    issue: 'El equipo entra de nuevo porque no muestra nada la pantalla.',
    cost: '100,00',
    state: 'PENDING'
  },
  {
    id: '2',
    orderDate: '2020-01-01',
    orderFinishDate: '2020-01-02',
    client: {
      name: 'Imanol'
    },
    issue: 'El equipo entra de nuevo porque no muestra nada la pantalla.',
    cost: '100,00',
    state: 'PENDING'
  },
  {
    id: '3',
    orderDate: '2020-01-01',
    orderFinishDate: '2020-01-02',
    client: {
      name: 'Imanol'
    },
    issue: 'El equipo entra de nuevo porque no muestra nada la pantalla.',
    cost: '100,00',
    state: 'PENDING'
  },
  {
    id: '4',
    orderDate: '2020-01-01',
    orderFinishDate: '2020-01-02',
    client: {
      name: 'Imanol'
    },
    issue: 'El equipo entra de nuevo porque no muestra nada la pantalla.',
    cost: '100,00',
    state: 'IN_PROGRESS'
  },
  {
    id: '5',
    orderDate: '2020-01-01',
    orderFinishDate: '2020-01-02',
    client: {
      name: 'Imanol'
    },
    issue: 'El equipo entra de nuevo porque no muestra nada la pantalla.',
    cost: '100,00',
    state: 'PENDING'
  },
  {
    id: '6',
    orderDate: '2020-01-01',
    orderFinishDate: '2020-01-02',
    client: {
      name: 'Imanol'
    },
    issue: 'El equipo entra de nuevo porque no muestra nada la pantalla.',
    cost: '100,00',
    state: 'FINISHED'
  },
  {
    id: '7',
    orderDate: '2020-01-01',
    orderFinishDate: '2020-01-02',
    client: {
      name: 'Imanol'
    },
    issue: 'El equipo entra de nuevo porque no muestra nada la pantalla.',
    cost: '100,00',
    state: 'PENDING'
  }
]
export default function Clients () {
  const { t } = useI18N()
  type stateType = {
    [key: string]: any
  }
  const TEXT_COLOR = {
    IN_PROGRESS: 'text-orange-900',
    PENDING: 'text-red-900',
    FINISHED: 'text-green-900'
  } as stateType
  const BG_COLOR = {
    IN_PROGRESS: 'bg-orange-200',
    PENDING: 'bg-red-200',
    FINISHED: 'bg-green-200'
  } as stateType
  return (
    <div className="">
      <div className="align-middle inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
          <div className="flex justify-between">
              <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                  <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                      <div className="flex">
                          <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                              <svg width="18" height="18" className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </span>
                      </div>
                      <input type="text" className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs text-gray-500 font-thin" placeholder="Search" />
                  </div>
              </div>
              <div>
                <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">{t('ORDER_CREATE_BUTTON')}</button>
              </div>
          </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
          <thead>
              <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">{t('ORDER_TABLE_CREATE_DATE_TEXT')}</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">{t('ORDER_TABLE_FINISH_DATE_TEXT')}</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">{t('ORDER_TABLE_CUSTOMER_NAME')}</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">{t('ORDER_TABLE_ISSUE')}</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">{t('ORDER_TABLE_COST')}</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">{t('ORDER_TABLE_STATUS_TEXT')}</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300"></th>
              </tr>
          </thead>
          <tbody className="bg-white">
            {
              MOCK_ORDERS.map(order => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm leading-5 text-gray-800">{order.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{order.orderDate}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{order?.orderFinishDate}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div className="text-sm leading-5 text-blue-900">{order.client.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{order.issue}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{`${order?.cost}€`}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${TEXT_COLOR[order.state]}`}>
                    <span aria-hidden className={`absolute inset-0 opacity-50 rounded-full ${BG_COLOR[order.state]}`}></span>
                    <span className="relative text-xs">{t(order.state)}</span>
                  </span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">{t('ORDER_TABLE_VIEW_DETAILS')}</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans pb-6">
          <div>
            <p className="text-sm leading-5 text-blue-700">
                Showing
                <span className="font-medium"> 1 </span>
                to
                <span className="font-medium"> 200 </span>
                of
                <span className="font-medium"> 2000 </span>
                results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex shadow-sm">
              <div>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                  1
                </a>
                <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                  2
                </a>
                <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                  3
                </a>
              </div>
              <div v-if="pagination.current_page < pagination.last_page">
                <a href="#" className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

  )
}
