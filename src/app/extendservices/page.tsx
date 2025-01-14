"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";


import { useCallback } from "react";
import { Avatar, Name } from "@coinbase/onchainkit/identity";
import {
  Transaction,
  TransactionButton,
  TransactionSponsor,
  TransactionStatus,
  TransactionStatusAction,
  TransactionToastLabel,
  TransactionStatusLabel,
} from "@coinbase/onchainkit/transaction";
import type { LifecycleStatus } from "@coinbase/onchainkit/transaction";
import { Wallet, ConnectWallet } from "@coinbase/onchainkit/wallet";
import { useAccount } from "wagmi";
import type {
  TransactionError,
  TransactionResponse,
} from "@coinbase/onchainkit/transaction";

import {
  BASE_SEPOLIA_CHAIN_ID,
  BasedPayAbi,
  BasedPayAddress,
  SampleUsdtAbi,
  SampleUsdtAddress,
} from "../../constants/constants";
import type { Address, ContractFunctionParameters } from "viem";

export default function Component() {



  const router = useRouter();
  const { address } = useAccount();
  const [formData, setFormData] = useState({
    serviceProviderName: "",
    serviceType: "",
    providerWalletAddress: address,//address ,
    locationOfService: "",
    providerCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // contracts interaction
  // const { address } = useAccount();

  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log("LifecycleStatus", status);
  }, []);

  const contracts = [
    {
      address: BasedPayAddress,
      abi: BasedPayAbi,
      functionName: "createServiceProvider",
      args: [
        formData.serviceProviderName,
        formData.serviceType,
        formData.providerWalletAddress,
        formData.locationOfService,
        formData.providerCode,
        
      ],
    },
  ] as unknown as ContractFunctionParameters[];

  const handleError = (err: TransactionError) => {
    console.error("Transaction error:", err);
  };

  const handleSuccess = (response: TransactionResponse) => {
    router.push("/services-joined-success");
    //console.log("Transaction successful", response);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleExtend = () => {
    router.push("/services-joined-success");
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="bg-gray-900 flex flex-row mt-16 ml-20 p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full -mt-10 max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg"
        >
   

          <div className="grid grid-cols-2 gap-4">
            <div className="mb-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Location of Services
              </label>
              <input
                type="text"
                id="location"
                name="locationOfService"
                value={formData.locationOfService}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter location"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="serviceType"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Service Type
              </label>
              <input
                type="text"
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter service type"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="ratePerHour"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Provider Name
              </label>
              <input
                type="text"
                id="providerName" //ye rate per hour tha pehle
                name="serviceProviderName"
                value={formData.serviceProviderName}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter provider name"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="code"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Code
              </label>
              <input
                type="text"
                id="code"
                name="providerCode"
                value={formData.providerCode}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter code"
              />
            </div>

            <div className="mb-4">
              
            </div>
          </div>

          <Transaction
          contracts={contracts}
          className="w-[450px]"
          chainId={BASE_SEPOLIA_CHAIN_ID}
          onError={handleError}
          onSuccess={handleSuccess}
        >
          <TransactionButton text="Extend Services" className="mt-0 mr-auto ml-auto w-[450px] max-w-full text-[white]" />
          <TransactionStatus>
          <TransactionToastLabel/> 
            <TransactionStatusLabel  />
            <TransactionStatusAction />
          </TransactionStatus>
        </Transaction>
        </form>
        <div className="text-white ml-72 text-6xl font-bold ">
          Extend your services with <span className="animate-pulse">Basedpay.</span>
        </div>
      </div>
    </div>
  );
}
