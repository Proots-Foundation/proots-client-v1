
![pRoots](https://shdw-drive.genesysgo.net/6WSW4N85PxPUFVrjB41vicn5ZqZRWA4SDuqtczAnjtLA/homepage.png)


>Fundamentally transform life sciences & democratize biotechnology to inspire creativity and improve lives by organizing life science change-makers and bioenthusiasts to build an inclusive global network, cultivate an accessible commons of knowledge and resources, launch community labs and projects, and enable local educators.   ----- [Global Community Bio](https://www.biosummit.org/statement-of-shared-purpose)


## Project

**[pRoots](https://gitcoin.co/grants/7445/proots-empower-people-to-store-share-annotate-and)** is a tool we build with web3 technology to store, share, annotate and learn genomic information. And we will aggregate the knowledge from the growing biocommunity and openbio projects with the DNA information as the cornerstone.

Biology is software encoded in DNA. And most of the information is not easy to store, share, and annotated in a more open manner. As the cost of DNA sequencing and synthesis dropping dramatically, the tools to empower people to store, share and annotate is critical. In another way, as more and more DAOs raise funds for bioscience development and decentralized science, there will be also the necessity to build the infrastructure to deal with the related genomic data. pRoots will let biolabs, DAOs and amateur bioscientists easily allocate the web3 resource as the functionality to deal their sharable knowledge of genomic information.

## Team
In order to bridge the global biocommunity and web3 frontier to push the boundary of decentrazlied science in biotech, this pRoots were developed by the coworks between the global biocommunity fellow(biocreator.tw) and blockchain developer(https://soltricks.io/) to focus on current problems in open bioscience, especially, on the genomic data.

- [Weiting Lin](https://t.co/elU5wwOvpc)
  - BioCreator founder, 2021 Global Biocommunity Fellow, and clinical pathologist with bioinformatic skills, previously work at cloud gneomic company such as GeneDock, DNArails and compassbioinfo

- [Chitaolang](https://twitter.com/chitaolang)
  - senior blockchain developer and 2022 Hackathon 3.0| Solana Asia Series DeFi 1st place, and previos work soltrick(soltrick.io)


## Development Plan:

 - Phase 1
   - people will use pRoots to store DNA data (fasta, fastq, bam and more) as easily as possible in a decentralized storage system.
   - enable DAOs and scientists who received crypto funds can use our tools to store, share and annotate their genomic data in a web3 manner 
   - people can view their DNA data such as plasmids from a browser with a useful viewer and store the metadata in a decentralized way 
   - bridging the current open bio community such as global biocommunity, freegan, iGEM to provide they to use this tool to store, share, and annotate 
   
## Getting Started
- [Demo Link](https://app.proots.dev/)
### Development 

```
git clone https://github.com/Proots-Foundation/proots-client-v1.git proots_client_v1
cd proots_clitent_v1
yarn install
yarn dev
```
the application of beta pRoots tools then run on [localhost:3000](https://localhost:3000)

## Design of the pRoots phase I: plasmid schema
In the phase I sprint development of pRoots, we propose and design a IPLD plasmid data schema for this genomic data scenario.
![design_1](https://shdw-drive.genesysgo.net/6WSW4N85PxPUFVrjB41vicn5ZqZRWA4SDuqtczAnjtLA/design_1.png)
Genomic data contain a wide range of sources, each will have its own user need and related scenario. In the phase I sprint, we begin with the plasmid scenario of genomic data, which more relevant to the synthetic biology and biotechnology industry.

Plasmids are circular DNA and often size is much smaller, and originally found in the bacterial. Modern biotechnology use this plasmid structure of DNA to control and insert certain funtionality of sequence to manipulate the bacterial to produce biomateral, protein, circuit and so on.  Due to its characteristic of modular and small size, we can think plasmid as a codebase in the perspective of software engineer. Here in phase 1 sprint, we develop a data schema on plasmid data sharing and annotation with IPLD.

![design_2](https://shdw-drive.genesysgo.net/6WSW4N85PxPUFVrjB41vicn5ZqZRWA4SDuqtczAnjtLA/design_2.png)
DNA sequence contain only 4 letters such as A, T, C, G. and the basic sequence data format [fasta](https://en.wikipedia.org/wiki/FASTA) contain a header and the sequence data. And we can seperate the plasmid data into two kinds of different information. One is sequence data, contain the sequence information. Another is annotation, which will document the segment of sequence with biological functionality such as promoter, terminator, origin of replication, rbs and protein sequence itself.

![design_3](https://shdw-drive.genesysgo.net/6WSW4N85PxPUFVrjB41vicn5ZqZRWA4SDuqtczAnjtLA/design_3v1.png)
Under the certain fasta data scenario, we propose a draft of DAG-PLASMID, which we will implement as our data structure to deal with pRoots and lay the foundation of the future application. In DAG-PLASMID, we have three main node tpyes (sequence, annotation and contributor). The individual node structure are show in the figure. When user use pRoots to store or annotate their plasmid data, we will create a contributor activity to document the contribution of sharing the genomic data and the data in the plasmid will be saved into a sequence node and annotation node.

![design_4](https://shdw-drive.genesysgo.net/6WSW4N85PxPUFVrjB41vicn5ZqZRWA4SDuqtczAnjtLA/design_4v1.png)
By creating the three main node types of sequence, annotation and contributor activity, the data itself is not linked together to generate new knowledge or create the possible interaction between contributors based on their consensus interest on the certain sequence family. So, we use a advanced data layout concept to create a nodebuilders to transform the sequence data into a k-mer aggregate node. We will turn sequence into k-mer index and different plasmid data can be analyzed to get their k-mer index. The sequence with similar k-mer structure can be aggregate in the same k-mer3 index, which can create a knowledge graph on common interesting of data and another way can be used to de-duplicate the similar plasmid genomic sequence.


   


