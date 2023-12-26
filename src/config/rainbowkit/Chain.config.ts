import '@rainbow-me/rainbowkit/styles.css';
import {Chain, configureChains} from 'wagmi';
import {arbitrum, base, mainnet, optimism, polygon, zora,} from 'wagmi/chains';
import {publicProvider} from 'wagmi/providers/public';
import {jsonRpcProvider} from "wagmi/providers/jsonRpc";

export const {chains, publicClient} = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora],
    [
        jsonRpcProvider({
            rpc: (chain: Chain) => ({
                http: `https://rpc-mumbai.maticvigil.com`,
            }),
        }),
        publicProvider(),
    ]
);


