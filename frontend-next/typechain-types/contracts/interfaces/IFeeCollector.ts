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

export interface IFeeCollectorInterface extends utils.Interface {
  functions: {
    "collectFee(uint256,address)": FunctionFragment;
    "fee()": FunctionFragment;
    "feeDecimals()": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "shifter()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "collectFee"
      | "fee"
      | "feeDecimals"
      | "setFee"
      | "shifter"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "collectFee",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "shifter", values?: undefined): string;

  decodeFunctionResult(functionFragment: "collectFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shifter", data: BytesLike): Result;

  events: {
    "FeeChanged(uint256,uint256)": EventFragment;
    "FeeCollected(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FeeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeCollected"): EventFragment;
}

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

export interface IFeeCollector extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IFeeCollectorInterface;

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
    collectFee(
      amount: PromiseOrValue<BigNumberish>,
      beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fee(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    feeDecimals(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFee(
      newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    shifter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  collectFee(
    amount: PromiseOrValue<BigNumberish>,
    beneficiary: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fee(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  feeDecimals(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFee(
    newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  shifter(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    collectFee(
      amount: PromiseOrValue<BigNumberish>,
      beneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    feeDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    setFee(
      newFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    shifter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
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
  };

  estimateGas: {
    collectFee(
      amount: PromiseOrValue<BigNumberish>,
      beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fee(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    feeDecimals(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFee(
      newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    shifter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    collectFee(
      amount: PromiseOrValue<BigNumberish>,
      beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fee(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    feeDecimals(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFee(
      newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    shifter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
