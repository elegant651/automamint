import React, { useState } from "react";
import { Text, Button, Box, Input } from '@chakra-ui/react'
import { useEthers, useNotifications } from '@usedapp/core'

/**
 * Component
 */
export function MintNFT(): JSX.Element {
  const { account, deactivate, error } = useEthers()

  const nftPortKey = ""

  const [addTokenState, setAddTokenState] = useState({
    nftName: "",
    nftDesc: ""
  });

  const data = {
    "chain": "rinkeby",
    "name": "NFT Mint Test",
    "description": "NFT Mint Description",
    "file_url": "http://naver.me/5a8Z9deZ",
    "mint_to_address": account
  }
  const handleMint = async () => {
    const res = await fetch('https://api.nftport.xyz/v0/mints/easy/urls', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': nftPortKey
      },
      body: JSON.stringify(data)
    })
    const response = await res.json()
    console.log('r', response)
  }

  return (<Box>
    <Input
      bg="white"
      type="text"
      placeholder="Nft Name"
      onChange={(e) => setAddTokenState({
        ...addTokenState,
        nftName: e.target.value
      })}
      value={addTokenState.nftName}
    />
    <Button
      mt="2"
      colorScheme="teal"
      isLoading={false}
      onClick={handleMint}
    >
      Mint
    </Button>
  </Box>)
}
