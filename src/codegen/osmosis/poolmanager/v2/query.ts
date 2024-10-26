import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}
export interface SpotPriceRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v2.SpotPriceRequest";
  value: Uint8Array;
}
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestAmino {
  pool_id?: string;
  base_asset_denom?: string;
  quote_asset_denom?: string;
}
export interface SpotPriceRequestAminoMsg {
  type: "osmosis/poolmanager/v2/spot-price-request";
  value: SpotPriceRequestAmino;
}
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponse {
  /** String of the BigDec. Ex) 10.203uatom */
  spotPrice: string;
}
export interface SpotPriceResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v2.SpotPriceResponse";
  value: Uint8Array;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseAmino {
  /** String of the BigDec. Ex) 10.203uatom */
  spot_price?: string;
}
export interface SpotPriceResponseAminoMsg {
  type: "osmosis/poolmanager/v2/spot-price-response";
  value: SpotPriceResponseAmino;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseSDKType {
  spot_price: string;
}
export interface IsAffiliatedRequest {
  address: string;
}
export interface IsAffiliatedRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v2.IsAffiliatedRequest";
  value: Uint8Array;
}
export interface IsAffiliatedRequestAmino {
  address?: string;
}
export interface IsAffiliatedRequestAminoMsg {
  type: "osmosis/poolmanager/v2/is-affiliated-request";
  value: IsAffiliatedRequestAmino;
}
export interface IsAffiliatedRequestSDKType {
  address: string;
}
export interface IsAffiliatedResponse {
  isAffiliated: boolean;
}
export interface IsAffiliatedResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v2.IsAffiliatedResponse";
  value: Uint8Array;
}
export interface IsAffiliatedResponseAmino {
  is_affiliated?: boolean;
}
export interface IsAffiliatedResponseAminoMsg {
  type: "osmosis/poolmanager/v2/is-affiliated-response";
  value: IsAffiliatedResponseAmino;
}
export interface IsAffiliatedResponseSDKType {
  is_affiliated: boolean;
}
export interface RevenueShareSummaryRequest {
  address: string;
}
export interface RevenueShareSummaryRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v2.RevenueShareSummaryRequest";
  value: Uint8Array;
}
export interface RevenueShareSummaryRequestAmino {
  address?: string;
}
export interface RevenueShareSummaryRequestAminoMsg {
  type: "osmosis/poolmanager/v2/revenue-share-summary-request";
  value: RevenueShareSummaryRequestAmino;
}
export interface RevenueShareSummaryRequestSDKType {
  address: string;
}
export interface RevenueShareSummaryResponse {
  address: string;
  signups: bigint;
}
export interface RevenueShareSummaryResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v2.RevenueShareSummaryResponse";
  value: Uint8Array;
}
export interface RevenueShareSummaryResponseAmino {
  address?: string;
  signups?: string;
}
export interface RevenueShareSummaryResponseAminoMsg {
  type: "osmosis/poolmanager/v2/revenue-share-summary-response";
  value: RevenueShareSummaryResponseAmino;
}
export interface RevenueShareSummaryResponseSDKType {
  address: string;
  signups: bigint;
}
export interface RevenueShareLeaderboardRequest {
  address: string;
}
export interface RevenueShareLeaderboardRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v2.RevenueShareLeaderboardRequest";
  value: Uint8Array;
}
export interface RevenueShareLeaderboardRequestAmino {
  address?: string;
}
export interface RevenueShareLeaderboardRequestAminoMsg {
  type: "osmosis/poolmanager/v2/revenue-share-leaderboard-request";
  value: RevenueShareLeaderboardRequestAmino;
}
export interface RevenueShareLeaderboardRequestSDKType {
  address: string;
}
export interface RevenueShareLeaderboardResponse {
  leaderboard: RevenueShareSummaryResponse[];
}
export interface RevenueShareLeaderboardResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v2.RevenueShareLeaderboardResponse";
  value: Uint8Array;
}
export interface RevenueShareLeaderboardResponseAmino {
  leaderboard?: RevenueShareSummaryResponseAmino[];
}
export interface RevenueShareLeaderboardResponseAminoMsg {
  type: "osmosis/poolmanager/v2/revenue-share-leaderboard-response";
  value: RevenueShareLeaderboardResponseAmino;
}
export interface RevenueShareLeaderboardResponseSDKType {
  leaderboard: RevenueShareSummaryResponseSDKType[];
}
function createBaseSpotPriceRequest(): SpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: "",
    quoteAssetDenom: ""
  };
}
export const SpotPriceRequest = {
  typeUrl: "/osmosis.poolmanager.v2.SpotPriceRequest",
  encode(message: SpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        case 3:
          message.quoteAssetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SpotPriceRequest>): SpotPriceRequest {
    const message = createBaseSpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    return message;
  },
  fromAmino(object: SpotPriceRequestAmino): SpotPriceRequest {
    const message = createBaseSpotPriceRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset_denom !== undefined && object.base_asset_denom !== null) {
      message.baseAssetDenom = object.base_asset_denom;
    }
    if (object.quote_asset_denom !== undefined && object.quote_asset_denom !== null) {
      message.quoteAssetDenom = object.quote_asset_denom;
    }
    return message;
  },
  toAmino(message: SpotPriceRequest): SpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset_denom = message.baseAssetDenom === "" ? undefined : message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom === "" ? undefined : message.quoteAssetDenom;
    return obj;
  },
  fromAminoMsg(object: SpotPriceRequestAminoMsg): SpotPriceRequest {
    return SpotPriceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: SpotPriceRequest): SpotPriceRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/v2/spot-price-request",
      value: SpotPriceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: SpotPriceRequestProtoMsg): SpotPriceRequest {
    return SpotPriceRequest.decode(message.value);
  },
  toProto(message: SpotPriceRequest): Uint8Array {
    return SpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: SpotPriceRequest): SpotPriceRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v2.SpotPriceRequest",
      value: SpotPriceRequest.encode(message).finish()
    };
  }
};
function createBaseSpotPriceResponse(): SpotPriceResponse {
  return {
    spotPrice: ""
  };
}
export const SpotPriceResponse = {
  typeUrl: "/osmosis.poolmanager.v2.SpotPriceResponse",
  encode(message: SpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SpotPriceResponse>): SpotPriceResponse {
    const message = createBaseSpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromAmino(object: SpotPriceResponseAmino): SpotPriceResponse {
    const message = createBaseSpotPriceResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: SpotPriceResponse): SpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    return obj;
  },
  fromAminoMsg(object: SpotPriceResponseAminoMsg): SpotPriceResponse {
    return SpotPriceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: SpotPriceResponse): SpotPriceResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/v2/spot-price-response",
      value: SpotPriceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: SpotPriceResponseProtoMsg): SpotPriceResponse {
    return SpotPriceResponse.decode(message.value);
  },
  toProto(message: SpotPriceResponse): Uint8Array {
    return SpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: SpotPriceResponse): SpotPriceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v2.SpotPriceResponse",
      value: SpotPriceResponse.encode(message).finish()
    };
  }
};
function createBaseIsAffiliatedRequest(): IsAffiliatedRequest {
  return {
    address: ""
  };
}
export const IsAffiliatedRequest = {
  typeUrl: "/osmosis.poolmanager.v2.IsAffiliatedRequest",
  encode(message: IsAffiliatedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IsAffiliatedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsAffiliatedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IsAffiliatedRequest>): IsAffiliatedRequest {
    const message = createBaseIsAffiliatedRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: IsAffiliatedRequestAmino): IsAffiliatedRequest {
    const message = createBaseIsAffiliatedRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: IsAffiliatedRequest): IsAffiliatedRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: IsAffiliatedRequestAminoMsg): IsAffiliatedRequest {
    return IsAffiliatedRequest.fromAmino(object.value);
  },
  toAminoMsg(message: IsAffiliatedRequest): IsAffiliatedRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/v2/is-affiliated-request",
      value: IsAffiliatedRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: IsAffiliatedRequestProtoMsg): IsAffiliatedRequest {
    return IsAffiliatedRequest.decode(message.value);
  },
  toProto(message: IsAffiliatedRequest): Uint8Array {
    return IsAffiliatedRequest.encode(message).finish();
  },
  toProtoMsg(message: IsAffiliatedRequest): IsAffiliatedRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v2.IsAffiliatedRequest",
      value: IsAffiliatedRequest.encode(message).finish()
    };
  }
};
function createBaseIsAffiliatedResponse(): IsAffiliatedResponse {
  return {
    isAffiliated: false
  };
}
export const IsAffiliatedResponse = {
  typeUrl: "/osmosis.poolmanager.v2.IsAffiliatedResponse",
  encode(message: IsAffiliatedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isAffiliated === true) {
      writer.uint32(8).bool(message.isAffiliated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IsAffiliatedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsAffiliatedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isAffiliated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IsAffiliatedResponse>): IsAffiliatedResponse {
    const message = createBaseIsAffiliatedResponse();
    message.isAffiliated = object.isAffiliated ?? false;
    return message;
  },
  fromAmino(object: IsAffiliatedResponseAmino): IsAffiliatedResponse {
    const message = createBaseIsAffiliatedResponse();
    if (object.is_affiliated !== undefined && object.is_affiliated !== null) {
      message.isAffiliated = object.is_affiliated;
    }
    return message;
  },
  toAmino(message: IsAffiliatedResponse): IsAffiliatedResponseAmino {
    const obj: any = {};
    obj.is_affiliated = message.isAffiliated === false ? undefined : message.isAffiliated;
    return obj;
  },
  fromAminoMsg(object: IsAffiliatedResponseAminoMsg): IsAffiliatedResponse {
    return IsAffiliatedResponse.fromAmino(object.value);
  },
  toAminoMsg(message: IsAffiliatedResponse): IsAffiliatedResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/v2/is-affiliated-response",
      value: IsAffiliatedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: IsAffiliatedResponseProtoMsg): IsAffiliatedResponse {
    return IsAffiliatedResponse.decode(message.value);
  },
  toProto(message: IsAffiliatedResponse): Uint8Array {
    return IsAffiliatedResponse.encode(message).finish();
  },
  toProtoMsg(message: IsAffiliatedResponse): IsAffiliatedResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v2.IsAffiliatedResponse",
      value: IsAffiliatedResponse.encode(message).finish()
    };
  }
};
function createBaseRevenueShareSummaryRequest(): RevenueShareSummaryRequest {
  return {
    address: ""
  };
}
export const RevenueShareSummaryRequest = {
  typeUrl: "/osmosis.poolmanager.v2.RevenueShareSummaryRequest",
  encode(message: RevenueShareSummaryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevenueShareSummaryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevenueShareSummaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RevenueShareSummaryRequest>): RevenueShareSummaryRequest {
    const message = createBaseRevenueShareSummaryRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: RevenueShareSummaryRequestAmino): RevenueShareSummaryRequest {
    const message = createBaseRevenueShareSummaryRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: RevenueShareSummaryRequest): RevenueShareSummaryRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: RevenueShareSummaryRequestAminoMsg): RevenueShareSummaryRequest {
    return RevenueShareSummaryRequest.fromAmino(object.value);
  },
  toAminoMsg(message: RevenueShareSummaryRequest): RevenueShareSummaryRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/v2/revenue-share-summary-request",
      value: RevenueShareSummaryRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: RevenueShareSummaryRequestProtoMsg): RevenueShareSummaryRequest {
    return RevenueShareSummaryRequest.decode(message.value);
  },
  toProto(message: RevenueShareSummaryRequest): Uint8Array {
    return RevenueShareSummaryRequest.encode(message).finish();
  },
  toProtoMsg(message: RevenueShareSummaryRequest): RevenueShareSummaryRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v2.RevenueShareSummaryRequest",
      value: RevenueShareSummaryRequest.encode(message).finish()
    };
  }
};
function createBaseRevenueShareSummaryResponse(): RevenueShareSummaryResponse {
  return {
    address: "",
    signups: BigInt(0)
  };
}
export const RevenueShareSummaryResponse = {
  typeUrl: "/osmosis.poolmanager.v2.RevenueShareSummaryResponse",
  encode(message: RevenueShareSummaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.signups !== BigInt(0)) {
      writer.uint32(16).uint64(message.signups);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevenueShareSummaryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevenueShareSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.signups = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RevenueShareSummaryResponse>): RevenueShareSummaryResponse {
    const message = createBaseRevenueShareSummaryResponse();
    message.address = object.address ?? "";
    message.signups = object.signups !== undefined && object.signups !== null ? BigInt(object.signups.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RevenueShareSummaryResponseAmino): RevenueShareSummaryResponse {
    const message = createBaseRevenueShareSummaryResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.signups !== undefined && object.signups !== null) {
      message.signups = BigInt(object.signups);
    }
    return message;
  },
  toAmino(message: RevenueShareSummaryResponse): RevenueShareSummaryResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.signups = message.signups !== BigInt(0) ? message.signups?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RevenueShareSummaryResponseAminoMsg): RevenueShareSummaryResponse {
    return RevenueShareSummaryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: RevenueShareSummaryResponse): RevenueShareSummaryResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/v2/revenue-share-summary-response",
      value: RevenueShareSummaryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: RevenueShareSummaryResponseProtoMsg): RevenueShareSummaryResponse {
    return RevenueShareSummaryResponse.decode(message.value);
  },
  toProto(message: RevenueShareSummaryResponse): Uint8Array {
    return RevenueShareSummaryResponse.encode(message).finish();
  },
  toProtoMsg(message: RevenueShareSummaryResponse): RevenueShareSummaryResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v2.RevenueShareSummaryResponse",
      value: RevenueShareSummaryResponse.encode(message).finish()
    };
  }
};
function createBaseRevenueShareLeaderboardRequest(): RevenueShareLeaderboardRequest {
  return {
    address: ""
  };
}
export const RevenueShareLeaderboardRequest = {
  typeUrl: "/osmosis.poolmanager.v2.RevenueShareLeaderboardRequest",
  encode(message: RevenueShareLeaderboardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevenueShareLeaderboardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevenueShareLeaderboardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RevenueShareLeaderboardRequest>): RevenueShareLeaderboardRequest {
    const message = createBaseRevenueShareLeaderboardRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: RevenueShareLeaderboardRequestAmino): RevenueShareLeaderboardRequest {
    const message = createBaseRevenueShareLeaderboardRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: RevenueShareLeaderboardRequest): RevenueShareLeaderboardRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: RevenueShareLeaderboardRequestAminoMsg): RevenueShareLeaderboardRequest {
    return RevenueShareLeaderboardRequest.fromAmino(object.value);
  },
  toAminoMsg(message: RevenueShareLeaderboardRequest): RevenueShareLeaderboardRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/v2/revenue-share-leaderboard-request",
      value: RevenueShareLeaderboardRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: RevenueShareLeaderboardRequestProtoMsg): RevenueShareLeaderboardRequest {
    return RevenueShareLeaderboardRequest.decode(message.value);
  },
  toProto(message: RevenueShareLeaderboardRequest): Uint8Array {
    return RevenueShareLeaderboardRequest.encode(message).finish();
  },
  toProtoMsg(message: RevenueShareLeaderboardRequest): RevenueShareLeaderboardRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v2.RevenueShareLeaderboardRequest",
      value: RevenueShareLeaderboardRequest.encode(message).finish()
    };
  }
};
function createBaseRevenueShareLeaderboardResponse(): RevenueShareLeaderboardResponse {
  return {
    leaderboard: []
  };
}
export const RevenueShareLeaderboardResponse = {
  typeUrl: "/osmosis.poolmanager.v2.RevenueShareLeaderboardResponse",
  encode(message: RevenueShareLeaderboardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.leaderboard) {
      RevenueShareSummaryResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevenueShareLeaderboardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevenueShareLeaderboardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaderboard.push(RevenueShareSummaryResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RevenueShareLeaderboardResponse>): RevenueShareLeaderboardResponse {
    const message = createBaseRevenueShareLeaderboardResponse();
    message.leaderboard = object.leaderboard?.map(e => RevenueShareSummaryResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RevenueShareLeaderboardResponseAmino): RevenueShareLeaderboardResponse {
    const message = createBaseRevenueShareLeaderboardResponse();
    message.leaderboard = object.leaderboard?.map(e => RevenueShareSummaryResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RevenueShareLeaderboardResponse): RevenueShareLeaderboardResponseAmino {
    const obj: any = {};
    if (message.leaderboard) {
      obj.leaderboard = message.leaderboard.map(e => e ? RevenueShareSummaryResponse.toAmino(e) : undefined);
    } else {
      obj.leaderboard = message.leaderboard;
    }
    return obj;
  },
  fromAminoMsg(object: RevenueShareLeaderboardResponseAminoMsg): RevenueShareLeaderboardResponse {
    return RevenueShareLeaderboardResponse.fromAmino(object.value);
  },
  toAminoMsg(message: RevenueShareLeaderboardResponse): RevenueShareLeaderboardResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/v2/revenue-share-leaderboard-response",
      value: RevenueShareLeaderboardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: RevenueShareLeaderboardResponseProtoMsg): RevenueShareLeaderboardResponse {
    return RevenueShareLeaderboardResponse.decode(message.value);
  },
  toProto(message: RevenueShareLeaderboardResponse): Uint8Array {
    return RevenueShareLeaderboardResponse.encode(message).finish();
  },
  toProtoMsg(message: RevenueShareLeaderboardResponse): RevenueShareLeaderboardResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v2.RevenueShareLeaderboardResponse",
      value: RevenueShareLeaderboardResponse.encode(message).finish()
    };
  }
};