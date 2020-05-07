import axios from 'axios'

export default {
    getContacts:()=>{
        return axios.get('https://jsonplaceholder.typicode.com/users').then(res => res && res.data)
    }
}