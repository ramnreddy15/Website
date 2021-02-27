import React from "react";
import icon from "./assets/img/icon.png";



export default function About(props) {
  return (
  <body left-margin="20%">
    
<table border="4px solid black" padding-left="20%">
  <tr>
  <th colspan="2">About Us!</th>
  </tr>
  <tr>
    <td font-size="20px" width="200px" height="200px" >
      Kedar
    </td>
    <td>
    	<img src = {icon} width="200px" height="200px" alt="image of team member"></img>
    </td>

  </tr>
 
  <tr>
    <td font-size="20px" width="200px" height="200px">
      Radek
    </td>
    <td>
    	<img src = {icon} width="200px" height="200px" alt="image of team member"></img>
    </td>

  </tr>
</table>

  </body>
  );
}


