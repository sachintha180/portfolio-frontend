import type { components } from "./openapi";

// Auth-related schemas
export type AuthLoginRequest = components["schemas"]["AuthLoginRequest"];
export type AuthLoginResponse = components["schemas"]["AuthLoginResponse"];
export type AuthRegisterRequest = components["schemas"]["AuthRegisterRequest"];
export type AuthRegisterResponse =
  components["schemas"]["AuthRegisterResponse"];
export type AuthVerifyResponse = components["schemas"]["AuthVerifyResponse"];

// User-related schemas
export type User = components["schemas"]["User"];
export type UserType = components["schemas"]["UserType"];
export type UserUpdateRequest = components["schemas"]["UserUpdateRequest"];
export type UserGetResponse = components["schemas"]["UserGetResponse"];
export type UserUpdateResponse = components["schemas"]["UserUpdateResponse"];

// Syllabus-related schemas
export type Syllabus = components["schemas"]["Syllabus"];
export type SyllabusCreateRequest =
  components["schemas"]["SyllabusCreateRequest"];
export type SyllabusCreateResponse =
  components["schemas"]["SyllabusCreateResponse"];
export type SyllabusGetResponse = components["schemas"]["SyllabusGetResponse"];
export type SyllabusesGetResponse =
  components["schemas"]["SyllabusesGetResponse"];
export type SyllabusUpdateRequest =
  components["schemas"]["SyllabusUpdateRequest"];
export type SyllabusUpdateResponse =
  components["schemas"]["SyllabusUpdateResponse"];
