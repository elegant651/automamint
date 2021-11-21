import { Text, Button, Box, Input } from '@chakra-ui/react'


export const getStaticProps = async () => {
  
  const covalentKey = ''
  const chainId = 137
  const contractAddress = '0xe4605d46fd0b3f8329d936a8b258d69276cba264'
  const tokenId = 1
  const res = await fetch(`https://api.covalenthq.com/v1/${chainId}/tokens/${contractAddress}/nft_transactions/${tokenId}/?&key=${covalentKey}`)
    
  const response = await res.json()
  console.log('r', response)
  return {
    props: {
      response
    },
  }
}

/**
 * Component
 */
export function GetData({ data }): JSX.Element {
  
  const getData = () => {
    console.log(data);
  }

  return (<Box>
    <Input
      bg="white"
      type="text"
      placeholder="Enter a Greeting"              
    />
    <Button
      mt="2"
      colorScheme="teal"
      isLoading={false}
      onClick={getData}
    >
      Get Data
    </Button>
  </Box>)
}
