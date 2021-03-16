import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Buzzwords({ onCreateBuzzword, buzzwords, onDeleteBuzzword, onDeleteLastBuzzword }) {

    const [value, setValue] = useState('')


    const handleChange = event =>
        setValue(event.target.value);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onCreateBuzzword(value);
            setValue('');
        } else if (event.key === 'Backspace' && value === ('')) {
            event.preventDefault();
            onDeleteLastBuzzword(value)
        }
    }

    function handleClick() {
        onCreateBuzzword(value);
        setValue('');
    }


    return (
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


            <BuzzwordWrapper>
                {buzzwords &&
                    buzzwords.map((buzzword, index) => (
                        <span key={index}>{buzzword}
                            <i onClick={() => onDeleteBuzzword(buzzword)}> &times;</i>
                        </span>
                    ))}
            </BuzzwordWrapper>
        </Wrapper >
    )
}



const Wrapper = styled.section`
    display:grid;
    grid-template-columns: 4fr 1fr;
    box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem rgba(0,0,0, 35%);
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;

    button {
    border: none;
    background: var(--petrol-light);
    color: white;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
    border-radius: 1rem;
    height: 70%;
    outline: none;
    cursor: pointer;
    margin-left: 0.5rem;
    }

    input[type=text]{
    box-shadow: none;
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

    i{
        cursor: pointer;
    }
    `

Buzzwords.propTypes = {
    onCreateBuzzword: PropTypes.func,
    buzzwords: PropTypes.array,
    onDeleteBuzzword: PropTypes.func,
    onDeleteLastBuzzword: PropTypes.func
}
