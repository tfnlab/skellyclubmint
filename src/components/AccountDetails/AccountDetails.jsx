import React from "react";

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">BurningMeta</h1>
        <div class="card col-md-12" >
          <div class="card-body">
            <p className="lead">
                  Click the mint button above to  Mint a BurningMeta Camp
                  <hr className="my-4" />                  
                  Once a year we gather in the Metaverse to burn Meta. The actual burn may happen in Decentraland, Otherside or Metagascar Metaverse. Most likely we will leverage all platforms, as we believe it’s going to be a Multi-Metaverse gathering. BurningMeta will take place in Rock City (made-up city), Rock City is divided into 6 rows and 32 sections, each camp site has the potential of having 40 camps. There are a total of 10,000 camps randomly distributed across Rock City. This NFT is your ticket to Camp in Rock City during BurningMeta. 5,000 are available to mint for FREE, another 5,000 are available to mint for 0.005 ETH Minting website will be up shortly at TFNLab.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
