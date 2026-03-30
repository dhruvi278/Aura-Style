import { useDispatch, useSelector } from 'react-redux';
import { inquiry, clearMessage } from '../store/slices/supportSlice';
import {
    selectMessage,
    selectSending,
    selectSupportError,
} from '../store/selectors/supportSelectors';

export const useSupport = () => {
    const dispatch = useDispatch();
    return {
        message:      useSelector(selectMessage),
        sending:      useSelector(selectSending),
        error:        useSelector(selectSupportError),
        sendInquiry:  (data) => dispatch(inquiry(data)),
        clearMessage: ()     => dispatch(clearMessage()),
    };
};


// import { useDispatch, useSelector } from "react-redux"
// import { selectError, selectMessage, selectSending } from "../store/selectors/supportSelectors";
// import { clearMessage, inquiry } from "../store/slices/supportSlice";

// export const useSupport = () =>{
//     const dispatch = useDispatch();

//     return{
//         message: useSelector(selectMessage),
//         sending: useSelector(selectSending),
//         error: useSelector(selectError),

//         sendInquiry:(message) => dispatch(inquiry(message)),
//         clearMessage:() => dispatch(clearMessage()),
//     }
// }