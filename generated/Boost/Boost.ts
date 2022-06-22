// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BoostCreated extends ethereum.Event {
  get params(): BoostCreated__Params {
    return new BoostCreated__Params(this);
  }
}

export class BoostCreated__Params {
  _event: BoostCreated;

  constructor(event: BoostCreated) {
    this._event = event;
  }

  get boostId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get boost(): BoostCreatedBoostStruct {
    return changetype<BoostCreatedBoostStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class BoostCreatedBoostStruct extends ethereum.Tuple {
  get strategyURI(): string {
    return this[0].toString();
  }

  get token(): Address {
    return this[1].toAddress();
  }

  get balance(): BigInt {
    return this[2].toBigInt();
  }

  get guard(): Address {
    return this[3].toAddress();
  }

  get start(): BigInt {
    return this[4].toBigInt();
  }

  get end(): BigInt {
    return this[5].toBigInt();
  }

  get owner(): Address {
    return this[6].toAddress();
  }
}

export class RemainingTokensWithdrawn extends ethereum.Event {
  get params(): RemainingTokensWithdrawn__Params {
    return new RemainingTokensWithdrawn__Params(this);
  }
}

export class RemainingTokensWithdrawn__Params {
  _event: RemainingTokensWithdrawn;

  constructor(event: RemainingTokensWithdrawn) {
    this._event = event;
  }

  get boostId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokensClaimed extends ethereum.Event {
  get params(): TokensClaimed__Params {
    return new TokensClaimed__Params(this);
  }
}

export class TokensClaimed__Params {
  _event: TokensClaimed;

  constructor(event: TokensClaimed) {
    this._event = event;
  }

  get claim(): TokensClaimedClaimStruct {
    return changetype<TokensClaimedClaimStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class TokensClaimedClaimStruct extends ethereum.Tuple {
  get boostId(): BigInt {
    return this[0].toBigInt();
  }

  get recipient(): Address {
    return this[1].toAddress();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }
}

export class TokensDeposited extends ethereum.Event {
  get params(): TokensDeposited__Params {
    return new TokensDeposited__Params(this);
  }
}

export class TokensDeposited__Params {
  _event: TokensDeposited;

  constructor(event: TokensDeposited) {
    this._event = event;
  }

  get boostId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Boost__boostsResult {
  value0: string;
  value1: Address;
  value2: BigInt;
  value3: Address;
  value4: BigInt;
  value5: BigInt;
  value6: Address;

  constructor(
    value0: string,
    value1: Address,
    value2: BigInt,
    value3: Address,
    value4: BigInt,
    value5: BigInt,
    value6: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    return map;
  }
}

export class Boost extends ethereum.SmartContract {
  static bind(address: Address): Boost {
    return new Boost("Boost", address);
  }

  boosts(param0: BigInt): Boost__boostsResult {
    let result = super.call(
      "boosts",
      "boosts(uint256):(string,address,uint256,address,uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Boost__boostsResult(
      result[0].toString(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toAddress()
    );
  }

  try_boosts(param0: BigInt): ethereum.CallResult<Boost__boostsResult> {
    let result = super.tryCall(
      "boosts",
      "boosts(uint256):(string,address,uint256,address,uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Boost__boostsResult(
        value[0].toString(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toAddress()
      )
    );
  }

  claimed(param0: Address, param1: BigInt): boolean {
    let result = super.call("claimed", "claimed(address,uint256):(bool)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toBoolean();
  }

  try_claimed(param0: Address, param1: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("claimed", "claimed(address,uint256):(bool)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  eip712ClaimStructHash(): Bytes {
    let result = super.call(
      "eip712ClaimStructHash",
      "eip712ClaimStructHash():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_eip712ClaimStructHash(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "eip712ClaimStructHash",
      "eip712ClaimStructHash():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  nextBoostId(): BigInt {
    let result = super.call("nextBoostId", "nextBoostId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nextBoostId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nextBoostId", "nextBoostId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ClaimTokensCall extends ethereum.Call {
  get inputs(): ClaimTokensCall__Inputs {
    return new ClaimTokensCall__Inputs(this);
  }

  get outputs(): ClaimTokensCall__Outputs {
    return new ClaimTokensCall__Outputs(this);
  }
}

export class ClaimTokensCall__Inputs {
  _call: ClaimTokensCall;

  constructor(call: ClaimTokensCall) {
    this._call = call;
  }

  get claim(): ClaimTokensCallClaimStruct {
    return changetype<ClaimTokensCallClaimStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get signature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ClaimTokensCall__Outputs {
  _call: ClaimTokensCall;

  constructor(call: ClaimTokensCall) {
    this._call = call;
  }
}

export class ClaimTokensCallClaimStruct extends ethereum.Tuple {
  get boostId(): BigInt {
    return this[0].toBigInt();
  }

  get recipient(): Address {
    return this[1].toAddress();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }
}

export class CreateBoostCall extends ethereum.Call {
  get inputs(): CreateBoostCall__Inputs {
    return new CreateBoostCall__Inputs(this);
  }

  get outputs(): CreateBoostCall__Outputs {
    return new CreateBoostCall__Outputs(this);
  }
}

export class CreateBoostCall__Inputs {
  _call: CreateBoostCall;

  constructor(call: CreateBoostCall) {
    this._call = call;
  }

  get boost(): CreateBoostCallBoostStruct {
    return changetype<CreateBoostCallBoostStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class CreateBoostCall__Outputs {
  _call: CreateBoostCall;

  constructor(call: CreateBoostCall) {
    this._call = call;
  }
}

export class CreateBoostCallBoostStruct extends ethereum.Tuple {
  get strategyURI(): string {
    return this[0].toString();
  }

  get token(): Address {
    return this[1].toAddress();
  }

  get balance(): BigInt {
    return this[2].toBigInt();
  }

  get guard(): Address {
    return this[3].toAddress();
  }

  get start(): BigInt {
    return this[4].toBigInt();
  }

  get end(): BigInt {
    return this[5].toBigInt();
  }

  get owner(): Address {
    return this[6].toAddress();
  }
}

export class DepositTokensCall extends ethereum.Call {
  get inputs(): DepositTokensCall__Inputs {
    return new DepositTokensCall__Inputs(this);
  }

  get outputs(): DepositTokensCall__Outputs {
    return new DepositTokensCall__Outputs(this);
  }
}

export class DepositTokensCall__Inputs {
  _call: DepositTokensCall;

  constructor(call: DepositTokensCall) {
    this._call = call;
  }

  get boostId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositTokensCall__Outputs {
  _call: DepositTokensCall;

  constructor(call: DepositTokensCall) {
    this._call = call;
  }
}

export class WithdrawRemainingTokensCall extends ethereum.Call {
  get inputs(): WithdrawRemainingTokensCall__Inputs {
    return new WithdrawRemainingTokensCall__Inputs(this);
  }

  get outputs(): WithdrawRemainingTokensCall__Outputs {
    return new WithdrawRemainingTokensCall__Outputs(this);
  }
}

export class WithdrawRemainingTokensCall__Inputs {
  _call: WithdrawRemainingTokensCall;

  constructor(call: WithdrawRemainingTokensCall) {
    this._call = call;
  }

  get boostId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawRemainingTokensCall__Outputs {
  _call: WithdrawRemainingTokensCall;

  constructor(call: WithdrawRemainingTokensCall) {
    this._call = call;
  }
}
