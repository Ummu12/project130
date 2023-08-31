
import React, {useState} from "react";
import {Card, CardContent,Grid} from "@mui/material"
import { Devices } from "./Component/Devices";


function App() {
  const arr=["Computer","Printer","Mouse"];
 const [data, setData]=useState(arr);
  return (
     <Card>
        <CardContent>
            <Grid container spacing={2}>
             {data.map(item=>
             <Devices item={item}/>
              )}

            </Grid>
        </CardContent>
     </Card>
  );
}

export default App;
