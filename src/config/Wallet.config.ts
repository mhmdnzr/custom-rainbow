import {getDefaultWallets} from "@rainbow-me/rainbowkit";
import {chains} from "@/config/Chain.config";

export const {connectors} = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains
});