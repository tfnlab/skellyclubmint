import React, { PureComponent } from "react";

import Web3 from 'web3';


//import { Entity, Scene } from "aframe-react";

import 'aframe';
import 'aframe-gltf-helpers';
import 'aframe-event-set-component'; // NB: This enables event-set__click and such like, see https://www.npmjs.com/package/aframe-event-set-component
import 'networked-aframe';
import adapter from 'webrtc-adapter';
import { Server } from "socket.io";
import {mirror} from "aframe-mirror-component";


import db  from "../../database";

const io = require('socket.io')();

function mouseEnter(control) {
  console.log("mouseEnter: ", control);
}

function mouseLeave(control) {
  console.log("mouseLeave: ", control);
}


const items = []

for (let j = 0; j < 20; j++) {
  for (let k = 1; k < 11; k++) {
      let nftNumber = ((j*20)+k).valueOf();
      const home = db[nftNumber];
      var text_value = "value: " + home.address + "; side: front" ;
      var position = (k*2) + " 0.5 " + (j*2);
      var position_street = (k) + " 0.02 " + ((j*2) + 0.5);
      var position_text = (k*2) + " 1 " + (j*2);

      items.push(<a-image src="#street" width="1" height="1" position={position_street} rotation="90 0 0" ></a-image>);
      position_street = (k+10) + " 0.02 " + ((j*2) + 0.5);
      items.push(<a-image src="#street" width="1" height="1" position={position_street} rotation="90 0 0" ></a-image>);

      items.push(<a-image src="#wall" width="1" height="1" position={position} ></a-image>);
      items.push(<a-entity text={text_value} position={position_text} scale="1 1 1" side="double" ></a-entity>);
      position = (k*2) + " 0.5 " + ((j*2) + 1);
      position_text = (k*2) + " 1 " + ((j*2) + 1);
      home = db[nftNumber + 10];
      text_value = "value: " + home.address + "; side: front; align: right" ;
      items.push(<a-image src="#wall" width="1" height="1" position={position} ></a-image>);
      items.push(<a-entity text={text_value} position={position_text} scale="1 1 1" rotation="0 180 0" ></a-entity>);
  }
}

const Metagascar = ({ connectToMetamask }) => {
  return (

    <a-scene networked-scene="serverURL:  https://view.metagascar.com/wsapp; app: metagascar; room: metagascar; connectOnLoad: true; onConnect: onConnect; adapter: easyrtc; audio: false; video: false; debug: true;" >
        <a-assets>

          <template id="my-template">
            <a-entity>
              <a-sphere color="#f00"></a-sphere>
            </a-entity>
          </template>
        </a-assets>


        <a-entity environment="ground: noise;  lighting: distant;  groundColor: #553e35; groundColor2: #CFCFC1 ;ground: flat; dressing: none; playArea: 1000;"></a-entity>

        <a-entity id="player" position="0 0 0" network="template:#my-template;" camera wasd-controls look-controls >
        </a-entity>
        <a-entity gltf-model="url(https://metagascar.tfnlab.com/glb/structure.glb)" position="25 0.05 0" scale="0.1 0.1 0.1" ></a-entity>
        <a-entity gltf-model="url(https://metagascar.tfnlab.com/assets/download.glb.glb.glb?length=9&width=5&height=1&llength=6&lwidth=13&.glb)" position="25 0.05 50" scale="0.1 0.1 0.1"></a-entity>
        <a-entity gltf-model="url(https://metagascar.tfnlab.com/assets/download.glb.glb.glb?length=1&width=9&height=6&llength=12&lwidth=15&.glb)" position="25 0.05 -50" scale="0.1 0.1 0.1"></a-entity>
    </a-scene>

  );
};

export default Metagascar;
