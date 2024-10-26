import { LCDClient } from "@cosmology/lcd";
import { SpotPriceRequest, SpotPriceResponseSDKType, IsAffiliatedRequest, IsAffiliatedResponseSDKType, RevenueShareLeaderboardRequest, RevenueShareLeaderboardResponseSDKType, RevenueShareSummaryRequest, RevenueShareSummaryResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.spotPriceV2 = this.spotPriceV2.bind(this);
    this.isAffiliated = this.isAffiliated.bind(this);
    this.revenueShareLeaderboard = this.revenueShareLeaderboard.bind(this);
    this.revenueShareSummary = this.revenueShareSummary.bind(this);
  }
  /* SpotPriceV2 defines a gRPC query handler that returns the spot price given
   a base denomination and a quote denomination.
   The returned spot price has 36 decimal places. However, some of
   modules perform sig fig rounding so most of the rightmost decimals can be
   zeroes. */
  async spotPriceV2(params: SpotPriceRequest): Promise<SpotPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.baseAssetDenom !== "undefined") {
      options.params.base_asset_denom = params.baseAssetDenom;
    }
    if (typeof params?.quoteAssetDenom !== "undefined") {
      options.params.quote_asset_denom = params.quoteAssetDenom;
    }
    const endpoint = `osmosis/poolmanager/v2/pools/${params.poolId}/prices`;
    return await this.req.get<SpotPriceResponseSDKType>(endpoint, options);
  }
  /* IsAffiliated */
  async isAffiliated(params: IsAffiliatedRequest): Promise<IsAffiliatedResponseSDKType> {
    const endpoint = `osmosis/poolmanager/v2/affiliated/${params.address}`;
    return await this.req.get<IsAffiliatedResponseSDKType>(endpoint);
  }
  /* RevenueShareLeaderboard */
  async revenueShareLeaderboard(params: RevenueShareLeaderboardRequest): Promise<RevenueShareLeaderboardResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    const endpoint = `osmosis/poolmanager/v2/revenue_share_leaderboard`;
    return await this.req.get<RevenueShareLeaderboardResponseSDKType>(endpoint, options);
  }
  /* RevenueShareSummary */
  async revenueShareSummary(params: RevenueShareSummaryRequest): Promise<RevenueShareSummaryResponseSDKType> {
    const endpoint = `osmosis/poolmanager/v2/revenue_share_summary/${params.address}`;
    return await this.req.get<RevenueShareSummaryResponseSDKType>(endpoint);
  }
}