import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import LoginForm from './LoginInput';


afterEach(cleanup)

describe('Input Component', ()=>{
    test('Renders the right input value', ()=>{
        const setup = () => {
            const utils = render(<LoginForm/>);
        const input = utils.getByLabelText('form-input');
        return {
            input, 
            ...utils,
        };        
    };
        const { input } = setup();
        fireEvent.change(input, {target: {
            value: 'francisca'
        }});
        expect (input.value).toBe('francisca');
    });
    test('renders without crashing', () => {
        expect(()=> render(<LoginForm />))
        .not.toThrowError();
    });
    // test('Matches the snapshot', () => {
    //     const button = create(<Button/>);
    //     expect(button.toJSON()).toMatchSnapshot();
    // });
});