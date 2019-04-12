import React from 'react';

const Loading = ({ id, theme = 'dark' }) => (
    <div id={id} className={`initial-loader initial-loader--${theme}`}>
        <svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'>
            <g fill='none' fillRule='evenodd'>
                <path fill='#FFF' d='M81.942 14.05C63.22-4.683 32.766-4.683 14.04 14.042c-18.721 18.72-18.721 49.19 0 67.91 18.725 18.731 49.19 18.728 67.9-.002 18.745-18.719 18.745-49.187 0-67.902' />
                <g fill='#2A3052'>
                    <path d='M34.104 60.969s.542 4.059 3.96 5.94l-.91-1.695s1.74-4.57-3.05-4.245' />
                    <path d='M49.965 31.794c3.765 1.342 4.976 5.354 4.976 5.354-4.79 1.092-3.78-3.798-3.78-3.798l-1.196-1.556zm25.201 43.382c-.49.48-.973.948-1.47 1.4-10.814 8.812-19.142 4.427-19.239 4.427-5.645-1.128-8.447-1.144-10.032-2.203-.398-.267-1.675-.953-1.969-.787-1.152.686-2.738 1.04-4.368-.26a6.165 6.165 0 0 1-.406-.369c-1.798-1.79-1.188-3.638-.592-4.28.415-.42-.315-1.603-.315-1.603s-2.12-3.147-3.566-5.042c-1.597-2.08-1.813-6.207-1.832-6.262l-.022-.058c-1.611-1.914-1.779-2.502-2.335-3.435-.325-.552-.824-1.068-1.248-1.513-.291-.29-.56-.567-.751-.825-.042-.055-.053-.135-.037-.263.149-.893 2.07-2.863 2.484-3.138.51-.33 2.7-1.66 2.7-1.66s1.23-1.935 3.325-1.935c1.891.011 3.045-.105 6.305.958l1.355.43c2.272.728 4.276 1.587 5.868 2.274 1.35.582 2.432 1.052 3.261 1.27 2.812.739 7.772-1.536 8.818-2.496 1.716-1.562 2.457-2.608 2.467-3.465.014-.481-.199-.902-.685-1.412-.254-.232-.58-.667-.988-1.08-.065-.064-.134-.141-.216-.2-4.76-5.054-3.936-8.224-3.931-8.275.204-2.274-1.1-3.733-2.5-5.246l-.23-.284c-.073-.066-.163-.184-.163-.184 2.026.332 3.407 1.147 7.367 1.589 2.248.242 1.538.22 3.335.177 2.475-.08 4.435-.296 4.569-.858-.24-.204-1.334.06-6.59-1.948-2.434-.932-2.82-1.07-4.365-1.583-1.988-.67-4.144-1.598-4.144-1.598 8.573 2.249 11.378 3.13 15.3 3.184 1.518.028 2.42-.155 2.95-.264.558-.1 2.289-.492 2.485-1.091.06-.105-1.66.282-4.842-.768-10.008-3.306-10.859-4.96-16.406-7.118-1.937-.751-2.566-1.164-8.41-2.673-2.677-.688-6.727-.292-7.278.053-7.586-1.783-9.31-1.59-11.536-1.109 14.843-9.517 34.89-7.803 47.877 5.181a39.239 39.239 0 0 1 4.685 5.672l.183.276c4.166 6.236 6.39 13.556 6.39 21.22 0 10.264-4 19.907-11.258 27.174zM79.82 16.17C62.263-1.39 33.717-1.39 16.163 16.166c-17.55 17.552-17.55 46.115 0 63.67 17.554 17.556 46.11 17.55 63.657-.004 17.573-17.551 17.573-46.114 0-63.662z' />
                </g>
            </g>
        </svg>
        <div className='initial-loader__wrapper'>
            { Array.from(new Array(5)).map((x, inx) => (
                <div key={inx} className={`initial-loader__circ initial-loader__circ--${inx + 1} circ${inx + 1}`} />
            ))}
        </div>
    </div>
);

export default Loading;
