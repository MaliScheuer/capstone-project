import styled from 'styled-components';
import Navigation from './Navigation';


export default function Header({ open, setOpen, headline }) {

    return (
        <Wrapper open={open}>
            <Button open={open} onClick={() => setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28.25" height="23.101" viewBox="0 0 28.25 23.101">
                    <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-4 -8.5)">
                        <path id="Pfad_19" data-name="Pfad 19" d="M4.5,18H31.75" transform="translate(0 2.051)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                        <path id="Pfad_20" data-name="Pfad 20" d="M4.5,9H31.75" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                        <path id="Pfad_21" data-name="Pfad 21" d="M4.5,27H31.75" transform="translate(0 4.101)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                    </g>
                </svg>
            </Button>

            <IconsWrapper>
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27.982" height="27.982" viewBox="0 0 27.982 27.982">
                        <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-4 -4)">
                            <path id="Pfad_23" data-name="Pfad 23" d="M28.3,16.4A11.9,11.9,0,1,1,16.4,4.5,11.9,11.9,0,0,1,28.3,16.4Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                            <path id="Pfad_24" data-name="Pfad 24" d="M31.446,31.446l-6.471-6.471" transform="translate(-0.171 -0.171)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                        </g>
                    </svg>
                </Button>
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29.395" height="27.228" viewBox="0 0 29.395 27.228">
                        <path id="Icon_material-favorite" data-name="Icon material-favorite" d="M17.2,30.553l-2.059-1.874C7.827,22.048,3,17.675,3,12.309A7.733,7.733,0,0,1,10.809,4.5,8.5,8.5,0,0,1,17.2,7.467,8.5,8.5,0,0,1,23.587,4.5,7.733,7.733,0,0,1,31.4,12.309c0,5.367-4.827,9.74-12.139,16.384Z" transform="translate(-2.5 -4)" fill="rgba(61,113,125,0.01)" stroke="#fff" stroke-width="1" />
                    </svg>
                </Button>
            </IconsWrapper>
            <h1>{headline}</h1>
        </Wrapper>
    )

}

const Wrapper = styled.section`
background-color: var(--petrol);
height: 9rem;
padding-top: 2rem;
padding-left: 1.5rem;
color: white;
opacity: ${({ open }) => open ? '40%' : '100%'};

h1{
    letter-spacing: 0.5rem;
}
`

const IconsWrapper = styled.div`
display: flex;
justify-content: flex-end;
gap: 0.3rem;
padding-right: 1rem;

`

const Button = styled.button`
background: transparent;
border: none;
cursor: pointer;

&:focus{
    outline: none;

}
`