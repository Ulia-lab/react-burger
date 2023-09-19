import { TOKEN_URL } from '../../utils/constants';
import { setCookie } from '../../utils/getCookie';
import { request } from '../../utils/request';

export const getToken = () => async () => {
    try {
        const result = await request(TOKEN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: localStorage.getItem("refreshToken")
            })
        });
 
        let authToken;
        if (result.accessToken.indexOf('Bearer') === 0) {
            authToken = result.accessToken.split('Bearer ')[1];
        }

        if (authToken) {
            setCookie("accessToken", authToken)
        }
    }
    catch (error) {
        console.log(error)
    }
}