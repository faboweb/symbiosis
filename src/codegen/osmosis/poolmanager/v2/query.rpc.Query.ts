import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { SpotPriceRequest, SpotPriceResponse, IsAffiliatedRequest, IsAffiliatedResponse, RevenueShareLeaderboardRequest, RevenueShareLeaderboardResponse, RevenueShareSummaryRequest, RevenueShareSummaryResponse } from "./query";
export interface Query {
  /**
   * SpotPriceV2 defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   * The returned spot price has 36 decimal places. However, some of
   * modules perform sig fig rounding so most of the rightmost decimals can be
   * zeroes.
   */
  spotPriceV2(request: SpotPriceRequest): Promise<SpotPriceResponse>;
  isAffiliated(request: IsAffiliatedRequest): Promise<IsAffiliatedResponse>;
  revenueShareLeaderboard(request: RevenueShareLeaderboardRequest): Promise<RevenueShareLeaderboardResponse>;
  revenueShareSummary(request: RevenueShareSummaryRequest): Promise<RevenueShareSummaryResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.spotPriceV2 = this.spotPriceV2.bind(this);
    this.isAffiliated = this.isAffiliated.bind(this);
    this.revenueShareLeaderboard = this.revenueShareLeaderboard.bind(this);
    this.revenueShareSummary = this.revenueShareSummary.bind(this);
  }
  spotPriceV2(request: SpotPriceRequest): Promise<SpotPriceResponse> {
    const data = SpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v2.Query", "SpotPriceV2", data);
    return promise.then(data => SpotPriceResponse.decode(new BinaryReader(data)));
  }
  isAffiliated(request: IsAffiliatedRequest): Promise<IsAffiliatedResponse> {
    const data = IsAffiliatedRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v2.Query", "IsAffiliated", data);
    return promise.then(data => IsAffiliatedResponse.decode(new BinaryReader(data)));
  }
  revenueShareLeaderboard(request: RevenueShareLeaderboardRequest): Promise<RevenueShareLeaderboardResponse> {
    const data = RevenueShareLeaderboardRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v2.Query", "RevenueShareLeaderboard", data);
    return promise.then(data => RevenueShareLeaderboardResponse.decode(new BinaryReader(data)));
  }
  revenueShareSummary(request: RevenueShareSummaryRequest): Promise<RevenueShareSummaryResponse> {
    const data = RevenueShareSummaryRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v2.Query", "RevenueShareSummary", data);
    return promise.then(data => RevenueShareSummaryResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    spotPriceV2(request: SpotPriceRequest): Promise<SpotPriceResponse> {
      return queryService.spotPriceV2(request);
    },
    isAffiliated(request: IsAffiliatedRequest): Promise<IsAffiliatedResponse> {
      return queryService.isAffiliated(request);
    },
    revenueShareLeaderboard(request: RevenueShareLeaderboardRequest): Promise<RevenueShareLeaderboardResponse> {
      return queryService.revenueShareLeaderboard(request);
    },
    revenueShareSummary(request: RevenueShareSummaryRequest): Promise<RevenueShareSummaryResponse> {
      return queryService.revenueShareSummary(request);
    }
  };
};