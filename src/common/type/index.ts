/* eslint-disable camelcase */

export interface ApiResponse<T> {
  status?: number | string;
  message?: string;
  data?: T | null;
}

export interface AuthLoginResponse {
  jwt: string;
  refreshToken: string;
  result: string;
  resultMessage: string;
}

export interface User {
  userId?: string;
  password?: string;
  birthday?: string;
  inviteCode?: string;
  name?: string;
  phone?: string;
}

export interface AuthLoginRequest {
  password: string;
  userId: string;
}

export interface AuthRefreshTokenRequest {
  refresh: string;
}

export interface UserInfoResponse {
  admin_MEMO: string | null;
  app_PUSH: string;
  email_PUSH: string;
  introduce: string | null;
  join_TYPE: string;
  kakao_PUSH: string;
  name: string;
  nick_NAME: string | null;
  password: string | null;
  phone: string;
  point: number;
  profile_IMG: string | null;
  profile_IMG_ORG: string | null;
  reg_DATE: string;
  social_ID: string | null;
  user_EMAIL: string | null;
  user_STATUS: 'A' | 'S' | 'E'; // A : 활동, S : 정지, E : 탈퇴
  user_TYPE: 'U' | 'M'; // U : 유저, M : 관리자
  user_UUID: string;
}

export interface NoticeListRequest extends DefaultPaginationRequest {}

export interface NoticeListResponse {
  content: Notice[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface Notice {
  content: string;
  reg_DATE: string;
  seq: number;
  title: string;
}

interface Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: Sort;
  unpaged: false;
}

interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface CommonSmsSendAuthCheckRequest {
  authCode: string;
  seq: number;
}

export interface CommonSmsSendAuthCheckResponse {
  data: string | null;
  message: string;
  status: string;
}

export interface UserJoinRequest {
  birthday: string;
  invite_CODE: string;
  name: string;
  password: string;
  phone: string;
}

export interface UserJoinResponse {} // has not response data yet

export interface UserLogoutResponse {
  result: '0000' | '9999'; // 0000 : OK, 9999 : FAIL
  resultMessage: '성공' | '처리오류';
}

export interface SendSMSRequest {
  phoneNumber: string;
}
export interface SendSMSResponse {
  data: number;
  message: string;
  status: string;
}

export interface PaginationResponse {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface EventMendleResponse extends PaginationResponse {
  content: Event[];
}

export interface Event {
  eventCategory: 'M'; // M: 맨들맨들, S: 입점샵
  eventContent: string;
  eventContentImg: string;
  eventEndDate: string;
  eventStartDate: string;
  eventStatus: 'Y'; // Y: 활성, N: 비활성
  eventThumImg: string;
  eventTitle: string;
  eventType: 'B'; // B: 일반, Q: 즉시지급
  eventUuid: string;
  regDate: string;
}

interface EventContent {
  eventEndDate: string;
  eventTitle: string;
  eventCategory: 'M' | 'S'; // M: 맨들맨들, S: 입점샵
  eventContent: string;
  eventStatus: 'Y' | 'N'; // Y: 활성, N: 비활성
  regDate: string;
  eventUuid: string;
  eventType: 'B' | 'Q'; // B: 일반, Q: 즉시 지급
  eventThumImg: string;
  eventContentImg: string;
  eventStartDate: string;
}

export interface EventMendleRequest extends DefaultPaginationRequest {}

export interface DefaultPaginationRequest {
  direction?: 'ASC' | 'DESC';
  orderType?: 'REG_DATE';
  page?: number;
  size?: number;
}

export interface GetUserRequest {
  userUuid: string;
}

export interface GetUserResponse {
  user_UUID: string;
  point: number;
  user_EMAIL: string;
  user_TYPE: 'U' | 'M'; // U: 유저, M: 관리자
  user_STATUS: 'A' | 'S' | 'E'; // A: 활동, S: 정지, E: 탈퇴
  profile_IMG_ORG: string;
  profile_IMG: string;
  join_TYPE: string;
  social_ID: string;
  name: string;
  nick_NAME: string;
  password: string | null;
  introduce: string;
  app_PUSH: 'Y' | 'N';
  kakao_PUSH: 'Y' | 'N';
  email_PUSH: 'Y' | 'N';
  admin_MEMO: string;
  reg_DATE: string;
  phone: string;
}
