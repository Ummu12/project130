import React from "react";
import { Card,CardContent,Grid } from "@mui/material";

export const Devices=({item})=>{
   return(
<Grid item xs={4}>

<Card sx={{bgcolor:"darkgoldenrod",color:"white"}}>
   <CardContent>
     {item}
   </CardContent>

</Card>
   

</Grid>

   )

}