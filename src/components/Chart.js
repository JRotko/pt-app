import { BarChart, Bar, XAxis,  CartesianGrid, ResponsiveContainer } from 'recharts';
import React, {useState, useEffect} from 'react';
import _ from 'lodash';


export default function Chart() {
    const [trainings, setTrainings] = useState([]);
    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch("https://customerrest.herokuapp.com/gettrainings")
        .then(response => response.json())
        .then(data => {
            
            
          
        })
        
    }

    const data = [
        {
            name: "ei",
            duration: 60
        },
        {
            name: "tää",
            duration: 60
        },
        {
            name: "toimi",
            duration: 60
        },
    ]

    
  
      return(
        <div>
            <ResponsiveContainer margin={300} width={'80%'} height={300}>
            <BarChart width={300} height={200}  data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                
                <Bar dataKey="duration" fill='#8884d8' />
            </BarChart>
            </ResponsiveContainer>
        </div>
        )
  }
