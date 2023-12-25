'use client'
import '@rainbow-me/rainbowkit/styles.css';

import {RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import {WagmiConfig} from 'wagmi';
import {wagmiConfig} from "@/config/rainbowkit/Wagmi.config";
import {chains} from "@/config/rainbowkit/Chain.config";
import {RainbowDarkTheme, RainbowLightTheme} from "@/theme/Rainbow";


const RainbowProvider = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider
                appInfo={{
                    appName: process.env.APP_NAME!,
                    learnMoreUrl: 'https://learnaboutcryptowallets.example',
                }}
                chains={chains}
                theme={
                    {
                        lightMode: RainbowLightTheme,
                        darkMode: RainbowDarkTheme,
                    }
                }
            >
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
};

export default RainbowProvider;