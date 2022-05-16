/* eslint-disable camelcase */
import {
  StoreCounselingRequest,
  CommonAddressDetailRequest,
  GetReviewRowRequest,
  GetReviewShopRequest,
  GetReviewUserRequest,
  GetReviewShopDetailRequest,
  GetCategorySpecialRequest,
  GetCategoryTermsRequest,
  GetCommonCorpValidateRequest,
  GetCommonCodeRequest,
  GetCategorySubRequest,
  PostCommonSalesRequest,
} from '../type/index';
import axios from 'axios';
import { NoticeWriteRequest } from '../type';

export const getCommonAddressList = () => {
  return axios.get('/common/address/list');
};

export const getCommonAddressDetailList = ({
  sidoKey,
}: CommonAddressDetailRequest) => {
  return axios.get(`/common/address/list/${sidoKey}`);
};

export const postStoreCounseling = ({
  address1,
  address2,
  company_NAME,
  owner_NAME,
  phone,
}: StoreCounselingRequest) => {
  return axios.post(`/store/counseling`, {
    address1,
    address2,
    company_NAME,
    owner_NAME,
    phone,
  });
};

export const getMainBannerList = () => {
  return axios.get('/banner/main/WEB');
};

export const getSubBannerList = () => {
  return axios.get('/banner/sub/WEB');
};

export const postNoticeWrite = ({ title, content }: NoticeWriteRequest) => {
  return axios.post('/notice/list', {
    title,
    content,
  });
};

export const getReviewRow = ({
  orderType = 'REG_DATE',
  direction = 'DESC',
  page = 0,
  size = 25,
  startDate,
  endDate,
  starScore,
}: GetReviewRowRequest) => {
  return axios.get('/review/row', {
    params: {
      direction,
      orderType,
      page,
      size,
      startDate,
      endDate,
      starScore,
    },
  });
};

export const getReviewShop = ({
  orderType = 'REG_DATE',
  direction = 'DESC',
  page = 0,
  size = 25,
  startDate,
  endDate,
  starScore,
}: GetReviewShopRequest) => {
  return axios.get('/review/shops', {
    params: {
      direction,
      orderType,
      page,
      size,
      startDate,
      endDate,
      starScore,
    },
  });
};

export const getReviewShopDetail = ({
  storeUuid,
  orderType = 'REG_DATE',
  direction = 'DESC',
  page = 0,
  size = 25,
  startDate,
  endDate,
  starScore,
}: GetReviewShopDetailRequest) => {
  return axios.get(`/review/row/${storeUuid}`, {
    params: {
      direction,
      orderType,
      page,
      size,
      startDate,
      endDate,
      starScore,
    },
  });
};

export const getReviewUser = ({ userUuid }: GetReviewUserRequest) => {
  return axios.get(`/review/${userUuid}`);
};

export const getCategorySpecial = ({
  direction = 'DESC',
  orderType = 'CATEGORY_ORDER',
  page = 0,
  size = 100,
}: GetCategorySpecialRequest) => {
  return axios.get('/category/special', {
    params: {
      direction,
      orderType,
      page,
      size,
    },
  });
};

export const getCategoryTerms = ({
  direction,
  orderType = 'TERMS_ORDER',
  page = 0,
  size = 10,
}: GetCategoryTermsRequest) => {
  return axios.get('/category/terms', {
    params: {
      direction,
      orderType,
      page,
      size,
    },
  });
};

export const getCommonCorpValidate = ({
  b_no,
  p_nm,
  start_dt,
}: GetCommonCorpValidateRequest) => {
  return axios.post('/common/corp/validate', {
    b_no,
    p_nm,
    start_dt,
  });
};

export const getCommonCode = ({ DAE_CODE }: GetCommonCodeRequest) => {
  return axios.get(`/common/code/${DAE_CODE}`);
};

export const getCommonSalesCorp = () => {
  return axios.get('/common/salesCorp');
};

export const getCategorySub = ({
  direction = 'DESC',
  orderType = 'SUB_CATEGORY_ORDER',
  page = 0,
  size = 500,
}: GetCategorySubRequest) => {
  return axios.get('/category/special/sub', {
    params: {
      direction,
      orderType,
      page,
      size,
    },
  });
};

export const postCommonSales = ({
  corp_NUMBER,
  end_HOUR,
  gugun,
  mng_NAME,
  sales_ID,
  sales_NAME,
  sales_PRODUCT,
  sido,
  staff_COUNT,
  start_HOUR,
  store_IMAGE,
  store_MENU_IMAGE,
  store_NAME,
  store_PHONE,
  store_TEL,
  store_UUID,
  street_INFO,
  terms_ID,
}: PostCommonSalesRequest) => {
  return axios.post('/common/sales', {
    corp_NUMBER,
    end_HOUR,
    gugun,
    mng_NAME,
    sales_ID,
    sales_NAME,
    sales_PRODUCT,
    sido,
    staff_COUNT,
    start_HOUR,
    store_IMAGE,
    store_MENU_IMAGE,
    store_NAME,
    store_PHONE,
    store_TEL,
    store_UUID,
    street_INFO,
    terms_ID,
  });
};
