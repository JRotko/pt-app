import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import { duration } from '@mui/material';

export default function Chart() {
    const [trainings, setTrainings] = useState([]);
    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch("https://customerrest.herokuapp.com/gettrainings")
        .then(response => response.json())
        .then(data => {
            let tData = _.groupBy(data, "activity")
            
            
            
            
        })
        
    }

    
  
      return(
        <div>
            <ResponsiveContainer margin={300} width={'80%'} height={300}>
            <BarChart width={300} height={200}  data={trainings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="minutes" />
                <Bar dataKey="minutes" fill='#8884d8' />
            </BarChart>
            </ResponsiveContainer>
        </div>
        )
  }
