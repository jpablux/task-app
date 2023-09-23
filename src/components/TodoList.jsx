function TodoList(props){
    return(
        <ul className="flex flex-col items-center justify-center w-full gap-2">
            {props.children}
        </ul>
    );
}

export {TodoList};