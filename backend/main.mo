import Text "mo:base/Text";

import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor {
  stable var counter : Nat = 0;

  public func increment() : async Nat {
    counter += 1;
    Debug.print("Counter incremented to: " # Nat.toText(counter));
    counter
  };

  public query func getCount() : async Nat {
    counter
  };
}