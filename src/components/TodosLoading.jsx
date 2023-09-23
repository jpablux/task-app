import LoadingAnimation from '../assets/img/lottie/loadingAnimation.json'
import Lottie from 'lottie-react';

function TodosLoading(){
    return(
        <div className='w-[200px]'>
            <Lottie loop = {true} animationData={LoadingAnimation}/>
        </div>
    );
}

export {TodosLoading};