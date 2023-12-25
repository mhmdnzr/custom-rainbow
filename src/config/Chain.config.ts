import '@rainbow-me/rainbowkit/styles.css';
import {configureChains} from 'wagmi';
import {arbitrum, base, mainnet, optimism, polygon, zora,} from 'wagmi/chains';
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';

export const {chains, publicClient} = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora],
    [
        alchemyProvider({apiKey: process.env.ALCHEMY_ID!}),
        publicProvider()
    ]
);
