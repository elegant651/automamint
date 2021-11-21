import React, { useState } from "react";
import { Text, Button, Box, Input } from '@chakra-ui/react'

/**
 * Component
 */
export function UploadIpfs(): JSX.Element {

  const [processing, setProcessing] = useState(false);
  const [ipfsHash, setIpfsHash] = useState('');
  const ipfsAPI = require("ipfs-http-client");

  const ipfs = ipfsAPI({ host: "ipfs.infura.io", port: "5001", protocol: "https" });
  
  const handleUpload = async () => {
    setProcessing(true);

    const nftJSON = {
        description: "LISTEN TO JENNY NOW! MY COLLAB WITH 3LAU EXCLUSIVELY ON AUDIUS!\n\nFollow:\nyoutube.com/steveaoki\nfacebook.com/steveaoki\ntwitter.com/steveaoki\ninstagram.com/steveaoki\nSnapchat: @aokisteve\nTikTok: @steveaoki\nTriller: @steveaoki",
        external_url: "https://usermetadata.audius.co/ipfs/QmWHyf1UqEZCVrGcCefwxX3NH3KTJ8kVn45DbvBeaPZx6X/150x150.jpg",
        image: "https://usermetadata.audius.co/ipfs/QmWHyf1UqEZCVrGcCefwxX3NH3KTJ8kVn45DbvBeaPZx6X/150x150.jpg",
        name: "Jenny - Steve Aoki & 3LAU",
        attributes: [
          {
            trait_type: "genre",
            value: "Electronic",
          },
          {
            trait_type: "tags",
            value: "edm,electronic,electro,bass,steveaoki,3lau,hype,dance",
          },
        ],
      };

    // ipfsHash
    const result = await ipfs.add(JSON.stringify(nftJSON));
    if (result && result.path) {
      setIpfsHash(result.path);
    }

    setProcessing(false);
  }

  return (<Box>
    <Button
      mt="2"
      colorScheme="teal"
      isLoading={false}
      onClick={handleUpload}
    >
      Upload
    </Button>

    <div>IPFS Hash: {ipfsHash}</div>
  </Box>)
}
