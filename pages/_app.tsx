import "../styles/global.css";
import "@interchain-ui/react/styles";

import type { AppProps } from "next/app";
import { SignerOptions, wallets } from "cosmos-kit";
import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import {
  Box,
  ThemeProvider as InterchainThemeProvider,
  useColorModeValue,
  useTheme,
} from "@interchain-ui/react";

import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "./global.css";
import { Fragment, useEffect } from "react";

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const { themeClass } = useTheme();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme();

  const signerOptions: SignerOptions = {
    // signingStargate: () => {
    //   return getSigningCosmosClientOptions();
    // }
  };

  return (
    <InterchainThemeProvider>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={wallets}
        walletConnectOptions={{
          signClient: {
            projectId: "a8510432ebb71e6948cfd6cde54b70f7",
            relayUrl: "wss://relay.walletconnect.org",
            metadata: {
              name: 'Cosmos Kit dApp',
              description: 'Cosmos Kit dApp built by Create Cosmos App',
              url: "https://docs.cosmology.zone/cosmos-kit/",
              icons: [],
            },
          },
        }}
        // @ts-ignore
        signerOptions={signerOptions}
      >
        <Box
          className={themeClass}
          minHeight="100dvh"
          backgroundColor={useColorModeValue("$white", "$background")}
        >
          {/* TODO fix type error */}
          {/* @ts-ignore */}
          <Fragment>
            <Head>
              <title>Symbiosis</title>
              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
              />
            </Head>
            <ThemeProvider theme={muiTheme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </Fragment>
        </Box>
      </ChainProvider>
    </InterchainThemeProvider>
  );
}

export default CreateCosmosApp;
