import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Web3 from "web3";
import HourglassFullOutlinedIcon from '@mui/icons-material/HourglassFullOutlined';

import { loadContract } from "./utils/load-contract";
import Progressbar from "./components/ProgressBar/ProgressBar";
import detectEthereumProvider from "@metamask/detect-provider";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion/dist/framer-motion";

import { Parallax } from "react-scroll-parallax";

import bg from "./Images/img4.jpg";
import Options from "./components/Options/Options";
import Cards from "./Cards/Cards";

function App() {
  const [isConnected, setIsConnected] = useState(2);
  const [balance, setBalance] = useState(null);
  const [mostVote, setmostVote] = useState(null);
  const [voted, setVoted] = useState(null);

  const [totalVote,setTotalVotes] = useState(null);
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  const [reload, shouldReload] = useState(false);

  const reloadEffect = () => shouldReload(!reload);
  
  const setAccountListener = (provider) => {
    provider.on("accountsChanged", (accounts) => setAccount(accounts[0]));
  };


  
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      const contract = await loadContract("funders", provider);
      if (provider) {
        setAccountListener(provider);
       // console.log(provider);
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
        });
      } else {
        console.error("Please install MetaMask!");
      }
    };
    loadProvider();
  }, []);

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
     

      console.log(account)  
      
      
    
    };

    web3Api.web3 && getAccount();
    account && VoteGiven_f();
  }, [web3Api.web3,isConnected,account]);


  async function connecttometamask() {
    const acc = await window.ethereum.request({
      method: "eth_requestAccounts",

     

    });
   
    if (acc) {
      setIsConnected(null);
    }
  }

  
 
   

  useEffect(() => {
    const loadBalance = async () => {
      const { contract, web3 } = web3Api;
      const balance = await web3.eth.getBalance(contract.address);
      setBalance(web3.utils.fromWei(balance, "ether"));
    };
    web3Api.contract && loadBalance();
   
  
    
  }, [web3Api.contract]);


    const VoteGiven_f= async()=>{
   const {contract, web3}= web3Api;
   const t = await contract.alreadyVotedCheck();
   setVoted(t);
  
   console.log(voted);
  
 };
   
   
 


 const giveVote_f0=async()=>{
    const {contract,web3}= web3Api;
    await contract.giveVote0({
      from: account
    });reloadEffect();

  }
  const giveVote_f1=async()=>{
    const {contract,web3}= web3Api;
    await contract.giveVote1({
      from: account
    });reloadEffect();
  }
  const giveVote_f2=async()=>{
    const {contract,web3}= web3Api;
    await contract.giveVote2({
      from: account
    });reloadEffect();
  }
  const giveVote_f3=async(party_number)=>{
    const {contract,web3}= web3Api;
    await contract.giveVote3({
      from: account
    });reloadEffect();
  }

  // const totalVote_f= async()=>{
  //   const {contract, web3}= web3Api;
  //   const t = await contract.totalVotes();
  //   setTotalVotes(t);
  //  // reloadEffect();
  //   //console.log(totalVote)
   
   
  // };
  useEffect(()=>{
     const totalVote_f= async()=>{
    const {contract, web3}= web3Api;
    const t = await contract.totalVotes();
    setTotalVotes(t.words[0]);
  // reloadEffect();
   // console.log(totalVote)
   
  };
    web3Api.contract && totalVote_f();
    
  },[web3Api.contract,reload])



  useEffect(()=>{
    const totalVote_ff= async()=>{
   const {contract, web3}= web3Api;
   const l = await contract.mostVoted();
   setmostVote(l.words[0]);

   //reloadEffect();
   //console.log(mostVote);
   //console.log(totalVote)
  
 };
   web3Api.contract && totalVote_ff();
   
 },[web3Api.contract,totalVote])

  

  return (
    <div className="App">
      {isConnected ? (
        <>
{/*         
          <video autoPlay loop muted id="myVideo">
            <source src="/Videos/code3.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video> */}

            <div className="hell">
              {/* <img height="709px" width="1530px" src="https://cdn.wallpapersafari.com/1/17/ECJU3z.jpg"></img> */}
             <div className="heaa">
              <span>
              <HourglassFullOutlinedIcon fontSize="large"/>
             <h1>Decentralised Voting App</h1>
            
              </span>
              </div> 
          <div class="content">
            <button className="button" onClick={connecttometamask}>
               <div className="connn"><img width="390px" height="100px"src="https://user-images.githubusercontent.com/35871990/52588870-8147e000-2e0b-11e9-8f5e-903fd83aec15.png" alt="" srcset="" /></div>
            </button>
          </div>
            </div>
        </>
      ) : (
        <>
          <video autoPlay loop muted id="myVideo">
            <source src="/Videos/code3.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          <div className="whole-container">
         
            <div class="container">
                {/* <h1>{totalVote? totalVote.words[0]:"hello"}</h1>
                <button onClick={totalVote_f}>total votes</button> */}
                {/* <h1>{voted?voted.words[0]:"hello"}</h1> */}
                <Options accname={  account? account: "not connected"} giveeVote0= {giveVote_f0} giveeVote1= {giveVote_f1} giveeVote2= {giveVote_f3} giveeVote3= {giveVote_f3} totalVotee={totalVote? totalVote:"0"} mostVotee={mostVote? mostVote:"hello"}/>
               
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

 // eslint-disable-next-line