import type { components } from "./openapi";

// Auth-related schemas
export type AuthLogin = components["schemas"]["AuthLogin"];
export type AuthRegister = components["schemas"]["AuthRegister"];
export type AuthToken = components["schemas"]["AuthToken"];

// User-related schemas
export type User = components["schemas"]["User"];
export type UserUpdate = components["schemas"]["UserUpdate"];
