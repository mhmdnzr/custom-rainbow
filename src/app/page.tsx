import ConnectWalletComponent from "@/components/ConnectWallet.component";
import {ethers} from 'ethers';

// setting revalidate to 0 for testing purpose
export const revalidate = 10;

async function checkNetwork(){
    try {
        // Connect to the injected Ethereum provider (e.g., MetaMask)
        const provider = new ethers.AlchemyProvider("mainnet", 'demo')
        return await provider.getNetwork()
    } catch (error) {
        console.error('Error checking network:', error);
    }
};

export default async  function Home() {
    const network = await checkNetwork();
    console.log(network)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ConnectWalletComponent/>
        </main>
    )
}
