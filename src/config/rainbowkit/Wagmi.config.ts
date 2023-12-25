import {createConfig} from "wagmi";
import {connectors} from "@/config/rainbowkit/Wallet.config";
import {publicClient} from "@/config/rainbowkit/Chain.config";

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})