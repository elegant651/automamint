import { Alert, AlertIcon, Button, Divider, Box, Heading, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Layout } from '../components/layout/Layout'
import { GetData } from '../components/process/GetData';
import { MintNFT } from '../components/process/MintNFT';
import { UploadIpfs } from '../components/process/UploadIpfs';

function Mint(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <Layout>
      <Heading as="h1" mb="12">
        Mint
      </Heading>
      {loading && (
        <Alert status="warning">
          <AlertIcon />
          ... Loading
        </Alert>
      )}
      {error && (
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      )}
      {!loading &&
        !error &&
        
        <Box maxWidth="container.sm" p="8" mt="8" bg="gray.100">
          <Text fontSize="xl">Contract Address: </Text>
          <Divider my="8" borderColor="gray.400" />
          <Box>
            <Text fontSize="lg">Process1: Upload info to IPFS</Text>
            <UploadIpfs />
          </Box>
          <Divider my="8" borderColor="gray.400" />
          <Box>
            <Text fontSize="lg">Process2: Minting with NFTPort</Text>
            <MintNFT />
          </Box>
          <Divider my="8" borderColor="gray.400" />
          <Box>
            <Text fontSize="lg">Process3: Get Data with Covalent</Text>
            <GetData />
          </Box>
        </Box>
      }
    </Layout>
  )
}

export default Mint
