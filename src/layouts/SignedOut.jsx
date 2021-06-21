import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signedIn}) {
    return (
        <div>
            <Menu.Item>
            <Button onClick={signedIn} primary>
                Giriş Yap
            </Button>
            <Button primary style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
            </Menu.Item>
            
        </div>
    )
}
