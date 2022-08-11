import React, { Component, useEffect, useState} from 'react';


import  { 
    listLogEntries,
    hardDeleteTodo
} from "../../API"

function History() {
    const [logsInfo, setLogs] = useState([]);
    
    useEffect(() => {
        getLogs();
    }, []);

    useEffect(() => {
        console.log(logsInfo)
    }, [logsInfo]);

    async function getLogs() {
       const logs = await listLogEntries();
       setLogs(logs)
    }

    const removeDelete = async(id)=>{
        await hardDeleteTodo(id);
        getLogs()
    }
        return (
            <div>
            <table class="table table-success table-striped">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Comments</th>
                <th scope="col">Visit Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    logsInfo && logsInfo.map((info, index) => (
                        <tr key={index}>
                            <td>{info.title}</td>
                            <td>{info.description}</td>
                            <td>{info.comments}</td>
                            <td>{info.visitDate}</td>
                            <td>
                                <button type="button" class="btn btn-danger" onClick={() => removeDelete(info._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
                <div className='container'>
                <form>
                <h2>Travel Categories</h2>
                <div class="mb-3">
                    <label for="title" class="form-label">Category title</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" class="form-control"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
            
        );
    }

 
export default History;