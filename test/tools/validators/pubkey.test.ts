import { tryParseDomain } from '@tools/validators/pubkey'

describe('Public Key Resolves ', () => {
  const domain = 'rers.sol'
  // const pubkey = '8aHFSYp3K2X2qEfUqQhfCuCHvjDumdiMzfCyrJhdJxmQ'
  const pubkey = 'BHfy7g8R7PnqGbJc6cAynp577yyaJaxn23FppJqMGx2p'


  test('domains to publicKey', async () => {
    const resolvedKey = await tryParseDomain(domain)
    expect(resolvedKey?.toBase58()).toEqual(pubkey)
  })
})
