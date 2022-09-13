import { AuthProvider } from 'react-admin';
import axios from 'axios';

const host = process.env.REACT_APP_HOST;

const authProvider = {
    login: ({ username, password }) =>  {
        const token = `${username}:${password}`;
        const encodedToken = Buffer.from(token).toString('base64');
        var config = {
            method: 'get',
            url: host + '/login',
            headers: { 'Authorization': 'Basic '+ encodedToken }
        };
        return axios(config)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error("No autorizado");
                }
                localStorage.setItem('encodedToken', encodedToken);
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('username', username);
                localStorage.setItem('avatar', response.data.avatar);
                return Promise.resolve();
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    logout: () => {
        localStorage.removeItem('encodedToken');
        return Promise.resolve();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            return Promise.reject({ redirectTo: '/unauthorized', logoutUser: false });
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('encodedToken') ? Promise.resolve() : Promise.reject({ message: 'login.required' }),
    getPermissions: () => Promise.reject('Unknown method'),
    getIdentity: () =>
        Promise.resolve({
            id: localStorage.getItem('id'),
            fullName: localStorage.getItem('username'),
            avatar: localStorage.getItem('avatar')
            // avatar:
            //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiIuHTQeoR4yI-LPCcMeyfixq88YWUgUeag&usqp=CAU',
        }),
};

export default authProvider;