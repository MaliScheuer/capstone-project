import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    box-sizing: border-box;
   
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
}

body{
    margin: 0;
    background: url("https://images.unsplash.com/photo-1547104442-044448b73426?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
    background-size: cover;
    xbackground-repeat: no-repeat;
}

h1, h2, h3, h4 {

    margin: 0;
}

:root{

    --red: #E0B810;
    --petrol: #3d717d;
    --petrol-light: #77b1b5;
    --rose: #f2b29b;
    --grey: #F2F0ED;
    --lightgrey: #f0e6e6;
    --kakhi: #7a8775;
}
`;
