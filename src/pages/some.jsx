import React from 'react';
import './some.css';

function some() {
    return(
        <>
        <h2>Society of Mechanical Engineers</h2>
        <p>Society of Mechanical Engineers(SOME), NIT Jalandhar is one of the first and leading chapters of ISME in Jalandhar. Being established in 1993 by some enthusiastic students and faculty members of the department, it is one of the most active societies of the institute.
        Our mission is to promote and enhance technical competency, better insight and professional well being of the students inside the campus premises. The Mech Talk, Mechazine and annual workshops are some of the steps in this direction.
        </p>

        <div className='teachers'>
            <div className='firstTeacher'>
                <h3>Team Faculty Advisor</h3>
                <img src='./src/assets/shukla'/>
                <p>Dr Dinesh Kumar Shukla
                   Associate Professor
                   Department of Mechanical Engineering
                   N.I.T. Jalandhar</p>
            </div>
            <div className='secondTeacher'>
                <h3>Team Faculty Mentor</h3>
                <img src='./src/assets/trehan'/>
                <p>Mr Ajay Trehan
                   Associate Professor
                   Department of Mechanical Engineering
                   N.I.T. Jalandhar</p>
            </div>

        </div>
        </>
    )
}