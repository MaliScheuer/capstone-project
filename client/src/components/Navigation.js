import styled from 'styled-components';

export default function Navigation({ open, setOpen }) {

    return (

        <StyledNavigation open={open}>
            <Button open={open} onClick={() => setOpen(!open)}>
                &#10005;</Button>
            <a href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24.972" height="19.724" viewBox="0 0 24.972 19.724">
                    <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M11.667,7.089,3.994,13.408v6.82a.666.666,0,0,0,.666.666l4.663-.012a.666.666,0,0,0,.662-.666V16.233a.666.666,0,0,1,.666-.666h2.663a.666.666,0,0,1,.666.666v3.98a.666.666,0,0,0,.666.668l4.662.013a.666.666,0,0,0,.666-.666V13.4L12.3,7.089A.507.507,0,0,0,11.667,7.089Zm12.119,4.295L20.307,8.517V2.753a.5.5,0,0,0-.5-.5h-2.33a.5.5,0,0,0-.5.5V5.774L13.252,2.709a2,2,0,0,0-2.538,0L.18,11.384a.5.5,0,0,0-.067.7l1.061,1.29a.5.5,0,0,0,.7.068l9.788-8.062a.507.507,0,0,1,.637,0l9.789,8.062a.5.5,0,0,0,.7-.067l1.061-1.29a.5.5,0,0,0-.071-.7Z" transform="translate(0.502 -1.67)" fill="rgba(255,255,255,0)" stroke="#fff" strokeWidth="1" />
                </svg>
Home</a>
            <a href='/search-mentors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22.374" height="22.374" viewBox="0 0 22.374 22.374">
                    <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-4 -4)">
                        <path id="Pfad_23" data-name="Pfad 23" d="M23.315,13.908A9.408,9.408,0,1,1,13.908,4.5a9.408,9.408,0,0,1,9.408,9.408Z" transform="translate(0 0)" fill="none" stroke="#fff" strokeLinecap="round" stroke-linejoin="round" stroke-width="1" />
                        <path id="Pfad_24" data-name="Pfad 24" d="M30.09,30.09l-5.115-5.115" transform="translate(-4.423 -4.423)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                    </g>
                </svg>

            Find a mentor</a>
            <a href='/profile'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22.773" height="22.773" viewBox="0 0 22.773 22.773">
                    <path id="Icon_ionic-md-person" data-name="Icon ionic-md-person" d="M15.386,15.386A5.443,5.443,0,1,0,9.943,9.943,5.459,5.459,0,0,0,15.386,15.386Zm0,2.722C11.78,18.108,4.5,19.945,4.5,23.551v2.722H26.273V23.551C26.273,19.945,18.992,18.108,15.386,18.108Z" transform="translate(-4 -4)" fill="rgba(255,255,255,0)" stroke="#fff" strokeWidth="1" />
                </svg>
 Profile</a>
            <a href='/favourites'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23.984" height="22.263" viewBox="0 0 23.984 22.263">
                    <path id="Icon_material-favorite" data-name="Icon material-favorite" d="M14.492,25.588l-1.666-1.517C6.907,18.7,3,15.165,3,10.821A6.259,6.259,0,0,1,9.321,4.5a6.882,6.882,0,0,1,5.171,2.4,6.882,6.882,0,0,1,5.171-2.4,6.259,6.259,0,0,1,6.321,6.321c0,4.344-3.907,7.884-9.826,13.262Z" transform="translate(-2.5 -4)" fill="rgba(255,255,255,0)" stroke="#fff" strokeWidth="1" />
                </svg>
Favourites</a>

            <a href='/create-profile'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28.412" height="22.773" viewBox="0 0 28.412 22.773">
                    <path id="Icon_ionic-md-person" data-name="Icon ionic-md-person" d="M15.386,15.386A5.443,5.443,0,1,0,9.943,9.943,5.459,5.459,0,0,0,15.386,15.386Zm0,2.722C11.78,18.108,4.5,19.945,4.5,23.551v2.722H26.273V23.551C26.273,19.945,18.992,18.108,15.386,18.108Z" transform="translate(-4 -4)" fill="rgba(255,255,255,0)" stroke="#fff" stroke-width="1" />
                    <g id="Icon_feather-plus" data-name="Icon feather-plus" transform="translate(12.412 -3.038)">
                        <path id="Pfad_38" data-name="Pfad 38" d="M18,7.5v8" transform="translate(-6.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                        <path id="Pfad_39" data-name="Pfad 39" d="M7.5,18h8" transform="translate(0 -6.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                    </g>
                </svg>

New Profile</a>
        </StyledNavigation>
    )
}

const StyledNavigation = styled.nav`
background: var(--petrol);
display:flex;
flex-direction: column;
gap: 1.7rem;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
height: 100vh;
text-align: left;
padding: 2rem;
position: absolute;
top: 0;
left: 0;
transition: transform 0.4s ease-in-out;
z-index: 1;

a{
text-transform: uppercase;
text-decoration: none;
color: white;
letter-spacing: 0.2rem;
}

svg{
    margin-right: 1rem;
}


`

const Button = styled.button`
background: transparent;
border: none;
cursor: pointer;
color: white;
text-align: left;
margin-bottom: 1.5rem;
font-size: 1.2rem;


&:focus{
    outline: none;

}
`
