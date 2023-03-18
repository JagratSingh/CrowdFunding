import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x9a02B3aA8ce674F31C12f63E878a4847CD94320C"
);

export default instance;
