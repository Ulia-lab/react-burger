export default async function fetchData({ ...props }) {
    try {
        const response = await fetch(props.url);
        if (!response.ok) {
            throw new Error('Ошибка fetch(url)')
        }
        const jsonData = await response.json();
        props.setData(jsonData.data);
        props.setIsLoading(false);
    }
    catch (error) {
        props.setError(error.message);
        props.setIsLoading(false);
    }
}