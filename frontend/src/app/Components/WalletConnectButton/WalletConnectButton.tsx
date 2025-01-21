'use client'
import { WalletConnection, WalletConnectionStatus } from "@/app/Services";
import { useState } from "react";

let wallet = new WalletConnection()
export default function WalletConnectButton() {
    const [status, setStatus] = useState(WalletConnectionStatus.waiting);

    if (status == WalletConnectionStatus.waiting) {
        return (
            <button>Connect Your Wallet</button>
        )
    }

    
    
}