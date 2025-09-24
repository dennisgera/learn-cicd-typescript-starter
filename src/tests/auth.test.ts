import { getAPIKey } from "../api/auth.js";
import { describe, it, expect } from "vitest";

describe("getAPIKey", () => {
  it("should return null if the authorization header is not present", () => {
    const headers = {};
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });

  it("should return the API key from the headers", () => {
    const headers = { authorization: "ApiKey 123" };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBe("124");
  });
});
