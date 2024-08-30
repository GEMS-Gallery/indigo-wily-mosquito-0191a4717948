export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getCount' : IDL.Func([], [IDL.Nat], ['query']),
    'increment' : IDL.Func([], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
