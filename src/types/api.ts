import type { components } from "./openapi";

// Auth-related schemas
export type AuthLoginRequest = components["schemas"]["AuthLoginRequest"];
export type AuthLoginResponse = components["schemas"]["AuthLoginResponse"];
export type AuthRegisterRequest = components["schemas"]["AuthRegisterRequest"];
export type AuthRegisterResponse = components["schemas"]["AuthRegisterResponse"];
export type AuthVerifyResponse = components["schemas"]["AuthVerifyResponse"];

// User-related schemas
export type User = components["schemas"]["User"];
export type UserType = components["schemas"]["UserType"];
export type UserUpdateRequest = components["schemas"]["UserUpdateRequest"];
export type UserGetResponse = components["schemas"]["UserGetResponse"];
export type UserUpdateResponse = components["schemas"]["UserUpdateResponse"];
