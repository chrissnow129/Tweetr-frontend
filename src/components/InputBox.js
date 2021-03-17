import React, { useRef } from 'react';
// import Tweets from './Tweets';

const InputBox = props => {

const contentInput = useRef(null);
const titleInput = useRef(null);
const authorInput = useRef(null);

const handleSubmit = async e => {
    e.preventDefault();
    try {
        const response = await fetch('https://tweet-backend-api.herokuapp.com/tweets/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: titleInput.current.value,
                author: authorInput.current.value,
                content: contentInput.current.value
            })
        });
        const data = await response.json();
        props.setTweets([...props.tweets, data]);
    } catch(error) {
        console.error(error);
    }
}
    return (
        <>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='w-40 h-5 m-auto'>
            <input className='border-2 border-white bg-transparent rounded-lg py-1.5' type="text" placeholder="Title" ref={titleInput}/>
            <input className='border-2 border-white bg-transparent rounded-lg my-3 py-1.5' type="text" placeholder="Author" ref={authorInput}/>
            <input className='border-2 border-white bg-transparent rounded-lg mb-3 py-1.5' type="text" placeholder="What's happening?" ref={contentInput}/>
            <input className='border-2 border-white text-white bg-transparent rounded-full px-4 py-1' type="submit" value="Tweet"/>
            </div>
        </form>
        </>
    )
}

export default InputBox;