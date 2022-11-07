export const parseSeqMetadata = (
  version: string,
  account: string,
  name: string,
  seq: string,
  image: any,
) => {
  return {
    description: 'Your genomic data on Web3',
    external_url: 'www.proots.dev',
    image,
    name: name,
    attributes: [
      {
        trait_type: 'Version',
        value: version,
      },
      {
        trait_type: 'Publisher',
        value: account,
      },
      {
        trait_type: 'Sequence',
        value: seq,
      },
      {
        trait_type: 'Type',
        value: 'Sequence',
      },
    ],
  }
}

export const parseAnntationMetadata = (
  version: string,
  account: string,
  name: string,

  start: number,
  end: number,
  image: any,
) => {
  return {
    description: 'Your genomic annotation on Web3',
    external_url: 'www.proots.dev',
    image,
    name: name,
    attributes: [
      {
        trait_type: 'Version',
        value: version,
      },
      {
        trait_type: 'Publisher',
        value: account,
      },
      {
        trait_type: 'Anntation',
        value: name,
      },
      {
        trait_type: 'Start',
        value: start,
      },
      {
        trait_type: 'End',
        value: end,
      },
      {
        trait_type: 'Type',
        value: 'Annotation',
      },
    ],
  }
}
