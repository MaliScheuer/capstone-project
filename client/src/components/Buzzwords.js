import { useState } from 'react';
import styled from 'styled-components';

export default function Buzzwords({ onCreateBuzzword, buzzwords, onDeleteBuzzword, onDeleteLastBuzzword }) {

    const [value, setValue] = useState('')


    const handleChange = event =>
        setValue(event.target.value);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onCreateBuzzword(value);
            setValue('');
        }
    }

    function handleClick() {
        onCreateBuzzword(value);
        setValue('');
    }


    return (
        <>
            <Wrapper>
                <input
                    type='text'
                    name='buzzwords'
                    placeholder='Enter skill or buzzword'
                    onChange={handleChange}
                    value={value}
                    onKeyDown={handleKeyDown} />
                <button
                    type='button'
                    onClick={handleClick}
                >Add</button>
            </Wrapper >

            <BuzzwordWrapper>
                {buzzwords.map((buzzword, index) => (
                    <span key={index}>{buzzword}
                        <i onClick={() => onDeleteBuzzword(buzzword)}> &times;</i>
                    </span>
                ))}
            </BuzzwordWrapper>
        </>

    )
}



const Wrapper = styled.section`
    display:grid;
    grid-template-columns: 4fr 1fr;
    gap: 1rem;

    button {
    border: none;
    background: var(--petrol-light);
    color: white;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
    border-radius: 1rem;
    height: 70%;
    outline: none;
    cursor: pointer;
    }
    `
const BuzzwordWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    
    span{
        background: var(--petrol);
        color: white;
        padding: 0.5rem;
        border-radius: 0.6rem;
    }
    `
