import React from 'react';
import './StepIcon.css';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MyComponentProps {
    name: string;
    status: string;
    icon: any;
}

const StepIcon: React.FC<MyComponentProps> = ({name,status,icon}) => {
  return (
    <li className={"step-wizard-item "+status}>
      <div className={"divIcon "+status}>
        <i className={icon +" icon " + status}></i>
      </div>
      <span className="progress-label">{name}</span>
    </li>
  );
};

export default StepIcon;
