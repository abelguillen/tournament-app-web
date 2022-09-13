export default function authHeader() {
    const token = localStorage.getItem('encodedToken');
  
    if (token) {
        return { Authorization: 'Basic ' + token }; // for Spring Boot back-end
    } else {
        return {};
    }
}