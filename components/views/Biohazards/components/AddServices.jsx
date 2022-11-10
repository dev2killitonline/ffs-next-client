import React from 'react';
import SectionComp from '../../../shared/Section/SectionComp';

function AddServices() {
    return (
        <SectionComp className="addServices" heading="Additional Cleaning Services">
                <div className="addServices__container">
                    <div className="addServices__lists-container">
                        <ul className="addServices__list">
                            <li className="addServices__list-item"><i className="fas fa-chevron-right addServices__list-icon"></i>Evidence gathering chemicals</li>
                            <li className="addServices__list-item"><i className="fas fa-chevron-right addServices__list-icon"></i>Tear gas and pepper spray residue</li>
                            <li className="addServices__list-item"><i className="fas fa-chevron-right addServices__list-icon"></i>Fire extinguisher residue</li>
                            <li className="addServices__list-item"><i className="fas fa-chevron-right addServices__list-icon"></i>Human matter (blood, bodily fluids, tissue remnants, etc)</li>
                            <li className="addServices__list-item"><i className="fas fa-chevron-right addServices__list-icon"></i>Repair and reconstruction services</li>
                            <li className="addServices__list-item"><i className="fas fa-chevron-right addServices__list-icon"></i>Industrial accident & commercial crime scene cleanup</li>
                        </ul>
                    </div>
                </div>
        </SectionComp>
    );
}

export default AddServices;