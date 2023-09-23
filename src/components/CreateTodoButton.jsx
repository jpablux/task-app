import {IoMdAdd} from 'react-icons/io';

function CreateTodoButton({setOpenModal}){
    return(
        <div  
        
        onClick={
            ()=> {
                setOpenModal(state => !state);
            }
        }

        className="z-[100] fixed bottom-4 right-4 flex flex-col items-center justify-center bg-blue-500 rounded-full p-4 w-[54px] hover:bg-blue-600 hover:cursor-pointer hover:scale-[110%]">
            <IoMdAdd className='text-slate-100 text-2xl'/>
        </div>
    );
}

export {CreateTodoButton};