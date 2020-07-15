/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from 'ethers';
import {Listener, Provider} from 'ethers/providers';
import {Arrayish, BigNumber, BigNumberish, Interface} from 'ethers/utils';
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from '.';

interface AddressStorageInterface extends Interface {
  functions: {
    getAddress: TypedFunctionDescription<{
      encode([_key]: [Arrayish]): string;
    }>;
  };

  events: {};
}

export class AddressStorage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): AddressStorage;
  attach(addressOrName: string): AddressStorage;
  deployed(): Promise<AddressStorage>;

  on(event: EventFilter | string, listener: Listener): AddressStorage;
  once(event: EventFilter | string, listener: Listener): AddressStorage;
  addListener(eventName: EventFilter | string, listener: Listener): AddressStorage;
  removeAllListeners(eventName: EventFilter | string): AddressStorage;
  removeListener(eventName: any, listener: Listener): AddressStorage;

  interface: AddressStorageInterface;

  functions: {
    getAddress(_key: Arrayish): Promise<string>;
  };

  getAddress(_key: Arrayish): Promise<string>;

  filters: {};

  estimate: {
    getAddress(_key: Arrayish): Promise<BigNumber>;
  };
}