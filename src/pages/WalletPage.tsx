import styled from 'styled-components'
import { PageStyle } from './GlobalPageStyles'
import Button from '@/components/ui/button/Button'
import Icon from '@/components/ui/icon/Icon'

const WalletAmountBlock = styled.div`
position: relative;
align-items: center;
text-align: center;
`

const WalletAmountText = styled.h1`
user-select: none;
font-size: 64px;
text-decoration: var(--primary-color) wavy underline 3px;
`

const Division = styled.hr`
background-color: var(--background-color);
height: 10px;
border: 0;
min-width: 100%;
`

const WalletAmountButtons = styled.div`

`

export default function WalletPage() {
    return (
        <>
            <PageStyle>
                <WalletAmountBlock>
                    <WalletAmountText>254.00$</WalletAmountText>
                    <WalletAmountButtons>
                        <Button style={{margin: '0px 4px'}} styleType='primary'><Icon size={12} name="arrow_downward" /> Add balance</Button>
                        <Button style={{margin: '0px 4px'}} styleType='second'><Icon size={12} name="arrow_upward" /> Send money</Button>
                    </WalletAmountButtons>
                </WalletAmountBlock>

                <Division />

                <h1>Logs at here..</h1>
            </PageStyle>
        </>
    )
}