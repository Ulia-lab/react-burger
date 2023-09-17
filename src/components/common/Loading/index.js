import { ColorRing } from 'react-loader-spinner'

function Loading() {
    return (
        <ColorRing
            visible={true}
            height="150"
            width="150"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#8230e1', '#f351de', '#fdc968', '#FFFAFA', '#25dba1']}
        />
    )
}

export default Loading
