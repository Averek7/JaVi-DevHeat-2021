import React, { useState } from 'react'
import db,{ auth } from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'

function SendMsg({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL, displayName } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px', backgroundColor: '#e84118'}} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMsg