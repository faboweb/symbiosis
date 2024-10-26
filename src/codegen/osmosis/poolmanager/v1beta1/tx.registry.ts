import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountOut, MsgSetDenomPairTakerFee, MsgSetTakerFeeShareAgreementForDenom, MsgSetRegisteredAlloyedPool, MsgSetRevenueShareUser } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn", MsgSwapExactAmountIn], ["/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut", MsgSwapExactAmountOut], ["/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn", MsgSplitRouteSwapExactAmountIn], ["/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut", MsgSplitRouteSwapExactAmountOut], ["/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee", MsgSetDenomPairTakerFee], ["/osmosis.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom", MsgSetTakerFeeShareAgreementForDenom], ["/osmosis.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool", MsgSetRegisteredAlloyedPool], ["/osmosis.poolmanager.v1beta1.MsgSetRevenueShareUser", MsgSetRevenueShareUser]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.encode(value).finish()
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.encode(value).finish()
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
        value: MsgSplitRouteSwapExactAmountIn.encode(value).finish()
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
        value: MsgSplitRouteSwapExactAmountOut.encode(value).finish()
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
        value: MsgSetDenomPairTakerFee.encode(value).finish()
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom",
        value: MsgSetTakerFeeShareAgreementForDenom.encode(value).finish()
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool",
        value: MsgSetRegisteredAlloyedPool.encode(value).finish()
      };
    },
    setRevenueShareUser(value: MsgSetRevenueShareUser) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetRevenueShareUser",
        value: MsgSetRevenueShareUser.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
        value
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
        value
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
        value
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom",
        value
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool",
        value
      };
    },
    setRevenueShareUser(value: MsgSetRevenueShareUser) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetRevenueShareUser",
        value
      };
    }
  },
  fromPartial: {
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.fromPartial(value)
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.fromPartial(value)
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
        value: MsgSplitRouteSwapExactAmountIn.fromPartial(value)
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
        value: MsgSplitRouteSwapExactAmountOut.fromPartial(value)
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
        value: MsgSetDenomPairTakerFee.fromPartial(value)
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom",
        value: MsgSetTakerFeeShareAgreementForDenom.fromPartial(value)
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool",
        value: MsgSetRegisteredAlloyedPool.fromPartial(value)
      };
    },
    setRevenueShareUser(value: MsgSetRevenueShareUser) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetRevenueShareUser",
        value: MsgSetRevenueShareUser.fromPartial(value)
      };
    }
  }
};