'use client';

import ShareLinkButton from "./ShareLinkButton";

export default function ShareButtons(){
    console.log('[ShareButtons] rendering');
    return(
        <div>
            <ShareLinkButton /> | [X(Twitter)] | [Facebook]
        </div>
    );
}