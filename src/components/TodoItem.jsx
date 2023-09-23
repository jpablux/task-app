import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

function TodoItem(props) {

    const formatDate = (date) => {
        if (date instanceof Date) {
          const options = { month: 'short', day: '2-digit', year: '2-digit' };
          return date.toLocaleDateString(undefined, options);
        }
        return '';
      };

  return (
    <li
      className={`${
        props.completed
          ? 'list-none flex flex-row items-center justify-between gap-4 bg-green-300  min-w-[300px] max-w-[100%] lg:w-[500px] p-4 rounded-md border-2 border-solid border-slate-200'
          : 'list-none flex flex-row items-center justify-between gap-4 bg-white  min-w-[300px] max-w-[100%] lg:w-[500px] p-4 rounded-md border-2 border-solid border-slate-200'
      }`}
    >
      <div className='flex flex-col items-start justify-start gap-2'>
        <p
          className={`${
            props.completed ? 'line-through text-green-800' : 'text-slate-800 p-2'
          }`}
        >
          {props.text}
        </p>
        {props.date && (
  <p
    className={`${
      props.completed
        ? 'text-gray-500 text-sm font-bold border-2 border-slate-200 p-2 rounded-lg'
        : 'text-amber-500 text-sm font-bold border-2 border-slate-200 p-2 rounded-lg'
    }`}
  >
    <span className='text-sm text-slate-400 font-thin'>Due: </span>
    {formatDate(props.date)}
  </p>
)}
      </div>

      <div className="flex lg:flex-row flex-col items-center justify-center gap-2">
        <div
          onClick={props.onComplete}
          className={`${
            props.completed
              ? 'hidden'
              : 'flex flex-row items-center justify-center gap-4 bg-white shadow-md px-4 py-2 rounded-md w-[50px] hover:bg-green-300'
          }`}
        >
          <BsCheckLg
            className={`${
              props.completed
                ? 'text-2xl text-slate-500'
                : 'text-2xl text-green-600 hover:cursor-pointer'
            }`}
          />
        </div>
        <div
          onClick={props.onDelete}
          className="flex flex-row items-center justify-center gap-4 bg-white shadow-md px-4 py-2 rounded-md w-[50px] hover:bg-red-400 hover:cursor-pointer"
        >
          <RxCross2 className="text-2xl text-red-600" />
        </div>
      </div>
    </li>
  );

}

export { TodoItem };