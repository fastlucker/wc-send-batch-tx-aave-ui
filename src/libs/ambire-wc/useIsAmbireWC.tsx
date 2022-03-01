import { useWeb3React } from '@web3-react/core';
import { WalletConnectConnector } from '../web3-data-provider/web3-providers/connectors/wallet-connect-connector';

export default function useIsAmbireWC(): boolean {
  const res = useWeb3React();
  const wcConnector = res?.connector as WalletConnectConnector;
  return wcConnector?.walletConnectProvider?.wc?._peerMeta?.name === 'Ambire Wallet';
}
