import {createConfig} from "wagmi";
import {connectors} from "@/config/Wallet.config";
import {publicClient} from "@/config/Chain.config";

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})