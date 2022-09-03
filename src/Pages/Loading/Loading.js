import React from 'react';
import { Grid } from  'react-loader-spinner'


const Loading = () => {
    return (
        <div className='flex justify-center items-center my-10'>
            <Grid
            height="80"
            width="80"
            color="#FD9B28"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>
    );
};

export default Loading;