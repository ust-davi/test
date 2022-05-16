import { ChangeEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Radio,
  Box,
  Divider,
} from '@mui/material';

import useAddress from '../hooks/useAddress';
import useAddressDetail from '../hooks/useAddressDetail';
import {
  CommonAddressDetailRequest,
  GetCommonCorpValidateRequest,
  PostCommonSalesRequest,
  Sido,
} from '../type';
import {
  COLOR_GREY_50,
  COLOR_RED_60,
  COLOR_VIOLET_40,
  COLOR_VIOLET_5,
  COLOR_VIOLET_70,
} from '../common/styles/Color';
import useCommonStyles from '../common/styles/tempUserStyles';
import SalesManagerLayout from '../components/SalesManagerLayout';
import theme from '../common/theme';
import { SendSMSRequest, CommonSmsSendAuthCheckRequest } from '../common/type';
import InputField from '../components/common/fields/InputField';
import SelectField from '../components/common/fields/SelectField';
import CustomErrorMessage from '../components/common/CustomErrorMessage';
import RadioField from '../components/common/fields/RadioField';
import CheckboxField from '../components/common/fields/CheckboxField';
import UploadImageButton from '../components/UploadImageButton';
import { makeStyles } from '@mui/styles';
import useCategorySpecial from '../hooks/useCategorySpecial';
import useCategoryTerm from '../hooks/useCategoryTerm';
import useSendSMS from '../common/hooks/useSendSMS';
import useSendSMSCheck from '../common/hooks/useSendSMSCheck';
import useCommonCode from '../hooks/useCommonCode';
import useCorpValidation from '../hooks/useCorpValidation';
import useSalesCorp from '../hooks/useSalesCorp';
import axios from 'axios';
import useCategorySub from '../hooks/useCategorySub';
import useCommonSales from '../hooks/useCommonSales';

const hours = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '5',
    value: '5',
  },
  {
    label: '6',
    value: '6',
  },
  {
    label: '7',
    value: '7',
  },
  {
    label: '8',
    value: '8',
  },
  {
    label: '9',
    value: '9',
  },
  {
    label: '10',
    value: '10',
  },
  {
    label: '11',
    value: '11',
  },
  {
    label: '12',
    value: '12',
  },
  {
    label: '13',
    value: '13',
  },
  {
    label: '14',
    value: '14',
  },
  {
    label: '15',
    value: '15',
  },
  {
    label: '16',
    value: '16',
  },
  {
    label: '17',
    value: '17',
  },
  {
    label: '18',
    value: '18',
  },
  {
    label: '19',
    value: '19',
  },
  {
    label: '20',
    value: '20',
  },
  {
    label: '21',
    value: '21',
  },
  {
    label: '22',
    value: '22',
  },
  {
    label: '23',
    value: '23',
  },
  {
    label: '24',
    value: '24',
  },
];

const minutes = [
  {
    label: '00',
    value: '00',
  },
  {
    label: '10',
    value: '10',
  },
  {
    label: '20',
    value: '20',
  },
  {
    label: '30',
    value: '30',
  },
  {
    label: '40',
    value: '40',
  },
  {
    label: '50',
    value: '50',
  },
];

const staffCounts = [
  {
    label: '1명',
    value: '1',
  },
  {
    label: '2명',
    value: '2',
  },
  {
    label: '3명',
    value: '3',
  },
  {
    label: '4명',
    value: '4',
  },
  {
    label: '5명',
    value: '5',
  },
  {
    label: '6명',
    value: '6',
  },
  {
    label: '7명',
    value: '7',
  },
  {
    label: '8명',
    value: '8',
  },
  {
    label: '9명',
    value: '9',
  },
  {
    label: '10명',
    value: '10',
  },
  {
    label: '11명',
    value: '11',
  },
  {
    label: '12명',
    value: '12',
  },
  {
    label: '13명',
    value: '13',
  },
  {
    label: '14명',
    value: '14',
  },
  {
    label: '15명',
    value: '15',
  },
];

const sex = [
  {
    label: '공통',
    value: 'A',
  },
  {
    label: '여자',
    value: 'F',
  },
  {
    label: '남자',
    value: 'M',
  },
];

const menuTimes = [
  {
    label: '15분',
    value: '15',
  },
  {
    label: '30분',
    value: '30',
  },
  {
    label: '60분',
    value: '60',
  },
];

export interface IStoreInquiryForm {
  companyName: string;
  ownerName: string;
  phoneNumber: string;
  authNumber: string;
  shopNumber: string;
  businessNumber: string;
  openDate: string;
  districtSi: string;
  districtDo: string;
  commercialDistrict: string;
  shopOpeningHours: string;
  shopOpeningMinutes: string;
  shopClosingHours: string;
  shopClosingMinutes: string;

  staffCount: string;
  services: string[];
  shopImages: string[];
  menuImages: string[];

  menuCategory: string;
  menuSort: string;
  menuName: string;
  menuPrice: string;
  menuSex: 'A' | 'F' | 'M';
  menuTime: string;

  menuCategory2: string;
  menuSort2: string;
  menuName2: string;
  menuPrice2: string;
  menuSex2: 'A' | 'F' | 'M';
  menuTime2: string;

  salesCorporationName: string;
  referral: string;
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
    },
  },
};

const SalesManagerForm = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const [sidoKey, setSidoKey] = useState<string>('1');
  const [authSeq, setAuthSeq] = useState<number>(0);
  const [isEnableAuthNumber, setIsEnableAuthNumber] = useState(false);
  const [threeMinutes, setThreeMinutes] = useState(0);
  const [isNumberAuthenticated, setIsNumberAuthenticated] = useState(false);
  const [serviceNames, setServiceNames] = useState<number[]>();
  const [isValidBusinessNumber, setIsValidBusinessNumber] = useState(false);

  const { data: address } = useAddress();
  const request: CommonAddressDetailRequest = {
    sidoKey,
  };
  const { data: addressDetail, refetch } = useAddressDetail(request);
  const [shopImages, setShopImages] = useState<(FileList | null)[]>([
    null,
    null,
    null,
  ]);
  const [shopImageIndex, setShopImageIndex] = useState(0);
  const [shopImageURL, setShopImageURL] = useState(['', '', '']);

  const [shopMenuImages, setShopMenuImages] = useState<(FileList | null)[]>([
    null,
    null,
    null,
  ]);
  const [shopMenuImageIndex, setShopMenuImageIndex] = useState(0);
  const [shopMenuImageURL, setShopMenuImageURL] = useState(['', '', '']);
  const [isMenuSortDisabled, setIsMenuSortDisabled] = useState(false);
  const [isMenuSort2Disabled, setIsMenuSort2Disabled] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    trigger,
    watch,
  } = useForm<IStoreInquiryForm>({
    mode: 'onChange',
    defaultValues: {
      phoneNumber: '',
      staffCount: '3',
      shopOpeningHours: '10',
      shopOpeningMinutes: '00',
      shopClosingHours: '22',
      shopClosingMinutes: '00',
      districtSi: '서울특별시',
      districtDo: '강남구',
      commercialDistrict: '',
      menuCategory: '',
      menuSex: 'A',
      menuTime: '',
      menuSort: '',
      menuCategory2: '',
      menuSex2: 'A',
      menuTime2: '',
      menuSort2: '',
      services: [''],
      salesCorporationName: '',
    },
  });

  const watchPhoneNumber = watch('phoneNumber');
  const watchBusinessNumber = watch('businessNumber');
  const watchOpenDate = watch('openDate');
  const watchMenuCategory = watch('menuCategory');
  const watchMenuCategory2 = watch('menuCategory2');

  const { data: categories } = useCategorySpecial();
  const { data: subCategories } = useCategorySub();
  const { data: services } = useCategoryTerm();
  const { data: commercialDistrict } = useCommonCode({ DAE_CODE: 'street' });
  const { data: salesCorporations } = useSalesCorp();

  const { mutateAsync: sendSMSMutateAsync } = useSendSMS();
  const { mutateAsync: sendSMSCheckMutateAsync } = useSendSMSCheck();
  const { mutateAsync: corpValidationAsync } = useCorpValidation();
  const { mutateAsync: commonSalesAsync } = useCommonSales();

  const onSubmit: SubmitHandler<IStoreInquiryForm> = async (data) => {
    const {
      companyName,
      ownerName,
      phoneNumber,
      shopNumber,
      businessNumber,
      districtSi,
      districtDo,
      commercialDistrict,
      shopOpeningHours,
      shopOpeningMinutes,
      shopClosingHours,
      shopClosingMinutes,
      staffCount,
      shopImages,
      menuImages,
      menuCategory,
      menuSort,
      menuName,
      menuPrice,
      menuSex,
      menuTime,
      menuCategory2,
      menuSort2,
      menuName2,
      menuPrice2,
      menuSex2,
      menuTime2,
      salesCorporationName,
      referral,
    } = data;

    const request: PostCommonSalesRequest = {
      corp_NUMBER: businessNumber,
      end_HOUR: `${shopClosingHours}:${shopClosingMinutes}:00`,
      gugun: districtDo,
      mng_NAME: ownerName,
      sales_ID: salesCorporationName,
      sales_NAME: referral,
      sales_PRODUCT: [
        {
          categoryMain: Number(menuCategory),
          categorySub: Number(menuSort),
          productGender: menuSex,
          productName: menuName,
          productPrice: Number(menuPrice),
          productStatus: 'S',
          productTime: Number(menuTime),
          productType: 'N',
          store_UUID: '',
        },
        {
          categoryMain: Number(menuCategory2),
          categorySub: Number(menuSort2),
          productGender: menuSex2,
          productName: menuName2,
          productPrice: Number(menuPrice2),
          productStatus: 'S',
          productTime: Number(menuTime2),
          productType: 'N',
          store_UUID: '',
        },
      ],
      sido: districtSi,
      staff_COUNT: Number(staffCount),
      start_HOUR: `${shopOpeningHours}:${shopOpeningMinutes}:00`,
      store_IMAGE: shopImageURL.filter((url) => url.length > 0),
      store_MENU_IMAGE: shopMenuImageURL.filter((url) => url.length > 0),
      store_NAME: companyName,
      store_PHONE: phoneNumber,
      store_TEL: shopNumber,
      store_UUID: '',
      street_INFO: commercialDistrict,
      terms_ID: serviceNames as number[],
    };

    const response = await commonSalesAsync(request);
  };

  useEffect(() => {
    const menuSortLength = subCategories?.data
      ? subCategories?.data?.filter((el) => el.id === Number(watchMenuCategory))
          .length
      : 0;

    menuSortLength > 1
      ? setIsMenuSortDisabled(false)
      : setIsMenuSortDisabled(true);
  }, [watchMenuCategory]);

  useEffect(() => {
    const menuSortLength = subCategories?.data
      ? subCategories?.data?.filter(
          (el) => el.id === Number(watchMenuCategory2),
        ).length
      : 0;

    menuSortLength > 1
      ? setIsMenuSort2Disabled(false)
      : setIsMenuSort2Disabled(true);
  }, [watchMenuCategory2]);

  const onChangeDistrictSi = async (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value;
    if (address?.data?.data !== undefined) {
      const index =
        address?.data?.data?.findIndex((obj: Sido) => obj.sido === selected) +
        1;
      setSidoKey(String(index));
    }
  };

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;

    if (checked) {
      const copyServiceNames = serviceNames ? [...serviceNames] : [];
      copyServiceNames.push(Number(name));
      setServiceNames(copyServiceNames);
    } else {
      const index = serviceNames?.findIndex(
        (el) => el === Number(name),
      ) as number;
      const copyServiceNames = serviceNames ? [...serviceNames] : [];
      copyServiceNames.splice(index, 1);
      setServiceNames(copyServiceNames);
    }
  };

  useEffect(() => {
    refetch();
  }, [sidoKey]);

  const onChangeImageFile = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    setShopImageIndex(index);
    const file = e.target.files;
    const newShopImages = [...shopImages];
    newShopImages[index] = file;
    setShopImages(newShopImages);
  };

  useEffect(() => {
    if (shopImages && shopImages.length !== 0) {
      const reader = new FileReader();

      const file = shopImages[shopImageIndex];
      file && reader.readAsDataURL(file[0]);

      reader.onload = () => {
        const formData = new FormData();

        if (file && file.length > 0) {
          formData.append('file', file[0]);
          axios
            .post('/file/s3upload', formData)
            .then((res) => {
              const copyShopImageURLs = [...shopImageURL];
              copyShopImageURLs[shopImageIndex] = res.data.data.s3Url;
              setShopImageURL(copyShopImageURLs);
            })
            .catch((err) => console.error(err));
        }
      };
    }
  }, [shopImages]);

  const onChangeMenuImageFile = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    setShopMenuImageIndex(index);
    const file = e.target.files;
    const newShopMenuImages = [...shopMenuImages];
    newShopMenuImages[index] = file;
    setShopMenuImages(newShopMenuImages);
  };

  useEffect(() => {
    if (shopMenuImages && shopMenuImages.length !== 0) {
      const reader = new FileReader();

      const file = shopMenuImages[shopMenuImageIndex];
      file && reader.readAsDataURL(file[0]);

      reader.onload = () => {
        const formData = new FormData();

        if (file && file.length > 0) {
          formData.append('file', file[0]);
          axios
            .post('/file/s3upload', formData)
            .then((res) => {
              const copyShopMenuImageURLs = [...shopMenuImageURL];
              copyShopMenuImageURLs[shopMenuImageIndex] = res.data.data.s3Url;
              setShopMenuImageURL(copyShopMenuImageURLs);
            })
            .catch((err) => console.error(err));
        }
      };
    }
  }, [shopMenuImages]);

  const onClickSetEnableAuthNumber = async () => {
    const request: SendSMSRequest = {
      phoneNumber: getValues('phoneNumber'),
    };
    const response = await sendSMSMutateAsync(request);
    const seq = response?.data?.data as number;
    setAuthSeq(seq);

    setIsEnableAuthNumber(true);
    setThreeMinutes(Date.now() + 1000 * 60 * 3);
    trigger('authNumber');
  };

  const onClickCheckAuthentication = async () => {
    const sendSMSCheckRequest: CommonSmsSendAuthCheckRequest = {
      authCode: getValues('authNumber'),
      seq: authSeq,
    };

    const response = await sendSMSCheckMutateAsync(sendSMSCheckRequest);
    if (response?.data?.status === 'OK') setIsNumberAuthenticated(true);
  };

  const onClickBusinessAuthentication = async () => {
    const ownerName = getValues('ownerName');
    const businessNumber = getValues('businessNumber');
    const openDate = getValues('openDate');

    const corpValidationRequest: GetCommonCorpValidateRequest = {
      b_no: businessNumber,
      p_nm: ownerName,
      start_dt: openDate,
    };

    const response = await corpValidationAsync(corpValidationRequest);
    if (response?.status === 200) setIsValidBusinessNumber(true);
  };

  return (
    <SalesManagerLayout subTitle="세일즈 매니저" isShowSubTitle>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className={classes.formWrapper}>
            <div className={classes.mt0}>
              <Typography className={classes.label}>샵 상호(법인명)</Typography>
              <InputField
                name="companyName"
                control={control}
                error={!!errors.companyName}
                rules={{
                  required: '상호명을 입력해주세요.',
                }}
              />
              <CustomErrorMessage errors={errors} name="companyName" />
            </div>
            <div>
              <Typography className={classes.label}>대표자 이름</Typography>
              <InputField
                name="ownerName"
                control={control}
                error={!!errors.ownerName}
                rules={{
                  required: '대표자명 입력해주세요.',
                }}
              />
              <CustomErrorMessage errors={errors} name="ownerName" />
            </div>
            <div>
              <Typography className={classes.label}>휴대폰번호</Typography>
              <div className={commonClasses.rowWrap}>
                <InputField
                  name="phoneNumber"
                  control={control}
                  error={!!errors.phoneNumber}
                  rules={{
                    required: '휴대폰 번호를 입력해주세요.',
                    pattern: {
                      value: /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/,
                      message: '휴대폰 번호를 정확하게 입력하세요.',
                    },
                  }}
                  placeholder="010-1234-1234"
                />

                <Button
                  className={commonClasses.button}
                  type="button"
                  variant="contained"
                  disabled={
                    !!errors.phoneNumber ||
                    watchPhoneNumber?.length < 1 ||
                    isEnableAuthNumber
                  }
                  onClick={onClickSetEnableAuthNumber}
                >
                  인증번호전송
                </Button>
              </div>
              <CustomErrorMessage name="phoneNumber" errors={errors} />
            </div>
            <div className={classes.marginTop17}>
              <div className={commonClasses.rowWrap}>
                <InputField
                  name="authNumber"
                  control={control}
                  error={!!errors.authNumber}
                  rules={{
                    required: '인증 번호를 입력해주세요.',
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: '인증 번호를 정확하게 입력하세요.',
                    },
                  }}
                  isShowCheckIcon={isNumberAuthenticated}
                  isOnlyTypeNumber
                />

                <Button
                  className={commonClasses.button}
                  type="button"
                  variant="contained"
                  disabled={
                    !!errors.authNumber ||
                    !isEnableAuthNumber ||
                    isNumberAuthenticated
                  }
                  onClick={onClickCheckAuthentication}
                >
                  인증하기
                </Button>
              </div>
              <CustomErrorMessage name="authNumber" errors={errors} />
            </div>
            <div>
              <Typography className={classes.label}>샵 전화번호</Typography>
              <InputField
                name="shopNumber"
                control={control}
                rules={{
                  required: '전화번호를 입력해주세요.',
                  pattern: {
                    value:
                      /^(0(1([0|1|6|7|8|9])|2|3[1-3]|4[1-4]|5[1-5]|6[1-4]))-([0-9]{3,4})-([0-9]{4})$/,
                    message: '전화번호 형식에 맞게 입력해주세요.',
                  },
                }}
                error={!!errors.shopNumber}
              />
              <CustomErrorMessage errors={errors} name="shopNumber" />
            </div>
            <div>
              <Typography className={classes.label}>
                사업자 등록번호(법인사업자 번호)
              </Typography>

              <InputField
                name="businessNumber"
                control={control}
                rules={{
                  required: '사업자 등록번호를 입력해주세요.',
                }}
                placeholder="1248720754"
                error={!!errors.businessNumber}
                isOnlyTypeNumber
              />
            </div>
            <CustomErrorMessage errors={errors} name="businessNumber" />

            <div>
              <Typography className={classes.label}>개업연월일</Typography>
              <div className={commonClasses.rowWrap}>
                <InputField
                  name="openDate"
                  control={control}
                  rules={{
                    required: '날짜를 입력해주세요.',
                  }}
                  placeholder="20220101"
                  error={!!errors.openDate}
                  isShowCheckIcon={isValidBusinessNumber}
                  isOnlyTypeNumber
                />
                <Button
                  className={commonClasses.button}
                  type="button"
                  variant="contained"
                  disabled={
                    !!errors.ownerName ||
                    !!errors.businessNumber ||
                    watchBusinessNumber?.length < 1 ||
                    watchOpenDate?.length < 8 ||
                    isValidBusinessNumber
                  }
                  onClick={onClickBusinessAuthentication}
                >
                  사업자인증
                </Button>
              </div>
              <CustomErrorMessage errors={errors} name="openDate" />
            </div>
            <div className={classes.marginTop5}>
              <div className={classes.rowWrap}>
                <div className={classes.dropdownArea}>
                  <SelectField
                    name="districtSi"
                    control={control}
                    rules={{ required: true }}
                    customOnChange={onChangeDistrictSi}
                    menuProps={MenuProps}
                    error={Boolean(errors.districtSi)}
                  >
                    {address?.data?.data.map((obj: any) => (
                      <MenuItem
                        key={String(obj.sidoKey)}
                        value={String(obj.sido)}
                        className={classes.fontWright400}
                      >
                        {obj.sido}
                      </MenuItem>
                    ))}
                  </SelectField>
                </div>
                <div className={classes.dropdownArea2}>
                  <SelectField
                    name="districtDo"
                    control={control}
                    rules={{
                      required: !(getValues('districtSi') === '세종특별자치시'),
                    }}
                    menuProps={MenuProps}
                    error={Boolean(errors.districtDo)}
                  >
                    {addressDetail?.data?.data.map((obj: any) => (
                      <MenuItem
                        key={obj.gugun}
                        value={obj.gugun}
                        className={classes.fontWright400}
                      >
                        {obj.gugun}
                      </MenuItem>
                    ))}
                  </SelectField>
                </div>
              </div>
            </div>
            <div>
              <Typography className={classes.label}>상권</Typography>
              <RadioField
                name="commercialDistrict"
                rules={{ required: '상권을 설정해주세요.' }}
                control={control}
                error={!!errors.commercialDistrict}
              >
                {commercialDistrict?.data?.map(({ soCode, codeName }) => (
                  <FormControlLabel
                    className={classes.radioWrapper}
                    key={soCode}
                    value={soCode}
                    control={<Radio size="small" />}
                    label={codeName}
                  />
                ))}
              </RadioField>
              <CustomErrorMessage name="commercialDistrict" errors={errors} />
            </div>

            <div>
              <Typography className={classes.label}>영업시간</Typography>
              <div className={classes.openingHourWrapper}>
                <SelectField
                  name="shopOpeningHours"
                  control={control}
                  rules={{ required: true }}
                  error={!!errors.shopOpeningHours}
                  className={classes.openingHourselectField}
                  menuProps={MenuProps}
                >
                  {hours.map(({ label, value }) => (
                    <MenuItem
                      key={value}
                      value={value}
                      className={classes.fontWright400}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </SelectField>
                <SelectField
                  name="shopOpeningMinutes"
                  control={control}
                  rules={{ required: true }}
                  error={!!errors.shopOpeningMinutes}
                  className={classes.openingHourselectField}
                  menuProps={MenuProps}
                >
                  {minutes.map(({ label, value }) => (
                    <MenuItem
                      key={value}
                      value={value}
                      className={classes.fontWright400}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </SelectField>
                <span className={classes.timeRangeText}>~</span>
                <SelectField
                  name="shopClosingHours"
                  control={control}
                  rules={{ required: true }}
                  error={!!errors.shopClosingHours}
                  className={classes.openingHourselectField}
                  menuProps={MenuProps}
                >
                  {hours.map(({ label, value }) => (
                    <MenuItem
                      key={value}
                      value={value}
                      className={classes.fontWright400}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </SelectField>
                <SelectField
                  name="shopClosingMinutes"
                  control={control}
                  rules={{ required: true }}
                  error={!!errors.shopClosingMinutes}
                  className={classes.openingHourselectField}
                  menuProps={MenuProps}
                >
                  {minutes.map(({ label, value }) => (
                    <MenuItem
                      key={value}
                      value={value}
                      className={classes.fontWright400}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </SelectField>
              </div>
              {errors.shopOpeningHours ||
              errors.shopOpeningMinutes ||
              errors.shopClosingHours ||
              errors.shopClosingMinutes ? (
                <p className={classes.errorMessage}>영업시간을 설정해주세요.</p>
              ) : null}
            </div>
            <div>
              <Typography className={classes.label}>직원수</Typography>
              <SelectField
                name="staffCount"
                control={control}
                rules={{ required: '직원 수를 선택해주세요.' }}
                error={!!errors.staffCount}
                className={classes.selectField}
                menuProps={MenuProps}
              >
                {staffCounts.map(({ label, value }) => (
                  <MenuItem
                    key={value}
                    value={value}
                    className={classes.fontWright400}
                  >
                    {label}
                  </MenuItem>
                ))}
              </SelectField>
              <CustomErrorMessage errors={errors} name="staffCount" />
            </div>
            <div>
              <Typography className={classes.label}>서비스</Typography>
              <CheckboxField
                name="services"
                control={control}
                // rules={{ required: '서비스는 최소 하나 이상 입력해야합니다.' }}
              >
                {services?.data?.map(({ terms, seq }) => (
                  <FormControlLabel
                    key={seq}
                    className={classes.checkboxWrapper}
                    control={
                      <Checkbox
                        name={String(seq)}
                        onChange={onChangeCheckbox}
                      />
                    }
                    label={terms}
                  />
                ))}
              </CheckboxField>
              {serviceNames?.length === 0 ? (
                <p className={classes.errorMessage}>
                  서비스는 최소 하나 이상 입력해야합니다.
                </p>
              ) : null}
              {/* <CustomErrorMessage errors={!!serviceNames} name="services" /> */}
            </div>
            <div>
              <Typography className={classes.label}>
                샵 사진 ({shopImageURL.filter((url) => url.length > 0).length}
                /3)
              </Typography>
              {/* ShopImages */}
              <div className={classes.uploadImageButtonWrapper}>
                <UploadImageButton
                  id="shop-image-1"
                  value={shopImages[0]}
                  onChange={(e) => onChangeImageFile(e, 0)}
                />
                <UploadImageButton
                  id="shop-image-2"
                  value={shopImages[1]}
                  onChange={(e) => onChangeImageFile(e, 1)}
                />
                <UploadImageButton
                  id="shop-image-3"
                  value={shopImages[2]}
                  onChange={(e) => onChangeImageFile(e, 2)}
                />
              </div>
              <Typography variant="body1" className={classes.informationText}>
                ※ 필수 3장: 매장전경, 매장내부, 실내인테리어 <br />※ 비율 4:3
                (가로사이즈)의 사진을 등록해 주시기 바랍니다.
              </Typography>
            </div>
            <div>
              <Typography className={classes.label}>
                샵 메뉴판 사진 (
                {shopMenuImageURL.filter((url) => url.length > 0).length}/3)
              </Typography>
              {/* MenuImages */}
              <div className={classes.uploadImageButtonWrapper}>
                <UploadImageButton
                  value={shopMenuImages[0]}
                  id="shop-menu-image-1"
                  onChange={(e) => onChangeMenuImageFile(e, 0)}
                />
                <UploadImageButton
                  value={shopMenuImages[1]}
                  id="shop-menu-image-2"
                  onChange={(e) => onChangeMenuImageFile(e, 1)}
                />
                <UploadImageButton
                  value={shopMenuImages[2]}
                  id="shop-menu-image-3"
                  onChange={(e) => onChangeMenuImageFile(e, 2)}
                />
              </div>
              <Typography variant="body1" className={classes.informationText}>
                ※ 비율 4:3 (가로사이즈)의 사진을 등록해 주시기 바랍니다.
              </Typography>
            </div>

            <div>
              <Divider />
            </div>

            <div>
              <Typography className={classes.label}>대표메뉴 1</Typography>
            </div>
            <div>
              <Typography className={classes.label}>카테고리</Typography>
              <RadioField
                name="menuCategory"
                rules={{ required: '카테고리를 설정해주세요.' }}
                control={control}
                error={!!errors.menuCategory}
              >
                {categories?.data?.map(({ categoryName, id }, index) => (
                  <FormControlLabel
                    className={classes.radioWrapper}
                    key={id}
                    value={id}
                    control={<Radio size="small" />}
                    label={categoryName}
                    sx={{
                      width: index % 3 === 0 ? '117px' : '102px',
                    }}
                  />
                ))}
              </RadioField>
              <CustomErrorMessage name="menuCategory" errors={errors} />
            </div>
            <div>
              <Typography className={classes.label}>분류</Typography>
              <SelectField
                name="menuSort"
                control={control}
                rules={{ required: '분류를 선택해주세요.' }}
                error={!!errors.menuSort}
                className={classes.selectField}
                disabled={isMenuSortDisabled}
              >
                {subCategories?.data
                  ?.filter((el) => el.id === Number(watchMenuCategory))
                  .map(({ subId, subName }) => (
                    <MenuItem
                      key={subId}
                      value={subId}
                      className={classes.fontWright400}
                    >
                      {subName}
                    </MenuItem>
                  ))}
              </SelectField>
              <CustomErrorMessage errors={errors} name="menuSort" />
            </div>
            <div>
              <Typography className={classes.label}>상품 이름</Typography>
              <InputField
                name="menuName"
                control={control}
                error={!!errors.menuName}
                rules={{
                  required: '메뉴를 입력해주세요.',
                }}
              />
              <CustomErrorMessage errors={errors} name="menuName" />
            </div>
            <div>
              <Typography className={classes.label}>금액</Typography>
              <InputField
                name="menuPrice"
                control={control}
                error={!!errors.menuPrice}
                rules={{
                  required: '가격을 입력해주세요.',
                }}
              />
              <CustomErrorMessage errors={errors} name="menuPrice" />
            </div>
            <div>
              <Typography className={`${classes.label} ${classes.marginTop20}`}>
                성별
              </Typography>
              <RadioField
                name="menuSex"
                rules={{ required: '성별을 설정해주세요.' }}
                control={control}
                error={!!errors.menuSex}
              >
                {sex.map(({ label, value }) => (
                  <FormControlLabel
                    key={value}
                    className={classes.radioWrapper}
                    value={value}
                    control={<Radio size="small" />}
                    label={label}
                  />
                ))}
              </RadioField>
              <CustomErrorMessage name="menuSex" errors={errors} />
            </div>
            <div>
              <Typography className={`${classes.label} ${classes.marginTop20}`}>
                시술시간
              </Typography>
              <RadioField
                name="menuTime"
                rules={{ required: '시간을 설정해주세요.' }}
                control={control}
                error={!!errors.menuTime}
              >
                {menuTimes.map(({ value, label }) => (
                  <FormControlLabel
                    key={value}
                    className={classes.radioWrapper}
                    value={value}
                    control={<Radio size="small" />}
                    label={label}
                  />
                ))}
              </RadioField>
              <CustomErrorMessage name="menuTime" errors={errors} />
            </div>

            <div>
              <Divider />
            </div>

            <div>
              <Typography className={classes.label}>대표메뉴 2</Typography>
            </div>
            <div>
              <Typography className={classes.label}>카테고리</Typography>
              <RadioField
                name="menuCategory2"
                rules={{ required: '카테고리를 설정해주세요.' }}
                control={control}
                error={!!errors.menuCategory2}
              >
                {categories?.data?.map(({ categoryName, id }, index) => (
                  <FormControlLabel
                    className={classes.radioWrapper}
                    key={id}
                    value={id}
                    control={<Radio size="small" />}
                    label={categoryName}
                    sx={{
                      width: index % 3 === 0 ? '117px' : '102px',
                    }}
                  />
                ))}
              </RadioField>
              <CustomErrorMessage name="menuCategory2" errors={errors} />
            </div>
            <div>
              <Typography className={classes.label}>분류</Typography>
              <SelectField
                name="menuSort2"
                control={control}
                rules={{ required: '분류를 선택해주세요.' }}
                error={!!errors.menuSort2}
                className={classes.selectField}
                disabled={isMenuSort2Disabled}
              >
                {subCategories?.data
                  ?.filter((el) => el.id === Number(watchMenuCategory2))
                  .map(({ subId, subName }) => (
                    <MenuItem
                      key={subId}
                      value={subId}
                      className={classes.fontWright400}
                    >
                      {subName}
                    </MenuItem>
                  ))}
              </SelectField>
              <CustomErrorMessage errors={errors} name="menuSort2" />
            </div>
            <div>
              <Typography className={classes.label}>상품 이름</Typography>
              <InputField
                name="menuName2"
                control={control}
                error={!!errors.menuName2}
                rules={{
                  required: '메뉴를 입력해주세요.',
                }}
              />
              <CustomErrorMessage errors={errors} name="menuName2" />
            </div>
            <div>
              <Typography className={classes.label}>금액</Typography>
              <InputField
                name="menuPrice2"
                control={control}
                error={!!errors.menuPrice2}
                rules={{
                  required: '가격을 입력해주세요.',
                }}
              />
              <CustomErrorMessage errors={errors} name="menuPrice2" />
            </div>
            <div>
              <Typography className={`${classes.label} ${classes.marginTop20}`}>
                성별
              </Typography>
              <RadioField
                name="menuSex2"
                rules={{ required: '성별을 설정해주세요.' }}
                control={control}
                error={!!errors.menuSex2}
              >
                {sex.map(({ label, value }) => (
                  <FormControlLabel
                    key={value}
                    className={classes.radioWrapper}
                    value={value}
                    control={<Radio size="small" />}
                    label={label}
                  />
                ))}
              </RadioField>
              <CustomErrorMessage name="menuSex2" errors={errors} />
            </div>
            <div>
              <Typography className={`${classes.label} ${classes.marginTop20}`}>
                시술시간
              </Typography>
              <RadioField
                name="menuTime2"
                rules={{ required: '시간을 설정해주세요.' }}
                control={control}
                error={!!errors.menuTime2}
              >
                {menuTimes.map(({ value, label }) => (
                  <FormControlLabel
                    key={value}
                    className={classes.radioWrapper}
                    value={value}
                    control={<Radio size="small" />}
                    label={label}
                  />
                ))}
              </RadioField>
              <CustomErrorMessage name="menuTime2" errors={errors} />
            </div>
            <div>
              <Typography className={classes.label}>담당 업체명</Typography>
              <SelectField
                name="salesCorporationName"
                control={control}
                rules={{ required: '담당 업체명을 선택해주세요.' }}
                error={!!errors.salesCorporationName}
                className={classes.selectField}
                menuProps={MenuProps}
              >
                {salesCorporations?.data?.map(({ seq, salesCorpName }) => (
                  <MenuItem
                    key={seq}
                    value={seq}
                    className={classes.fontWright400}
                  >
                    {salesCorpName}
                  </MenuItem>
                ))}
              </SelectField>
              <CustomErrorMessage errors={errors} name="salesCorporationName" />
            </div>
            <div>
              <Typography className={classes.label}>담당자</Typography>
              <InputField
                name="referral"
                control={control}
                error={!!errors.referral}
                rules={{
                  required: '담당자를 입력해주세요.',
                }}
              />
              <CustomErrorMessage errors={errors} name="referral" />
            </div>

            <Button
              className={classes.nextButton}
              type="submit"
              variant="contained"
              color="primary"
              disabled={
                !isNumberAuthenticated ||
                !isValidBusinessNumber ||
                shopImageURL.filter((str) => str.length > 0).length !== 3 ||
                shopMenuImageURL.filter((str) => str.length > 0).length === 0
              }
            >
              다음
            </Button>
          </Box>
        </form>
      </section>
    </SalesManagerLayout>
  );
};

export default SalesManagerForm;

const useStyles = makeStyles({
  formWrapper: {
    marginTop: '152px',
    maxWidth: '324px',
    '& *': {
      fontWeight: 400,
    },
    '&>div': {
      marginTop: '22px',
    },
    [theme.breakpoints.down(769)]: {
      marginTop: '30px',
    },
  },
  rowWrap: {
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    textAlign: 'left',
    fontSize: '14px !important',
    color: COLOR_GREY_50,
    fontWeight: 700,
  },
  dropdownArea: {
    width: '48%',
    paddingRight: '20px',
    '& > span, div': {
      width: '100%',
    },
  },
  dropdownArea2: {
    width: '60%',
    '& > span, div': {
      width: '100%',
    },
  },
  nextButton: {
    width: '100%',
    marginTop: '22px !important',
    marginBottom: '74px !important',
    '&&': {
      '&:hover': {
        backgroundColor: `${COLOR_VIOLET_70} !important`,
      },
      '&:disabled': {
        backgroundColor: COLOR_VIOLET_5,
        color: COLOR_VIOLET_40,
      },
    },
  },
  mt0: {
    marginTop: 0,
  },
  radioWrapper: {
    width: '108px',
    margin: '0px !important',
    '& > .MuiFormControlLabel-label': { fontWeight: 400 },
  },
  openingHourWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  openingHourselectField: {
    width: '74px',
    height: '40px',
    fontWright: '400 !important' as any,
  },
  fontWright400: {
    fontWeight: '400 !important' as any,
  },
  informationText: {
    fontSize: '14px !important',
    color: COLOR_RED_60,
    fontWeight: '400 !important' as any,
    marginTop: '5px',
  },
  errorMessage: {
    position: 'absolute',
    fontSize: '10px',
    marginTop: '2px',
    color: COLOR_RED_60,
  },
  checkboxWrapper: {
    width: '162px',
    margin: '0px !important',
    '& > span': { fontWeight: 400 },
  },
  selectField: {
    width: '100%',
    height: '40px',
  },
  marginTop20: {
    marginTop: '20px !important',
  },
  marginTop17: {
    marginTop: '17px !important',
  },
  marginTop5: {
    marginTop: '5px !important',
  },
  timeRangeText: {
    margin: '0px 5px !important',
  },
  uploadImageButtonWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
