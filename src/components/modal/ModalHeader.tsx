import { useAppSelector } from '../../redux/store'
import { CircleAlert, CircleCheck, CircleX, Info, X } from 'lucide-react'
import { Spinner } from '../shared/Spinner'

export const ModalHeader = ({close}: {close: () => void;}) => {

    const { modal: { typeMsg, modalTitle } } = useAppSelector(state => state.ui)

    return (
        <div className='flex justify-between items-center p-2 px-4 border-b border-gray-200' id='modal-header'>
            <div className='text-lg font-medium text-gray-800'>
                {
                    !typeMsg && modalTitle
                }
                {
                    typeMsg === 'success' && <CircleCheck className=" h-8 w-8 text-green-400" />
                }
                {
                    typeMsg === 'info' && <Info className=" h-8 w-8 text-blue-400" />
                }
                {
                    typeMsg === 'warning' && <CircleAlert className=" h-8 w-8 text-yellow-400" />
                }
                {
                    typeMsg === 'error' && <CircleX className=" h-8 w-8 text-red-400" />
                }
                {
                    typeMsg === 'spinner' && <Spinner size={16}/>
                }
            </div>
            <div
                className='p-3 cursor-pointer text-sm hover:bg-background-hover rounded-2xl'
                onClick={close}
            >
                <X/>
            </div>
        </div>
    )
}
