import React, {useState} from 'react'
import { useAuthContext } from '../../context/AuthContext'
import SignupForm2 from './Signup2';
import Signup3 from './Signup3';

const SignupAdmin = () => {
    const initialStep = {
        step: 1
    }

    const {signup} = useAuthContext();
    const [signupState, setSignupState] = useState(signup);
    const [step, setStep] = useState(initialStep);

    function renderForm(){
        switch (initialStep) {
			case 1:
				return <signup />
			case 2:
				return <SignupForm2 />
			case 3:
				return <Signup3 />
			case 4:
				return <Banner />
		}

    }


    return (
        <div>
            
            {renderForm()}            
            
        </div>
    )
}

export default SignupAdmin
