import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from './PatientReducer';
const PatientManagement = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState);
    const nameRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const patientInfo = {
            type: 'ADD_PATIENT',
            id: state.patients.length + 1,
            name: nameRef.current.value
        }
        dispatch(patientInfo);
        nameRef.current.value = "";
    }
    return (
        <div>
            <h1>Patient Management: {state?.patients?.length}</h1>
            <form onSubmit = {handleSubmit}>
                <input placeholder="patient name" ref={nameRef}></input>
            </form>
            <ul>
                {
                    state?.patients?.map((patient) => <div  key={patient.id}>
                        <li style={{display: 'inline', listStyle: 'none',margin:'10px'}}>{patient.name}</li>
                        <button style={{display: 'inline'}} onClick={()=> 
                            dispatch({type: 'REMOVE_PATIENT',id: patient.id})}>Remove
                        </button>
                    </div>)
                }
            </ul>
        </div>
    );
};

export default PatientManagement;