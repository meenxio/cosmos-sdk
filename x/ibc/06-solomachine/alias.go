package solomachine

// nolint
// autogenerated code using github.com/rigelrozanski/multitool
// aliases generated for the following subdirectories:
// ALIASGEN: github.com/cosmos/cosmos-sdk/x/ibc/06-solomachine/types

import (
	"github.com/cosmos/cosmos-sdk/x/ibc/06-solomachine/types"
)

const (
	SubModuleName = types.SubModuleName
)

var (
	// functions aliases
	InitializeFromMsg              = types.InitializeFromMsg
	NewClientState                 = types.NewClientState
	RegisterCodec                  = types.RegisterCodec
	SetSubModuleCodec              = types.SetSubModuleCodec
	NewMsgCreateClient             = types.NewMsgCreateClient
	NewMsgUpdateClient             = types.NewMsgUpdateClient
	NewMsgSubmitClientMisbehaviour = types.NewMsgSubmitClientMisbehaviour
	CheckSignature                 = types.CheckSignature

	// variable aliases
	SubModuleCdc               = types.SubModuleCdc
	ErrInvalidHeader           = types.ErrInvalidHeader
	ErrInvalidSequence         = types.ErrInvalidSequence
	ErrInvalidSignatureAndData = types.ErrInvalidSignatureAndData
)

type (
	ClientState                 = types.ClientState
	ConsensusState              = types.ConsensusState
	Evidence                    = types.Evidence
	SignatureAndData            = types.SignatureAndData
	Header                      = types.Header
	MsgCreateClient             = types.MsgCreateClient
	MsgUpdateClient             = types.MsgUpdateClient
	MsgSubmitClientMisbehaviour = types.MsgSubmitClientMisbehaviour
)
