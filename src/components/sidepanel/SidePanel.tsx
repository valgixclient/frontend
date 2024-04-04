import { Link, NavLink, Navigate } from 'react-router-dom'
import Icon from '../ui/icon/Icon'
import styled from 'styled-components'
import styles from './sidepanel.module.css'
import { useState } from 'react'
import Modal from '@/components/modal/Modal'
import Division from '../ui/division/Division'

const MenuList = styled.ul`
list-style: none;
align-items: center;
justify-content: center;
`

const SidePanelElement = styled.div`
position: relative;
width: 100px;
text-align: center;
margin-left: -25px;
height: 95vh;
overflow: auto;
display: flex;
flex-direction: column;
`

const ModalAboutSection = styled.div`
display: flex;
`

const ModalAboutNameSection = styled.h1`
display: flex;
flex-direction: column;
margin-left: 15px;
justify-content: center;

> small {
font-size: 14px;
color: var(--primary2-color);
}
`

const ModalNameSection = styled.div`
display: flex;
align-items: center;
`

const ModalUserDisplayName = styled.span`
margin-right: 8px;
`

const ModalUserButtonsBox = styled.div`
margin-top: 55px;

> li {
    padding: 10px 5px;
    list-style: none;
    list-style-position: unset;
    cursor: pointer;
    display: flex;
    user-select: none;

    > span {
        margin-left: 15px;
    }
}

> li:hover {
    background-color: #1D1E21;
}
`

export default function SidePanel() {

    const [modal, setModal] = useState(false)

    return (
        <>

            <Modal open={modal}>
                <Icon name='close' onClick={() => {setModal(!modal)}} size={32} style={{padding: "15px", cursor: "pointer", right: "0", top: "0", margin: "unset", position: "fixed"}} />
                
                <ModalAboutSection>
                    <img style={{width: "128px", borderRadius: "4px 0px 8px 0px"}} src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="" />
                    <ModalAboutNameSection>
                        <ModalNameSection>
                            <ModalUserDisplayName>Cavid Xakin</ModalUserDisplayName>
                            <Icon color='var(--primary-color)' size={24} name='verified' />
                        </ModalNameSection>
                        <small>@cavidxakin</small>
                    </ModalAboutNameSection>
                </ModalAboutSection>

                <Division style={{position: "absolute", width: "100%", right: "0", marginTop: "30px"}} variant='second' />
            
                <ModalUserButtonsBox>
                    <li><Icon name='account_circle' /> <span>My Account</span></li>
                    <li><Icon name='contrast' /> <span>Appearance</span></li>
                </ModalUserButtonsBox>

                <Division style={{position: "absolute", width: "100%", right: "0", marginTop: "30px"}} variant='second' />
            
                <ModalUserButtonsBox>
                    <li><Icon name='settings' /> <span>Settings</span></li>
                </ModalUserButtonsBox>

                <ModalUserButtonsBox style={{ position: "fixed", bottom: "0", right: "0", left: "0" }}>
                    <li onClick={() => {window.open("https://github.com/valgixclient/frontend", "_blank")}}><Icon name='code' /> <span>Source code</span></li>
                    <li style={{color: "#DA4646"}}><Icon color='#DA4646' name='logout' /> <span>Logout</span></li>
                </ModalUserButtonsBox>
            </Modal>

            <SidePanelElement>
                <MenuList>
                    <li className={styles.menuItem}>
                        <NavLink to='/' className={({ isActive }) => isActive? styles.active:""}>
                            <Icon size={48} name="space_dashboard" />
                        </NavLink>
                    </li>

                    <li className={styles.menuItem}>
                        <NavLink to='/wallet' className={({ isActive }) => isActive? styles.active:""}>
                            <Icon size={48} name="account_balance_wallet" />
                        </NavLink>
                    </li>

                    <li className={styles.menuItem}>
                        <NavLink to='/p2p' className={({ isActive }) => isActive? styles.active:""}>
                            <Icon size={48} name="local_mall" />
                        </NavLink>
                    </li>

                    <div className={styles.sideBottom}>
                        <li className={styles.menuItem}>
                            <a target='_blank' href='https://github.com/valgixclient/frontend'>
                                <Icon size={48} name="code" />
                            </a>
                        </li>
                        <li style={{cursor: "pointer"}} onClick={() => setModal(!modal)} className={styles.menuItem}>
                            <img className={styles.profilePic} src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="" />
                        </li>
                    </div>
                </MenuList>
            </SidePanelElement>

        </>
    )

}