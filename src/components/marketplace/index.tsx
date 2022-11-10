import { Button, Grid, Typography } from "@mui/material";
import { ethers } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";
import { useEffect, useState } from "react";

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
    <Grid>
      <Typography variant="h5">Wax connect metamask</Typography>
      <Typography mt={2} variant="body1">
        Address: {state.address}
      </Typography>
      {!state.address && (
        <Button onClick={(e) => connectWalletHandler()}>Connect</Button>
      )}
    </Grid>
  );
}
interface State {
  address?: string;
}
