/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface TenXBankInterface extends utils.Interface {
  functions: {
    "accounts(string)": FunctionFragment;
    "bankToken()": FunctionFragment;
    "collectFee(uint256,address)": FunctionFragment;
    "createAccount(string)": FunctionFragment;
    "deposit(string,uint256)": FunctionFragment;
    "fee()": FunctionFragment;
    "feeDecimals()": FunctionFragment;
    "getOwnerAccounts(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "shifter()": FunctionFragment;
    "transfer(string,string,uint256)": FunctionFragment;
    "transferBatch(string,string[],uint256[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(string,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accounts"
      | "bankToken"
      | "collectFee"
      | "createAccount"
      | "deposit"
      | "fee"
      | "feeDecimals"
      | "getOwnerAccounts"
      | "owner"
      | "renounceOwnership"
      | "setFee"
      | "shifter"
      | "transfer"
      | "transferBatch"
      | "transferOwnership"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accounts",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "bankToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "collectFee",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerAccounts",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "shifter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferBatch",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "accounts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bankToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collectFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shifter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AccountCreated(string,address)": EventFragment;
    "FeeChanged(uint256,uint256)": EventFragment;
    "FeeCollected(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenDeposited(string,uint256)": EventFragment;
    "TokenTransferred(string,string,uint256)": EventFragment;
    "TokenWithdrawn(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeCollected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenWithdrawn"): EventFragment;
}

export interface AccountCreatedEventObject {
  name: string;
  owner: string;
}
export type AccountCreatedEvent = TypedEvent<
  [string, string],
  AccountCreatedEventObject
>;

export type AccountCreatedEventFilter = TypedEventFilter<AccountCreatedEvent>;

export interface FeeChangedEventObject {
  oldFee: BigNumber;
  newFee: BigNumber;
}
export type FeeChangedEvent = TypedEvent<
  [BigNumber, BigNumber],
  FeeChangedEventObject
>;

export type FeeChangedEventFilter = TypedEventFilter<FeeChangedEvent>;

export interface FeeCollectedEventObject {
  beneficiary: string;
  amount: BigNumber;
}
export type FeeCollectedEvent = TypedEvent<
  [string, BigNumber],
  FeeCollectedEventObject
>;

export type FeeCollectedEventFilter = TypedEventFilter<FeeCollectedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TokenDepositedEventObject {
  name: string;
  amount: BigNumber;
}
export type TokenDepositedEvent = TypedEvent<
  [string, BigNumber],
  TokenDepositedEventObject
>;

export type TokenDepositedEventFilter = TypedEventFilter<TokenDepositedEvent>;

export interface TokenTransferredEventObject {
  from: string;
  to: string;
  amount: BigNumber;
}
export type TokenTransferredEvent = TypedEvent<
  [string, string, BigNumber],
  TokenTransferredEventObject
>;

export type TokenTransferredEventFilter =
  TypedEventFilter<TokenTransferredEvent>;

export interface TokenWithdrawnEventObject {
  name: string;
  amount: BigNumber;
}
export type TokenWithdrawnEvent = TypedEvent<
  [string, BigNumber],
  TokenWithdrawnEventObject
>;

export type TokenWithdrawnEventFilter = TypedEventFilter<TokenWithdrawnEvent>;

export interface TenXBank extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TenXBankInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    accounts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber] & {
        exists: boolean;
        owner: string;
        balance: BigNumber;
      }
    >;

    bankToken(overrides?: CallOverrides): Promise<[string]>;

    collectFee(
      amount: PromiseOrValue<BigNumberish>,
      beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createAccount(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposit(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeDecimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    getOwnerAccounts(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFee(
      newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    shifter(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferBatch(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  accounts(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, BigNumber] & {
      exists: boolean;
      owner: string;
      balance: BigNumber;
    }
  >;

  bankToken(overrides?: CallOverrides): Promise<string>;

  collectFee(
    amount: PromiseOrValue<BigNumberish>,
    beneficiary: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createAccount(
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposit(
    name: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  feeDecimals(overrides?: CallOverrides): Promise<BigNumber>;

  getOwnerAccounts(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFee(
    newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  shifter(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferBatch(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>[],
    amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    name: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accounts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber] & {
        exists: boolean;
        owner: string;
        balance: BigNumber;
      }
    >;

    bankToken(overrides?: CallOverrides): Promise<string>;

    collectFee(
      amount: PromiseOrValue<BigNumberish>,
      beneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    createAccount(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    feeDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    getOwnerAccounts(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFee(
      newFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    shifter(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferBatch(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AccountCreated(string,address)"(
      name?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null
    ): AccountCreatedEventFilter;
    AccountCreated(
      name?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null
    ): AccountCreatedEventFilter;

    "FeeChanged(uint256,uint256)"(
      oldFee?: PromiseOrValue<BigNumberish> | null,
      newFee?: PromiseOrValue<BigNumberish> | null
    ): FeeChangedEventFilter;
    FeeChanged(
      oldFee?: PromiseOrValue<BigNumberish> | null,
      newFee?: PromiseOrValue<BigNumberish> | null
    ): FeeChangedEventFilter;

    "FeeCollected(address,uint256)"(
      beneficiary?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): FeeCollectedEventFilter;
    FeeCollected(
      beneficiary?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): FeeCollectedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "TokenDeposited(string,uint256)"(
      name?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): TokenDepositedEventFilter;
    TokenDeposited(
      name?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): TokenDepositedEventFilter;

    "TokenTransferred(string,string,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): TokenTransferredEventFilter;
    TokenTransferred(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): TokenTransferredEventFilter;

    "TokenWithdrawn(string,uint256)"(
      name?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): TokenWithdrawnEventFilter;
    TokenWithdrawn(
      name?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): TokenWithdrawnEventFilter;
  };

  estimateGas: {
    accounts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bankToken(overrides?: CallOverrides): Promise<BigNumber>;

    collectFee(
      amount: PromiseOrValue<BigNumberish>,
      beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createAccount(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposit(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    feeDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    getOwnerAccounts(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFee(
      newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    shifter(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferBatch(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accounts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bankToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collectFee(
      amount: PromiseOrValue<BigNumberish>,
      beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createAccount(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwnerAccounts(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFee(
      newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    shifter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferBatch(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
