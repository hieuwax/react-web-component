import { ethers } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";
import { useEffect, useState } from "react";
import { Button, Row } from "antd";
import GalleryPage from "../../pages/Gallery";

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}

const provider = new ethers.providers.Web3Provider(window.ethereum);

interface Props {
  collection?: string;
}

export default function MarketPlace({ collection }: Props) {
  const [state, setState] = useState<State>({});

  useEffect(() => {
    getAccount();
  }, []);

  const getAccount = async () => {
    const account = provider.getSigner();
    const address = await account.getAddress().catch((err) => undefined);
    setState({ address });
  };

  const connectWalletHandler = () => {
    if (window.ethereum) {
      provider.send("eth_requestAccounts", []).then(async () => {
        getAccount();
      });
    } else {
      console.log("Please Install Metamask!!!");
    }
  };

  return (
    <Row>
      <div style={{ padding: 32, borderBottom: "1px solid #fff" }}>
        <h3>Test connect meta mask</h3>
        <p>Address: {state.address}</p>
        {!state.address && (
          <Button onClick={(e) => connectWalletHandler()}>Connect</Button>
        )}
      </div>
      <h3 style={{ padding: "0px 32px" }}>Test display nft</h3>
      <GalleryPage />
    </Row>
  );
}
interface State {
  address?: string;
}
