import { AuthProvider } from 'react-admin';

const authProvider = {
    login: ({ username, password }) => {
        localStorage.setItem('username', username);
        if(username == "admin" && password == "admin") {
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.reject('Unknown method'),
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: 'Admin',
            avatar:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiIuHTQeoR4yI-LPCcMeyfixq88YWUgUeag&usqp=CAU',
        }),
};

export default authProvider;