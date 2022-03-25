import React from 'react'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>
            <img src={props.avatar} />

            <div>{props.name}</div>
            <div>{props.message}</div>
            <div>{props.time}</div>


        </div>
    )
}

export default Message
