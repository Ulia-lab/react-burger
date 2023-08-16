export default async function postOrder({ ...props }) {
    try {
        const response = await fetch(props.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(props.orderId)
          });
          if (!response.ok) {
            throw new Error('Ошибка post(url)')
        }

        const result = await response.json();
        return result;
    }
    catch (error) {
        console.log(error)
    }
}