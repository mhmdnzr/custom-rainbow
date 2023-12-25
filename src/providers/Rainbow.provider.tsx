'use client'
import '@rainbow-me/rainbowkit/styles.css';

import {RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import {WagmiConfig} from 'wagmi';
import {wagmiConfig} from "@/config/Wagmi.config";
import {chains} from "@/config/Chain.config";


const RainbowProvider = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
};

export default RainbowProvider;