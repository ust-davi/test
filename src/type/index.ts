/* eslint-disable camelcase */
import {
  PaginationResponse,
  DefaultPaginationRequest,
} from '../common/type/index';

// 임시
export interface Event {
  id: number;
  title: string;
  imgSrc: string;
  alt: string;
  status: string;
  date: string;
}

export interface StoreCounselingRequest {
  address1: string;
  address2: string;
  company_NAME: string;
  owner_NAME: string;
  phone: string;
}

export interface StoreCounselingResponse {
  data: {
    address1: string;
    address2: string;
    company_NAME: string;
    owner_NAME: string;
    phone: string;
    seq: number;
  };
  message: string;
  status: string;
}

export interface BannerMainResponse {
  data: BannerMain[];
  message: string;
  status: string;
}

export interface BannerMain {
  bannerOrder: number;
  bannerSeq: number;
  bannerUrl: string;
  platform: 'APP' | 'WEB'; // 프론트, 어드민
  title: string;
  type: 'M' | 'S'; // 메인, 서브
}

export interface NoticeWriteRequest {
  title: string;
  content: string;
}

export interface CommonAddressListResponse {
  data: Sido[];
  message: string;
  status: string;
}

export interface Sido {
  sidoKey: number;
  sido: string;
}

export interface CommonAddressDetailRequest {
  sidoKey: string;
}

export interface CommonAddressListDetailResponse {
  data: Gugun[];
  message: string;
  status: string;
}

interface Gugun {
  gugun: string;
}

export interface GetReviewRowRequest extends DefaultPaginationRequest {
  startDate: string;
  endDate: string;
  starScore?: number;
}

export interface GetReviewRowResponse extends PaginationResponse {
  content: ReviewRow[];
}

export interface ReviewRow {
  answer: string | null;
  categoryMain: number | null;
  categoryMainName: string | null;
  categorySub: number | null;
  categorySubName: string | null;
  name: string;
  paymentMstUuid: string;
  paymentUuid: string;
  productName: string;
  productUuid: string;
  recommend: string;
  regDate: string;
  reviewUuid: string;
  starScore: number;
  storeName: string;
  storeUuid: string;
  userUuid: string;
}

export interface GetReviewShopRequest extends DefaultPaginationRequest {
  startDate: string;
  endDate: string;
  starScore?: number;
}

export interface GetReviewShopResponse extends PaginationResponse {
  content: ReviewShop[];
}

export interface ReviewShop {
  recomCnt: number;
  reviewCnt: number;
  totalPayCnt: number;
  storeUuid: string;
  reviewAvg: number;
  storeName: string;
  answerCnt: number;
  mngName: string | null;
}

export interface GetReviewUserRequest {
  userUuid: string;
}

export interface GetReviewUserResponse {
  categoryMainName: string;
  storeUuid: string;
  reviewUuid: string;
  regDate: string;
  categorySub: number;
  recommend: 'Y' | 'N';
  starScore: number;
  productName: string;
  paymentUuid: string;
  productUuid: string;
  categoryMain: number;
  answer: string | null;
  paymentMstUuid: string;
  userUuid: string;
  name: string;
  storeName: string;
  reviewimage?: ReviewImage[];
  categorySubName: string;
}

interface ReviewImage {
  imgPath: string;
  reviewUuid: string;
  regDate: string;
  imgOrg: string;
  seq: number;
}

export interface GetReviewShopDetailRequest extends DefaultPaginationRequest {
  starScore?: number;
  startDate: string;
  endDate: string;
  storeUuid: string;
}

export interface GetReviewShopDetailResponse extends PaginationResponse {
  content: {
    categoryMainName: string | null;
    storeUuid: string;
    reviewUuid: string;
    regDate: string;
    categorySub: null;
    recommend: 'Y' | 'N';
    starScore: number;
    productName: string;
    paymentUuid: string;
    productUuid: string;
    categoryMain: null;
    answer: string | null;
    paymentMstUuid: string;
    userUuid: string;
    name: string;
    storeName: string;
    categorySubName: null;
  }[];
}

export interface GetCategorySpecialRequest
  extends Omit<DefaultPaginationRequest, 'orderType'> {
  orderType?: 'CATEGORY_ORDER';
}

export interface GetCategorySpecialResponse {
  categoryOrder: number;
  regDate: string;
  useYn: 'Y' | 'N'; // 공개 / 비공개 여부
  id: number;
  categoryName: string;
}

export interface GetCategoryTermsRequest
  extends Omit<DefaultPaginationRequest, 'orderType'> {
  orderType?: 'TERMS_ORDER';
}

export interface GetCategoryTermsResponse {
  regDate: string;
  seq: number;
  terms: string;
  termsOrder: number;
  useYn: 'Y' | 'N';
}

export interface GetCommonCorpValidateRequest {
  b_no: string; // 사업자번호, format : only number
  p_nm: string; // 대표자 이름
  start_dt: string; // format: YYYYMMDD
}

export interface GetCommonCorpValidateResponse {
  b_no: string;
  valid: string;
  request_param: {
    b_no: string;
    start_dt: string;
    p_nm: string;
  };
  status: {
    b_no: string;
    b_stt: string;
    b_stt_cd: string;
    tax_type: string;
    tax_type_cd: string;
    end_dt: string;
    utcc_yn: string;
    tax_type_change_dt: string;
    invoice_apply_dt: string;
  };
}

export interface GetCommonCodeRequest {
  DAE_CODE: string;
}

export interface GetCommonCodeResponse {
  soCode: string;
  daeCode: string;
  codeName: string;
}

export interface PostCommonSalesRequest {
  corp_NUMBER: string;
  end_HOUR: string;
  gugun: string;
  mng_NAME: string;
  sales_ID: string;
  sales_NAME: string;
  sales_PRODUCT: {
    categoryMain: number;
    categorySub: number;
    productGender: 'M' | 'F' | 'A';
    productName: string;
    productPrice: number;
    productStatus: 'S' | 'Y' | 'N'; // S: 판매대기, Y: 판매중, N: 판매중지
    productTime: number;
    productType: 'N' | 'E'; // N: 일반, E: 이벤트
    store_UUID: string;
  }[];
  sido: string;
  staff_COUNT: number;
  start_HOUR: string;
  store_IMAGE: string[];
  store_MENU_IMAGE: string[];
  store_NAME: string;
  store_PHONE: string;
  store_TEL: string;
  store_UUID: string;
  street_INFO: string;
  terms_ID: number[];
}

export interface GetCommonSalesCorpResponse {
  salesCorpName: string;
  seq: number;
}

export interface GetCategorySubRequest
  extends Omit<DefaultPaginationRequest, 'orderType'> {
  orderType?: 'SUB_CATEGORY_ORDER';
}

export interface GetCategorySubResponse {
  subId: number;
  subCategoryOrder: number;
  subName: string;
  mainName: string;
  id: number;
}
