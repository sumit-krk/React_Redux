import * as React from 'react';
import {nanoid} from "nanoid";
import {useState} from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Counter} from "./Count";

import {generateColor} from "random-color-generator2";

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: 'skyblue'
}));

export default function Post() {
   
    const [post, setPost] = useState([]);

    const [data, setData] = useState({
        title : "",
        body : "",
        verify : false
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData({...data, [name] : value})
      };

const handleAdd = () => {

    const colorPointer = generateColor(false);

    const colors = colorPointer.next().value;
    const init = {
        title : data.title,
        body : data.body,
        verify : false,
        color : colors,
        id : nanoid(4)
    }
    setPost([...post, init])
}
    
console.log(post);
const handleVerify = (e) => {
    const temporaryPost = [...post];
    temporaryPost[e].verify = !temporaryPost[e].verify;
    setPost(temporaryPost);
}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid sx = {{mt : 4}} container spacing = {3} xs={8}>
            <Grid item xs = {6}>
            <Item>


                    <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div>
                        <TextField
                        id="outlined-multiline-flexible"
                        label="Title"
                        multiline
                        name = "title"
                        onChange = {(e) => handleChange(e)}
                        maxRows={4}
                        placeholder = "Enter the text"
                        value = {data.title}
                        
                        />
                        <br />
                        <TextField
                        id="outlined-multiline-static"
                        label="Body"
                        multiline
                        value = {data.body}
                        name = "body"
                        onChange = {(e) => handleChange(e)}
                        rows={4}
                        placeholder = "Enter the body"
                       
                        />
                    </div>
                    
                    <Button onClick = {handleAdd} sx = {{ml : 18}} variant="contained">ADD</Button>
                    </Box>


                    </Item>
            </Grid>
            <Grid item xs= {6}>
                 <Box
                    component="div"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        {
                            post.map((e, i) => (
                                <Item sx = {{mt : 5}} key = {e.id}>
                                    <Box color = {`${e.color}`}>
                                        <Div>{"Title : "}{e.title}</Div>
                                        <Div sx = {{mt : -2}}>{"Body : "}{e.body}</Div>
                                    </Box>
                                    <Button onClick = {() => {
                                        
                                        handleVerify(i)}} sx = {{ml : -8}} variant="contained">{e.verify? "Verified" : "Verify"}</Button>
                                </Item>
                            ))
                        }
                 </Box>
            </Grid>
          
        </Grid>
        <Grid item xs={4}>
          <Item><Counter /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
