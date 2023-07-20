import React, { useEffect, useState } from 'react';
import StepIcon from '../StepIcon/StepIcon';
import './FormStepIcons.css'
import Icon1 from '../../assets/Step1.svg'
import Icon2 from '../../assets/Step2.svg'
import Icon3 from '../../assets/Step3.svg'
import Icon4 from '../../assets/Step4.svg'
import Icon5 from '../../assets/Step5.svg'
import Icon6 from '../../assets/Step6.svg'



const FormStepIcons = ({stepNumber}) => {

    const iconNames = ['Datos Personales','Datos Laborales','Información Financiera','Nivel de Riesgo','Perfil Inversionista','Verificación'];

    const [arrStep,setArrStep] = useState([
        {
            name:'Datos Personales',
            icon: 'fa-solid fa-user',
            status: ''
        },
        {
            name:'Datos Laborales',
            icon: 'fa-solid fa-briefcase',
            status: ''
        },
        {
            name:'Información Financiera',
            icon: 'fa-solid fa-file-invoice-dollar',
            status: ''
        },
        {
            name:'Nivel de Riesgo',
            icon: 'fa-solid fa-coins',
            status: ''
        },
        {
            name:'Perfil Inversionista',
            icon: 'fa-solid fa-bars-progress',
            status: ''
        },
        {
            name:'Verificación',
            icon: 'fa-solid fa-check',
            status: ''
        }
    ]);

    useEffect(()=>{

        const newArr = [...arrStep];
        newArr.forEach((element,index)=>{
            if((index+1)<stepNumber){
                element.status='complete';
            }
            else if((index+1)===stepNumber){
                element.status='current';
            }
            else{
                element.status='';
            }
        })
        setArrStep(newArr);

    },[stepNumber])


  return (
    <div className='formSteps'>
        <ul className="step-wizard-list">
        {arrStep.map((element,index) =>  {
            return (        
                <StepIcon name={element.name} key={index} status={element.status} icon={element.icon}/>
            )}) 
        }
        </ul>
    </div>
  );
};

export default FormStepIcons;
