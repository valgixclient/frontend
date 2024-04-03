import { NavLink } from 'react-router-dom'
import Icon from '../ui/icon/Icon'
import styled from 'styled-components'
import styles from './sidepanel.module.css'
import { useEffect, useState } from 'react'

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

export default function SidePanel() {

    return (
        <>

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
                            <NavLink to='/profile' className={({ isActive }) => isActive? styles.active:""}>
                                <img className={styles.profilePic} src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="" />
                            </NavLink>
                        </li>
                    </div>
                </MenuList>
            </SidePanelElement>

        </>
    )

}