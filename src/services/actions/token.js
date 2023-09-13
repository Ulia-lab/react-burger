import { TOKEN_URL } from '../../utils/constants';
import { setCookie } from '../../utils/getCookie';

export const getToken = () => async () => {
    try {
        const response = await fetch(TOKEN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: localStorage.getItem("refreshToken")
            })
        });
        if (!response.ok) {
            throw new Error('Ошибка post(url)')
        }
        const result = await response.json();

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