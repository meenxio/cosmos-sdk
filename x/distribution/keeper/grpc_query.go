package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/cosmos/cosmos-sdk/x/distribution/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

var _ types.QueryServer = Keeper{}

// Params queries params of distribution module
func (k Keeper) Params(c context.Context, req *types.QueryParamsRequest) (*types.QueryParamsResponse, error) {
	if req == nil {
		return nil, status.Errorf(codes.InvalidArgument, "empty request")
	}
	ctx := sdk.UnwrapSDKContext(c)
	var params types.Params
	k.paramSpace.GetParamSet(ctx, &params)

	return &types.QueryParamsResponse{Params: params}, nil
}

// ValidatorOutstandingRewards queries rewards of a validator address
func (k Keeper) ValidatorOutstandingRewards(c context.Context, req *types.QueryValidatorOutstandingRewardsRequest) (*types.QueryValidatorOutstandingRewardsResponse, error) {
	if req.String() == "" || req.ValidatorAddress.Empty() {
		return nil, status.Errorf(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	var rewards types.ValidatorOutstandingRewards
	store := ctx.KVStore(k.storeKey)
	rewardsStore := prefix.NewStore(store, types.GetValidatorOutstandingRewardsKey(req.ValidatorAddress))

	res, err := query.Paginate(rewardsStore, req.Req, func(key []byte, value []byte) error {
		err := k.cdc.UnmarshalBinaryBare(value, &rewards)
		if err != nil {
			return err
		}
		return nil
	})

	if err != nil {
		return &types.QueryValidatorOutstandingRewardsResponse{}, nil
	}

	return &types.QueryValidatorOutstandingRewardsResponse{Rewards: rewards, Res: res}, nil
}

// ValidatorCommission queries accumulated commission for a validator
func (k Keeper) ValidatorCommission(c context.Context, req *types.QueryValidatorCommissionRequest) (*types.QueryValidatorCommissionResponse, error) {
	if req.String() == "" || req.ValidatorAddress.Empty() {
		return nil, status.Errorf(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	commission := k.GetValidatorAccumulatedCommission(ctx, req.ValidatorAddress)

	return &types.QueryValidatorCommissionResponse{Commission: commission}, nil
}

// ValidatorSlashes queries slash events of a validator
func (k Keeper) ValidatorSlashes(c context.Context, req *types.QueryValidatorSlashesRequest) (*types.QueryValidatorSlashesResponse, error) {
	if req.String() == "" || req.ValidatorAddress.Empty() || req.StartingHeight == 0 ||
		req.EndingHeight == 0 || req.StartingHeight > req.EndingHeight {
		return nil, status.Errorf(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	events := make([]types.ValidatorSlashEvent, 0)
	store := ctx.KVStore(k.storeKey)
	slashStoreWithStartingHeight := prefix.NewStore(store, types.GetValidatorSlashEventKeyPrefix(req.ValidatorAddress, req.StartingHeight))
	slashStoreWithEndingHeight := prefix.NewStore(slashStoreWithStartingHeight, types.GetValidatorSlashEventKeyPrefix(req.ValidatorAddress, req.EndingHeight))

	res, err := query.Paginate(slashStoreWithEndingHeight, req.Req, func(key []byte, value []byte) error {
		var result types.ValidatorSlashEvent
		err := k.cdc.UnmarshalBinaryBare(value, &result)

		if err != nil {
			return err
		}

		events = append(events, result)
		return nil
	})

	if err != nil {
		return &types.QueryValidatorSlashesResponse{}, err
	}

	return &types.QueryValidatorSlashesResponse{Slashes: events, Res: res}, nil
}

// DelegationRewards the total rewards accrued by a delegation
func (k Keeper) DelegationRewards(c context.Context, req *types.QueryDelegationRewardsRequest) (*types.QueryDelegationRewardsResponse, error) {
	if req.String() == "" || req.DelegatorAddress.Empty() || req.ValidatorAddress.Empty() {
		return nil, status.Errorf(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)

	val := k.stakingKeeper.Validator(ctx, req.ValidatorAddress)
	if val == nil {
		return nil, sdkerrors.Wrap(types.ErrNoValidatorExists, req.ValidatorAddress.String())
	}

	del := k.stakingKeeper.Delegation(ctx, req.DelegatorAddress, req.ValidatorAddress)
	if del == nil {
		return nil, types.ErrNoDelegationExists
	}

	endingPeriod := k.IncrementValidatorPeriod(ctx, val)
	rewards := k.CalculateDelegationRewards(ctx, val, del, endingPeriod)
	if rewards == nil {
		rewards = sdk.DecCoins{}
	}

	return &types.QueryDelegationRewardsResponse{Rewards: rewards}, nil
}

// DelegatorWithdrawAddress queries Query/delegatorWithdrawAddress
func (k Keeper) DelegatorWithdrawAddress(c context.Context, req *types.QueryDelegatorWithdrawAddressRequest) (*types.QueryDelegatorWithdrawAddressResponse, error) {
	if req.String() == "" || req.DelegatorAddress.Empty() {
		return nil, status.Errorf(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	withdrawAddr := k.GetDelegatorWithdrawAddr(ctx, req.DelegatorAddress)

	return &types.QueryDelegatorWithdrawAddressResponse{WithdrawAddress: withdrawAddr}, nil
}

// CommunityPool queries the community pool coins
func (k Keeper) CommunityPool(c context.Context, req *types.QueryCommunityPoolRequest) (*types.QueryCommunityPoolResponse, error) {
	if req.String() == "" {
		return nil, status.Errorf(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	pool := k.GetFeePoolCommunityCoins(ctx)
	if pool == nil {
		pool = sdk.DecCoins{}
	}

	return &types.QueryCommunityPoolResponse{Pool: pool}, nil
}
