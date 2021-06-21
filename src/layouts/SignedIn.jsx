import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signedOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src=""></Image>
                <Dropdown pointing="top left" text="Melek">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
                        <Dropdown.Item onClick={signedOut} text="Çıkış yap" icon="sign-out"></Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
