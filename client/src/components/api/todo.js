import axios from "axios";
import config from '../../config/config'

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}
const apiUrl = config.apiPath;

const listTask = async () => {
    await axios.get(`${apiUrl}/api/todos`, { headers })
        .then( response => (response.data))
        .catch( reason => {
            console.log( reason )
        })
}


export { listTask };