import styled from 'styled-components'
import { PageStyle } from './GlobalPageStyles'

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
                    <WalletAmountText>0.00$</WalletAmountText>
                    <WalletAmountButtons>
                        
                    </WalletAmountButtons>
                </WalletAmountBlock>

                <Division />
            </PageStyle>
        </>
    )
}