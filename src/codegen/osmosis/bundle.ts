import * as _102 from "./downtime-detector/v1beta1/downtime_duration";
import * as _103 from "./downtime-detector/v1beta1/genesis";
import * as _104 from "./downtime-detector/v1beta1/query";
import * as _105 from "./epochs/genesis";
import * as _106 from "./epochs/query";
import * as _107 from "./gamm/pool-models/balancer/balancerPool";
import * as _108 from "./gamm/v1beta1/genesis";
import * as _109 from "./gamm/v1beta1/query";
import * as _110 from "./gamm/v1beta1/tx";
import * as _111 from "./gamm/pool-models/balancer/tx/tx";
import * as _112 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _113 from "./gamm/pool-models/stableswap/tx";
import * as _114 from "./gamm/v2/query";
import * as _115 from "./ibc-rate-limit/v1beta1/params";
import * as _116 from "./ibc-rate-limit/v1beta1/query";
import * as _117 from "./incentives/gauge";
import * as _118 from "./incentives/genesis";
import * as _119 from "./incentives/params";
import * as _120 from "./incentives/query";
import * as _121 from "./incentives/tx";
import * as _122 from "./lockup/genesis";
import * as _123 from "./lockup/lock";
import * as _124 from "./lockup/params";
import * as _125 from "./lockup/query";
import * as _126 from "./lockup/tx";
import * as _127 from "./mint/v1beta1/genesis";
import * as _128 from "./mint/v1beta1/mint";
import * as _129 from "./mint/v1beta1/query";
import * as _130 from "./pool-incentives/v1beta1/genesis";
import * as _131 from "./pool-incentives/v1beta1/gov";
import * as _132 from "./pool-incentives/v1beta1/incentives";
import * as _133 from "./pool-incentives/v1beta1/query";
import * as _134 from "./poolmanager/v1beta1/genesis";
import * as _135 from "./poolmanager/v1beta1/gov";
import * as _136 from "./poolmanager/v1beta1/module_route";
import * as _137 from "./poolmanager/v1beta1/query";
import * as _138 from "./poolmanager/v1beta1/swap_route";
import * as _139 from "./poolmanager/v1beta1/taker_fee_share";
import * as _140 from "./poolmanager/v1beta1/tracked_volume";
import * as _141 from "./poolmanager/v1beta1/tx";
import * as _142 from "./poolmanager/v2/query";
import * as _143 from "./protorev/v1beta1/genesis";
import * as _144 from "./protorev/v1beta1/gov";
import * as _145 from "./protorev/v1beta1/params";
import * as _146 from "./protorev/v1beta1/protorev";
import * as _147 from "./protorev/v1beta1/query";
import * as _148 from "./protorev/v1beta1/tx";
import * as _149 from "./sumtree/v1beta1/tree";
import * as _150 from "./superfluid/genesis";
import * as _151 from "./superfluid/params";
import * as _152 from "./superfluid/query";
import * as _153 from "./superfluid/superfluid";
import * as _154 from "./superfluid/tx";
import * as _155 from "./swaprouter/v1beta1/genesis";
import * as _156 from "./swaprouter/v1beta1/module_route";
import * as _157 from "./swaprouter/v1beta1/query";
import * as _158 from "./swaprouter/v1beta1/swap_route";
import * as _159 from "./swaprouter/v1beta1/tx";
import * as _160 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _161 from "./tokenfactory/v1beta1/genesis";
import * as _162 from "./tokenfactory/v1beta1/params";
import * as _163 from "./tokenfactory/v1beta1/query";
import * as _164 from "./tokenfactory/v1beta1/tx";
import * as _165 from "./twap/v1beta1/genesis";
import * as _166 from "./twap/v1beta1/query";
import * as _167 from "./twap/v1beta1/twap_record";
import * as _168 from "./txfees/v1beta1/feetoken";
import * as _169 from "./txfees/v1beta1/genesis";
import * as _170 from "./txfees/v1beta1/gov";
import * as _171 from "./txfees/v1beta1/query";
import * as _172 from "./valset-pref/v1beta1/query";
import * as _173 from "./valset-pref/v1beta1/state";
import * as _174 from "./valset-pref/v1beta1/tx";
import * as _263 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _264 from "./gamm/pool-models/stableswap/tx.amino";
import * as _265 from "./gamm/v1beta1/tx.amino";
import * as _266 from "./incentives/tx.amino";
import * as _267 from "./lockup/tx.amino";
import * as _268 from "./poolmanager/v1beta1/tx.amino";
import * as _269 from "./protorev/v1beta1/tx.amino";
import * as _270 from "./superfluid/tx.amino";
import * as _271 from "./swaprouter/v1beta1/tx.amino";
import * as _272 from "./tokenfactory/v1beta1/tx.amino";
import * as _273 from "./valset-pref/v1beta1/tx.amino";
import * as _274 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _275 from "./gamm/pool-models/stableswap/tx.registry";
import * as _276 from "./gamm/v1beta1/tx.registry";
import * as _277 from "./incentives/tx.registry";
import * as _278 from "./lockup/tx.registry";
import * as _279 from "./poolmanager/v1beta1/tx.registry";
import * as _280 from "./protorev/v1beta1/tx.registry";
import * as _281 from "./superfluid/tx.registry";
import * as _282 from "./swaprouter/v1beta1/tx.registry";
import * as _283 from "./tokenfactory/v1beta1/tx.registry";
import * as _284 from "./valset-pref/v1beta1/tx.registry";
import * as _285 from "./downtime-detector/v1beta1/query.lcd";
import * as _286 from "./epochs/query.lcd";
import * as _287 from "./gamm/v1beta1/query.lcd";
import * as _288 from "./gamm/v2/query.lcd";
import * as _289 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _290 from "./incentives/query.lcd";
import * as _291 from "./lockup/query.lcd";
import * as _292 from "./mint/v1beta1/query.lcd";
import * as _293 from "./pool-incentives/v1beta1/query.lcd";
import * as _294 from "./poolmanager/v1beta1/query.lcd";
import * as _295 from "./poolmanager/v2/query.lcd";
import * as _296 from "./protorev/v1beta1/query.lcd";
import * as _297 from "./superfluid/query.lcd";
import * as _298 from "./swaprouter/v1beta1/query.lcd";
import * as _299 from "./tokenfactory/v1beta1/query.lcd";
import * as _300 from "./twap/v1beta1/query.lcd";
import * as _301 from "./txfees/v1beta1/query.lcd";
import * as _302 from "./valset-pref/v1beta1/query.lcd";
import * as _303 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _304 from "./epochs/query.rpc.Query";
import * as _305 from "./gamm/v1beta1/query.rpc.Query";
import * as _306 from "./gamm/v2/query.rpc.Query";
import * as _307 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _308 from "./incentives/query.rpc.Query";
import * as _309 from "./lockup/query.rpc.Query";
import * as _310 from "./mint/v1beta1/query.rpc.Query";
import * as _311 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _312 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _313 from "./poolmanager/v2/query.rpc.Query";
import * as _314 from "./protorev/v1beta1/query.rpc.Query";
import * as _315 from "./superfluid/query.rpc.Query";
import * as _316 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _317 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _318 from "./twap/v1beta1/query.rpc.Query";
import * as _319 from "./txfees/v1beta1/query.rpc.Query";
import * as _320 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _321 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _322 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _323 from "./gamm/v1beta1/tx.rpc.msg";
import * as _324 from "./incentives/tx.rpc.msg";
import * as _325 from "./lockup/tx.rpc.msg";
import * as _326 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _327 from "./protorev/v1beta1/tx.rpc.msg";
import * as _328 from "./superfluid/tx.rpc.msg";
import * as _329 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _330 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _331 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _335 from "./lcd";
import * as _336 from "./rpc.query";
import * as _337 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._104,
      ..._285,
      ..._303
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._286,
      ..._304
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._265,
      ..._276,
      ..._287,
      ..._305,
      ..._323
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._111,
          ..._263,
          ..._274,
          ..._321
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._112,
          ..._113,
          ..._264,
          ..._275,
          ..._322
        };
      }
    }
    export const v2 = {
      ..._114,
      ..._288,
      ..._306
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._115,
      ..._116,
      ..._289,
      ..._307
    };
  }
  export const incentives = {
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._266,
    ..._277,
    ..._290,
    ..._308,
    ..._324
  };
  export const lockup = {
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._267,
    ..._278,
    ..._291,
    ..._309,
    ..._325
  };
  export namespace mint {
    export const v1beta1 = {
      ..._127,
      ..._128,
      ..._129,
      ..._292,
      ..._310
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._293,
      ..._311
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._268,
      ..._279,
      ..._294,
      ..._312,
      ..._326
    };
    export const v2 = {
      ..._142,
      ..._295,
      ..._313
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._269,
      ..._280,
      ..._296,
      ..._314,
      ..._327
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._149
    };
  }
  export const superfluid = {
    ..._150,
    ..._151,
    ..._152,
    ..._153,
    ..._154,
    ..._270,
    ..._281,
    ..._297,
    ..._315,
    ..._328
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._271,
      ..._282,
      ..._298,
      ..._316,
      ..._329
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._272,
      ..._283,
      ..._299,
      ..._317,
      ..._330
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._165,
      ..._166,
      ..._167,
      ..._300,
      ..._318
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._301,
      ..._319
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._172,
      ..._173,
      ..._174,
      ..._273,
      ..._284,
      ..._302,
      ..._320,
      ..._331
    };
  }
  export const ClientFactory = {
    ..._335,
    ..._336,
    ..._337
  };
}