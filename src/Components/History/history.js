import React, { Component, useEffect, useState} from 'react';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

import  { 
    listLogEntries,
    hardDeleteTodo
} from "../../API"

function History() {

    const { i18n, t } = useTranslation();
  function changeLaguage(language) {
  i18n.changeLanguage(language);
  }
    
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
                <th scope="col">{t("title")}</th>
                <th scope="col">{t("description")}</th>
                <th scope="col">{t("comments")}</th>
                <th scope="col">{t("visitdate")}</th>
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