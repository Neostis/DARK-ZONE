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
} from "../../common";

export interface ITenXBankInterface extends utils.Interface {
  functions: {
    "createAccount(string)": FunctionFragment;
    "deposit(string,uint256)": FunctionFragment;
    "getOwnerAccounts(address)": FunctionFragment;
    "transfer(string,string,uint256)": FunctionFragment;
    "transferBatch(string,string[],uint256[])": FunctionFragment;
    "withdraw(string,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createAccount"
      | "deposit"
      | "getOwnerAccounts"
      | "transfer"
      | "transferBatch"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createAccount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerAccounts",
    values: [PromiseOrValue<string>]
  ): string;
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
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AccountCreated(string,address)": EventFragment;
    "TokenDeposited(string,uint256)": EventFragment;
    "TokenTransferred(string,string,uint256)": EventFragment;
    "TokenWithdrawn(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountCreated"): EventFragment;
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

export interface ITenXBank extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITenXBankInterface;

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
    createAccount(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposit(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getOwnerAccounts(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

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

    withdraw(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createAccount(
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposit(
    name: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getOwnerAccounts(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

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

  withdraw(
    name: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createAccount(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getOwnerAccounts(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

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
    createAccount(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposit(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getOwnerAccounts(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    withdraw(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createAccount(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getOwnerAccounts(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    withdraw(
      name: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
