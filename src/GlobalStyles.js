import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    box-sizing: border-box;
   
    font-family: 'Helvetica', 'Arial', sans-serif;
}

body{
    margin: 0;
    
 
}

h1, h2, h3, h4 {

    margin: 0;
}

:root{

    --red: #ff6750;
    --petrol: #3d717d;
    --petrol-light: #77b1b5;
    --rose: #f2b29b;
    --grey: #707070;
    --lightgrey: #f0e6e6;
    --kakhi: #7a8775;
}

`