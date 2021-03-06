// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Incentive extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("rewardToken", Value.fromBytes(Bytes.empty()));
    this.set("pool", Value.fromBytes(Bytes.empty()));
    this.set("startTime", Value.fromBigInt(BigInt.zero()));
    this.set("endTime", Value.fromBigInt(BigInt.zero()));
    this.set("refundee", Value.fromBytes(Bytes.empty()));
    this.set("reward", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Incentive entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Incentive entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Incentive", id.toString(), this);
    }
  }

  static load(id: string): Incentive | null {
    return changetype<Incentive | null>(store.get("Incentive", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rewardToken(): Bytes {
    let value = this.get("rewardToken");
    return value!.toBytes();
  }

  set rewardToken(value: Bytes) {
    this.set("rewardToken", Value.fromBytes(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    return value!.toBytes();
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value!.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    return value!.toBigInt();
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }

  get refundee(): Bytes {
    let value = this.get("refundee");
    return value!.toBytes();
  }

  set refundee(value: Bytes) {
    this.set("refundee", Value.fromBytes(value));
  }

  get reward(): BigInt {
    let value = this.get("reward");
    return value!.toBigInt();
  }

  set reward(value: BigInt) {
    this.set("reward", Value.fromBigInt(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value!.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }

  get incentivePositions(): Array<string> {
    let value = this.get("incentivePositions");
    return value!.toStringArray();
  }

  set incentivePositions(value: Array<string>) {
    this.set("incentivePositions", Value.fromStringArray(value));
  }
}

export class TokenStakedInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenStakedInfo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TokenStakedInfo entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TokenStakedInfo", id.toString(), this);
    }
  }

  static load(id: string): TokenStakedInfo | null {
    return changetype<TokenStakedInfo | null>(store.get("TokenStakedInfo", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get isStaked(): boolean {
    let value = this.get("isStaked");
    return value!.toBoolean();
  }

  set isStaked(value: boolean) {
    this.set("isStaked", Value.fromBoolean(value));
  }

  get incentives(): Array<string> {
    let value = this.get("incentives");
    return value!.toStringArray();
  }

  set incentives(value: Array<string>) {
    this.set("incentives", Value.fromStringArray(value));
  }
}

export class IncentivePosition extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("incentive", Value.fromString(""));
    this.set("tokenstakedinfo", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save IncentivePosition entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save IncentivePosition entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("IncentivePosition", id.toString(), this);
    }
  }

  static load(id: string): IncentivePosition | null {
    return changetype<IncentivePosition | null>(
      store.get("IncentivePosition", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get incentive(): string {
    let value = this.get("incentive");
    return value!.toString();
  }

  set incentive(value: string) {
    this.set("incentive", Value.fromString(value));
  }

  get tokenstakedinfo(): string {
    let value = this.get("tokenstakedinfo");
    return value!.toString();
  }

  set tokenstakedinfo(value: string) {
    this.set("tokenstakedinfo", Value.fromString(value));
  }
}
