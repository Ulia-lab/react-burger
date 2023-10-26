export async function request(url: string, options: RequestInit) {
    const res = await fetch(url, options);
    return checkResponse(res);
  }

function checkResponse(res: Response) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
}
